
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import KaeruLogo from "@/components/hero/KaeruLogo";
import { JournalArticleCard } from "@/components/journal/JournalArticleCard";
import { journalArticles } from "@/data/journalArticles";
import { Button } from "@/components/ui/button";

const Journal = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Recovery", "Calm", "Energy", "Origins", "Rituals"];
  
  const filteredArticles = activeFilter === "All" 
    ? journalArticles 
    : journalArticles.filter(article => article.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="px-6 py-6 flex justify-between items-center border-b border-white/10">
        <Link to="/" className="text-gold hover:text-gold/80 transition-colors flex items-center gap-2">
          <ChevronLeft size={18} />
          <span>Return home</span>
        </Link>
        <div className="w-16 h-16 flex items-center justify-center">
          <KaeruLogo />
        </div>
        <div className="w-24"></div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Journal Introduction */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Discipline Journal</h1>
          <p className="text-xl md:text-2xl text-gold mb-8 font-light">Wisdom for the returning warrior</p>
          <p className="text-white/70 text-lg leading-relaxed">
            Ancient knowledge meets modern science in our collection of articles designed to enhance your wellness journey. 
            Each piece offers practical wisdom for those walking the path of disciplined return to wholeness.
          </p>
        </div>

        {/* Featured Banner */}
        <div className="relative w-full overflow-hidden h-80 mb-16 rounded-sm">
          <img 
            src="/lovable-uploads/b6ab7a27-68af-4c40-a8f6-2877f3f77b89.png" 
            alt="Frog and lotus artwork" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/80"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl">
                <h3 className="text-3xl font-serif text-white mb-4">
                  "When you reach the top of the mountain, keep climbing."
                </h3>
                <p className="text-gold italic">— Zen Proverb</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mb-12 flex justify-center">
          <div className="flex flex-wrap gap-3 bg-black/30 p-2 rounded-lg border border-white/10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gold text-black shadow-lg shadow-gold/25'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Journal Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <JournalArticleCard article={article} />
            </motion.div>
          ))}
        </div>
        
        {/* Newsletter Signup */}
        <div className="bg-black/30 border border-gold/20 p-8 md:p-12 rounded-sm text-center max-w-3xl mx-auto">
          <h4 className="font-serif text-2xl md:text-3xl text-white mb-4">Join the Journey of Return</h4>
          <p className="text-white/70 mb-6">
            Receive monthly wisdom and practices from the Discipline Journal, delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-black/50 border border-white/20 px-4 py-2 rounded-sm flex-grow focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <Button className="bg-gold hover:bg-gold/90 text-black">
              Subscribe
            </Button>
          </div>
        </div>
      </main>

      {/* Footer Quote */}
      <div className="bg-black/50 py-16 mt-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <p className="text-lg text-white/80 italic mb-4">
            "The journey of return is not a circle, but a spiral—each time we come back, we arrive at a deeper understanding."
          </p>
          <p className="text-gold">— Kaeru Wisdom</p>
        </div>
      </div>
    </div>
  );
};

export default Journal;
