import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AnimatedText } from "./animated-text";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-background");

  return (
    <section className="relative h-dvh min-h-[600px] w-full flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-hero-overlay"></div>
      <div className="relative z-10 flex flex-col items-center p-4">
        <h1 className="font-sans font-semibold text-h1-mobile md:text-h1-desktop text-white leading-tight drop-shadow-lg">
          Elegance, Redefined.
        </h1>
        <div className="my-4">
            <AnimatedText />
        </div>
        <p className="max-w-2xl text-lg md:text-xl text-white/90 mb-8 drop-shadow-md">
          Fusing the artistry of traditional African tailoring with modern design sensibilities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-white text-primary hover:bg-stone-200 rounded-full shadow-large scale-100 hover:scale-105 transition-transform duration-200">
            Explore Collection
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10 hover:text-white rounded-full bg-transparent backdrop-blur-sm">
            Book Bespoke
          </Button>
        </div>
      </div>
    </section>
  );
}
