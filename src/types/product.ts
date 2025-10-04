
export interface Product {
  id: string;
  name: string;
  name_english?: string;
  subtitle: string;
  price: number; // Now in cents for Stripe (e.g., 8500 = $85.00)
  frog: string;
  description: string;
  long_description?: string;
  imagePath: string;
  altText: string;
  collection: string;
  type?: string;
  size?: string;
  sku?: string;
  cbd_content?: string;
  currency?: string;
  category?: string;
  scent_profile?: string;
  packaging?: string;
  inventory?: number;
  featured?: boolean;
  ritualSteps?: any[];
  details?: {
    ingredients?: string[];
    usage?: string;
    benefits?: string[];
    effects?: string[];
  };
  relatedProducts?: string[];
  reviews?: ProductReview[];
  rating?: number;
  metadata?: {
    japanese_name?: string;
    meaning?: string;
    ritual_type?: string;
    skin_type?: string[];
    preservative_free?: boolean;
    handmade?: boolean;
    potency?: string;
    organic?: boolean;
    thc_free?: boolean;
    sulfate_free?: boolean;
    paraben_free?: boolean;
    texture?: string;
    synthetic_free?: boolean;
    therapeutic?: boolean;
    professional_grade?: boolean;
    all_natural?: boolean;
  };
  sizes?: Array<{
    size: string;
    price: number;
    sku: string;
  }>;
}

export interface ProductReview {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verifiedPurchase: boolean;
}
