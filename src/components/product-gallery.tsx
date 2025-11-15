"use client";

import * as React from "react";
import Image from "next/image";
import type { Media } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: Media[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = React.useState(images[0] || null);

  if (!selectedImage) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-[4/3] bg-background rounded-2xl p-4 overflow-hidden">
        <Image
          key={selectedImage.url}
          src={selectedImage.url}
          alt={selectedImage.alt}
          width={800}
          height={600}
          className="w-full h-full object-contain animate-in fade-in-50 duration-300"
        />
      </div>
      <div className="grid grid-cols-5 gap-2">
        {images.map((image) => (
          <button
            key={image.url}
            onClick={() => setSelectedImage(image)}
            className={cn(
              "aspect-square rounded-lg bg-background p-1 overflow-hidden transition-all",
              "ring-2 ring-transparent hover:ring-primary focus:outline-none focus:ring-primary",
              selectedImage.url === image.url && "ring-primary"
            )}
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={150}
              height={150}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}