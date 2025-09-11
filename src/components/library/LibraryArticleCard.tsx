
import { LibraryArticle } from "@/types/library";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface LibraryArticleCardProps {
  article: LibraryArticle;
  index: number;
}

const LibraryArticleCard = ({ article, index }: LibraryArticleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-black/40 border border-white/10 rounded overflow-hidden group hover:border-gold/30 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 text-xs text-gold rounded">
          {article.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl text-white font-serif mb-2">
          {article.title}
        </h3>
        
        {article.japaneseConcept && (
          <div className="mb-3 flex items-center gap-2 text-sm">
            <span className="text-gold">{article.japaneseConcept}</span>
            <span className="text-white/50">-</span>
            <span className="text-white/50 italic">{article.conceptMeaning}</span>
          </div>
        )}
        
        <p className="text-white/70 text-sm mb-4 line-clamp-2">
          {article.excerpt}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="text-xs text-white/50">{article.readTime} read</div>
          <Link 
            to={`/library/${article.slug}`}
            className="flex items-center text-gold text-sm hover:underline"
          >
            Read More <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default LibraryArticleCard;
