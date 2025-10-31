import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-sans font-semibold">Join the Kunle Circle</h2>
                <p className="mt-2 text-lg text-primary-foreground/80 max-w-xl">
                    Receive exclusive access to new collections, events, and the world of Kunle Couture.
                </p>
            </div>
            <form className="w-full max-w-md flex flex-col sm:flex-row gap-4">
                <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20 flex-grow rounded-full"
                />
                <Button type="submit" size="lg" className="h-12 bg-white text-primary hover:bg-stone-200 rounded-full shadow-large">
                    Subscribe
                </Button>
            </form>
        </div>
      </div>
    </section>
  );
}
