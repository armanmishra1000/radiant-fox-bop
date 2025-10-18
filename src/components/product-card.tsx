"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Eye, PlusCircle, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useCompare } from "@/context/compare-context";
import { cn } from "@/lib/utils";

const statusMap = {
  in_stock: { text: "In Stock", className: "bg-green-600 hover:bg-green-600" },
  dealer_only: { text: "Dealer Only", className: "bg-blue-600 hover:bg-blue-600" },
  sold_out: { text: "Sold Out", className: "bg-red-600 hover:bg-red-600" },
};

interface ProductCardProps {
    product: Product;
    onQuickView: (product: Product) => void;
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { addToCompare, isInCompare } = useCompare();
  const isAdded = isInCompare(product.id);
  const statusInfo = product.status ? statusMap[product.status] : null;

  return (
    <article className="group relative flex flex-col rounded-2xl bg-card shadow-card overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      {statusInfo && (
        <Badge className={cn("absolute top-4 right-4 z-10 text-white", statusInfo.className)}>
          {statusInfo.text}
        </Badge>
      )}
      
      <div className="relative">
        <Link href={`/products/${product.handle}`} className="block">
            <div className="aspect-[4/3] bg-bg-dark p-4">
            <Image
                src={product.hero.url}
                alt={product.hero.alt}
                width={400}
                height={300}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
            </div>
        </Link>
        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button 
                variant="outline" 
                className="bg-background/80 hover:bg-background"
                onClick={() => onQuickView(product)}
            >
                <Eye className="mr-2 h-4 w-4" /> Quick View
            </Button>
            <Button
                variant="outline"
                className="bg-background/80 hover:bg-background"
                onClick={() => addToCompare(product.id)}
                disabled={isAdded}
            >
                {isAdded ? (
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                ) : (
                    <PlusCircle className="mr-2 h-4 w-4" />
                )}
                {isAdded ? "Added" : "Compare"}
            </Button>
        </div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="font-heading text-lg font-bold text-foreground uppercase">{product.title}</h3>
        {product.engine_cc && <p className="text-sm text-muted-foreground">{product.engine_cc}cc</p>}
        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between pt-4 border-t border-border/20">
              {product.msrp ? (
              <span className="text-xl font-bold text-foreground">${product.msrp.toLocaleString()}</span>
              ) : (
              <span className="text-lg font-medium text-foreground">Request Quote</span>
              )}
              <Link href={`/products/${product.handle}`} className="inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground">
                View <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
          </div>
        </div>
      </div>
    </article>
  );
}