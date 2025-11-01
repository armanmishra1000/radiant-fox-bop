"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/types";
import { ArrowRight, CheckCircle } from "lucide-react";

interface ProductQuickViewProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const statusMap = {
  in_stock: { text: "In Stock", className: "bg-green-600 hover:bg-green-600" },
  dealer_only: { text: "Dealer Only", className: "bg-blue-600 hover:bg-blue-600" },
  sold_out: { text: "Sold Out", className: "bg-red-600 hover:bg-red-600" },
};

export function ProductQuickView({ product, open, onOpenChange }: ProductQuickViewProps) {
  if (!product) {
    return null;
  }

  const statusInfo = product.status ? statusMap[product.status] : null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-bg-dark rounded-lg p-4">
            <Image
              src={product.hero.url}
              alt={product.hero.alt}
              width={400}
              height={300}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl font-bold uppercase">{product.title}</DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              {statusInfo && (
                <Badge className={`mb-2 text-white ${statusInfo.className}`}>
                  {statusInfo.text}
                </Badge>
              )}
              {product.msrp && (
                <p className="text-3xl font-bold">₹{product.msrp.toLocaleString("en-IN")}</p>
              )}
              {product.highlights && (
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {product.highlights.slice(0, 3).map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
              <Button asChild size="lg" className="mt-6 w-full bg-primary text-primary-foreground">
                <Link href={`/products/${product.handle}`}>
                  View Full Details <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}