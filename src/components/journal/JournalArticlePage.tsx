import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Share2, Twitter, Facebook, Copy, Clock, User } from "lucide-react";
import { journalArticles } from "@/data/journalArticles";
import { JournalArticle } from "@/types/journal";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const JournalArticlePage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<JournalArticle | null>(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const foundArticle = journalArticles.find(a => a.slug === slug);
    setArticle(foundArticle || null);
  }, [slug]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article?.title || "";
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard");
        break;
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-sage-50 dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-charcoal dark:text-white mb-4">Article not found</h2>
          <Link to="/journal" className="text-gold hover:text-gold/80 transition-colors">
            Return to Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sage-50 dark:bg-black">
      {/* Header */}
      <header className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-sage-200 dark:border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            to="/journal" 
            className="text-charcoal dark:text-white hover:text-gold dark:hover:text-gold transition-colors flex items-center gap-2"
          >
            <ChevronLeft size={18} />
            <span>Journal</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleShare('twitter')}
              className="text-charcoal dark:text-white hover:text-gold"
            >
              <Twitter size={16} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleShare('facebook')}
              className="text-charcoal dark:text-white hover:text-gold"
            >
              <Facebook size={16} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleShare('copy')}
              className="text-charcoal dark:text-white hover:text-gold"
            >
              <Copy size={16} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-gold text-black text-sm font-medium rounded">
                  {article.category}
                </span>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Clock size={14} />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <User size={14} />
                  <span>{article.author}</span>
                </div>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl text-white mb-4 leading-tight">
                {article.title}
              </h1>
              
              {article.japaneseConcept && (
                <div className="text-gold text-lg">
                  <span className="font-japanese">{article.japaneseConcept}</span>
                  <span className="text-white/70 ml-3">{article.conceptMeaning}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex gap-12">
          {/* Table of Contents (Desktop) */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-32">
              <h3 className="font-serif text-lg text-charcoal dark:text-white mb-4">Contents</h3>
              <nav className="space-y-2">
                {article.content?.sections?.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSection(index)}
                    className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                      activeSection === index
                        ? 'bg-gold/20 text-gold'
                        : 'text-charcoal/70 dark:text-white/70 hover:text-gold'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <article className="flex-1 max-w-3xl">
            {/* Introduction */}
            {article.content?.introduction && (
              <div className="mb-12">
                <p className="text-lg leading-relaxed text-charcoal/80 dark:text-white/80 italic border-l-2 border-gold pl-6">
                  {article.content.introduction}
                </p>
              </div>
            )}

            {/* Koan */}
            {article.content?.koan && (
              <blockquote className="my-12 text-center">
                <p className="text-2xl font-serif text-gold italic leading-relaxed mb-4">
                  "{article.content.koan}"
                </p>
              </blockquote>
            )}

            {/* Article Sections */}
            {article.content?.sections?.map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12"
              >
                <h2 className="font-serif text-2xl text-charcoal dark:text-white mb-6">
                  {section.title}
                </h2>
                <div className="prose prose-lg max-w-none text-charcoal/80 dark:text-white/80 leading-relaxed">
                  <p>{section.content}</p>
                </div>
              </motion.section>
            ))}

            {/* Scientific Foundation */}
            {article.content?.scientificFoundation && (
              <div className="bg-sage-100 dark:bg-white/5 p-8 rounded-lg mb-12">
                <h3 className="font-serif text-xl text-charcoal dark:text-white mb-4">
                  Scientific Foundation
                </h3>
                <p className="text-charcoal/80 dark:text-white/80 leading-relaxed">
                  {article.content.scientificFoundation}
                </p>
              </div>
            )}

            {/* Practice Section */}
            {article.content?.practice && (
              <div className="bg-gold/10 border border-gold/20 p-8 rounded-lg mb-12">
                <h3 className="font-serif text-xl text-charcoal dark:text-white mb-4">
                  {article.content.practice.title}
                </h3>
                <ol className="space-y-3">
                  {article.content.practice.steps.map((step, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-gold text-black rounded-full text-sm flex items-center justify-center font-medium">
                        {index + 1}
                      </span>
                      <span className="text-charcoal/80 dark:text-white/80">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Product Connection */}
            {article.content?.productConnection && (
              <div className="border-l-4 border-gold pl-6 mb-12">
                <h3 className="font-serif text-xl text-charcoal dark:text-white mb-4">
                  Ritual Pairing
                </h3>
                <p className="text-charcoal/80 dark:text-white/80 leading-relaxed mb-6">
                  {article.content.productConnection}
                </p>
                
                {/* Product Cards */}
                <div className="grid md:grid-cols-2 gap-4">
                  {article.relatedProducts.map((product, index) => (
                    <div key={index} className="bg-white dark:bg-white/5 p-6 rounded-lg border border-sage-200 dark:border-white/10">
                      <h4 className="font-medium text-charcoal dark:text-white mb-2">{product}</h4>
                      <p className="text-sm text-charcoal/70 dark:text-white/70 mb-4">
                        Enhance your practice with this carefully formulated botanical blend.
                      </p>
                      <Button size="sm" className="bg-gold hover:bg-gold/90 text-black">
                        Learn More
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Closing Meditation */}
            {article.content?.closingMeditation && (
              <div className="text-center my-12">
                <p className="text-lg font-serif text-gold italic leading-relaxed">
                  {article.content.closingMeditation}
                </p>
              </div>
            )}
          </article>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-charcoal dark:bg-black/50 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white/70 mb-4">Continue your journey of return</p>
          <Link to="/journal">
            <Button variant="outline" className="border-gold text-gold hover:bg-gold/10">
              Explore More Articles
            </Button>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default JournalArticlePage;