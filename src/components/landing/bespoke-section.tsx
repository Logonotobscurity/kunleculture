import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PenLine, Ruler, Scissors, Shirt } from "lucide-react";

const processSteps = [
  {
    icon: <PenLine className="w-8 h-8 text-primary" />,
    title: "Consultation",
    description:
      "Begin with a personal consultation to discuss your vision, style, and fabric preferences.",
  },
  {
    icon: <Ruler className="w-8 h-8 text-primary" />,
    title: "Measurements",
    description:
      "Our expert tailors take over 30 precise measurements to ensure a flawless fit.",
  },
  {
    icon: <Scissors className="w-8 h-8 text-primary" />,
    title: "Fitting",
    description:
      "Attend one or more fittings to refine the garment's shape and details to perfection.",
  },
  {
    icon: <Shirt className="w-8 h-8 text-primary" />,
    title: "Finish",
    description:
      "Your final, handcrafted piece is delivered, embodying your unique style and our commitment to quality.",
  },
];

const featureCards = [
    {
      title: "Fabric Sourcing",
      description: "We travel the world to source the most exquisite and unique fabrics for your one-of-a-kind garment.",
    },
    {
      title: "Expert Tailors",
      description: "Our artisans possess decades of experience in traditional and modern tailoring techniques.",
    },
    {
      title: "Measurement Precision",
      description: "We utilize both classic methods and modern technology to achieve unparalleled accuracy in fit.",
    },
]

export function BespokeSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-tailoring-process">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-h3-mobile md:text-h3-desktop font-sans font-semibold text-foreground">
            The Bespoke & Tailoring Journey
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experience the art of true craftsmanship with a garment made exclusively for you.
          </p>
        </div>

        <div className="mt-12 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 hidden md:block"></div>
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step, index) => (
                    <div key={step.title} className="flex flex-col items-center text-center">
                        <div className="bg-background rounded-full p-4 shadow-subtle border border-primary/10 mb-4">
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{`Step ${index + 1}: ${step.title}`}</h3>
                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
            {featureCards.map((feature) => (
                <Card key={feature.title} className="bg-background/50 backdrop-blur-sm border-white-opacity-20 shadow-subtle text-center">
                    <CardHeader>
                        <CardTitle className="text-2xl font-semibold text-foreground">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>

        <div className="mt-16 text-center flex gap-4 justify-center">
          <Button size="lg" className="rounded-full shadow-large scale-100 hover:scale-105 transition-transform duration-200">
            Book Appointment
          </Button>
          <Button size="lg" variant="outline" className="rounded-full bg-transparent backdrop-blur-sm">
            How Bespoke Works
          </Button>
        </div>
      </div>
    </section>
  );
}
