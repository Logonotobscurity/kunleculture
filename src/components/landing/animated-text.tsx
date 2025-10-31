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
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = categories[currentIndex];
      if (isDeleting) {
        if (displayedText.length > 0) {
          setDisplayedText((prev) => prev.substring(0, prev.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % categories.length);
        }
      } else {
        if (displayedText.length < currentText.length) {
          setDisplayedText((prev) => currentText.substring(0, prev.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentIndex]);

  return (
    <h1 className="text-hero-mobile md:text-hero-desktop font-bold text-white leading-tight drop-shadow-lg">
      {displayedText}
      <span className="animate-ping">|</span>
    </h1>
  );
}
