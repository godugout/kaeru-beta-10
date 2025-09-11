
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ProductCalloutProps {
  title: string;
  description: string;
  linkTo: string;
  imageSrc?: string;
}

const ProductCallout = ({ title, description, linkTo, imageSrc }: ProductCalloutProps) => {
  return (
    <motion.div 
      className="my-8 bg-black/40 border border-gold/20 rounded overflow-hidden"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <div className="grid md:grid-cols-5 gap-4">
        {imageSrc && (
          <div className="md:col-span-2">
            <div className="h-full w-full">
              <img 
                src={imageSrc}
                alt={title}
                className="h-full w-full object-cover"
                loading="lazy"
                width={300}
                height={200}
              />
            </div>
          </div>
        )}
        
        <div className={`p-4 ${imageSrc ? 'md:col-span-3' : ''} flex flex-col justify-center`}>
          <h4 className="text-lg text-gold font-serif mb-2">{title}</h4>
          <p className="text-white/80 text-sm mb-4">{description}</p>
          
          <div>
            <Link 
              to={linkTo} 
              className="inline-flex items-center px-5 py-2 bg-gold/90 text-black hover:bg-gold transition-colors text-sm"
            >
              Explore Collection <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCallout;
