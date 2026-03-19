"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimateInViewProps {
  children: React.ReactNode;
  /** Optional: "fade" for opacity only, "fade-up" for opacity + translateY (default) */
  variant?: "fade-up" | "fade";
  /** Root margin for intersection (e.g. "0px 0px -60px 0px" to trigger slightly before fully in view) */
  rootMargin?: string;
  /** Minimum fraction of element visible to trigger (0–1) */
  threshold?: number;
  className?: string;
}

export default function AnimateInView({
  children,
  variant = "fade-up",
  rootMargin = "0px 0px -40px 0px",
  threshold = 0.1,
  className = "",
}: AnimateInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { rootMargin, threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  const baseClass = variant === "fade" ? "animate-in-view-fade-only" : "animate-in-view";
  return (
    <div
      ref={ref}
      className={`${baseClass} ${inView ? "in-view" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
