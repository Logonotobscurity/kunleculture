"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const categories = [
  "Bespoke Agbadas",
  "Tailoring Services",
  "Ready-to-Wear",
  "Seasonal Collection",
  "Accessories",
];

export function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 2400); // 12s loop / 5 items

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-12 md:h-16 w-full max-w-md overflow-hidden">
      {categories.map((category, index) => (
        <span
          key={category}
          className={cn(
            "absolute w-full text-center transition-all duration-700 ease-in-out",
            "text-accent",
            index === currentIndex
              ? "opacity-100 translate-y-0"
              : "opacity-0",
            index === (currentIndex - 1 + categories.length) % categories.length
              ? "-translate-y-full"
              : "translate-y-full"
          )}
        >
          {category}
        </span>
      ))}
    </div>
  );
}
