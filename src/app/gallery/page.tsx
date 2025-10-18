import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Thumpstar Demo",
  description: "Check out photos of our bikes in action and from the community.",
};

export default function GalleryPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase">Gallery</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Lifestyle and product photos from the track, trail, and beyond.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {galleryImages.map((image) => (
          <div key={image.id} className="group aspect-square relative overflow-hidden rounded-2xl">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}