import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { JapaneseHeading, JapaneseProse } from "@/components/ui/japanese/Typography";
import { ScrollSection } from "@/components/ui/japanese/Layout";

interface TimelineEvent {
  year: string;
  eastern: string;
  western: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "3000 BCE",
    eastern: "First documented use of cannabis in Chinese medicine by Emperor Shen Nung",
    western: ""
  },
  {
    year: "1500 BCE",
    eastern: "Ayurvedic texts describe cannabis preparations for wellness",
    western: ""
  },
  {
    year: "500 BCE",
    eastern: "Japanese Kampo medicine incorporates cannabis in treatments",
    western: ""
  },
  {
    year: "1839",
    eastern: "",
    western: "Dr. William O'Shaughnessy introduces cannabis to Western medicine"
  },
  {
    year: "1940",
    eastern: "",
    western: "First cannabinoid (CBN) isolated and identified"
  },
  {
    year: "1964",
    eastern: "",
    western: "THC structure discovered by Dr. Raphael Mechoulam"
  },
  {
    year: "1992",
    eastern: "",
    western: "Discovery of endocannabinoid anandamide and the endocannabinoid system"
  },
  {
    year: "2000s",
    eastern: "Revival of traditional Eastern cannabis applications",
    western: "Expansion of cannabinoid research and therapeutic applications"
  },
  {
    year: "2018",
    eastern: "Integration of Eastern wisdom with modern extraction techniques",
    western: "Farm Bill legalizes hemp research and production"
  },
  {
    year: "2020",
    eastern: "Kaeru founded to unite Eastern traditions with modern science",
    western: "Advanced endocannabinoid research reveals new therapeutic pathways"
  },
  {
    year: "Present",
    eastern: "Continued exploration of traditional formulations",
    western: "Ongoing research into precise mechanisms and benefits"
  }
];

const TimelinePoint = ({ event, index }: { event: TimelineEvent; index: number }) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline node */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-gold"></div>
      
      {/* Year */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 text-gold font-serif">
        {event.year}
      </div>
      
      {/* Content */}
      <div className="grid grid-cols-2 gap-4 mt-8 px-4">
        {/* Eastern */}
        <div className="text-right pr-8">
          {event.eastern && (
            <p className="text-white/70 text-sm">{event.eastern}</p>
          )}
        </div>
        
        {/* Western */}
        <div className="pl-8">
          {event.western && (
            <p className="text-white/70 text-sm">{event.western}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ResearchTimeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  return (
    <div ref={ref} className="py-tatami bg-gray-950">
      <ScrollSection className="py-0">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-shaku"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm tracking-widest text-gold mb-4">HISTORICAL CONVERGENCE</h2>
            <JapaneseHeading>
              Timeline of Discovery
            </JapaneseHeading>
            <JapaneseProse className="text-white/70 max-w-2xl mx-auto">
              <p>
                The parallel paths of Eastern wisdom and Western research have finally converged,
                creating a new paradigm for wellness that honors both traditions.
              </p>
            </JapaneseProse>
          </motion.div>

          {/* Timeline legend */}
          <div className="flex justify-center mb-16">
            <div className="grid grid-cols-2 gap-12 text-center max-w-lg">
              <div>
                <div className="text-gold text-lg font-serif mb-2">Eastern Wisdom</div>
                <p className="text-white/50 text-sm">
                  Traditional knowledge and practices from East Asian healing systems
                </p>
              </div>
              <div>
                <div className="text-white text-lg font-serif mb-2">Western Research</div>
                <p className="text-white/50 text-sm">
                  Scientific discoveries and clinical investigations
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Timeline line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gold/30"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            ></motion.div>
            
            {/* Timeline points */}
            <div className="space-y-24">
              {timelineEvents.map((event, index) => (
                <TimelinePoint key={index} event={event} index={index} />
              ))}
            </div>
          </div>
          
          {/* Mobile Timeline - Simplified version */}
          <div className="md:hidden">
            <div className="relative pl-8 border-l border-gold/30">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="mb-8 relative"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute left-0 top-0 -ml-4 w-3 h-3 rounded-full bg-gold"></div>
                  <div className="text-gold font-serif mb-1">{event.year}</div>
                  {event.eastern && <p className="text-white/70 text-sm mb-2">{event.eastern}</p>}
                  {event.western && <p className="text-white/70 text-sm">{event.western}</p>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </ScrollSection>
    </div>
  );
};

export default ResearchTimeline;
