
import { LibrarySection } from "@/types/library";
import { motion } from "framer-motion";
import { Book } from "lucide-react";

interface LibrarySidebarProps {
  sections: LibrarySection[];
  currentSection: LibrarySection;
  onSectionChange: (section: LibrarySection) => void;
}

export const LibrarySidebar = ({ 
  sections, 
  currentSection,
  onSectionChange
}: LibrarySidebarProps) => {
  return (
    <aside className="bg-black/20 border border-white/10 rounded p-4 self-start sticky top-24">
      <h2 className="text-gold text-lg font-serif mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
        <Book size={18} />
        <span>Library Sections</span>
      </h2>
      
      <nav className="space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section)}
            className={`w-full text-left p-3 rounded text-sm transition-all duration-200 flex items-center
              ${currentSection.id === section.id 
                ? 'bg-gold/10 text-gold' 
                : 'hover:bg-white/5 text-white/70 hover:text-white'
              }`}
          >
            <span className="w-full">{section.title}</span>
            
            {currentSection.id === section.id && (
              <motion.div
                layoutId="activeSectionIndicator"
                className="w-1 h-5 bg-gold rounded-full"
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </nav>
    </aside>
  );
};
