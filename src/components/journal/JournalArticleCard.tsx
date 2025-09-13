
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { JournalArticle } from "@/types/journal";

interface JournalArticleCardProps {
  article: JournalArticle;
}

export const JournalArticleCard = ({ article }: JournalArticleCardProps) => {
  // Category colors
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Recovery: "bg-red-700",
      Calm: "bg-blue-700", 
      Energy: "bg-amber-600",
      Origins: "bg-green-700",
      Rituals: "bg-purple-700",
      Harmony: "bg-blue-700",
      Clarity: "bg-purple-700",
      Strength: "bg-red-700",
      Roots: "bg-green-700",
    };
    return colors[category] || "bg-gray-700";
  };

  return (
    <Link to={`/journal/${article.slug}`} className="group block">
      <article className="bg-white dark:bg-black/30 rounded-lg overflow-hidden border border-sage-200 dark:border-white/10 transition-all duration-300 group-hover:shadow-xl group-hover:border-gold/30">
        {/* Featured image with ken burns effect */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            style={{ transformOrigin: 'center center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {/* Category badge */}
          <div className="absolute top-3 right-3">
            <span className={`px-3 py-1 text-xs font-medium text-white rounded-full ${getCategoryColor(article.category)}`}>
              {article.category}
            </span>
          </div>
          
          {/* Read time in corner */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1 text-white/80 text-xs">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12,6 12,12 16,14"/>
            </svg>
            {article.readTime}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Japanese Concept */}
          {article.japaneseConcept && (
            <div className="mb-3">
              <span className="font-serif text-lg text-gold">{article.japaneseConcept}</span>
              {article.conceptMeaning && (
                <span className="text-charcoal/60 dark:text-white/60 text-sm ml-2">({article.conceptMeaning})</span>
              )}
            </div>
          )}
          
          {/* Title in serif font */}
          <h3 className="font-serif text-xl md:text-2xl text-charcoal dark:text-white mb-3 leading-tight group-hover:text-gold transition-colors">
            {article.title}
          </h3>
          
          {/* Excerpt in smaller text */}
          <p className="text-charcoal/70 dark:text-white/70 text-sm mb-4 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
          
          {/* Author + Date at bottom */}
          <div className="flex items-center justify-between text-xs text-charcoal/50 dark:text-white/50">
            <span>{article.author}</span>
            <span>{new Date(article.publishDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}</span>
          </div>
          
          {/* Read article link */}
          <div className="flex items-center text-gold text-sm mt-4 group-hover:text-gold/80 transition-colors">
            <span>Read Article</span>
            <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    </Link>
  );
};
