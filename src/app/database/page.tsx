"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { vinRecords, type VinRecord } from "@/data/vin";
import { products } from "@/data/products";
import { Search, ArrowRight } from "lucide-react";

export default function DatabasePage() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<VinRecord[]>([]);
  const [searched, setSearched] = React.useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    if (!query) {
      setResults([]);
      return;
    }
    const found = vinRecords.filter(r => r.vinPrefix.toLowerCase().includes(query.toLowerCase()));
    setResults(found);
  };

  const getProductByModelName = (modelName: string) => {
    return products.find(p => p.title === modelName);
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase">
          VIN Database
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Search our VIN database to identify a model and view its specifications.
        </p>
      </div>

      <div className="mt-12 max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>VIN Search</CardTitle>
            <CardDescription>Enter a full or partial VIN prefix.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value.toUpperCase())}
                placeholder="Enter VIN prefix..."
                className="flex-grow"
              />
              <Button type="submit">
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
            </form>
             <div className="text-xs text-muted-foreground mt-2">
              Examples:{" "}
              <button onClick={() => setQuery('TSX140')} className="underline">TSX140</button>,{" "}
              <button onClick={() => setQuery('TFX250')} className="underline">TFX250</button>
            </div>
          </CardContent>
        </Card>
      </div>

      {searched && (
        <div className="mt-12 max-w-4xl mx-auto">
          {results.length > 0 ? (
            <div className="space-y-4">
              <h2 className="text-xl font-bold">{results.length} result(s) found</h2>
              {results.map(record => {
                const product = getProductByModelName(record.modelName);
                return (
                  <Card key={record.vinPrefix}>
                    <CardContent className="p-4 flex items-center gap-4">
                      {product && (
                        <div className="w-24 h-24 bg-background rounded-lg p-2 flex-shrink-0">
                          <Image 
                            src={product.hero.url}
                            alt={product.hero.alt}
                            width={100}
                            height={100}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      <div className="flex-grow">
                        <h3 className="font-bold text-lg">{record.modelName}</h3>
                        <p className="text-sm text-muted-foreground">
                          <strong>Year:</strong> {record.year} | <strong>Model Code:</strong> {record.modelCode}
                        </p>
                      </div>
                      {product && (
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/products/${product.handle}`}>
                            View Product <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold">No matching records found</h3>
              <p className="text-muted-foreground mt-2">
                Please check the VIN prefix and try again.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}