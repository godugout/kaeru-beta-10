
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { JournalArticleCard } from "@/components/journal/JournalArticleCard";
import { journalArticles } from "@/data/journalArticles";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const JournalContent = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  // Filter articles based on active tab
  const filteredArticles = activeTab === "all" 
    ? journalArticles 
    : journalArticles.filter(article => article.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="max-w-7xl mx-auto">
      {/* Journal Introduction */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-sm tracking-widest text-gold mb-4">DISCIPLINE JOURNAL</h2>
        <h3 className="text-3xl md:text-5xl font-serif text-white mb-8">The Cycle of Return</h3>
        <p className="text-white/70 mb-6 leading-relaxed">
          In Japanese philosophy, the concept of <span className="text-gold italic">kaeru</span> (帰る) means "to return" or "to come back." 
          Our journal explores this eternal cycle of return—to origins, to balance, to self—through the lens of ancient wisdom 
          and modern science.
        </p>
        <p className="text-white/70 leading-relaxed">
          Each article offers wisdom, practices, and reflections to guide you on your path of return.
        </p>
      </div>

      {/* Zen proverb quote */}
      <div className="my-12 px-4">
        <blockquote className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-serif text-gold italic leading-relaxed">
            "When you reach the top of the mountain, keep climbing."
          </p>
          <footer className="mt-4 text-white/50">Zen Proverb</footer>
        </blockquote>
      </div>

      {/* Journal Categories */}
      <div className="mb-12">
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList className="bg-black/50 border border-white/10">
              <TabsTrigger value="all" className="text-sm">All</TabsTrigger>
              <TabsTrigger value="harmony" className="text-sm">Harmony</TabsTrigger>
              <TabsTrigger value="clarity" className="text-sm">Clarity</TabsTrigger>
              <TabsTrigger value="strength" className="text-sm">Strength</TabsTrigger>
              <TabsTrigger value="roots" className="text-sm">Roots</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
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
    </div>
  );
};
