import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We provide end-to-end solutions for B2B clients, including market analysis, strategy development, and implementation support. Our goal is to help your business grow."
  },
  {
    question: "Who are your typical clients?",
    answer: "We work with a wide range of businesses, from startups to Fortune 500 companies, across various industries. Our solutions are tailored to meet the unique needs of each client."
  },
  {
    question: "How do you measure success?",
    answer: "Success is measured against the key performance indicators (KPIs) we establish at the beginning of each project. These typically include metrics like ROI, market share growth, and customer acquisition cost."
  },
  {
    question: "What is your pricing model?",
    answer: "Our pricing is project-based and depends on the scope and complexity of the work. We provide a detailed proposal and cost estimate after an initial consultation."
  },
  {
    question: "How can we get started?",
    answer: "The first step is to schedule a free consultation with our team. We'll discuss your needs and determine how we can best assist you. You can contact us via the form on our website."
  }
];

export function FaqSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
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
