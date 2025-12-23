import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { cn } from "@/lib/utils";

const testimonials = [
    {
      quote: "The bespoke agbada I received from Kunle Couture is a work of art. The fit, fabric, and attention to detail are simply unparalleled.",
      name: "Adeola P.",
      title: "Architect",
      image: PlaceHolderImages.find(p => p.id === 'editorial-1'),
    },
    {
      quote: "Request Quote",
      name: "",
      title: "",
      image: PlaceHolderImages.find(p => p.id === 'editorial-4'),
    },
    {
      quote: "Request Quote",
      name: "",
      title: "",
      image: PlaceHolderImages.find(p => p.id === 'collection-3'),
    },
    {
        quote: "Explore Bespoke",
        name: "Custom Tailoring",
        title: "Your vision, our craftsmanship.",
        image: PlaceHolderImages.find(p => p.id === 'hero-background'),
        isCta: true,
        href: "#"
    },
    {
        quote: "View Lookbook",
        name: "Inspiration Gallery",
        title: "See the latest collection.",
        image: PlaceHolderImages.find(p => p.id === 'editorial-2'),
        isCta: true,
        href: "#"
    }
]

export function TestimonialsSection() {
    return (
        <section className="w-full py-16 md:py-24 overflow-hidden" aria-labelledby="testimonials-heading">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                    <div className="max-w-xl">
                        <h2 id="testimonials-heading" className="text-h3-mobile md:text-h3-desktop font-bold font-sans">
                            This experience actually changes lives. Don’t just take it from us.
                        </h2>
                    </div>
                    <Button size="lg" variant="outline" className="rounded-full shrink-0 border-yellow-900 text-yellow-900 hover:bg-yellow-900/10">
                        See more reviews
                    </Button>
                </div>
                <div className="flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={cn("flex-shrink-0 snap-center w-[90%] sm:w-[45%] md:w-[30%]")}>
                             {testimonial.isCta ? (
                                 <Link href={testimonial.href || '#'} className="block h-full group">
                                    <div className="relative flex flex-col items-center justify-center text-center w-full h-full aspect-[4/5] rounded-lg overflow-hidden shadow-large bg-black/30 p-8 text-white">
                                        {testimonial.image && (
                                            <Image
                                                src={testimonial.image.imageUrl}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                data-ai-hint={testimonial.image.imageHint}
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors"></div>
                                        <div className="relative z-10">
                                            <h3 className="text-3xl font-bold font-sans">{testimonial.quote}</h3>
                                            <p className="mt-2 text-white/80">{testimonial.title}</p>
                                        </div>
                                    </div>
                                </Link>
                             ) : (
                                <div className="flex flex-col h-full">
                                    <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden mb-4 shadow-large">
                                        {testimonial.image && (
                                            <Image
                                                src={testimonial.image.imageUrl}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                                data-ai-hint={testimonial.image.imageHint}
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <blockquote className="text-lg md:text-xl font-medium mb-4">
                                            “{testimonial.quote}”
                                        </blockquote>
                                        {testimonial.name && (
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 bg-pink-900 rounded-full shadow-[0_0_12px_3px] shadow-pink-900/50" aria-hidden="true"></div>
                                            <p className="font-semibold uppercase tracking-wide text-sm">
                                                {testimonial.name}{testimonial.title && ", "}
                                                <span className="text-muted-foreground">{testimonial.title}</span>
                                            </p>
                                        </div>
                                        )}
                                    </div>
                                </div>
                             )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
