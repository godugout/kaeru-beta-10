import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  productData?: {
    name: string;
    price: number;
    currency: string;
    sku: string;
    brand: string;
    category: string;
  };
}

const SEOHead = ({ 
  title = "KAERU CBD - Premium Japanese-Inspired Wellness", 
  description = "Discover KAERU's premium CBD wellness products inspired by Japanese mythology and the transformative power of nature. Shop our collection of ritual-based CBD products.",
  keywords = "CBD, wellness, Japanese, ritual, skincare, premium, organic, transformation",
  image = "/og-image.png",
  type = "website",
  productData
}: SEOHeadProps) => {
  const location = useLocation();
  const baseUrl = "https://kaeru-cbd.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  const structuredData = productData ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productData.name,
    "brand": {
      "@type": "Brand",
      "name": productData.brand
    },
    "category": productData.category,
    "sku": productData.sku,
    "offers": {
      "@type": "Offer",
      "price": (productData.price / 100).toFixed(2),
      "priceCurrency": productData.currency,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "KAERU CBD"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  } : {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KAERU CBD",
    "url": baseUrl,
    "logo": `${baseUrl}/favicon.ico`,
    "sameAs": [
      "https://instagram.com/kaeruCBD",
      "https://twitter.com/kaeruCBD"
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${image}`} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="KAERU CBD" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="KAERU CBD" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#D4AF37" />
    </Helmet>
  );
};

export default SEOHead;