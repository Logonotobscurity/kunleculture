import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { FaqSection } from "@/components/landing/faq-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-[57px]">
        <HeroSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
