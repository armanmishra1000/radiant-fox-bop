"use client";

import * as React from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/data/gallery";

interface GalleryLightboxProps {
  images: GalleryImage[];
  selectedIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function GalleryLightbox({
  images,
  selectedIndex,
  onClose,
  onSelectIndex,
}: GalleryLightboxProps) {
  const isOpen = selectedIndex !== null;

  const handlePrevious = React.useCallback(() => {
    if (selectedIndex !== null && selectedIndex > 0) {
      onSelectIndex(selectedIndex - 1);
    }
  }, [selectedIndex, onSelectIndex]);

  const handleNext = React.useCallback(() => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      onSelectIndex(selectedIndex + 1);
    }
  }, [selectedIndex, images.length, onSelectIndex]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handlePrevious, handleNext]);

  if (!isOpen) {
    return null;
  }

  const selectedImage = images[selectedIndex];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-6xl w-full p-0 bg-transparent border-0 shadow-none flex items-center justify-center focus:outline-none">
        <DialogHeader className="sr-only">
          <DialogTitle>Image Lightbox</DialogTitle>
        </DialogHeader>
        <div className="relative w-full h-full">
          <Image
            key={selectedImage.id}
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={1600}
            height={1200}
            className="w-auto h-auto max-w-full max-h-[90vh] object-contain animate-in fade-in-50"
          />
          
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
            disabled={selectedIndex === 0}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70 hover:text-white disabled:opacity-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            disabled={selectedIndex === images.length - 1}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70 hover:text-white disabled:opacity-20"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}