
import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define types for merchandise products
interface MerchandiseProduct {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  imagePath: string;
}

const MerchandiseSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  // Sample merchandise products using our uploaded images
  const products: MerchandiseProduct[] = [
    {
      id: "merch-1",
      name: "Kaeru Tapestry",
      price: 45.99,
      category: "home",
      description: "Handcrafted wall tapestry featuring our iconic Calm frog design with lotus flowers.",
      imagePath: "/lovable-uploads/b6ab7a27-68af-4c40-a8f6-2877f3f77b89.png"
    },
    {
      id: "merch-2",
      name: "Warrior Spirit Bottle",
      price: 29.99,
      category: "accessories",
      description: "Sleek black glass bottle with our samurai frog artwork.",
      imagePath: "/lovable-uploads/6a7d0907-7479-41cc-aa80-555793426b49.png"
    },
    {
      id: "merch-3",
      name: "Active Frog T-Shirt",
      price: 34.99,
      category: "apparel",
      description: "Premium cotton t-shirt with our Action frog artwork.",
      imagePath: "/lovable-uploads/91e158fc-d373-4d74-aeef-37df89d2f38a.png"
    },
    {
      id: "merch-4",
      name: "Kaeru Art Print Set",
      price: 59.99,
      category: "home",
      description: "Collection of four premium art prints featuring our signature frog designs.",
      imagePath: "/lovable-uploads/1345a103-3995-499e-92fd-d45301514dbe.png"
    },
    {
      id: "merch-5",
      name: "Zen Garden Incense Holder",
      price: 42.99,
      category: "accessories",
      description: "Handcrafted ceramic incense holder with ripple patterns.",
      imagePath: "/lovable-uploads/d658e44c-0774-472d-82a2-f3cef3182981.png"
    },
    {
      id: "merch-6",
      name: "Martial Arts Robe",
      price: 89.99,
      category: "apparel",
      description: "Authentic martial arts robe with Kaeru embroidery.",
      imagePath: "/lovable-uploads/b9d677b0-a752-471b-8134-0f3d04821f39.png"
    }
  ];
  
  const categories = ["all", "apparel", "accessories", "home"];
  
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);
    
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm tracking-widest text-gold mb-4">BEYOND CBD</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">Kaeru Merchandise</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Bring the spirit of Kaeru into your everyday life with our exclusive, 
            beautifully crafted merchandise collection.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-sm text-sm transition-colors ${
                selectedCategory === category 
                  ? "bg-gold/20 text-gold border border-gold" 
                  : "bg-transparent text-white/70 border border-white/20 hover:border-white/40"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/30 border border-white/10 rounded-sm overflow-hidden group hover:border-gold/30 transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={product.imagePath} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button 
                    className="w-full bg-gold hover:bg-gold/80 text-black flex items-center justify-center"
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs text-gold/80 uppercase mb-1">{product.category}</div>
                <h4 className="text-white text-lg font-medium mb-1">{product.name}</h4>
                <p className="text-white/60 text-sm mb-3 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">${product.price.toFixed(2)}</span>
                  <button className="text-gold text-sm flex items-center hover:underline">
                    Details <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MerchandiseSection;
