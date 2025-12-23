
import { Button } from "@/components/ui/button";
import { AnimatedText } from "./animated-text";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="w-full">
        <div className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center text-white overflow-hidden shadow-large">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0px_0px,rgba(0,0,0,0.15),rgba(0,0,0,0))]"/>
            <div className="relative z-10 flex flex-col items-center p-4">
                <div className="h-[120px] md:h-[240px] flex items-center">
                    <AnimatedText />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="bg-yellow-900 text-white hover:bg-yellow-700 rounded-full shadow-large px-8 sm:px-12 md:px-16 py-2.5 md:py-3.5 text-base md:text-xl font-semibold" asChild>
                    <Link href="/shop">Explore Collection</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-yellow-900 text-yellow-900 hover:bg-yellow-900/10 shadow-large px-8 sm:px-12 md:px-16 py-2.5 md:py-3.5 text-base md:text-xl font-semibold" asChild>
                    <Link href="/quote?product=Bespoke%20Service">Book Bespoke</Link>
                </Button>
                </div>
            </div>
        </div>
    </section>
  );
}
