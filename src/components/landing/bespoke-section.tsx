import { Button } from "@/components/ui/button";
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

export function BespokeSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-tailoring-process bg-background-texture">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-start gap-x-5">
            <div className="w-full md:max-w-[calc(100%_-_46.5px)]">
                <div className="mb-8 md:mb-0">
                    <span className="block h-0.5 w-20 bg-accent mb-5"></span>
                    <h2 className="text-[36.327px] md:text-[56.0514px] font-bold leading-[34.8739px] md:leading-[56.0514px] tracking-[-0.72px] md:tracking-[-1.4px] font-sans text-yellow-900">
                        The Art of Bespoke
                    </h2>
                    <p className="mt-4 text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-[-0.32px] md:tracking-[-0.4px] text-yellow-900/80 max-w-2xl">
                        Experience the art of true craftsmanship with a garment made exclusively for you. Our bespoke service is a journey of collaboration, precision, and personalization.
                    </p>
                </div>
            </div>
            <div className="w-full">
                <div className="grid gap-8 md:grid-cols-2">
                    {processSteps.map((step) => (
                        <div key={step.title} className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded-full">
                                {step.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-yellow-900">{step.title}</h3>
                                <p className="mt-1 text-yellow-900/80">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="mt-12 flex gap-4">
                    <Button size="lg" className="rounded-full bg-yellow-900 text-white hover:bg-yellow-700 shadow-large px-16 py-2.5 md:py-3.5 text-base md:text-xl">
                        Book Appointment
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full border-yellow-900 text-yellow-900 hover:bg-yellow-900/10 px-16 py-2.5 md:py-3.5 text-base md:text-xl">
                        How It Works
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
