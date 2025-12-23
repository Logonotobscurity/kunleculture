import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { CollectionSection } from "@/components/landing/collection-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ready-to-Wear Collection",
  description: "Explore our curated collections of ready-to-wear garments, including agbadas, suits, and tunics, crafted with the same precision and passion as our bespoke pieces.",
};

export default function ShopPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="w-full py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-h1-mobile md:text-h1-desktop font-sans font-semibold">
                Ready-to-Wear
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Explore our curated collections of ready-to-wear garments, crafted with the same precision and passion as our bespoke pieces.
              </p>
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
