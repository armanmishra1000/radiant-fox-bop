import { CategoryPage } from "@/components/category-page";
import { products } from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ATVs | Gapuchee Demo",
  description: "Browse our selection of rugged and reliable ATVs.",
};

const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "ATVs" }
];

export default function ATVPage() {
  const atvs = products.filter((p) => p.family === 'atv');

  return (
    <CategoryPage
      title="ATVs"
      description="Whether for work or play, our ATVs are designed to handle the toughest jobs and most challenging terrain. Find the right quad for your needs."
      products={atvs}
      breadcrumbs={breadcrumbs}
    />
  );
}