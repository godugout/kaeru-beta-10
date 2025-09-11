
import { useCallback } from "react";
import { TabType } from "@/components/shop/TabNavigation";

export function useProductFilter() {
  const getFilteredProducts = useCallback(<T extends { name: string; description: string }>(
    products: T[],
    tabName: TabType
  ) => {
    return tabName === "all" 
      ? products
      : products.filter(product => 
          product.name.toLowerCase().includes(tabName) ||
          product.description.toLowerCase().includes(tabName)
        );
  }, []);

  return { getFilteredProducts };
}
