"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { File, Search as SearchIcon } from "lucide-react";
import Fuse from "fuse.js";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { products } from "@/data/products";
import type { Product } from "@/lib/types";
import { Button } from "./ui/button";

const fuse = new Fuse(products, {
  keys: ["title", "family", "handle"],
  threshold: 0.3,
});

export function SearchDialog() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  
  const results = query ? fuse.search(query).map((result) => result.item) : [];

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  const handleSelect = (product: Product) => {
    runCommand(() => {
      router.push(`/products/${product.handle}`);
    });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      runCommand(() => {
        router.push(`/search?q=${encodeURIComponent(query)}`);
      });
    }
  };

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setOpen(true)}
        className="flex h-9 items-center justify-between px-3 text-sm text-muted-foreground lg:w-64"
      >
        <div className="flex items-center gap-2">
          <SearchIcon className="h-4 w-4" />
          <span className="hidden lg:inline">Search...</span>
        </div>
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 lg:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden p-0 shadow-lg">
          <DialogHeader className="sr-only">
            <DialogTitle>Search</DialogTitle>
          </DialogHeader>
          <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:h-5">
            <form onSubmit={handleSearchSubmit}>
              <CommandInput
                placeholder="Search for bikes, ATVs, or parts..."
                value={query}
                onValueChange={setQuery}
              />
            </form>
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              {results.length > 0 && (
                <CommandGroup heading="Products">
                  {results.map((product) => (
                    <CommandItem
                      key={product.id}
                      value={product.title}
                      onSelect={() => handleSelect(product)}
                    >
                      <File className="mr-2 h-4 w-4" />
                      <span>{product.title}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}