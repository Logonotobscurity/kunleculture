import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the bespoke ordering work?",
    answer: "Our bespoke process begins with a personal consultation to understand your style. We then take detailed measurements, conduct several fittings, and hand-finish your unique garment. The entire process typically takes 6-8 weeks."
  },
  {
    question: "What are your measurement and fitting policies?",
    answer: "We guarantee a perfect fit. Initial measurements are comprehensive, and we include up to three fittings in the price of a bespoke piece to ensure every detail is correct. For ready-to-wear, we offer in-house alterations."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide via trusted carriers like DHL and FedEx. Shipping costs and delivery times vary by destination. All applicable duties and taxes are the responsibility of the customer."
  },
  {
    question: "How long does a bespoke piece take to create?",
    answer: "A fully bespoke garment, such as an agbada or suit, typically takes 6 to 8 weeks from the initial consultation to final delivery. This timeline allows for fabric sourcing, meticulous construction, and multiple fittings."
  },
  {
    question: "What are the care instructions for your garments?",
    answer: "Most of our garments, especially those made from wool, silk, or intricate weaves, are dry clean only. We provide specific care instructions with each piece to ensure its longevity. Please avoid machine washing."
  }
];

export function FaqSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-h3-mobile md:text-h3-desktop font-sans font-semibold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-primary/10">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
