import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { CategoryGrid } from "@/components/landing/category-grid";
import { CollectionSection } from "@/components/landing/collection-section";
import { BespokeSection } from "@/components/landing/bespoke-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { CraftSection } from "@/components/landing/craft-section";
import { FaqSection } from "@/components/landing/faq-section";
import { NewsletterSection } from "@/components/landing/newsletter-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh text-foreground">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CategoryGrid />
        <CollectionSection />
        <BespokeSection />
        <TestimonialsSection />
        <CraftSection />
        <FaqSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
