
import { StrictMode } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { FrogEasterEggProvider } from "@/contexts/FrogEasterEggContext";
import "./App.css";

// Import all pages
import Index from "@/pages/Index";
import TheWay from "@/pages/TheWay";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import EnhancedProductDetail from "@/pages/EnhancedProductDetail";
import Shop from "@/pages/Shop";
import Checkout from "@/pages/Checkout";
import NotFound from "@/pages/NotFound";
import FounderStory from "@/pages/FounderStory";
import FoundersStoryDetail from "@/pages/FoundersStoryDetail";
import Library from "@/pages/Library";
import Origins from "@/pages/Origins";
import Science from "@/pages/Science";
import RitualBuilder from "@/pages/RitualBuilder";
import Rituals from "@/pages/Rituals";
import Journal from "@/pages/Journal";
import JapaneseArtElements from "@/pages/JapaneseArtElements";
import JapaneseDesignSystem from "@/pages/JapaneseDesignSystem";

import FrogAmbassadorDemo from "@/pages/FrogAmbassadorDemo";
import SeasonalDemo from "@/pages/SeasonalDemo";

// Create router with routes to all pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/the-way",
    element: <TheWay />,
  },
  {
    path: "/origins",
    element: <Origins />,
  },
  {
    path: "/origins/founders-story",
    element: <FounderStory />,
  },
  {
    path: "/founder-story-detail",
    element: <FoundersStoryDetail />,
  },
  {
    path: "/product/:productId",
    element: <ProductDetail />,
  },
  {
    path: "/enhanced-product/:productId",
    element: <EnhancedProductDetail />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/library",
    element: <Library />,
  },
  {
    path: "/science",
    element: <Science />,
  },
  {
    path: "/ritual-builder",
    element: <RitualBuilder />,
  },
  {
    path: "/rituals",
    element: <Rituals />,
  },
  {
    path: "/journal",
    element: <Journal />,
  },
  {
    path: "/japanese-art",
    element: <JapaneseArtElements />,
  },
  {
    path: "/japanese-design",
    element: <JapaneseDesignSystem />,
  },
  {
    path: "/ambassador-demo",
    element: <FrogAmbassadorDemo />,
  },
  {
    path: "/seasonal-demo",
    element: <SeasonalDemo />,
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
