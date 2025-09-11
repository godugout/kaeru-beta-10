
import { Star } from "lucide-react";
import { JapaneseProse } from "@/components/ui/japanese/Typography";
import { Product } from "@/types/product";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="text-sm text-gold uppercase">{product.collection}</div>
        <h1 className="text-3xl md:text-4xl font-serif text-white">{product.name}</h1>
        {product.name_english && (
          <h2 className="text-lg text-white/60 italic">{product.name_english}</h2>
        )}
        <h3 className="text-xl text-white/80">{product.subtitle}</h3>
        
        {/* Japanese meaning and size */}
        <div className="flex flex-wrap gap-4 text-sm text-white/60">
          {product.metadata?.japanese_name && product.metadata?.meaning && (
            <span>
              <span className="text-gold">{product.metadata.japanese_name}</span> • {product.metadata.meaning}
            </span>
          )}
          {product.size && (
            <span className="text-white/40">• {product.size}</span>
          )}
          {product.cbd_content && (
            <span className="text-jade-accent">• {product.cbd_content} CBD</span>
          )}
        </div>
        
        {/* Price and Rating */}
        <div className="flex items-center justify-between pt-3">
          <div className="text-2xl font-serif text-gold">${(product.price / 100).toFixed(2)}</div>
          {product.rating && (
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i}
                  size={16}
                  className={i < Math.floor(product.rating) ? "text-gold fill-gold" : "text-white/30"}
                />
              ))}
              <span className="ml-2 text-white/70 text-sm">
                ({product.reviews?.length || 0} reviews)
              </span>
            </div>
          )}
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-4">
        <JapaneseProse className="text-white/80">
          <p>{product.description}</p>
          {product.long_description && (
            <p className="mt-4 text-white/60">{product.long_description}</p>
          )}
        </JapaneseProse>
        
        {/* Frog Ambassador */}
        <div className="mt-4 bg-white/5 p-4 rounded-sm">
          <div className="text-sm text-gold uppercase mb-2">Frog Ambassador</div>
          <div className="text-white/80 text-sm">{product.frog}</div>
        </div>

        {/* Scent Profile */}
        {product.scent_profile && (
          <div className="mt-4 bg-white/5 p-4 rounded-sm">
            <div className="text-sm text-gold uppercase mb-2">Scent Profile</div>
            <div className="text-white/80 text-sm">{product.scent_profile}</div>
          </div>
        )}

        {/* Key Features */}
        {product.metadata && (
          <div className="mt-4 flex flex-wrap gap-2">
            {product.metadata.preservative_free && (
              <span className="bg-jade-accent/20 text-jade-accent px-2 py-1 text-xs rounded-sm">
                Preservative Free
              </span>
            )}
            {product.metadata.handmade && (
              <span className="bg-gold/20 text-gold px-2 py-1 text-xs rounded-sm">
                Handmade
              </span>
            )}
            {product.metadata.organic && (
              <span className="bg-moss-green/50 text-white px-2 py-1 text-xs rounded-sm">
                Organic
              </span>
            )}
            {product.metadata.thc_free && (
              <span className="bg-jade-accent/20 text-jade-accent px-2 py-1 text-xs rounded-sm">
                THC Free
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
