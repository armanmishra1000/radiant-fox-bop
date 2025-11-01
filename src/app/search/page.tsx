import * as React from "react";
import type { Metadata } from "next";
import { SearchResults } from "@/components/search-results";

export const metadata: Metadata = {
  title: "Search Results | Gapuchee Demo",
  description: "Find the perfect bike, ATV, or part.",
};

// Using React.Suspense is a good practice when using searchParams
// It allows the rest of the page to stream while the params are read.
export default function SearchPage() {
  return (
    <React.Suspense>
      <SearchResults />
    </React.Suspense>
  );
}