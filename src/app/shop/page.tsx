
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { CollectionSection } from "@/components/landing/collection-section";
import { Metadata } from "next";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";

export const metadata: Metadata = {
  title: "Ready-to-Wear Collection",
  description: "Explore our curated collections of ready-to-wear garments, including agbadas, suits, and tunics, crafted with the same precision and passion as our bespoke pieces.",
};

const shopWords = ["Ready-to-Wear", "Full Collection", "Shop Now", "Explore Style"];


export default function ShopPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-stone-100">
      <Navbar />
      <main className="flex-1">
        <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center overflow-hidden">
             <div className="relative z-10 flex flex-col items-center p-4 text-white">
                <ParticleTextEffect words={shopWords} />
            </div>
        </section>
        
        <div className="container mx-auto px-4 md:px-6">
            <div className="w-full">
                 <div className="text-center max-w-3xl mx-auto py-12">
                  <h1 className="text-h1-mobile md:text-h1-desktop font-sans font-semibold">
                    Ready-to-Wear
                  </h1>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Explore our curated collections of ready-to-wear garments, crafted with the same precision and passion as our bespoke pieces.
                  </p>
                </div>
                <CollectionSection />
            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
