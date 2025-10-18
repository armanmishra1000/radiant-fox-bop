"use client";

import * as React from "react";
import { toast } from "sonner";
import type { Product } from "@/lib/types";
import { products } from "@/data/products";

const MAX_COMPARE_ITEMS = 4;

interface CompareContextType {
  compareItems: Product[];
  addToCompare: (productId: string) => void;
  removeFromCompare: (productId: string) => void;
  clearCompare: () => void;
  isInCompare: (productId: string) => boolean;
}

const CompareContext = React.createContext<CompareContextType | undefined>(undefined);

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [compareIds, setCompareIds] = React.useState<string[]>([]);

  const addToCompare = (productId: string) => {
    setCompareIds((prevIds) => {
      if (prevIds.includes(productId)) {
        toast.info("Product is already in the compare list.");
        return prevIds;
      }
      if (prevIds.length >= MAX_COMPARE_ITEMS) {
        toast.warning(`You can only compare up to ${MAX_COMPARE_ITEMS} items.`);
        return prevIds;
      }
      const product = products.find(p => p.id === productId);
      if (product) {
        toast.success(`${product.title} added to compare.`);
      }
      return [...prevIds, productId];
    });
  };

  const removeFromCompare = (productId: string) => {
    setCompareIds((prevIds) => prevIds.filter((id) => id !== productId));
  };

  const clearCompare = () => {
    setCompareIds([]);
    toast.info("Compare list cleared.");
  };

  const isInCompare = (productId: string) => {
    return compareIds.includes(productId);
  };

  const compareItems = React.useMemo(() => {
    return compareIds.map(id => products.find(p => p.id === id)).filter(Boolean) as Product[];
  }, [compareIds]);

  const value = {
    compareItems,
    addToCompare,
    removeFromCompare,
    clearCompare,
    isInCompare,
  };

  return (
    <CompareContext.Provider value={value}>
      {children}
    </CompareContext.Provider>
  );
}

export const useCompare = () => {
  const context = React.useContext(CompareContext);
  if (context === undefined) {
    throw new Error("useCompare must be used within a CompareProvider");
  }
  return context;
};