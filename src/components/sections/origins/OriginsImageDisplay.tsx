
import { motion } from "framer-motion";

interface OriginsImageDisplayProps {
  imageScale: any; // Motion value
}

const OriginsImageDisplay = ({ imageScale }: OriginsImageDisplayProps) => {
  return (
    <div className="relative order-1 md:order-2">
      <motion.div 
        className="aspect-[4/5] bg-black rounded-sm overflow-hidden"
        style={{ scale: imageScale }}
      >
        {/* Updated founder image with frog branding */}
        <img 
          src="/lovable-uploads/4022fc89-543a-422b-b892-957e902d7a3b.png" 
          alt="Kaeru brand identity with frog illustrations, packaging and samurai frog art"
          className="w-full h-full object-contain"
        />
        
        <div className="absolute bottom-8 left-8 text-white">
          <p className="text-gold text-sm tracking-widest mb-2">OUR FOUNDER</p>
          <h4 className="text-2xl font-serif">Takashi Kaeru</h4>
          <p className="text-white/70">Martial Artist & Herbalist</p>
          <motion.div 
            className="absolute -bottom-4 -left-4 w-16 h-16 border border-gold/30 z-20 pointer-events-none"
            animate={{ 
              borderColor: ['rgba(230,185,128,0.2)', 'rgba(51,195,240,0.2)', 'rgba(234,56,76,0.2)', 'rgba(230,185,128,0.2)'],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
      </motion.div>
      
      {/* Japanese-inspired asymmetrical decorative elements with accent colors */}
      <motion.div 
        className="absolute -bottom-4 -left-4 w-12 h-12 border border-gold/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      />
      
      <motion.div 
        className="absolute -top-4 -right-4 w-24 h-24 border border-accent-blue/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
      />
      
      {/* Red accent detail */}
      <motion.div 
        className="absolute top-1/2 -right-2 w-1 h-20 bg-accent-red/20"
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
        style={{ originY: 0 }}
      />
    </div>
  );
};

export default OriginsImageDisplay;
