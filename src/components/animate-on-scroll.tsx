"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  animationClassName?: string;
  delay?: number;
  threshold?: number;
}

export function AnimateOnScroll({
  children,
  className,
  animationClassName = "animate-in fade-in slide-in-from-bottom-8 duration-700",
  delay = 0,
  threshold = 0.1,
  ...props
}: AnimateOnScrollProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0", // Start hidden
        isIntersecting && `opacity-100 ${animationClassName}`,
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}