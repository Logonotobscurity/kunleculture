import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AnimatedText } from "./animated-text";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-background");

  return (
    <section className="w-full">
        <div className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center text-white overflow-hidden shadow-large">
            {heroImage && (
                <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-hero-overlay" />
            <div className="relative z-10 flex flex-col items-center p-4">
                <div className="h-[120px] md:h-[240px] flex items-center">
                    <AnimatedText />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="bg-white text-black hover:bg-stone-200 rounded-full shadow-large px-16 py-2.5 md:py-3.5 text-base md:text-xl font-semibold border border-white hover:border-fuchsia-900">
                    Explore Collection
                </Button>
                <Button size="lg" className="rounded-full bg-pink-900 text-white hover:bg-white hover:text-pink-900 shadow-large px-16 py-2.5 md:py-3.5 text-base md:text-xl font-semibold border border-pink-900">
                    Book Bespoke
                </Button>
                </div>
            </div>
        </div>
    </section>
  );
}
