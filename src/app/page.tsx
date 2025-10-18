import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";
import Link from "next/link";

export default function Home() {
  const featuredProducts = products.slice(0, 3); // Show first 3 products as featured

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full bg-bg-dark text-white flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {/* Placeholder for background image/video */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-20">
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-wider">
              Engineered for the Dirt
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Discover our range of high-performance dirt bikes, pit bikes, and ATVs built to conquer any terrain.
            </p>
            <div className="mt-8 flex gap-4">
              <Button size="lg" className="bg-accent text-black hover:bg-accent-600">
                Explore Bikes <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black">
                Book a Test Ride
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bikes Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">Featured Bikes</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Check out our most popular models, built for performance and reliability.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/collections">
                View All Collections <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}