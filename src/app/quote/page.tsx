
'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ParticleTextEffect } from '@/components/ui/particle-text-effect';

const quoteWords = ["Request a Quote", "Get in Touch", "Bespoke Inquiry", "Start Creating"];

function QuoteForm() {
  const searchParams = useSearchParams();
  const product = searchParams.get('product') || 'a custom piece';
  const [name, setName] = useState('');
  const [message, setMessage] = useState(`I'm interested in a quote for: ${product}.`);

  const getProductUrl = () => {
    if (typeof window === 'undefined') return '';
    return `${window.location.protocol}//${window.location.host}/quote?product=${encodeURIComponent(product)}`;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '2348123456789'; // Your WhatsApp number
    const productUrl = getProductUrl();
    const fullMessage = `Hello Kunle Couture,

My name is ${name}.

${message}

Product URL: ${productUrl}

Thank you!`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex flex-col min-h-dvh bg-stone-100">
      <Navbar />
      <main className="flex-1">
        <section className="w-full" aria-labelledby="quote-hero-title">
            <div className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center text-center text-white overflow-hidden shadow-large bg-stone-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0px_0px,rgba(0,0,0,0.15),rgba(0,0,0,0))]"/>
                <div className="relative z-10 flex flex-col items-center p-4">
                    <div className="h-[240px] md:h-[300px] flex items-center justify-center">
                        <ParticleTextEffect words={quoteWords} />
                        <h1 id="quote-hero-title" className="sr-only">Request a Quote</h1>
                    </div>
                </div>
            </div>
        </section>
        <div className="container mx-auto px-4 md:px-6 max-w-2xl py-12">
          <Card className="shadow-large border-yellow-900/10 rounded-xl -mt-[40vh] bg-stone-100/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-h3-mobile md:text-h3-desktop font-sans font-semibold">
                Request a Quote
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground pt-2">
                We're excited to help you. Fill out the form below and we'll start a conversation on WhatsApp.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-lg">Your Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="mt-2 h-12"
                    aria-label="Your Name"
                  />
                </div>
                <div>
                  <Label htmlFor="product" className="text-lg">Product of Interest</Label>
                  <Input
                    id="product"
                    type="text"
                    value={product}
                    disabled
                    className="mt-2 h-12 bg-stone-200/50"
                    aria-label="Product of Interest"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-lg">Your Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us more about what you're looking for..."
                    required
                    rows={5}
                    className="mt-2"
                    aria-label="Your Message"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full h-12">
                  Send via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function QuotePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <QuoteForm />
        </Suspense>
    )
}
