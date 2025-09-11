import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface ProductSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filters: {
    categories: string[];
    priceRange: [number, number];
    features: string[];
  };
  onFiltersChange: (filters: any) => void;
}

const ProductSearch = ({ 
  searchTerm, 
  onSearchChange, 
  filters, 
  onFiltersChange 
}: ProductSearchProps) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const categories = ["skincare", "cbd", "body", "bath", "massage"];
  const features = ["CBD", "Organic", "THC Free", "Handmade", "Preservative Free"];
  const priceRanges = [
    { label: "Under $50", min: 0, max: 5000 },
    { label: "$50 - $100", min: 5000, max: 10000 },
    { label: "$100+", min: 10000, max: 20000 },
  ];

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked 
      ? [...filters.categories, category]
      : filters.categories.filter(c => c !== category);
    
    onFiltersChange({ ...filters, categories: newCategories });
    
    if (checked) {
      setActiveFilters([...activeFilters, category]);
    } else {
      setActiveFilters(activeFilters.filter(f => f !== category));
    }
  };

  const handleFeatureChange = (feature: string, checked: boolean) => {
    const newFeatures = checked 
      ? [...filters.features, feature]
      : filters.features.filter(f => f !== feature);
    
    onFiltersChange({ ...filters, features: newFeatures });
    
    if (checked) {
      setActiveFilters([...activeFilters, feature]);
    } else {
      setActiveFilters(activeFilters.filter(f => f !== feature));
    }
  };

  const clearFilters = () => {
    onFiltersChange({ categories: [], priceRange: [0, 20000], features: [] });
    setActiveFilters([]);
  };

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
        <Input
          type="text"
          placeholder="Search products by name, frog, or ingredient..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50"
        />
      </div>

      {/* Filters Row */}
      <div className="flex items-center gap-4 flex-wrap">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="border-white/20 text-white">
              <Filter size={16} className="mr-2" />
              Filters
              {activeFilters.length > 0 && (
                <Badge variant="secondary" className="ml-2 bg-kaeru-gold text-black">
                  {activeFilters.length}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 bg-kaeru-black border-white/20" align="start">
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white">Filter Products</h4>
              
              {/* Categories */}
              <div>
                <Label className="text-sm text-white/80 mb-2 block">Categories</Label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={filters.categories.includes(category)}
                        onCheckedChange={(checked) => 
                          handleCategoryChange(category, checked as boolean)
                        }
                      />
                      <Label 
                        htmlFor={category} 
                        className="text-sm text-white/70 capitalize"
                      >
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <Label className="text-sm text-white/80 mb-2 block">Features</Label>
                <div className="space-y-2">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Checkbox
                        id={feature}
                        checked={filters.features.includes(feature)}
                        onCheckedChange={(checked) => 
                          handleFeatureChange(feature, checked as boolean)
                        }
                      />
                      <Label 
                        htmlFor={feature} 
                        className="text-sm text-white/70"
                      >
                        {feature}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {activeFilters.length > 0 && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="w-full text-white/70 hover:text-white"
                >
                  Clear All Filters
                </Button>
              )}
            </div>
          </PopoverContent>
        </Popover>

        {/* Active Filter Tags */}
        {activeFilters.map((filter) => (
          <Badge 
            key={filter} 
            variant="secondary" 
            className="bg-kaeru-gold/20 text-kaeru-gold border-kaeru-gold/30"
          >
            {filter}
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-0 ml-2 hover:bg-transparent"
              onClick={() => {
                if (categories.includes(filter)) {
                  handleCategoryChange(filter, false);
                } else {
                  handleFeatureChange(filter, false);
                }
              }}
            >
              <X size={12} />
            </Button>
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ProductSearch;