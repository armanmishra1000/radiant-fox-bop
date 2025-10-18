import { CategoryPage } from "@/components/category-page";
import { products } from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pit Bikes | Thumpstar Demo",
  description: "Discover our range of fun and agile pit bikes.",
};

const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Pit Bikes" }
];

export default function PitBikePage() {
  const pitBikes = products.filter((p) => p.family === 'pit-bike');

  return (
    <CategoryPage
      title="Pit Bikes"
      description="Perfect for backyard tracks and tight trails, our pit bikes deliver big fun in a compact package. Explore models for all ages and skill levels."
      products={pitBikes}
      breadcrumbs={breadcrumbs}
    />
  );
}