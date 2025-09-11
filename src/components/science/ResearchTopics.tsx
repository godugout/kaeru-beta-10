import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Brain, Star, Moon, Sun } from "lucide-react";
import { JapaneseHeading, JapaneseProse } from "@/components/ui/japanese/Typography";
import { TatamiGrid } from "@/components/ui/japanese/Layout";

interface ResearchTopicProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const researchTopics = [
  {
    icon: <Leaf className="text-gold" size={32} />,
    title: "Phytocannabinoid Profiles",
    description: "Our research examines how different cannabinoid profiles interact with the body's systems for targeted effects."
  },
  {
    icon: <Brain className="text-gold" size={32} />,
    title: "Neuroplasticity Enhancement",
    description: "Exploring how CBD and terpenes may support the brain's ability to form new neural connections and adapt to challenges."
  },
  {
    icon: <Star className="text-gold" size={32} />,
    title: "Japanese Botanical Synergy",
    description: "Investigating the synergistic effects between traditional Japanese botanicals and modern cannabinoid science."
  },
  {
    icon: <Moon className="text-gold" size={32} />,
    title: "Circadian Rhythm Support",
    description: "Studying how endocannabinoid tone influences natural sleep-wake cycles and restorative processes."
  },
  {
    icon: <Sun className="text-gold" size={32} />,
    title: "Stress Adaptation Mechanisms",
    description: "Researching how CBD interacts with the body's adaptive response to various stressors for greater resilience."
  }
];

const ResearchTopic = ({ icon, title, description, index }: ResearchTopicProps) => {
  return (
    <motion.div
      className="bg-black/40 border border-gold/20 p-6 rounded-sm"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-4">{icon}</div>
      <h4 className="text-white text-lg font-medium mb-2">{title}</h4>
      <p className="text-white/70 text-sm">{description}</p>
    </motion.div>
  );
};

const ResearchTopics = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  return (
    <section className="py-tatami bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-shaku"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm tracking-widest text-gold mb-4">ONGOING EXPLORATION</h2>
          <JapaneseHeading>
            Current Research Focus
          </JapaneseHeading>
          <JapaneseProse className="text-white/70 max-w-2xl mx-auto">
            <p>
              Our team of scientists and traditional practitioners collaborate on these key areas
              of research to continually refine our understanding and formulations.
            </p>
          </JapaneseProse>
        </motion.div>
        
        <TatamiGrid columns={3}>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: { 
                transition: { 
                  staggerChildren: 0.1 
                } 
              }
            }}
          >
            {researchTopics.map((topic, index) => (
              <ResearchTopic
                key={index}
                icon={topic.icon}
                title={topic.title}
                description={topic.description}
                index={index}
              />
            ))}
          </motion.div>
        </TatamiGrid>
      </div>
    </section>
  );
};

export default ResearchTopics;
