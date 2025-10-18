import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

const statusMap = {
  in_stock: { text: "In Stock", className: "bg-green-600 hover:bg-green-600" },
  dealer_only: { text: "Dealer Only", className: "bg-blue-600 hover:bg-blue-600" },
  sold_out: { text: "Sold Out", className: "bg-red-600 hover:bg-red-600" },
};

export function ProductCard({ product }: { product: Product }) {
  const statusInfo = product.status ? statusMap[product.status] : null;

  return (
    <article className="group relative flex flex-col rounded-2xl bg-card shadow-card overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      {statusInfo && (
        <Badge className={`absolute top-4 right-4 z-10 text-white ${statusInfo.className}`}>
          {statusInfo.text}
        </Badge>
      )}
      <Link href={`/products/${product.handle}`} className="block flex flex-col h-full">
        <div className="aspect-[4/3] bg-bg-dark p-4">
          <Image
            src={product.hero.url}
            alt={product.hero.alt}
            width={400}
            height={300}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="font-heading text-lg font-bold text-foreground uppercase">{product.title}</h3>
          {product.engine_cc && <p className="text-sm text-muted-foreground">{product.engine_cc}cc</p>}
          <div className="mt-auto pt-4">
            <div className="flex items-center justify-between pt-4 border-t border-border/20">
                {product.msrp ? (
                <span className="text-xl font-bold text-foreground">${product.msrp.toLocaleString()}</span>
                ) : (
                <span className="text-lg font-medium text-foreground">Request Quote</span>
                )}
                <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-black">
                View
                </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}