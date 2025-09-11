
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { JournalArticle } from "@/types/journal";

interface JournalArticleCardProps {
  article: JournalArticle;
}

export const JournalArticleCard = ({ article }: JournalArticleCardProps) => {
  // Category colors
  const categoryColors: Record<string, string> = {
    Harmony: "bg-blue-700",
    Clarity: "bg-purple-700",
    Strength: "bg-red-700",
    Roots: "bg-green-700",
    Balance: "bg-amber-600",
  };

  return (
    <Link to={`/journal/${article.slug}`} className="group block">
      <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${article.image})` }}
        ></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        
        {/* Category tag */}
        <span className={`absolute top-4 right-4 text-xs text-white px-3 py-1 rounded ${categoryColors[article.category] || 'bg-gray-700'}`}>
          {article.category}
        </span>
        
        {/* Text content */}
        <div className="absolute bottom-0 left-0 p-6 w-full">
          {article.japaneseConcept && (
            <div className="mb-3">
              <span className="font-serif text-lg text-gold">{article.japaneseConcept}</span>
              {article.conceptMeaning && (
                <span className="text-white/60 text-sm ml-2">({article.conceptMeaning})</span>
              )}
            </div>
          )}
          
          <h4 className="text-xl font-serif text-white mb-3 leading-tight">
            {article.title}
          </h4>
          
          <p className="text-white/70 text-sm mb-4 line-clamp-3">
            {article.excerpt}
          </p>
          
          <div className="flex items-center text-gold text-sm">
            <span>Read Article</span>
            <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};
