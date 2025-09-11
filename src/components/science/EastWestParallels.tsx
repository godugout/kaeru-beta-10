import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { JapaneseHeading, JapaneseProse, JapaneseConcept } from "@/components/ui/japanese/Typography";
import { AsymmetricGrid } from "@/components/ui/japanese/Layout";

interface ConceptPairProps {
  eastern: {
    title: string;
    description: string;
  };
  western: {
    title: string;
    description: string;
  };
  index: number;
}

const conceptPairs = [
  {
    eastern: {
      title: "Ki (気)",
      description: "Life force energy that flows through channels (meridians) in the body. Balanced ki means good health and vitality."
    },
    western: {
      title: "Cellular Energy Production",
      description: "Mitochondrial function and ATP production regulate cellular energy. Optimal mitochondrial health leads to proper bodily function."
    }
  },
  {
    eastern: {
      title: "Yin & Yang",
      description: "Complementary opposing forces that must be balanced for health. Excess or deficiency in either leads to disharmony."
    },
    western: {
      title: "Homeostasis",
      description: "The body's tendency to seek and maintain equilibrium across all systems through feedback mechanisms and regulatory processes."
    }
  },
  {
    eastern: {
      title: "Five Elements",
      description: "The interconnected cycle of Wood, Fire, Earth, Metal, and Water representing the relationships between bodily systems."
    },
    western: {
      title: "Physiological Systems Integration",
      description: "The networked relationship between nervous, endocrine, immune, digestive, and cardiovascular systems."
    }
  }
];

const ConceptPair = ({ eastern, western, index }: ConceptPairProps) => {
  return (
    <motion.div
      className="my-shaku"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <AsymmetricGrid>
        {/* Eastern concept */}
        <div className="relative">
          <div className="absolute -left-3 top-0 w-1 h-full bg-gold/40"></div>
          <div className="ml-4">
            <h4 className="text-gold text-xl font-serif mb-2">{eastern.title}</h4>
            <p className="text-white/70">{eastern.description}</p>
          </div>
        </div>
        
        {/* Western concept */}
        <div className="relative">
          <div className="absolute -left-3 top-0 w-1 h-full bg-gold/40"></div>
          <div className="ml-4">
            <h4 className="text-white text-xl font-serif mb-2">{western.title}</h4>
            <p className="text-white/70">{western.description}</p>
          </div>
        </div>
      </AsymmetricGrid>
    </motion.div>
  );
};

const EastWestParallels = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  return (
    <section className="py-tatami bg-gray-950" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-shaku"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm tracking-widest text-gold mb-4">CONVERGING WISDOM</h2>
          <JapaneseHeading>
            Eastern Wisdom, Western Science
          </JapaneseHeading>
          <JapaneseProse className="text-white/70 max-w-2xl mx-auto">
            <p>
              Ancient Eastern healing traditions and modern Western science describe the same 
              reality through different lenses. At Kaeru, we honor both perspectives.
            </p>
          </JapaneseProse>
        </motion.div>

        <div>
          {/* Desktop view: Side by side comparison */}
          <div className="hidden md:block">
            {conceptPairs.map((pair, index) => (
              <ConceptPair 
                key={index}
                eastern={pair.eastern}
                western={pair.western}
                index={index}
              />
            ))}
          </div>
          
          {/* Mobile view: Accordion */}
          <div className="md:hidden">
            <Accordion type="single" collapsible className="w-full">
              {conceptPairs.map((pair, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gold/20">
                  <AccordionTrigger className="text-gold hover:text-gold/80 py-6">
                    <span className="font-serif text-xl">{pair.eastern.title} / {pair.western.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <div className="grid gap-6 mb-4">
                      <div>
                        <h4 className="text-gold text-lg font-serif mb-2">{pair.eastern.title}</h4>
                        <p className="text-white/70">{pair.eastern.description}</p>
                      </div>
                      <div>
                        <h4 className="text-white text-lg font-serif mb-2">{pair.western.title}</h4>
                        <p className="text-white/70">{pair.western.description}</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        
        <motion.div
          className="mt-shaku text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-xl font-serif text-gold italic">
            "The meeting of two worlds is not contradiction, but completion."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EastWestParallels;
