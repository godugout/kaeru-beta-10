
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";

export type TabType = "all" | "calm" | "focus" | "strength";

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  const { getOptimizedDuration } = useOptimizedAnimation();
  
  const tabs = [
    { id: "all", label: "All Collections" },
    { id: "calm", label: "Calm" },
    { id: "focus", label: "Focus" },
    { id: "strength", label: "Strength" }
  ];
  
  return (
    <div 
      className="mb-8"
      role="tablist"
      aria-label="Product categories"
    >
      <Tabs 
        value={activeTab} 
        onValueChange={(value) => onTabChange(value as TabType)}
        className="w-full"
      >
        <TabsList className="w-full flex flex-wrap justify-center border-b border-white/10 bg-transparent pb-2">
          {tabs.map((tab) => (
            <TabsTrigger 
              key={tab.id}
              value={tab.id}
              className={`relative px-6 py-3 text-sm tracking-wider uppercase transition-colors
                data-[state=active]:text-gold data-[state=active]:bg-transparent
                data-[state=inactive]:text-white/70 data-[state=inactive]:hover:text-white`}
              aria-controls={`panel-${tab.id}`}
            >
              {tab.label}
              
              {activeTab === tab.id && (
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gold" 
                  layoutId="activeTab"
                  transition={{ 
                    duration: getOptimizedDuration(0.3), 
                    ease: "easeOut" 
                  }}
                />
              )}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
