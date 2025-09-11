
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProductCard from "./ProductCard";
import SystemSelector from "./SystemSelector";
import { Product } from "./types/productTypes";
import { products } from "./data/productsData";
import { JapaneseHeading, JapaneseProse } from "@/components/ui/japanese/Typography";
import { TatamiGrid } from "@/components/ui/japanese/Layout";

const ProductEffects = () => {
  const [activeSystem, setActiveSystem] = useState<keyof Product["systems"]>("endocannabinoid");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } }
  };
  
  return (
    <section className="py-tatami bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-shaku"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm tracking-widest text-gold mb-4">PRECISE FORMULATION</h2>
          <JapaneseHeading>
            Product Effects by Body System
          </JapaneseHeading>
          <JapaneseProse className="text-white/70 max-w-2xl mx-auto">
            <p>
              Each Kaeru formulation works with specific body systems. Explore how our products 
              interact with different physiological processes.
            </p>
          </JapaneseProse>
        </motion.div>

        <SystemSelector activeSystem={activeSystem} setActiveSystem={setActiveSystem} />
        
        <TatamiGrid columns={4} className="gap-shaku">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              activeSystem={activeSystem}
            />
          ))}
        </TatamiGrid>
      </div>
    </section>
  );
};

export default ProductEffects;
