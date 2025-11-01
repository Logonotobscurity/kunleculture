import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "How does bespoke ordering work?",
    answer: "Our bespoke process begins with a personal consultation to understand your vision. We then take detailed measurements, create a unique pattern, and craft your garment through a series of fittings to ensure a perfect result."
  },
  {
    question: "What are your measurement/fitting policies?",
    answer: "We require at least one in-person fitting for all bespoke orders to guarantee our standard of quality. Measurements are stored securely for future orders, though we recommend a refresh every two years."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship globally. Shipping costs and times vary depending on the destination. All duties and taxes are the responsibility of the customer."
  },
  {
    question: "How long does a bespoke piece take?",
    answer: "A bespoke piece typically takes 8-12 weeks from the initial consultation to final delivery, depending on fabric availability and fitting schedules."
  },
  {
    question: "What are the care instructions for your garments?",
    answer: "Most of our garments require professional dry cleaning. Specific care instructions are provided on the garment's label and during the final handover."
  }
];

export function FaqSection() {
  return (
    <section className="w-full py-[60.5188px] md:py-[94.0021px] bg-background">
      <div className="container mx-auto px-[18.9121px] md:px-[39.1675px]">
        <div className="flex flex-col md:flex-row gap-[30.2594px] md:gap-[62.6681px]">
          <div className="w-full md:w-1/3">
            <h2 className="text-[30.2594px] md:text-[47.001px] leading-[36.3113px] md:leading-[56.4012px] font-sans font-semibold text-foreground">
              Your Questions, Answered
            </h2>
          </div>
          <div className="w-full md:w-2/3">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-[22.6946px] md:text-[31.334px] leading-[27.2335px] md:leading-[37.6008px] font-semibold hover:no-underline text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-lg text-muted-foreground pt-2 pr-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-8 md:mt-12">
              <Link href="#" className="inline-flex items-center gap-2 font-medium text-primary hover:text-accent">
                See more
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
