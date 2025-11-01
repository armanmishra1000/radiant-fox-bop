"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import Fuse from "fuse.js";
import { products } from "@/data/products";
import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/product-card";
import { ProductQuickView } from "@/components/product-quick-view";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Search } from "lucide-react";

const fuse = new Fuse(products, {
  keys: ["title", "family", "handle", "overview", "specs.value"],
  threshold: 0.4,
});

export function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [quickViewProduct, setQuickViewProduct] = React.useState<Product | null>(null);

  const results = React.useMemo(() => {
    if (!query) return [];
    return fuse.search(query).map((result) => result.item);
  }, [query]);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: `Search for “${query}”` },
  ];

  return (
    <>
      <ProductQuickView
        product={quickViewProduct}
        open={!!quickViewProduct}
        onOpenChange={(open) => !open && setQuickViewProduct(null)}
      />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mb-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase">
            Search Results
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            {results.length} result{results.length !== 1 ? 's' : ''} found for “{query}”
          </p>
        </div>

        <div className="mt-12">
          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
              ))}
            </div>
          ) : (
            <div className="mt-12 text-center py-16 border rounded-lg">
              <Search className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">No products found</h3>
              <p className="text-muted-foreground mt-2">
                We couldn’t find anything matching your search. Try a different keyword.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}