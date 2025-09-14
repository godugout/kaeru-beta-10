// Performance monitoring and Web Vitals tracking

import { trackPerformance, trackEvent } from './analytics';

// Web Vitals metrics
interface WebVitalsMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

// Layout Shift Entry interface
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

// Performance observer for Web Vitals
let observer: PerformanceObserver | null = null;

// Initialize Web Vitals tracking
export const initializePerformanceMonitoring = () => {
  // Track Core Web Vitals
  if ('PerformanceObserver' in window) {
    // Cumulative Layout Shift (CLS)
    trackCLS();
    
    // First Contentful Paint (FCP)
    trackFCP();
    
    // Largest Contentful Paint (LCP)
    trackLCP();
    
    // First Input Delay (FID)
    trackFID();
  }

  // Track custom performance metrics
  trackPageLoadTime();
  trackResourceTimings();
};

// Track Cumulative Layout Shift
const trackCLS = () => {
  let clsValue = 0;
  let clsEntries: LayoutShift[] = [];

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries() as LayoutShift[]) {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
        clsEntries.push(entry);
      }
    }
  });

  observer.observe({ type: 'layout-shift', buffered: true });

  // Report CLS on page unload
  window.addEventListener('beforeunload', () => {
    const rating = clsValue <= 0.1 ? 'good' : clsValue <= 0.25 ? 'needs-improvement' : 'poor';
    trackPerformance('CLS', clsValue, 'score');
    trackEvent('web_vitals', {
      metric: 'CLS',
      value: clsValue,
      rating
    });
  });
};

// Track First Contentful Paint
const trackFCP = () => {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.name === 'first-contentful-paint') {
        const value = entry.startTime;
        const rating = value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
        
        trackPerformance('FCP', value);
        trackEvent('web_vitals', {
          metric: 'FCP',
          value,
          rating
        });
      }
    }
  });

  observer.observe({ type: 'paint', buffered: true });
};

// Track Largest Contentful Paint
const trackLCP = () => {
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    
    if (lastEntry) {
      const value = lastEntry.startTime;
      const rating = value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
      
      trackPerformance('LCP', value);
      trackEvent('web_vitals', {
        metric: 'LCP',
        value,
        rating
      });
    }
  });

  observer.observe({ type: 'largest-contentful-paint', buffered: true });
};

// Track First Input Delay
const trackFID = () => {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries() as PerformanceEventTiming[]) {
      const value = entry.processingStart - entry.startTime;
      const rating = value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
      
      trackPerformance('FID', value);
      trackEvent('web_vitals', {
        metric: 'FID',
        value,
        rating
      });
    }
  });

  observer.observe({ type: 'first-input', buffered: true });
};

// Track page load time
const trackPageLoadTime = () => {
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    trackPerformance('page_load_time', loadTime);
    
    // Track navigation timing
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      trackPerformance('dns_lookup', navigation.domainLookupEnd - navigation.domainLookupStart);
      trackPerformance('tcp_connect', navigation.connectEnd - navigation.connectStart);
      trackPerformance('server_response', navigation.responseEnd - navigation.requestStart);
      trackPerformance('dom_processing', navigation.domComplete - navigation.responseEnd);
    }
  });
};

// Track resource loading performance
const trackResourceTimings = () => {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries() as PerformanceResourceTiming[]) {
      // Track slow resources (> 1 second)
      if (entry.duration > 1000) {
        trackEvent('slow_resource', {
          resource_url: entry.name,
          duration: entry.duration,
          size: entry.transferSize
        });
      }
      
      // Track failed resources
      if (entry.transferSize === 0 && entry.duration > 0) {
        trackEvent('resource_load_error', {
          resource_url: entry.name,
          duration: entry.duration
        });
      }
    }
  });

  observer.observe({ type: 'resource', buffered: true });
};

// Cart abandonment tracking
export const trackCartEvents = () => {
  let cartCheckInterval: NodeJS.Timeout;
  let lastCartState = { items: 0, value: 0 };

  const checkCartState = () => {
    const cartData = localStorage.getItem('kaeru_cart');
    if (cartData) {
      const cart = JSON.parse(cartData);
      const currentState = {
        items: cart.items?.length || 0,
        value: cart.items?.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0) || 0
      };

      // Track if cart was abandoned (items added but not checked out)
      if (lastCartState.items > 0 && currentState.items === 0) {
        trackEvent('cart_abandonment', {
          abandoned_items: lastCartState.items,
          abandoned_value: lastCartState.value / 100,
          abandonment_point: 'cart_cleared'
        });
      }

      lastCartState = currentState;
    }
  };

  // Check cart state every 30 seconds
  cartCheckInterval = setInterval(checkCartState, 30000);

  // Check on page unload
  window.addEventListener('beforeunload', () => {
    clearInterval(cartCheckInterval);
    checkCartState();
  });
};

// Track slow queries (if using external APIs)
export const trackSlowQuery = (queryName: string, duration: number, threshold = 2000) => {
  if (duration > threshold) {
    trackEvent('slow_query', {
      query_name: queryName,
      duration,
      threshold
    });
  }
};

// Performance budget monitoring
export const trackPerformanceBudget = () => {
  const observer = new PerformanceObserver((list) => {
    let totalSize = 0;
    let imageSize = 0;
    let scriptSize = 0;
    let cssSize = 0;

    for (const entry of list.getEntries() as PerformanceResourceTiming[]) {
      totalSize += entry.transferSize;
      
      if (entry.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
        imageSize += entry.transferSize;
      } else if (entry.name.match(/\.js$/i)) {
        scriptSize += entry.transferSize;
      } else if (entry.name.match(/\.css$/i)) {
        cssSize += entry.transferSize;
      }
    }

    // Performance budget thresholds (in bytes)
    const budgets = {
      total: 2 * 1024 * 1024, // 2MB
      images: 1 * 1024 * 1024, // 1MB
      scripts: 500 * 1024, // 500KB
      css: 100 * 1024 // 100KB
    };

    // Track budget violations
    if (totalSize > budgets.total) {
      trackEvent('performance_budget_exceeded', {
        budget_type: 'total',
        actual_size: totalSize,
        budget_size: budgets.total,
        overage: totalSize - budgets.total
      });
    }

    if (imageSize > budgets.images) {
      trackEvent('performance_budget_exceeded', {
        budget_type: 'images',
        actual_size: imageSize,
        budget_size: budgets.images,
        overage: imageSize - budgets.images
      });
    }
  });

  observer.observe({ type: 'resource', buffered: true });
};