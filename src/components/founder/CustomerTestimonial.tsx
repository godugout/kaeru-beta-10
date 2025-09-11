
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface CustomerTestimonialProps {
  quote: string;
  author: string;
  rating: number;
  productName?: string;
  highlight?: boolean;
}

const CustomerTestimonial = ({ 
  quote, 
  author, 
  rating, 
  productName,
  highlight = false 
}: CustomerTestimonialProps) => {
  return (
    <motion.div 
      className={`p-4 rounded ${highlight ? 'bg-black/40 border border-gold/20' : ''} mb-6`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex gap-1 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={14} 
            className={i < rating ? "text-gold fill-gold" : "text-gray-500"} 
          />
        ))}
      </div>
      
      <p className="text-white/90 italic text-sm mb-2">"{quote}"</p>
      
      <div className="flex items-center justify-between">
        <p className="text-gold text-xs">{author}</p>
        {productName && (
          <Link to={`/product/${productName.toLowerCase().replace(' ', '-')}`} className="text-xs text-white/70 hover:text-gold">
            About {productName}
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default CustomerTestimonial;
