"use client";

import * as React from "react";
import { products } from "@/data/products";
import type { Product } from "@/lib/types";
import { ProductCard } from "./product-card";
import { ProductQuickView } from "./product-quick-view";

interface RelatedProductsProps {
  currentProductId: string;
  productFamily: Product["family"];
}

export function RelatedProducts({ currentProductId, productFamily }: RelatedProductsProps) {
  const [quickViewProduct, setQuickViewProduct] = React.useState<Product | null>(null);

  const related = products
    .filter((p) => p.family === productFamily && p.id !== currentProductId)
    .slice(0, 3);

  if (related.length === 0) {
    return null;
  }

  return (
    <>
      <ProductQuickView
        product={quickViewProduct}
        open={!!quickViewProduct}
        onOpenChange={(open) => !open && setQuickViewProduct(null)}
      />
      <div className="mt-24">
        <h2 className="font-heading text-3xl font-bold uppercase text-center mb-12">
          You Might Also Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {related.map((product) => (
            <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
          ))}
        </div>
      </div>
    </>
  );
}