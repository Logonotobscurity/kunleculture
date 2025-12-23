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
        <section className="w-full" aria-labelledby="shop-hero-title">
            <div className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center text-center text-white overflow-hidden shadow-large bg-stone-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0px_0px,rgba(0,0,0,0.15),rgba(0,0,0,0))]"/>
                <div className="relative z-10 flex flex-col items-center p-4">
                    <div className="h-[240px] md:h-[300px] flex items-center justify-center">
                        <ParticleTextEffect words={shopWords} />
                        <h1 id="shop-hero-title" className="sr-only">Ready to Wear Collection</h1>
                    </div>
                </div>
            </div>
        </section>
        
        <div className="container mx-auto px-4 md:px-6">
            <div className="w-full">
                <CollectionSection />
            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
