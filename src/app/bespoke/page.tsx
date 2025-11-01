
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, PencilLine, Ruler, Scissors, Shirt } from "lucide-react";
import { BespokeSection } from "@/components/landing/bespoke-section";

const faqs = [
    {
      question: "How long does the bespoke process take?",
      answer: "From initial consultation to final delivery, the bespoke journey typically takes 8-12 weeks. This timeline allows for meticulous craftsmanship, fabric sourcing, and multiple fittings to ensure a perfect garment."
    },
    {
      question: "Do I need an appointment for a consultation?",
      answer: "Yes, all bespoke services begin with a private consultation. This ensures you have our undivided attention to discuss your vision. You can book an appointment through our website or by contacting our studio directly."
    },
    {
      question: "What is the price range for a bespoke suit?",
      answer: "The price of a bespoke suit varies depending on fabric selection, complexity of the design, and embellishments. Our suits start at approximately $2,500. We provide a detailed quote after your initial consultation."
    },
    {
      question: "Can you create garments other than suits?",
      answer: "Absolutely. While we are renowned for our suits and agbadas, we can create a wide range of bespoke garments, including trousers, shirts, coats, and traditional ensembles. "
    }
  ];

export default function BespokePage() {
  const bespokeHeroImage = PlaceHolderImages.find((p) => p.id === "category-bespoke");
  
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center text-white overflow-hidden">
            {bespokeHeroImage && (
                <Image
                src={bespokeHeroImage.imageUrl}
                alt={bespokeHeroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={bespokeHeroImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-background-texture opacity-30"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0px_0px,rgba(0,0,0,0.15),rgba(0,0,0,0))]" />
            <div className="relative z-10 flex flex-col items-center p-4">
                <h1 className="text-h1-mobile md:text-h1-desktop font-sans font-semibold text-amber-300 drop-shadow-lg">
                    The Art of You
                </h1>
                <p className="mt-4 text-lg md:text-xl text-stone-900 max-w-3xl">
                    Experience the pinnacle of personalization with a Kunle Couture bespoke garment, crafted exclusively for your body, style, and story.
                </p>
                 <Button size="lg" className="mt-8 rounded-full bg-white text-black hover:bg-stone-200 shadow-large px-10">
                    Book a Consultation
                </Button>
            </div>
        </section>

        {/* Process Section */}
        <BespokeSection />
        
        {/* Why Bespoke Section */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-h3-mobile md:text-h3-desktop font-sans font-semibold text-foreground">
                        Why Choose Bespoke?
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        A bespoke garment is more than just clothing; it's an investment in yourself. It's about a perfect fit, unparalleled comfort, and a design that is uniquely yours.
                    </p>
                </div>
                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    <div className="text-center p-6 border rounded-lg shadow-subtle">
                        <Ruler className="w-12 h-12 mx-auto text-primary mb-4"/>
                        <h3 className="text-xl font-bold mb-2">Perfect Fit</h3>
                        <p className="text-muted-foreground">Crafted to your exact measurements, a bespoke garment moves with you and fits like a second skin.</p>
                    </div>
                    <div className="text-center p-6 border rounded-lg shadow-subtle">
                        <Shirt className="w-12 h-12 mx-auto text-primary mb-4"/>
                        <h3 className="text-xl font-bold mb-2">Exclusive Design</h3>
                        <p className="text-muted-foreground">From lapel style to button choice, every detail is chosen by you, creating a truly one-of-a-kind piece.</p>
                    </div>
                    <div className="text-center p-6 border rounded-lg shadow-subtle">
                        <Check className="w-12 h-12 mx-auto text-primary mb-4"/>
                        <h3 className="text-xl font-bold mb-2">Lasting Quality</h3>
                        <p className="text-muted-foreground">Using the finest materials and construction techniques, your garment is built to last a lifetime.</p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* FAQ Section */}
        <section className="w-full py-16 md:py-24 bg-muted">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                 <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-h3-mobile md:text-h3-desktop font-sans font-semibold text-foreground">
                        Frequently Asked Questions
                    </h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left text-xl font-semibold hover:no-underline text-foreground">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base md:text-lg text-muted-foreground pt-2 pr-8">
                            {faq.answer}
                        </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
