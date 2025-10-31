import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AnimatedText } from "./animated-text";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-background");

  return (
    <section className="relative h-[60dvh] min-h-[500px] w-full flex items-center justify-center text-center bg-secondary">
      <div className="relative z-10 flex flex-col items-center p-4">
        <h1 className="font-bold text-4xl md:text-6xl text-foreground leading-tight drop-shadow-sm">
          Powering Business Success
        </h1>
        <div className="my-4">
            <AnimatedText />
        </div>
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-8">
          We provide innovative solutions for modern B2B challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
