
import { motion } from "framer-motion";

const OriginsHeader = () => {
  return (
    <div className="text-left mb-20 md:pl-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-sm tracking-widest text-gold mb-4">OUR STORY</h2>
        <h3 className="text-3xl md:text-4xl font-serif text-white">The Path of Kaeru</h3>
        <div className="h-px w-24 bg-gradient-to-r from-gold/80 to-gold/0 mt-6 mb-6"></div>
        <p className="text-white/70 max-w-2xl mt-4 leading-relaxed">
          Inspired by ancient healing traditions and Japanese symbolism,
          our founder created KAERU to honor the transformative power of nature.
        </p>
      </motion.div>
    </div>
  );
};

export default OriginsHeader;
