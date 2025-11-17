"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animationClassName?: string;
  delay?: number;
  threshold?: number;
}

// Animation variants for common scroll animations
const variants: Variants = {
  hidden: { 
    opacity: 0,
    y: 30
  },
  visible: { 
    opacity: 1,
    y: 0
  }
};

export function AnimateOnScroll({
  children,
  className,
  animationClassName = "",
  delay = 0,
  threshold = 0.1,
  ...props
}: AnimateOnScrollProps) {
  // Convert threshold (0-1) to amount (0-1) for Framer Motion
  // Default threshold 0.1 means 10% of element needs to be visible
  const amount = Math.max(0.1, Math.min(1, threshold));

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        amount: amount,
        margin: "-50px 0px -50px 0px" // Start animation 50px before element enters viewport
      }}
      transition={{
        duration: 0.7,
        delay: delay / 1000, // Convert ms to seconds
        ease: "easeOut"
      }}
      variants={variants}
      className={cn(
        animationClassName,
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
