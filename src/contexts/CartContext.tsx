
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";

// Define our cart item type
export interface CartItem {
  id: string;
  name: string;
  imagePath: string;
  price: number;
  quantity: number;
  collection: string;
}

// Define our context type
interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
}

// Create the context with a default value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart provider component
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  
  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('kaeruCart');
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setItems(parsedCart);
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
      }
    }
  }, []);
  
  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('kaeruCart', JSON.stringify(items));
  }, [items]);

  // Add an item to cart
  const addItem = (item: Omit<CartItem, "quantity">) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(i => i.id === item.id);
      
      if (existingItem) {
        // Increment quantity if item already exists
        toast({
          title: "Item quantity updated",
          description: `${item.name} quantity increased in your cart.`,
        });
        return currentItems.map(i => 
          i.id === item.id 
            ? { ...i, quantity: i.quantity + 1 } 
            : i
        );
      }
      
      // Add new item with quantity 1
      toast({
        title: "Item added to cart",
        description: `${item.name} has been added to your cart.`,
      });
      return [...currentItems, { ...item, quantity: 1 }];
    });
  };
  
  // Remove an item from cart
  const removeItem = (itemId: string) => {
    setItems(currentItems => {
      const removedItem = currentItems.find(i => i.id === itemId);
      if (removedItem) {
        toast({
          title: "Item removed",
          description: `${removedItem.name} has been removed from your cart.`,
        });
      }
      return currentItems.filter(i => i.id !== itemId);
    });
  };
  
  // Update item quantity
  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(itemId);
      return;
    }
    
    setItems(currentItems => 
      currentItems.map(i => 
        i.id === itemId 
          ? { ...i, quantity } 
          : i
      )
    );
  };
  
  // Clear the entire cart
  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };
  
  // Calculate total number of items
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  
  // Calculate subtotal (convert from cents to dollars for display)
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0) / 100;

  // Context value
  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook for using the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
