import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
    {
      quote: "The bespoke agbada I received from Kunle Couture is a work of art. The fit, fabric, and attention to detail are simply unparalleled. It's more than clothing; it's a statement.",
      name: "Adeola P.",
      location: "Lagos, Nigeria"
    },
    {
      quote: "I've never felt more confident than in my Kunle Couture suit. It commands respect and admiration wherever I go. The entire process was a luxury experience.",
      name: "David C.",
      location: "London, UK"
    },
    {
      quote: "As a collector of fine tailoring, Kunle Couture stands out. They masterfully blend African heritage with a sharp, contemporary aesthetic. Truly world-class.",
      name: "Michael B.",
      location: "New York, USA"
    }
]

const pressLogos = [
    "GQ", "Vogue", "Men's Health", "Esquire", "Financial Times"
]

export function TestimonialsSection() {
    return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-h3-mobile md:text-h3-desktop font-sans font-semibold text-foreground">
            Voices of our Clientele
          </h2>
        </div>

        <Carousel
          opts={{ align: "start", loop: true, }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <Card className="h-full border-0 shadow-none bg-transparent">
                    <CardContent className="flex h-full flex-col justify-center text-center p-6">
                        <p className="text-lg font-medium text-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
                        <p className="mt-4 font-semibold text-primary">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="mt-16">
            <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">As Seen In</h3>
            <div className="relative">
                <div className="overflow-hidden">
                    <div className="flex justify-center items-center gap-12 md:gap-16">
                        {pressLogos.map((logo) => (
                            <div key={logo} className="text-2xl font-bold text-muted-foreground/60 italic">
                                {logo}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
    )
}
