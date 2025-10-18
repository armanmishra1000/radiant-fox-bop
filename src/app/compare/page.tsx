"use client";

import { useCompare } from "@/context/compare-context";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { X } from "lucide-react";
import type { Product } from "@/lib/types";

export default function ComparePage() {
  const { compareItems, removeFromCompare, clearCompare } = useCompare();

  if (compareItems.length === 0) {
    return (
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase">
          Compare Products
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Your compare list is empty. Add some products to see a side-by-side comparison.
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent text-black hover:bg-accent-600">
          <Link href="/collections">
            Browse Products
          </Link>
        </Button>
      </div>
    );
  }

  // Gather all unique spec keys
  const allSpecKeys = Array.from(
    new Set(compareItems.flatMap((item) => item.specs?.map((spec) => spec.key) || []))
  );

  const getSpecValue = (product: Product, key: string): string => {
    return product.specs?.find((spec) => spec.key === key)?.value || "-";
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase">
          Compare Products
        </h1>
        <Button variant="outline" onClick={clearCompare}>Clear All</Button>
      </div>

      <div className="overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Feature</TableHead>
              {compareItems.map((item) => (
                <TableHead key={item.id} className="w-[250px]">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-24 bg-bg-dark rounded-lg p-2 mb-2">
                      <Image
                        src={item.hero.url}
                        alt={item.hero.alt}
                        width={128}
                        height={96}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <Link href={`/products/${item.handle}`} className="font-bold hover:text-accent">
                      {item.title}
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 text-muted-foreground hover:text-destructive"
                      onClick={() => removeFromCompare(item.id)}
                    >
                      <X className="mr-1 h-4 w-4" /> Remove
                    </Button>
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-bold">MSRP</TableCell>
              {compareItems.map((item) => (
                <TableCell key={item.id} className="text-center font-bold text-lg text-accent">
                  {item.msrp ? `$${item.msrp.toLocaleString()}` : "-"}
                </TableCell>
              ))}
            </TableRow>
            {allSpecKeys.map((key) => (
              <TableRow key={key}>
                <TableCell className="font-bold">{key}</TableCell>
                {compareItems.map((item) => (
                  <TableCell key={item.id} className="text-center">
                    {getSpecValue(item, key)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}