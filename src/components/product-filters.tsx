"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import { Label } from "@/components/ui/label";

interface ProductFiltersProps {
  onSortChange: (value: string) => void;
  onStatusChange: (value: string[]) => void;
}

export function ProductFilters({ onSortChange, onStatusChange }: ProductFiltersProps) {
  return (
    <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4 rounded-lg border bg-card p-4">
      <div className="flex items-center gap-4">
        <Label>Filter by Status:</Label>
        <ToggleGroup
          type="multiple"
          variant="outline"
          onValueChange={onStatusChange}
          aria-label="Filter by status"
        >
          <ToggleGroupItem value="in_stock" aria-label="In Stock">
            In Stock
          </ToggleGroupItem>
          <ToggleGroupItem value="dealer_only" aria-label="Dealer Only">
            Dealer Only
          </ToggleGroupItem>
          <ToggleGroupItem value="sold_out" aria-label="Sold Out">
            Sold Out
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex items-center gap-4">
        <Label htmlFor="sort-by">Sort by:</Label>
        <Select onValueChange={onSortChange} defaultValue="default">
          <SelectTrigger id="sort-by" className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="name-asc">Name: A to Z</SelectItem>
            <SelectItem value="name-desc">Name: Z to A</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}