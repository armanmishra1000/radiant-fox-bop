import { CategoryPage } from "@/components/category-page";
import { products } from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dirt Bikes | Thumpstar Demo",
  description: "Explore our collection of high-performance dirt bikes.",
};

const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Dirt Bikes" }
];

export default function DirtBikePage() {
  const dirtBikes = products.filter((p) => p.family === 'dirt-bike');

  return (
    <CategoryPage
      title="Dirt Bikes"
      description="From trail riding to motocross, our dirt bikes are built for the ultimate off-road experience. Find the perfect model to match your skill and ambition."
      products={dirtBikes}
      breadcrumbs={breadcrumbs}
    />
  );
}