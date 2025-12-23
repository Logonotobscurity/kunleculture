
import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { Footer } from "@/components/landing/footer";
import { AnimatedSections } from "@/components/landing/animated-sections";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh text-foreground bg-stone-100">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AnimatedSections />
      </main>
      <Footer />
    </div>
  );
}
