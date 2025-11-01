"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { vinRecords, type VinRecord } from "@/data/vin";
import { parts, type Part } from "@/data/parts";
import { Search, Download } from "lucide-react";

export default function PartsPage() {
  const [vin, setVin] = React.useState("");
  const [foundRecord, setFoundRecord] = React.useState<VinRecord | null>(null);
  const [foundParts, setFoundParts] = React.useState<Part[]>([]);
  const [searched, setSearched] = React.useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    const record = vinRecords.find(r => vin.startsWith(r.vinPrefix));
    if (record) {
      setFoundRecord(record);
      setFoundParts(parts.filter(p => p.modelCode === record.modelCode));
    } else {
      setFoundRecord(null);
      setFoundParts([]);
    }
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase">
          Parts Lookup
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Enter your Vehicle Identification Number (VIN) to find the exact parts for your machine.
        </p>
      </div>

      <div className="mt-12 max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>VIN Search</CardTitle>
            <CardDescription>Enter the full 17-digit VIN.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                value={vin}
                onChange={(e) => setVin(e.target.value.toUpperCase())}
                placeholder="Enter your VIN..."
                className="flex-grow"
              />
              <Button type="submit">
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
            </form>
            <div className="text-xs text-muted-foreground mt-2">
              Demo VINs:{" "}
              <button onClick={() => setVin('ABC123TSX140')} className="underline">ABC123TSX140</button>,{" "}
              <button onClick={() => setVin('DEF456TFX250')} className="underline">DEF456TFX250</button>
            </div>
          </CardContent>
        </Card>
      </div>

      {searched && (
        <div className="mt-12 max-w-4xl mx-auto">
          {foundRecord ? (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Results for: {foundRecord.modelName}</CardTitle>
                    <CardDescription>Year: {foundRecord.year} | VIN Prefix: {foundRecord.vinPrefix}</CardDescription>
                  </div>
                  <Button variant="outline" disabled>
                    <Download className="mr-2 h-4 w-4" /> Download PDF (Demo)
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Part Name</TableHead>
                      <TableHead>SKU</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {foundParts.map(part => (
                      <TableRow key={part.id}>
                        <TableCell className="font-medium">{part.name}</TableCell>
                        <TableCell>{part.sku}</TableCell>
                        <TableCell className="text-right">₹{part.price.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold">No matching model found</h3>
              <p className="text-muted-foreground mt-2">
                Please check the VIN and try again. If the issue persists, contact support.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}