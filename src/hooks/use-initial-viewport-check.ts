"use client";

import * as React from "react";

/**
 * Custom hook to check if an element is already in the viewport on initial render
 * This helps prevent flickering on page reload for scroll animations
 */
export function useInitialViewportCheck(ref: React.RefObject<HTMLElement | null>) {
  const [isInView, setIsInView] = React.useState<boolean>(false);
  
  React.useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    // Get element's position relative to viewport
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    
    // Check if element is in viewport (with some margin to account for partial visibility)
    const inViewport = (
      rect.top >= -rect.height * 0.5 && // Element starts above viewport but consider half height as visible
      rect.left >= -rect.width * 0.5 &&
      rect.bottom <= windowHeight + rect.height * 0.5 &&
      rect.right <= windowWidth + rect.width * 0.5
    );
    
    setIsInView(inViewport);
  }, [ref]);
  
  return isInView;
}
