import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { NewsletterSection } from "@/components/landing/newsletter-section";

export default function AboutPage() {
  const aboutHeroImage = PlaceHolderImages.find((p) => p.id === "about-hero");
  const storyImage = PlaceHolderImages.find((p) => p.id === "category-tailoring");

  const values = [
    "Uncompromising Quality",
    "Heritage-Inspired Innovation",
    "Personalized Expression",
    "Sustainable Craftsmanship",
  ];

  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center overflow-hidden">
            {aboutHeroImage && (
                <Image
                src={aboutHeroImage.imageUrl}
                alt={aboutHeroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={aboutHeroImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 flex flex-col items-center p-4">
                <h1 className="text-h1-mobile md:text-h1-desktop font-sans font-semibold text-amber-300 drop-shadow-lg">
                    Woven with Purpose
                </h1>
                <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl">
                    Discover the philosophy, artistry, and heritage that define every stitch of Kunle Couture.
                </p>
            </div>
        </section>

        {/* Story Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="block h-0.5 w-20 bg-accent"></span>
                <h2 className="text-h3-mobile md:text-h3-desktop font-sans font-semibold">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground">
                  Founded on the principles of celebrating African narratives through contemporary menswear, Kunle Couture began as a single sewing machine and a powerful vision. Our founder, Kunle, sought to redefine luxury by blending the rich, sartorial traditions of his heritage with the clean, modern lines of global fashion.
                </p>
                <p className="text-muted-foreground">
                  Each garment tells a story—of intricate craftsmanship passed down through generations, of vibrant cultures, and of the modern man who wears his identity with pride. We are more than a brand; we are a movement dedicated to style, substance, and soul.
                </p>
                <Button size="lg" variant="outline" className="rounded-full border-yellow-900 text-yellow-900 hover:bg-yellow-900/10">
                  Meet the Founder
                </Button>
              </div>
              <div>
                {storyImage && (
                    <Image
                        src={storyImage.imageUrl}
                        alt={storyImage.description}
                        width={600}
                        height={700}
                        className="object-cover w-full h-auto shadow-large rounded-lg"
                        data-ai-hint={storyImage.imageHint}
                    />
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Values Section */}
        <section className="w-full py-16 md:py-24 bg-stone-100/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-h3-mobile md:text-h3-desktop font-sans font-semibold">
                        Our Mission
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        To empower self-expression by crafting luxurious, heritage-rich garments that honor tradition while celebrating individuality. We are committed to exceptional quality, sustainable practices, and telling authentic stories through design.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {values.map((value) => (
                        <div key={value} className="flex flex-col items-center">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground mb-4">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="font-semibold text-lg">{value}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <NewsletterSection />

      </main>
      <Footer />
    </div>
  );
}
