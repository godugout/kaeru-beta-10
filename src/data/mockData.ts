// Mock data for testing when not connected to real backend

import { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: "demo-ao-hikari",
    name: "Ao Hikari (青光) - Blue Light [DEMO]",
    name_english: "Blue Bloom Face Cream [DEMO]",
    subtitle: "Tallow + Blue Tansy Face Cream",
    type: "Tallow + Blue Tansy Face Cream",
    size: "4oz (120ml)",
    price: 8500,
    currency: "USD",
    category: "skincare",
    collection: "Face",
    sku: "DEMO-AH-FCE-004",
    frog: "Blue Light Spirit",
    description: "A calming balm of blue tansy and grass-fed tallow to illuminate and restore sensitive skin. **This is demo data for testing.**",
    long_description: "Nourish your skin with the purest, most calming botanicals nature has to offer. This minimalist luxury face cream is crafted with just two powerful ingredients. **Demo product - not for sale.**",
    imagePath: "/lovable-uploads/af2b09f6-5ce4-4a4f-8a9c-ad4ec65fc7cc.png",
    altText: "Demo: Ao Hikari Blue Light face cream in matte black glass jar",
    scent_profile: "Herbal floral with earthy undertones",
    packaging: "Matte black glass jar with sustainable bamboo lid",
    inventory: 999,
    featured: true,
    details: {
      ingredients: [
        "100% Grass-Fed Beef Tallow - rich in bioavailable vitamins A, D, E, and K",
        "Pure Blue Tansy Essential Oil - renowned for its vibrant azulene compound"
      ],
      usage: "Apply morning and night to clean face. **Demo mode - not for actual use.**",
      benefits: [
        "Soothes redness and calms inflammation",
        "Supports skin regeneration", 
        "Intense hydration and barrier support",
        "Perfect for sensitive, dry, or reactive skin"
      ],
      effects: ["Calming", "Illuminating", "Restorative"]
    },
    relatedProducts: ["demo-kaifuku-cbd", "demo-mizu-kaeru"],
    metadata: {
      japanese_name: "青光",
      meaning: "Blue Light",
      ritual_type: "daily_glow",
      skin_type: ["sensitive", "dry", "reactive"],
      preservative_free: true,
      handmade: true
    },
    reviews: [
      {
        id: "demo-rev1",
        userId: "demo-user1",
        userName: "Demo User A.",
        rating: 5,
        comment: "This is a demo review for testing purposes. The product looks amazing!",
        date: "2024-01-15",
        verifiedPurchase: false
      }
    ],
    rating: 4.9
  },
  {
    id: "demo-kaifuku-cbd",
    name: "Kaifuku (回復) - Recovery [DEMO]",
    name_english: "Deep Grove CBD Muscle & Joint Balm [DEMO]",
    subtitle: "CBD + Chili Seed + Menthol Relief Balm",
    type: "CBD + Chili Seed + Menthol Relief Balm",
    size: "4oz (120ml)",
    price: 12000,
    currency: "USD",
    category: "cbd",
    collection: "Recovery",
    sku: "DEMO-KF-CBD-004",
    cbd_content: "6000mg",
    frog: "Forest Guardian Frog",
    description: "Frog fire meets forest calm. This warming/cooling balm delivers targeted relief. **Demo product for testing.**",
    long_description: "Soothe. Restore. Relief. A powerful full-body balm formulated to support muscle and joint recovery. **This is demonstration data only.**",
    imagePath: "/lovable-uploads/9dac3c96-b4e9-4ced-86a9-6db566bc413b.png",
    altText: "Demo: Kaifuku Recovery CBD balm in rich green jar",
    scent_profile: "Mentholated spice with grounding botanicals",
    packaging: "Rich green jar with bamboo lid",
    inventory: 999,
    featured: true,
    details: {
      ingredients: [
        "6,000mg Pure CBD Isolate",
        "Ivory Shea Butter - deeply hydrating",
        "100% Grass-Fed Beef Tallow - nutrient rich",
        "Menthol - cooling relief",
        "Chili Seed Extract - warming action"
      ],
      usage: "Demo usage instructions. For testing purposes only.",
      benefits: [
        "Dual-action cooling and warming relief",
        "Targeted muscle and joint support",
        "6000mg high-potency CBD",
        "Natural anti-inflammatory support"
      ],
      effects: ["Warming", "Cooling", "Relieving"]
    },
    relatedProducts: ["demo-ao-hikari", "demo-mizu-kaeru"],
    metadata: {
      japanese_name: "回復",
      meaning: "Recovery",
      ritual_type: "post_workout",
      potency: "extra_strength",
      organic: true,
      thc_free: true
    },
    reviews: [
      {
        id: "demo-rev2",
        userId: "demo-user2", 
        userName: "Demo User B.",
        rating: 5,
        comment: "Demo review: Great for testing the review system!",
        date: "2024-01-12",
        verifiedPurchase: false
      }
    ],
    rating: 4.8
  },
  {
    id: "demo-mizu-kaeru",
    name: "Mizu Kaeru (水蛙) - Water Frog [DEMO]",
    name_english: "Tansy Bloom Nourishing Shower Oil [DEMO]",
    subtitle: "Cleansing Shower Oil",
    type: "Cleansing Shower Oil",
    size: "8oz (240ml)",
    price: 6500,
    currency: "USD",
    category: "body",
    collection: "Cleanse",
    sku: "DEMO-MK-SHO-008",
    frog: "Water Spirit Frog",
    description: "An oil-to-foam botanical cleanser that balances, hydrates, and calms. **Demo version for testing.**",
    long_description: "Elevate your daily cleanse with this luxurious shower oil. **This is sample data for demonstration purposes.**",
    imagePath: "/lovable-uploads/1378ce86-0348-4402-85ed-afb3b4bb6daf.png",
    altText: "Demo: Mizu Kaeru shower oil in amber glass pump bottle",
    scent_profile: "Blue tansy, rain-soaked wood, and citrus peel",
    packaging: "Amber glass pump bottle with minimal kanji design",
    inventory: 999,
    featured: false,
    details: {
      ingredients: [
        "Golden Jojoba Oil - balances without clogging pores",
        "Pure Blue Tansy Oil - rich in azulene",
        "Coco Glucoside - gentle plant-derived cleanser"
      ],
      usage: "Demo instructions for testing. Apply to damp skin in shower.",
      benefits: [
        "Cleanses without stripping natural oils",
        "Supports skin barrier",
        "Soothes redness and irritation",
        "Perfect for sensitive skin"
      ],
      effects: ["Cleansing", "Balancing", "Calming"]
    },
    relatedProducts: ["demo-ao-hikari", "demo-kaifuku-cbd"],
    metadata: {
      japanese_name: "水蛙",
      meaning: "Water Frog",
      ritual_type: "daily_cleanse",
      sulfate_free: true,
      paraben_free: true
    },
    reviews: [
      {
        id: "demo-rev3",
        userId: "demo-user3",
        userName: "Demo User C.",
        rating: 4,
        comment: "Demo review for testing the product rating system.",
        date: "2024-01-10",
        verifiedPurchase: false
      }
    ],
    rating: 4.7
  }
];

// Mock analytics data
export const mockAnalyticsData = {
  pageViews: 1250,
  addToCartEvents: 89,
  ritualBuilderCompletions: 34,
  easterEggsFound: 7,
  averageSessionDuration: 324000, // 5.4 minutes in ms
  bounceRate: 0.32,
  conversionRate: 0.071
};

// Mock user data
export const mockUsers = [
  {
    id: "demo-user-1",
    name: "Demo User Alpha",
    email: "demo.user@example.com",
    joinDate: "2024-01-01",
    totalOrders: 3,
    totalSpent: 24500,
    favoriteProducts: ["demo-ao-hikari", "demo-kaifuku-cbd"]
  }
];

// Check if we're in demo mode
export const isDemoMode = (): boolean => {
  const demoMode = localStorage.getItem('kaeru_demo_mode');
  return demoMode === 'true' || process.env.NODE_ENV === 'development';
};

// Toggle demo mode
export const toggleDemoMode = (): boolean => {
  const currentMode = isDemoMode();
  localStorage.setItem('kaeru_demo_mode', (!currentMode).toString());
  return !currentMode;
};

// Get products (demo or real)
export const getProducts = (): Product[] => {
  if (isDemoMode()) {
    return mockProducts;
  }
  
  // Return real product data
  return [];
};