
import { Product } from '@/types/product';
import { strengthRitualSteps, calmRitualSteps } from '@/data/ritualSteps';

export const productData: Product[] = [
  {
    id: "ao-hikari-face-cream",
    name: "Ao Hikari (青光) - Blue Light",
    name_english: "Blue Bloom Face Cream",
    subtitle: "Tallow + Blue Tansy Face Cream",
    type: "Tallow + Blue Tansy Face Cream",
    size: "4oz (120ml)",
    price: 8500, // $85.00 in cents for Stripe
    currency: "USD",
    category: "skincare",
    collection: "Face",
    sku: "KRU-AH-FCE-004",
    frog: "Blue Light Spirit",
    description: "A calming balm of blue tansy and grass-fed tallow to illuminate and restore sensitive skin. Rich in vitamins A, D, E & K for deep nourishment and inflammation support.",
    long_description: "Nourish your skin with the purest, most calming botanicals nature has to offer. This minimalist luxury face cream is crafted with just two powerful ingredients.",
    imagePath: "/lovable-uploads/af2b09f6-5ce4-4a4f-8a9c-ad4ec65fc7cc.png",
    altText: "Ao Hikari Blue Light face cream in matte black glass jar with bamboo lid",
    scent_profile: "Herbal floral with earthy undertones",
    packaging: "Matte black glass jar with sustainable bamboo lid",
    inventory: 200,
    featured: true,
    ritualSteps: calmRitualSteps,
    details: {
      ingredients: [
        "100% Grass-Fed Beef Tallow - rich in bioavailable vitamins A, D, E, and K",
        "Pure Blue Tansy Essential Oil - renowned for its vibrant azulene compound"
      ],
      usage: "Apply morning and night to clean face. Massage gently until absorbed.",
      benefits: [
        "Soothes redness and calms inflammation",
        "Supports skin regeneration",
        "Intense hydration and barrier support",
        "Perfect for sensitive, dry, or reactive skin"
      ],
      effects: ["Calming", "Illuminating", "Restorative"]
    },
    relatedProducts: ["kaifuku-cbd-balm", "mizu-kaeru-shower-oil"],
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
        id: "rev1",
        userId: "user1",
        userName: "Yuki S.",
        rating: 5,
        comment: "This face cream is pure magic. My sensitive skin has never looked better, and the blue tansy scent is so calming.",
        date: "2024-01-15",
        verifiedPurchase: true
      },
      {
        id: "rev2",
        userId: "user2",
        userName: "Emma K.",
        rating: 5,
        comment: "The tallow base is incredibly nourishing without being heavy. Perfect for my evening ritual.",
        date: "2024-01-08",
        verifiedPurchase: true
      }
    ],
    rating: 4.9
  },
  {
    id: "kaifuku-cbd-balm",
    name: "Kaifuku (回復) - Recovery",
    name_english: "Deep Grove CBD Muscle & Joint Balm",
    subtitle: "CBD + Chili Seed + Menthol Relief Balm",
    type: "CBD + Chili Seed + Menthol Relief Balm",
    size: "4oz (120ml)",
    price: 12000, // $120.00 in cents
    currency: "USD",
    category: "cbd",
    collection: "Recovery",
    sku: "KRU-KF-CBD-004",
    cbd_content: "6000mg",
    frog: "Forest Guardian Frog",
    description: "Frog fire meets forest calm. This warming/cooling balm delivers targeted relief with 6,000mg CBD isolate, chili seed extract, and menthol.",
    long_description: "Soothe. Restore. Relief. A powerful full-body balm formulated to support muscle and joint recovery through the synergy of nature's most trusted anti-inflammatory botanicals.",
    imagePath: "/lovable-uploads/9dac3c96-b4e9-4ced-86a9-6db566bc413b.png",
    altText: "Kaifuku Recovery CBD balm in rich green jar with bamboo lid",
    scent_profile: "Mentholated spice with grounding botanicals",
    packaging: "Rich green jar with bamboo lid",
    inventory: 150,
    featured: true,
    ritualSteps: strengthRitualSteps,
    details: {
      ingredients: [
        "6,000mg Pure CBD Isolate",
        "Ivory Shea Butter - deeply hydrating",
        "100% Grass-Fed Beef Tallow - nutrient rich",
        "Cold-Pressed Coconut Oil",
        "Golden Jojoba Oil",
        "Vitamin E - antioxidant support",
        "Menthol - cooling relief",
        "Chili Seed Extract - warming action"
      ],
      usage: "Massage into joints or muscles as needed. For external use only.",
      benefits: [
        "Dual-action cooling and warming relief",
        "Targeted muscle and joint support",
        "6000mg high-potency CBD",
        "Natural anti-inflammatory support"
      ],
      effects: ["Warming", "Cooling", "Relieving"]
    },
    relatedProducts: ["seishin-massage-oil", "shinrin-yu-bath-soak"],
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
        id: "rev3",
        userId: "user3",
        userName: "Marcus L.",
        rating: 5,
        comment: "The dual warming and cooling sensation is incredible. Perfect for post-workout recovery.",
        date: "2024-01-12",
        verifiedPurchase: true
      }
    ],
    rating: 4.8
  },
  {
    id: "mizu-kaeru-shower-oil",
    name: "Mizu Kaeru (水蛙) - Water Frog",
    name_english: "Tansy Bloom Nourishing Shower Oil",
    subtitle: "Cleansing Shower Oil",
    type: "Cleansing Shower Oil",
    size: "8oz (240ml)",
    price: 6500, // $65.00 in cents
    currency: "USD",
    category: "body",
    collection: "Cleanse",
    sku: "KRU-MK-SHO-008",
    frog: "Water Spirit Frog",
    description: "An oil-to-foam botanical cleanser that balances, hydrates, and calms. Let the spirit of the frog cleanse you in the waters of return.",
    long_description: "Elevate your daily cleanse with this luxurious, skin-loving shower oil that transforms into a silky, low-foam cleanser on contact with water.",
    imagePath: "/lovable-uploads/1378ce86-0348-4402-85ed-afb3b4bb6daf.png",
    altText: "Mizu Kaeru shower oil in amber glass pump bottle with kanji design",
    scent_profile: "Blue tansy, rain-soaked wood, and citrus peel",
    packaging: "Amber glass pump bottle with minimal kanji design",
    inventory: 250,
    featured: false,
    ritualSteps: calmRitualSteps,
    details: {
      ingredients: [
        "Golden Jojoba Oil - balances without clogging pores",
        "Pure Blue Tansy Oil - rich in azulene",
        "Coco Glucoside - gentle plant-derived cleanser from coconut sugar"
      ],
      usage: "Apply to damp skin in shower, massage gently, rinse. Can be used as pre-cleansing oil.",
      benefits: [
        "Cleanses without stripping natural oils",
        "Supports skin barrier",
        "Soothes redness and irritation",
        "Perfect for sensitive skin"
      ],
      effects: ["Cleansing", "Balancing", "Calming"]
    },
    relatedProducts: ["yume-shower-butter", "ao-hikari-face-cream"],
    metadata: {
      japanese_name: "水蛙",
      meaning: "Water Frog",
      ritual_type: "daily_cleanse",
      sulfate_free: true,
      paraben_free: true
    },
    reviews: [
      {
        id: "rev4",
        userId: "user4",
        userName: "Sarah M.",
        rating: 4,
        comment: "Love how this oil transforms into a gentle foam. My skin feels so soft afterwards.",
        date: "2024-01-10",
        verifiedPurchase: true
      }
    ],
    rating: 4.7
  },
  {
    id: "yume-shower-butter",
    name: "Yume no Kaeru (夢の蛙) - Dream Frog",
    name_english: "Velvet Bloom Shower Butter",
    subtitle: "Luxurious Tallow + Blue Tansy Shower Butter",
    type: "Luxurious Tallow + Blue Tansy Shower Butter",
    size: "8oz (240ml)",
    price: 7500, // $75.00 in cents
    currency: "USD",
    category: "body",
    collection: "Cleanse",
    sku: "KRU-YK-SHB-008",
    frog: "Dream Spirit Frog",
    description: "Whipped into a dreamy lather, this nourishing blend gently cleanses and hydrates in one ritual. A frog's return to softness.",
    long_description: "Indulge in rich, whipped luxury. This creamy shower butter melts into your skin, cleansing and deeply moisturizing in one effortless step.",
    imagePath: "/lovable-uploads/84c986e7-67c9-401a-b46d-adefd853e93b.png",
    altText: "Yume Dream Frog shower butter in frosted glass jar with bamboo lid",
    scent_profile: "Warm vanilla-lavender with soft florals",
    packaging: "Frosted glass jar with bamboo lid",
    inventory: 200,
    featured: false,
    ritualSteps: calmRitualSteps,
    details: {
      ingredients: [
        "Ivory Shea Butter - softens and replenishes",
        "100% Grass-Fed Beef Tallow - vitamin-rich",
        "Golden Jojoba Oil - mimics natural sebum",
        "Blue Tansy Essential Oil - calms inflammation",
        "Coco Glucoside - gentle coconut cleanser"
      ],
      usage: "Massage into wet skin until it melts into creamy lather, rinse gently.",
      benefits: [
        "Cleanses while moisturizing",
        "Melts into silky foam",
        "Deeply nourishing formula",
        "Calms and soothes skin"
      ],
      effects: ["Moisturizing", "Calming", "Luxurious"]
    },
    relatedProducts: ["mizu-kaeru-shower-oil", "ao-hikari-face-cream"],
    metadata: {
      japanese_name: "夢の蛙",
      meaning: "Dream Frog",
      ritual_type: "evening_ritual",
      texture: "whipped",
      synthetic_free: true
    },
    reviews: [
      {
        id: "rev5",
        userId: "user5",
        userName: "Lisa T.",
        rating: 5,
        comment: "This is pure indulgence. The whipped texture is amazing and my skin feels incredible.",
        date: "2024-01-14",
        verifiedPurchase: true
      }
    ],
    rating: 4.6
  },
  {
    id: "shinrin-yu-bath-soak",
    name: "Shinrin Yu (森林浴) - Forest Bath",
    subtitle: "CBD + Mineral Bath Soak",
    type: "CBD + Mineral Bath Soak",
    size: "16oz (450g)",
    price: 9500, // $95.00 in cents
    currency: "USD",
    category: "bath",
    collection: "Ritual",
    sku: "KRU-SY-BTH-016",
    cbd_content: "500mg",
    frog: "Forest Bath Frog",
    description: "Inspired by Japanese forest bathing, this ritual soak grounds the body and uplifts the spirit.",
    long_description: "Immerse yourself in the healing tradition of shinrin-yoku. This mineral-rich soak combines CBD with forest botanicals for full-body restoration.",
    imagePath: "/lovable-uploads/6423af34-5fea-41fc-bf8d-3fcb64a3660e.png",
    altText: "Shinrin Yu forest bath soak in black ceramic vessel with wooden scoop",
    scent_profile: "Earthy cedar, mint, wild blue flower",
    packaging: "Black ceramic vessel with wooden scoop",
    inventory: 100,
    featured: true,
    ritualSteps: calmRitualSteps,
    details: {
      ingredients: [
        "500mg CBD Isolate",
        "Dead Sea Minerals",
        "Blue Tansy Essential Oil",
        "Hinoki (Japanese Cypress) Oil",
        "Epsom Salt",
        "Pink Himalayan Salt"
      ],
      usage: "Pour 2-4 tablespoons into warm bath, soak 15-30 minutes.",
      benefits: [
        "Full-body relaxation",
        "Muscle tension relief",
        "Mineral replenishment",
        "Aromatherapy benefits"
      ],
      effects: ["Relaxing", "Grounding", "Restorative"]
    },
    relatedProducts: ["kaifuku-cbd-balm", "seishin-massage-oil"],
    metadata: {
      japanese_name: "森林浴",
      meaning: "Forest Bath",
      ritual_type: "weekly_reset",
      therapeutic: true
    },
    reviews: [
      {
        id: "rev6",
        userId: "user6",
        userName: "David P.",
        rating: 5,
        comment: "The forest bathing experience is incredible. This soak transports me to another world.",
        date: "2024-01-11",
        verifiedPurchase: true
      }
    ],
    rating: 4.9
  },
  {
    id: "seishin-massage-oil",
    name: "Seishin Kaeru (精神蛙) - Spirit Frog",
    subtitle: "CBD Botanical Massage Oil",
    type: "CBD Botanical Massage Oil",
    size: "4oz (120ml)",
    price: 8900, // $89.00 in cents
    currency: "USD",
    category: "cbd",
    collection: "Massage",
    sku: "KRU-SK-MSG-004",
    cbd_content: "3000mg",
    frog: "Spirit Guide Frog",
    description: "Let the Spirit Frog guide you back to balance. A grounding massage oil that melts tension and soothes inflammation.",
    long_description: "Seishin means spirit, mind, or soul — reflecting emotional and physical restoration through touch. This oil nourishes through earth-bound botanicals.",
    imagePath: "/lovable-uploads/b2c8603d-ba86-4f9b-9b0c-b51fafb38290.png",
    altText: "Seishin Spirit Frog massage oil in tall amber glass pump bottle with gold accents",
    scent_profile: "Floral + herbaceous with grounding sweetness",
    packaging: "Tall amber glass pump bottle with gold accents",
    inventory: 150,
    featured: false,
    ritualSteps: strengthRitualSteps,
    details: {
      ingredients: [
        "3,000mg CBD Isolate",
        "Golden Jojoba Oil - lightweight hydration",
        "Grass-Fed Beef Tallow - vitamins A, D, E, K",
        "Arnica Extract - muscle recovery",
        "Blue Tansy - calming inflammation"
      ],
      usage: "Warm between palms, massage with slow, grounding strokes. External use only.",
      benefits: [
        "Promotes muscle relaxation",
        "Localized recovery support",
        "Deep skin nourishment",
        "Aromatherapy benefits"
      ],
      effects: ["Grounding", "Relaxing", "Therapeutic"]
    },
    relatedProducts: ["kaifuku-cbd-balm", "shinrin-yu-bath-soak"],
    metadata: {
      japanese_name: "精神蛙",
      meaning: "Spirit Frog",
      ritual_type: "massage_therapy",
      professional_grade: true
    },
    reviews: [
      {
        id: "rev7",
        userId: "user7",
        userName: "Maya K.",
        rating: 5,
        comment: "This massage oil is perfect for deep relaxation. The spirit frog really does guide you to balance.",
        date: "2024-01-13",
        verifiedPurchase: true
      }
    ],
    rating: 4.8
  }
];
