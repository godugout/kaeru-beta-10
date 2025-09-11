
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "./types/productTypes";

interface SystemSelectorProps {
  activeSystem: keyof Product["systems"];
  setActiveSystem: (value: keyof Product["systems"]) => void;
}

const SystemSelector = ({ activeSystem, setActiveSystem }: SystemSelectorProps) => {
  return (
    <div className="flex justify-center mb-12">
      <Tabs 
        defaultValue="endocannabinoid"
        value={activeSystem}
        onValueChange={(value) => setActiveSystem(value as keyof Product["systems"])}
        className="w-full max-w-xl"
      >
        <TabsList className="grid grid-cols-3 bg-black/50 border border-gold/20">
          <TabsTrigger 
            value="endocannabinoid"
            className="data-[state=active]:text-gold data-[state=active]:bg-black/80"
          >
            Endocannabinoid
          </TabsTrigger>
          <TabsTrigger 
            value="nervous"
            className="data-[state=active]:text-gold data-[state=active]:bg-black/80"
          >
            Nervous
          </TabsTrigger>
          <TabsTrigger 
            value="immune"
            className="data-[state=active]:text-gold data-[state=active]:bg-black/80"
          >
            Immune
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default SystemSelector;
