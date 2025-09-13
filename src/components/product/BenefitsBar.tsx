import { motion } from "framer-motion";
import { Heart, Shield, Zap, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Recovery",
    description: "Supports natural healing",
    color: "text-kaeru-gold"
  },
  {
    icon: Shield,
    title: "Anti-inflammatory",
    description: "Reduces inflammation naturally",
    color: "text-kaeru-gold"
  },
  {
    icon: Zap,
    title: "Calming",
    description: "Promotes deep relaxation",
    color: "text-kaeru-gold"
  },
  {
    icon: Leaf,
    title: "Natural",
    description: "Pure botanical ingredients",
    color: "text-kaeru-gold"
  }
];

const BenefitsBar = () => {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-serif text-kaeru-gold mb-2">
          Key Benefits
        </h2>
        <p className="text-white/70">
          Designed to support your body's natural wellness
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          
          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="text-center p-6 bg-white/5 border border-white/10 rounded-sm hover:border-kaeru-gold/30 transition-colors group cursor-pointer"
            >
              <motion.div 
                className="mb-4 flex justify-center"
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <div className="w-16 h-16 bg-kaeru-gold/20 rounded-full flex items-center justify-center group-hover:bg-kaeru-gold/30 transition-colors">
                  <Icon size={32} className="text-kaeru-gold" />
                </div>
              </motion.div>
              
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-kaeru-gold transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-sm text-white/70">
                {benefit.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default BenefitsBar;