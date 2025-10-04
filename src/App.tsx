
import { StrictMode, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { FrogEasterEggProvider } from "@/contexts/FrogEasterEggContext";
import { LocalizationProvider } from "@/contexts/LocalizationContext";
import { ABTestingProvider } from "@/components/testing/ABTestingProvider";
import ErrorBoundary from "@/components/errors/ErrorBoundary";
import DemoModeBanner from "@/components/testing/DemoModeBanner";
import RecentPurchaseNotification from "@/components/social/RecentPurchaseNotification";
import AgeVerificationModal from "@/components/legal/AgeVerificationModal";
import { initializePerformanceMonitoring, trackCartEvents } from "@/utils/performance";
import { trackPageView } from "@/utils/analytics";
import { isDemoMode } from "@/data/mockData";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";

// Lazy import pages for code splitting
import { lazy, Suspense } from "react";
import React from "react";
import { Skeleton } from "@/components/ui/loading-skeleton";

// Critical pages loaded immediately
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";

// Lazy loaded pages
const TheWay = lazy(() => import("@/pages/TheWay"));
const Products = lazy(() => import("@/pages/Products"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const EnhancedProductDetail = lazy(() => import("@/pages/EnhancedProductDetail"));
const Shop = lazy(() => import("@/pages/Shop"));
const Checkout = lazy(() => import("@/pages/Checkout"));
const FounderStory = lazy(() => import("@/pages/FounderStory"));
const FoundersStoryDetail = lazy(() => import("@/pages/FoundersStoryDetail"));
const Library = lazy(() => import("@/pages/Library"));
const Origins = lazy(() => import("@/pages/Origins"));
const Science = lazy(() => import("@/pages/Science"));
const RitualBuilder = lazy(() => import("@/pages/RitualBuilder"));
const Rituals = lazy(() => import("@/pages/Rituals"));
const Journal = lazy(() => import("@/pages/Journal"));
const JournalArticlePage = lazy(() => import("@/components/journal/JournalArticlePage"));
const JapaneseArtElements = lazy(() => import("@/pages/JapaneseArtElements"));
const JapaneseDesignSystem = lazy(() => import("@/pages/JapaneseDesignSystem"));
const FrogAmbassadorDemo = lazy(() => import("@/pages/FrogAmbassadorDemo"));
const SeasonalDemo = lazy(() => import("@/pages/SeasonalDemo"));
const JapaneseLocalizationDemo = lazy(() => import("@/pages/JapaneseLocalizationDemo"));
const AnalyticsDashboard = lazy(() => import("@/pages/AnalyticsDashboard"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const ShippingPolicy = lazy(() => import("@/pages/ShippingPolicy"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-kaeru-black flex items-center justify-center">
    <div className="max-w-4xl mx-auto px-4 space-y-8">
      <Skeleton className="h-16 w-64 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="aspect-[4/3]" />
        ))}
      </div>
    </div>
  </div>
);

// Wrap routes with error boundaries
const withErrorBoundary = (Component: React.ComponentType, name: string) => (
  <ErrorBoundary name={name}>
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  </ErrorBoundary>
);

// Create router with routes to all pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <ErrorBoundary name="Homepage"><Index /></ErrorBoundary>,
  },
  {
    path: "/the-way",
    element: withErrorBoundary(TheWay, "TheWay"),
  },
  // Temporarily disabled - focusing on Shop, The Way, and Rituals
  // {
  //   path: "/origins",
  //   element: withErrorBoundary(Origins, "Origins"),
  // },
  // {
  //   path: "/origins/founders-story",
  //   element: withErrorBoundary(FounderStory, "FounderStory"),
  // },
  {
    path: "/founder-story-detail",
    element: withErrorBoundary(FoundersStoryDetail, "FoundersStoryDetail"),
  },
  {
    path: "/product/:productId",
    element: withErrorBoundary(EnhancedProductDetail, "ProductDetail"),
  },
  {
    path: "/enhanced-product/:productId",
    element: withErrorBoundary(EnhancedProductDetail, "EnhancedProductDetail"),
  },
  {
    path: "/products",
    element: withErrorBoundary(Products, "Products"),
  },
  {
    path: "/shop",
    element: withErrorBoundary(Shop, "Shop"),
  },
  {
    path: "/checkout",
    element: withErrorBoundary(Checkout, "Checkout"),
  },
  // Temporarily disabled - focusing on Shop, The Way, and Rituals
  // {
  //   path: "/library",
  //   element: withErrorBoundary(Library, "Library"),
  // },
  {
    path: "/science",
    element: withErrorBoundary(Science, "Science"),
  },
  {
    path: "/ritual-builder",
    element: withErrorBoundary(RitualBuilder, "RitualBuilder"),
  },
  {
    path: "/rituals",
    element: withErrorBoundary(Rituals, "Rituals"),
  },
  {
    path: "/journal",
    element: withErrorBoundary(Journal, "Journal"),
  },
  {
    path: "/journal/:slug", 
    element: withErrorBoundary(JournalArticlePage, "JournalArticle"),
  },
  {
    path: "/japanese-art",
    element: withErrorBoundary(JapaneseArtElements, "JapaneseArt"),
  },
  {
    path: "/japanese-design",
    element: withErrorBoundary(JapaneseDesignSystem, "JapaneseDesign"),
  },
  {
    path: "/ambassador-demo",
    element: withErrorBoundary(FrogAmbassadorDemo, "AmbassadorDemo"),
  },
  {
    path: "/seasonal-demo",
    element: withErrorBoundary(SeasonalDemo, "SeasonalDemo"),
  },
  {
    path: "/analytics-dashboard",
    element: withErrorBoundary(AnalyticsDashboard, "AnalyticsDashboard"),
  },
  {
    path: "/privacy-policy",
    element: withErrorBoundary(PrivacyPolicy, "PrivacyPolicy"),
  },
  {
    path: "/terms",
    element: withErrorBoundary(TermsOfService, "TermsOfService"),
  },
  {
    path: "/shipping",
    element: withErrorBoundary(ShippingPolicy, "ShippingPolicy"),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

// App component with analytics and performance monitoring
const AppWithProviders = () => {
  const [showDemoBanner, setShowDemoBanner] = React.useState(isDemoMode());

  useEffect(() => {
    // Initialize performance monitoring
    initializePerformanceMonitoring();
    
    // Track cart events for abandonment analysis
    trackCartEvents();
    
    // Track initial page view
    trackPageView(window.location.pathname);
    
    // Set up route change tracking
    const handleRouteChange = () => {
      trackPageView(window.location.pathname);
    };
    
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return (
    <>
      {showDemoBanner && (
        <DemoModeBanner onDismiss={() => setShowDemoBanner(false)} />
      )}
      <AgeVerificationModal />
      <RecentPurchaseNotification />
      <div className={showDemoBanner ? 'pt-16' : ''}>
        <RouterProvider router={router} />
      </div>
    </>
  );
};

// Main App component that provides the router and context
const App = () => {
  return (
    <StrictMode>
      <ErrorBoundary name="App Root">
        <HelmetProvider>
          <LocalizationProvider>
            <ABTestingProvider>
              <CartProvider>
                <WishlistProvider>
                  <FrogEasterEggProvider>
                    <AppWithProviders />
                    <Toaster />
                  </FrogEasterEggProvider>
                </WishlistProvider>
              </CartProvider>
            </ABTestingProvider>
          </LocalizationProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </StrictMode>
  );
};

export default App;
