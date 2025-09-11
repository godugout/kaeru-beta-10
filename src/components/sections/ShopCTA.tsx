
import { motion } from "framer-motion";
import { KaeruArrowButton } from "@/components/ui/kaeru/KaeruButton";
import { JapaneseHeading, JapaneseProse } from "@/components/ui/japanese/Typography";
import { WabiSabiBlock } from "@/components/ui/japanese/Layout";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";

const ShopCTA = () => {
  const { shouldAnimate } = useOptimizedAnimation();

  return (
    <section className="py-tatami bg-black/30">
      <WabiSabiBlock 
        textureType="washi" 
        className="max-w-5xl mx-auto px-4 py-shaku text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldAnimate ? 0.7 : 0, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <JapaneseHeading className="mb-2">Not Sure Where to Begin?</JapaneseHeading>
          <JapaneseProse className="max-w-2xl mx-auto mb-8">
            <p>
              Take our ritual questionnaire to discover which products and practices 
              align best with your needs and nature.
            </p>
          </JapaneseProse>
          
          <KaeruArrowButton 
            href="/ritual-builder"
            variant="goldOutline"
            className="group"
          >
            <span className="text-lg">Begin Your Ritual Journey</span>
            <motion.span
              animate={{ x: shouldAnimate ? [0, 4, 0] : 0 }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 1.5,
                ease: "easeInOut" 
              }}
            />
          </KaeruArrowButton>
          
          <div className="mt-8 text-sm text-white/50">
            Personalized recommendations based on your unique needs
          </div>
        </motion.div>
      </WabiSabiBlock>
    </section>
  );
};

export default ShopCTA;
