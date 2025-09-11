
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScienceCalloutProps {
  title: string;
  description: string;
  index: number;
}

const scienceCallouts = [
  {
    title: "PERFORMANCE",
    description: "Our formulations support the body's natural recovery systems, enhancing performance through balanced activation of CB1 and CB2 receptors."
  },
  {
    title: "RECOVERY",
    description: "KAERU's proprietary blends target inflammation pathways while supporting tissue repair and restoration through selective cannabinoid activation."
  },
  {
    title: "BALANCE",
    description: "The endocannabinoid system maintains homeostasis. Our products help restore this balance through precisely calibrated botanical compounds."
  }
];

const ScienceCallout = ({ title, description, index }: ScienceCalloutProps) => {
  return (
    <motion.div
      className="bg-black/30 backdrop-blur-sm border border-white/5 p-6 rounded-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
    >
      <h4 className="text-gold font-medium tracking-wider mb-3">{title}</h4>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

const ReturnScience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Animation controlled by scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  return (
    <section 
      id="return" 
      ref={containerRef}
      className="relative py-24 min-h-[80vh] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gray-900 z-0">
        {/* Science-related subtle background patterns */}
        <div className="absolute inset-0 opacity-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="#E6B980" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Animated diagram illustration */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center opacity-10"
          style={{ y }}
        >
          <div className="w-[80vw] h-[80vh] bg-contain bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIj48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjEyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRTZCOTgwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjEwLDUiLz48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjgwIiBmaWxsPSJub25lIiBzdHJva2U9IiNFNkI5ODAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNSwyIi8+PGNpcmNsZSBjeD0iMTUwIiBjeT0iMTUwIiByPSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRTZCOTgwIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjEwIiBmaWxsPSIjRTZCOTgwIi8+PGNpcmNsZSBjeD0iMjMwIiBjeT0iMTIwIiByPSI4IiBmaWxsPSIjRTZCOTgwIi8+PGNpcmNsZSBjeD0iODAiIGN5PSIxODAiIHI9IjgiIGZpbGw9IiNFNkI5ODAiLz48Y2lyY2xlIGN4PSIxOTAiIGN5PSIyMzAiIHI9IjgiIGZpbGw9IiNFNkI5ODAiLz48Y2lyY2xlIGN4PSI5MCIgY3k9IjcwIiByPSI4IiBmaWxsPSIjRTZCOTgwIi8+PC9zdmc+")'
            }}
          ></div>
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column with text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm tracking-widest text-gold mb-2">THE SCIENCE OF RETURN</h2>
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">Eastern Wisdom Meets Modern Science</h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              KAERU formulations blend ancient botanical knowledge with cutting-edge 
              understanding of the body's endocannabinoid system. Our research unites 
              centuries of Eastern healing traditions with contemporary performance science.
            </p>
            <p className="text-white/70 leading-relaxed">
              The frog's extraordinary life cycle—transforming completely from tadpole 
              to adult—mirrors our own capacity for renewal. KAERU products guide this 
              return to balance, supporting your body's natural regenerative processes.
            </p>
          </motion.div>
          
          {/* Right column with callout boxes */}
          <div className="space-y-6">
            {scienceCallouts.map((callout, index) => (
              <ScienceCallout 
                key={index}
                index={index}
                title={callout.title}
                description={callout.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReturnScience;
