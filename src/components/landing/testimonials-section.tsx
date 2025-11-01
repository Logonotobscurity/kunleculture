import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
    {
      quote: "The bespoke agbada I received from Kunle Couture is a work of art. The fit, fabric, and attention to detail are simply unparalleled.",
      name: "Adeola P.",
      title: "Architect",
      image: PlaceHolderImages.find(p => p.id === 'editorial-1'),
    },
    {
      quote: "I've never felt more confident than in my Kunle Couture suit. It commands respect and admiration wherever I go. The entire process was a luxury experience.",
      name: "David C.",
      title: "Barrister",
      image: PlaceHolderImages.find(p => p.id === 'editorial-4'),
    },
    {
      quote: "Request Quote",
      name: "Michael B.",
      title: "Art Collector",
      image: PlaceHolderImages.find(p => p.id === 'collection-3'),
    },
     {
      quote: "The team's craftsmanship is second to none. I commissioned a piece for my wedding and it was the star of the show. Highly recommended.",
      name: "Samuel E.",
      title: "Groom",
      image: PlaceHolderImages.find(p => p.id === 'hero-background'),
    },
    {
      quote: "Request Quote",
      name: "Tunde A.",
      title: "CEO",
      image: PlaceHolderImages.find(p => p.id === 'editorial-2'),
    }
]

export function TestimonialsSection() {
    return (
        <section className="w-full py-16 md:py-24 bg-editorial-section overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                    <div className="max-w-xl">
                        <h2 className="text-h3-mobile md:text-h3-desktop font-sans font-semibold text-foreground">
                            This experience actually changes lives. Don’t just take it from us.
                        </h2>
                    </div>
                    <Button size="lg" variant="outline" className="rounded-full shrink-0">
                        See more reviews
                    </Button>
                </div>
                <div className="flex overflow-x-auto space-x-6 pb-8 -mx-4 px-4">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex-shrink-0 w-[80vw] md:w-[30vw]">
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
                                    <blockquote className="text-lg font-medium text-foreground mb-4">
                                        “{testimonial.quote}”
                                    </blockquote>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-pink-900 rounded-full shadow-[0_0_12px_3px] shadow-pink-900/50"></div>
                                        <p className="font-semibold uppercase tracking-wide text-sm">
                                            {testimonial.name}, <span className="text-muted-foreground">{testimonial.title}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
