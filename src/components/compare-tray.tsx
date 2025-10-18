"use client";

import Link from "next/link";
import Image from "next/image";
import { useCompare } from "@/context/compare-context";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function CompareTray() {
  const { compareItems, removeFromCompare, clearCompare } = useCompare();

  if (compareItems.length === 0) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl"
      >
        <div className="mx-4 p-4 bg-card border rounded-2xl shadow-2xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-bold text-lg">Compare ({compareItems.length}/4)</span>
            <div className="flex items-center gap-2">
              {compareItems.map((item) => (
                <div key={item.id} className="relative group">
                  <div className="w-12 h-12 bg-bg-dark rounded-md p-1">
                    <Image
                      src={item.hero.url}
                      alt={item.hero.alt}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <button
                    onClick={() => removeFromCompare(item.id)}
                    className="absolute -top-1 -right-1 h-5 w-5 bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label={`Remove ${item.title}`}
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={clearCompare}>Clear</Button>
            <Button asChild className="bg-accent text-black hover:bg-accent-600">
              <Link href="/compare">Compare Now</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}