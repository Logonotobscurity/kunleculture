
import { Button } from "@/components/ui/button";
import { PencilLine, Ruler, Scissors, Shirt } from "lucide-react";
import Link from "next/link";

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

export function BespokeSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-tailoring-process bg-background-texture" aria-labelledby="bespoke-art-heading">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 items-center gap-12">
            <div className="w-full">
                <div className="mb-8 md:mb-0">
                    <span className="block h-0.5 w-20 bg-accent mb-5" aria-hidden="true"></span>
                    <h2 id="bespoke-art-heading" className="text-h3-mobile md:text-h3-desktop font-bold font-sans text-yellow-900">
                        The Art of Bespoke
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-yellow-900/80 max-w-2xl">
                        Experience the art of true craftsmanship with a garment made exclusively for you. Our bespoke service is a journey of collaboration, precision, and personalization.
                    </p>
                </div>
            </div>
            <div className="w-full">
                <div className="grid gap-8 sm:grid-cols-2">
                    {processSteps.map((step) => (
                        <div key={step.title} className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded-full" aria-hidden="true">
                                {step.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-yellow-900">{step.title}</h3>
                                <p className="mt-1 text-yellow-900/80">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="mt-12 flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="rounded-full bg-yellow-900 text-white hover:bg-yellow-700 shadow-large px-8 md:px-10" asChild>
                        <Link href="/quote?product=Bespoke%20Appointment">Book Appointment</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full border-yellow-900 text-yellow-900 hover:bg-yellow-900/10 px-8 md:px-10" asChild>
                        <Link href="/bespoke">How It Works</Link>
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
