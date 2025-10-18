"use client";

import * as React from "react";
import { ProductCard } from "@/components/product-card";
import { ProductFilters } from "@/components/product-filters";
import type { Product } from "@/lib/types";
import { ProductQuickView } from "@/components/product-quick-view";

interface CategoryPageProps {
  title: string;
  description: string;
  products: Product[];
}

export function CategoryPage({ title, description, products }: CategoryPageProps) {
  const [sortOption, setSortOption] = React.useState("default");
  const [statusFilters, setStatusFilters] = React.useState<string[]>([]);
  const [quickViewProduct, setQuickViewProduct] = React.useState<Product | null>(null);

  const filteredAndSortedProducts = React.useMemo(() => {
    let filtered = [...products];

    // Apply status filters
    if (statusFilters.length > 0) {
      filtered = filtered.filter(p => p.status && statusFilters.includes(p.status));
    }

    // Apply sorting
    if (sortOption === "price-asc") {
      filtered.sort((a, b) => (a.msrp || 0) - (b.msrp || 0));
    } else if (sortOption === "price-desc") {
      filtered.sort((a, b) => (b.msrp || 0) - (a.msrp || 0));
    }

    return filtered;
  }, [products, sortOption, statusFilters]);

  return (
    <>
      <ProductQuickView 
        product={quickViewProduct}
        open={!!quickViewProduct}
        onOpenChange={(open) => {
          if (!open) {
            setQuickViewProduct(null);
          }
        }}
      />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase">{title}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="mt-12">
          <ProductFilters
            onSortChange={setSortOption}
            onStatusChange={setStatusFilters}
          />

          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
              ))}
            </div>
          ) : (
            <div className="mt-12 text-center py-16 border rounded-lg">
              <h3 className="text-lg font-semibold">No products found</h3>
              <p className="text-muted-foreground mt-2">
                Try adjusting your filters to see more results.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}