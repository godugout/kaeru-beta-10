
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChartContainer, ChartLegendContent } from "@/components/ui/chart";
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { JapaneseHeading, JapaneseSubheading, JapaneseProse, JapaneseCallout } from "@/components/ui/japanese/Typography";
import { WabiSabiBlock } from "@/components/ui/japanese/Layout";

const endocannabinoidData = [
  { name: "CB1", neuron: 85, immune: 25 },
  { name: "CB2", neuron: 35, immune: 90 },
  { name: "TRPV", neuron: 65, immune: 45 },
  { name: "GRP55", neuron: 40, immune: 60 },
  { name: "PPARɑ", neuron: 50, immune: 70 },
];

const chartConfig = {
  neuron: {
    label: "Neural System",
    theme: {
      light: "#e6b980",
      dark: "#e6b980",
    },
  },
  immune: {
    label: "Immune System",
    theme: {
      light: "#9b87f5",
      dark: "#9b87f5",
    },
  },
};

const EndocannabinoidSystem = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.3 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-tatami bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-shaku"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-sm tracking-widest text-gold mb-4">BIOLOGICAL HARMONY</motion.h2>
          <JapaneseHeading>
            The Endocannabinoid System
          </JapaneseHeading>
          <JapaneseProse className="text-white/70 max-w-2xl mx-auto mb-8">
            <p>
              Your body's natural balancing mechanism, the endocannabinoid system maintains 
              harmony across multiple physiological processes—from mood and sleep to pain and stress recovery.
            </p>
          </JapaneseProse>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left Column: Interactive visualization */}
          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <WabiSabiBlock className="h-[400px] relative bg-black/40 rounded p-4" textureType="paper">
              <ChartContainer config={chartConfig} className="w-full h-full">
                <AreaChart
                  data={endocannabinoidData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
                >
                  <defs>
                    <linearGradient id="colorNeuron" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#e6b980" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#e6b980" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorImmune" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#9b87f5" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#e6b980" 
                    tickLine={false}
                    axisLine={{ stroke: '#444' }} 
                  />
                  <YAxis 
                    stroke="#e6b980" 
                    tickLine={false}
                    axisLine={{ stroke: '#444' }} 
                    domain={[0, 100]}
                    label={{ 
                      value: 'Receptor Activity', 
                      angle: -90, 
                      position: 'insideLeft',
                      style: { fill: '#e6b980' } 
                    }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                      border: '1px solid rgba(230, 185, 128, 0.3)',
                      color: '#fff'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="neuron" 
                    stroke="#e6b980" 
                    fillOpacity={1} 
                    fill="url(#colorNeuron)" 
                    strokeWidth={2}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="immune" 
                    stroke="#9b87f5" 
                    fillOpacity={1} 
                    fill="url(#colorImmune)" 
                    strokeWidth={2}
                  />
                </AreaChart>
              </ChartContainer>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="flex gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#e6b980]"></div>
                    <span className="text-white/80">Neural System</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#9b87f5]"></div>
                    <span className="text-white/80">Immune System</span>
                  </div>
                </div>
              </div>
            </WabiSabiBlock>
          </motion.div>
          
          {/* Right Column: Key points */}
          <motion.div 
            className="md:col-span-2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <JapaneseCallout>
                  <h4 className="text-gold font-medium text-lg mb-2">System-Wide Balance</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    The endocannabinoid system (ECS) exists throughout your entire body, 
                    regulating physiological processes to maintain homeostasis—your body's 
                    natural state of balance.
                  </p>
                </JapaneseCallout>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-black/40 border border-gold/20 p-5 rounded">
                <h4 className="text-gold font-medium text-lg mb-2">Receptor Network</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  CB1 and CB2 receptors respond to both endogenous cannabinoids produced 
                  by your body and phytocannabinoids from plants, creating pathways for 
                  restoring balance.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-black/40 border border-gold/20 p-5 rounded">
                <h4 className="text-gold font-medium text-lg mb-2">Kaeru's Approach</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Our formulations are precisely calibrated to work with—not against—your 
                  ECS, supporting its natural regulatory function rather than overwhelming 
                  or depleting it.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EndocannabinoidSystem;
