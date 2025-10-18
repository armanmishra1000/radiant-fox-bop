"use client";

import * as React from "react";
import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import { GalleryLightbox } from "@/components/gallery-lightbox";

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase">Gallery</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Lifestyle and product photos from the track, trail, and beyond.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedIndex(index)}
              className="group aspect-square relative overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>
      </div>
      
      <GalleryLightbox
        images={galleryImages}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onSelectIndex={setSelectedIndex}
      />
    </>
  );
}