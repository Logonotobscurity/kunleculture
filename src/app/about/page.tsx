import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-h1-mobile md:text-h1-desktop font-sans font-semibold text-foreground">
                About Kunle Couture
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Discover the story, craft, and passion behind our brand.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
