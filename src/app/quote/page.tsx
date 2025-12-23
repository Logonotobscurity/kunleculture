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
import type { Metadata } from 'next';

// This metadata would ideally be in a server component wrapper if the page was server-rendered
// export const metadata: Metadata = {
//   title: "Request a Quote",
//   description: "Request a personalized quote for a bespoke garment or consultation. Start a conversation with us on WhatsApp to begin your Kunle Couture experience.",
// };


function QuoteForm() {
  const searchParams = useSearchParams();
  const product = searchParams.get('product') || 'a custom piece';
  const [name, setName] = useState('');
  const [message, setMessage] = useState(`I'm interested in a quote for: ${product}.`);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '2348123456789'; // Your WhatsApp number
    const fullMessage = `Hello Kunle Couture,

My name is ${name}.

${message}

Thank you!`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <Card className="shadow-large border-yellow-900/10 rounded-xl">
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
