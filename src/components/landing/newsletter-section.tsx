import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-tailoring-process bg-background-texture" aria-labelledby="newsletter-heading">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/30 shadow-large">
            <div className="text-center lg:text-left">
                <h2 id="newsletter-heading" className="text-3xl md:text-4xl font-sans font-semibold text-yellow-900">Join the Kunle Circle</h2>
                <p className="mt-2 text-lg text-yellow-900/80 max-w-xl">
                    Receive exclusive access to new collections, events, and the world of Kunle Couture.
                </p>
            </div>
            <form className="w-full max-w-md flex flex-col sm:flex-row gap-4">
                <Input
                    type="email"
                    placeholder="Enter your email address"
                    aria-label="Email for newsletter"
                    className="h-12 bg-black/5 border-yellow-900/20 text-yellow-900 placeholder:text-yellow-900/70 focus:bg-black/10 flex-grow rounded-full"
                />
                <Button type="submit" size="lg" className="h-12 bg-yellow-900 text-white hover:bg-yellow-700 rounded-full shadow-large">
                    Subscribe
                </Button>
            </form>
        </div>
      </div>
    </section>
  );
}
