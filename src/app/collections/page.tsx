import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections | Thumpstar Demo",
  description: "Explore our collections of Dirt Bikes, Pit Bikes, ATVs, and Parts.",
};

const collectionsData = [
  {
    name: "Dirt Bikes",
    href: "/dirt-bike",
    imageSrc: "/placeholders/tfx250-1.webp",
    imageAlt: "A high-performance dirt bike on a trail.",
    description: "From trail riding to motocross, our dirt bikes are built for the ultimate off-road experience."
  },
  {
    name: "Pit Bikes",
    href: "/pit-bike",
    imageSrc: "/placeholders/tsx140-1.webp",
    imageAlt: "A compact and agile pit bike.",
    description: "Perfect for backyard tracks and tight trails, our pit bikes deliver big fun in a compact package."
  },
  {
    name: "ATVs",
    href: "/atv",
    imageSrc: "/placeholders/atx125-1.webp",
    imageAlt: "A rugged all-terrain vehicle.",
    description: "Whether for work or play, our ATVs are designed to handle the toughest jobs and most challenging terrain."
  },
  {
    name: "Parts",
    href: "/parts",
    imageSrc: "/placeholders/gallery/gallery-2.webp",
    imageAlt: "Close-up of a powersports engine.",
    description: "Find the exact parts for your machine using our VIN lookup tool to keep your vehicle running at peak performance."
  }
];

export default function CollectionsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase">
          Product Collections
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Engineered for performance and built to last. Find the perfect machine for your next adventure.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {collectionsData.map((collection) => (
          <Link href={collection.href} key={collection.name} className="group relative block overflow-hidden rounded-2xl">
            <div className="aspect-[4/3] bg-bg-dark">
              <Image
                src={collection.imageSrc}
                alt={collection.imageAlt}
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="font-heading text-3xl font-bold text-white uppercase">{collection.name}</h2>
              <p className="mt-1 text-sm text-gray-300 max-w-xs">{collection.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}