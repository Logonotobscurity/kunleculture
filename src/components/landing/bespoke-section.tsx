import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PencilLine, Ruler, Scissors, Shirt } from "lucide-react";

const processSteps = [
  {
    icon: <PencilLine className="w-8 h-8 text-yellow-700" />,
    title: "Consultation",
    description:
      "Begin with a personal consultation to discuss your vision, style, and fabric preferences.",
  },
  {
    icon: <Ruler className="w-8 h-8 text-yellow-700" />,
    title: "Measurements",
    description:
      "Our expert tailors take over 30 precise measurements to ensure a flawless fit.",
  },
  {
    icon: <Scissors className="w-8 h-8 text-yellow-700" />,
    title: "Fitting",
    description:
      "Attend one or more fittings to refine the garment's shape and details to perfection.",
  },
  {
    icon: <Shirt className="w-8 h-8 text-yellow-700" />,
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
          <h2 className="text-h3-mobile md:text-h3-desktop font-sans font-semibold text-yellow-900">
            The Art of Bespoke
          </h2>
          <p className="mt-4 text-lg text-yellow-900/80">
            Experience the art of true craftsmanship with a garment made exclusively for you.
          </p>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
                <div key={step.title} className="flex flex-col items-center text-center">
                    <div className="bg-white/50 rounded-full p-4 border border-yellow-900/20 mb-4 shadow-lg">
                        {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-yellow-900">{step.title}</h3>
                    <p className="mt-2 text-yellow-900/80">{step.description}</p>
                </div>
            ))}
        </div>
        
        <div className="mt-16 text-center flex gap-4 justify-center">
          <Button size="lg" className="rounded-full bg-yellow-900 text-white hover:bg-yellow-700 shadow-large">
            Book Appointment
          </Button>
          <Button size="lg" variant="outline" className="rounded-full border-yellow-900 text-yellow-900 hover:bg-yellow-900/10">
            How It Works
          </Button>
        </div>
      </div>
    </section>
  );
}
