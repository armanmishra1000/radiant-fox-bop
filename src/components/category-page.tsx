import { ProductCard } from "@/components/product-card";
import type { Product } from "@/lib/types";

interface CategoryPageProps {
  title: string;
  description: string;
  products: Product[];
}

export function CategoryPage({ title, description, products }: CategoryPageProps) {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase">{title}</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          {description}
        </p>
      </div>

      {products.length > 0 ? (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}