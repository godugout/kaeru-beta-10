
import { StrictMode } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { FrogEasterEggProvider } from "@/contexts/FrogEasterEggContext";
import "./App.css";

// Lazy import pages for code splitting
import { lazy, Suspense } from "react";
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

// Create router with routes to all pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/the-way",
    element: <Suspense fallback={<PageLoader />}><TheWay /></Suspense>,
  },
  {
    path: "/origins",
    element: <Suspense fallback={<PageLoader />}><Origins /></Suspense>,
  },
  {
    path: "/origins/founders-story",
    element: <Suspense fallback={<PageLoader />}><FounderStory /></Suspense>,
  },
  {
    path: "/founder-story-detail",
    element: <Suspense fallback={<PageLoader />}><FoundersStoryDetail /></Suspense>,
  },
  {
    path: "/product/:productId",
    element: <Suspense fallback={<PageLoader />}><EnhancedProductDetail /></Suspense>,
  },
  {
    path: "/enhanced-product/:productId",
    element: <Suspense fallback={<PageLoader />}><EnhancedProductDetail /></Suspense>,
  },
  {
    path: "/products",
    element: <Suspense fallback={<PageLoader />}><Products /></Suspense>,
  },
  {
    path: "/shop",
    element: <Suspense fallback={<PageLoader />}><Shop /></Suspense>,
  },
  {
    path: "/checkout",
    element: <Suspense fallback={<PageLoader />}><Checkout /></Suspense>,
  },
  {
    path: "/library",
    element: <Suspense fallback={<PageLoader />}><Library /></Suspense>,
  },
  {
    path: "/science",
    element: <Suspense fallback={<PageLoader />}><Science /></Suspense>,
  },
  {
    path: "/ritual-builder",
    element: <Suspense fallback={<PageLoader />}><RitualBuilder /></Suspense>,
  },
  {
    path: "/rituals",
    element: <Suspense fallback={<PageLoader />}><Rituals /></Suspense>,
  },
  {
    path: "/journal",
    element: <Suspense fallback={<PageLoader />}><Journal /></Suspense>,
  },
  {
    path: "/journal/:slug", 
    element: <Suspense fallback={<PageLoader />}><JournalArticlePage /></Suspense>,
  },
  {
    path: "/japanese-art",
    element: <Suspense fallback={<PageLoader />}><JapaneseArtElements /></Suspense>,
  },
  {
    path: "/japanese-design",
    element: <Suspense fallback={<PageLoader />}><JapaneseDesignSystem /></Suspense>,
  },
  {
    path: "/ambassador-demo",
    element: <Suspense fallback={<PageLoader />}><FrogAmbassadorDemo /></Suspense>,
  },
  {
    path: "/seasonal-demo",
    element: <Suspense fallback={<PageLoader />}><SeasonalDemo /></Suspense>,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

// Main App component that provides the router and context
const App = () => {
  return (
    <StrictMode>
      <CartProvider>
        <WishlistProvider>
          <FrogEasterEggProvider>
            <RouterProvider router={router} />
            <Toaster />
          </FrogEasterEggProvider>
        </WishlistProvider>
      </CartProvider>
    </StrictMode>
  );
};

export default App;
