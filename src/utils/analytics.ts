// Google Analytics 4 tracking utilities

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
  }
}

// Initialize GA4 tracking
export const initializeGA4 = (measurementId: string) => {
  // Load GA4 script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize gtag
  window.gtag = window.gtag || function() {
    (window.gtag as any).dataLayer = (window.gtag as any).dataLayer || [];
    (window.gtag as any).dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    page_title: document.title,
    page_location: window.location.href
  });
};

// Track page views
export const trackPageView = (path: string, title?: string) => {
  if (window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: path,
      page_title: title || document.title
    });
  }
};

// Track custom events
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, parameters);
  }
  
  // Also log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, parameters);
  }
};

// E-commerce tracking
export const trackAddToCart = (productId: string, productName: string, price: number, currency = 'USD') => {
  trackEvent('add_to_cart', {
    currency,
    value: price / 100, // Convert cents to dollars
    items: [{
      item_id: productId,
      item_name: productName,
      currency,
      price: price / 100
    }]
  });
};

export const trackPurchase = (transactionId: string, items: any[], value: number, currency = 'USD') => {
  trackEvent('purchase', {
    transaction_id: transactionId,
    value: value / 100,
    currency,
    items
  });
};

export const trackViewItem = (productId: string, productName: string, category: string, price: number) => {
  trackEvent('view_item', {
    currency: 'USD',
    value: price / 100,
    items: [{
      item_id: productId,
      item_name: productName,
      item_category: category,
      price: price / 100
    }]
  });
};

// Ritual builder tracking
export const trackRitualBuilderStep = (step: number, stepName: string) => {
  trackEvent('ritual_builder_step', {
    step_number: step,
    step_name: stepName
  });
};

export const trackRitualComplete = (selectedProducts: string[], totalSteps: number) => {
  trackEvent('ritual_complete', {
    products_selected: selectedProducts,
    total_steps: totalSteps,
    completion_rate: 100
  });
};

// Easter egg tracking
export const trackEasterEggFound = (easterEggType: string, discountCode?: string) => {
  trackEvent('easter_egg_found', {
    easter_egg_type: easterEggType,
    discount_code: discountCode || null,
    timestamp: new Date().toISOString()
  });
};

// Cart abandonment tracking
export const trackCartAbandonment = (step: string, itemCount: number, cartValue: number) => {
  trackEvent('cart_abandonment', {
    abandonment_step: step,
    items_in_cart: itemCount,
    cart_value: cartValue / 100
  });
};

// Performance tracking
export const trackPerformance = (metric: string, value: number, unit: string = 'ms') => {
  trackEvent('performance_metric', {
    metric_name: metric,
    value,
    unit
  });
};