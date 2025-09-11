
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { JapaneseProse } from "@/components/ui/japanese/Typography";
import ReviewSection from "@/components/shop/ReviewSection";
import { Product } from "@/types/product";

interface ProductTabsProps {
  product: Product;
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState("description");
  
  return (
    <Tabs defaultValue="description" value={activeTab} onValueChange={setActiveTab} className="mt-16 border-t border-white/10 pt-8">
      <TabsList className="bg-transparent border-b border-white/10 w-full justify-start">
        <TabsTrigger
          value="description"
          className="data-[state=active]:text-gold data-[state=active]:border-gold data-[state=active]:border-b-2 rounded-none bg-transparent text-white/70 hover:text-white"
        >
          Details
        </TabsTrigger>
        <TabsTrigger
          value="ingredients"
          className="data-[state=active]:text-gold data-[state=active]:border-gold data-[state=active]:border-b-2 rounded-none bg-transparent text-white/70 hover:text-white"
        >
          Ingredients
        </TabsTrigger>
        <TabsTrigger
          value="usage"
          className="data-[state=active]:text-gold data-[state=active]:border-gold data-[state=active]:border-b-2 rounded-none bg-transparent text-white/70 hover:text-white"
        >
          Usage
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className="data-[state=active]:text-gold data-[state=active]:border-gold data-[state=active]:border-b-2 rounded-none bg-transparent text-white/70 hover:text-white"
        >
          Reviews
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="description" className="py-6">
        <JapaneseProse className="text-white/80 max-w-3xl">
          <p>{product.description}</p>
          {product.details?.benefits && (
            <>
              <h3 className="text-gold font-medium mt-4 mb-2">Benefits</h3>
              <ul className="list-disc pl-5 space-y-1">
                {product.details.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </>
          )}
          {product.details?.effects && (
            <>
              <h3 className="text-gold font-medium mt-4 mb-2">Effects</h3>
              <ul className="list-disc pl-5 space-y-1">
                {product.details.effects.map((effect, i) => (
                  <li key={i}>{effect}</li>
                ))}
              </ul>
            </>
          )}
        </JapaneseProse>
      </TabsContent>
      
      <TabsContent value="ingredients" className="py-6">
        <JapaneseProse className="text-white/80 max-w-3xl">
          <h3 className="text-gold font-medium mb-3">Key Ingredients</h3>
          {product.details?.ingredients ? (
            <ul className="list-disc pl-5 space-y-3">
              {product.details.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
          ) : (
            <p>Full ingredient information coming soon.</p>
          )}
        </JapaneseProse>
      </TabsContent>
      
      <TabsContent value="usage" className="py-6">
        <JapaneseProse className="text-white/80 max-w-3xl">
          <h3 className="text-gold font-medium mb-3">How to Use</h3>
          <p>{product.details?.usage || "Usage instructions coming soon."}</p>
          {product.ritualSteps && (
            <div className="mt-4">
              <p>For maximum benefit, follow the ritual application steps below.</p>
            </div>
          )}
        </JapaneseProse>
      </TabsContent>
      
      <TabsContent value="reviews" className="py-6">
        <ReviewSection product={product} />
      </TabsContent>
    </Tabs>
  );
};

export default ProductTabs;
