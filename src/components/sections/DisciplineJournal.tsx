
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Types for journal articles
interface JournalArticle {
  title: string;
  excerpt: string;
  category: string; // Calm, Recovery, Energy, Origins
  image: string;
  slug: string;
}

const DisciplineJournal = () => {
  // Mock data for journal articles - would come from CMS in production
  const featuredArticles: JournalArticle[] = [
    {
      title: "The Art of Recovery: Ancient Techniques for Modern Athletes",
      excerpt: "Explore traditional Japanese recovery methods that have been used by martial artists for centuries to heal and strengthen the body.",
      category: "Recovery",
      image: "/lovable-uploads/f0b481a9-b090-4248-80d8-551fdce7108a.png",
      slug: "/journal/strength-in-recovery"
    },
    {
      title: "Finding Calm Within Chaos: The Kaeru Method",
      excerpt: "Learn how to incorporate mindfulness into your daily routine using techniques inspired by Zen philosophy.",
      category: "Calm",
      image: "/lovable-uploads/b6ab7a27-68af-4c40-a8f6-2877f3f77b89.png", 
      slug: "/journal/quiet-mind-returns"
    },
    {
      title: "The Science of CBD and Inflammation",
      excerpt: "A deep dive into how cannabinoids interact with your body's natural systems to reduce inflammation and promote healing.",
      category: "Science",
      image: "/lovable-uploads/6a7d0907-7479-41cc-aa80-555793426b49.png",
      slug: "/journal/cbd-science"
    }
  ];

  // Category colors
  const categoryColors: Record<string, string> = {
    Recovery: "bg-red-700",
    Calm: "bg-blue-800",
    Energy: "bg-amber-600",
    Origins: "bg-green-800",
    Science: "bg-purple-800"
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm tracking-widest text-gold mb-4">DISCIPLINE JOURNAL</h2>
        <h3 className="text-3xl md:text-4xl font-serif text-white">Wisdom for the Path</h3>
        <p className="text-white/70 max-w-2xl mx-auto mt-4">
          Ancient knowledge meets modern science in our collection of articles
          designed to enhance your wellness journey.
        </p>
      </div>

      {/* Featured Articles */}
      <div className="grid md:grid-cols-3 gap-8">
        {featuredArticles.map((article, index) => (
          <motion.div
            key={article.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group cursor-pointer relative"
          >
            <Link to={article.slug}>
              <div className="aspect-[4/5] overflow-hidden rounded-lg relative">
                {/* Background image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${article.image})` }}
                ></div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Category tag */}
                <span className={`absolute top-4 right-4 text-xs text-white px-3 py-1 rounded ${categoryColors[article.category] || 'bg-gray-700'}`}>
                  {article.category}
                </span>
                
                {/* Text content */}
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h4 className="text-xl md:text-2xl font-serif text-white mb-3 leading-tight">
                    {article.title}
                  </h4>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-gold text-sm">
                    <span>Read Article</span>
                    <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      {/* View all articles button */}
      <div className="text-center mt-16">
        <Link to="/journal">
          <button className="px-8 py-3 border border-gold text-gold hover:bg-gold/10 transition-colors duration-300 tracking-widest inline-flex items-center">
            EXPLORE ALL ARTICLES <ArrowRight size={16} className="ml-2" />
          </button>
        </Link>
      </div>

      {/* Zen proverb quote */}
      <div className="my-20 px-4">
        <blockquote className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-serif text-gold italic leading-relaxed">
            "The frog in the well knows nothing of the great ocean."
          </p>
          <footer className="mt-4 text-white/50">Japanese Proverb</footer>
        </blockquote>
      </div>
    </div>
  );
};

export default DisciplineJournal;
