
import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { Footer } from "@/components/landing/footer";
import dynamic from "next/dynamic";

const CategoryGrid = dynamic(() => import('@/components/landing/category-grid').then(m => m.CategoryGrid));
const CollectionSection = dynamic(() => import('@/components/landing/collection-section').then(m => m.CollectionSection));
const BespokeSection = dynamic(() => import('@/components/landing/bespoke-section').then(m => m.BespokeSection));
const TestimonialsSection = dynamic(() => import('@/components/landing/testimonials-section').then(m => m.TestimonialsSection));
const CraftSection = dynamic(() => import('@/components/landing/craft-section').then(m => m.CraftSection));
const FaqSection = dynamic(() => import('@/components/landing/faq-section').then(m => m.FaqSection));
const NewsletterSection = dynamic(() => import('@/components/landing/newsletter-section').then(m => m.NewsletterSection));


export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh text-foreground bg-stone-100">
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
