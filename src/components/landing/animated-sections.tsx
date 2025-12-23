'use client';

import dynamic from 'next/dynamic';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const CategoryGrid = dynamic(() => import('@/components/landing/category-grid').then(m => m.CategoryGrid), { ssr: false });
const CollectionSection = dynamic(() => import('@/components/landing/collection-section').then(m => m.CollectionSection), { ssr: false });
const BespokeSection = dynamic(() => import('@/components/landing/bespoke-section').then(m => m.BespokeSection), { ssr: false });
const TestimonialsSection = dynamic(() => import('@/components/landing/testimonials-section').then(m => m.TestimonialsSection), { ssr: false });
const CraftSection = dynamic(() => import('@/components/landing/craft-section').then(m => m.CraftSection), { ssr: false });
const FaqSection = dynamic(() => import('@/components/landing/faq-section').then(m => m.FaqSection), { ssr: false });
const NewsletterSection = dynamic(() => import('@/components/landing/newsletter-section').then(m => m.NewsletterSection), { ssr: false });

export function AnimatedSections() {
  return (
    <>
      <ScrollReveal>
        <CategoryGrid />
      </ScrollReveal>
      <ScrollReveal>
        <CollectionSection />
      </ScrollReveal>
      <ScrollReveal>
        <BespokeSection />
      </ScrollReveal>
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal>
        <CraftSection />
      </ScrollReveal>
      <ScrollReveal>
        <FaqSection />
      </ScrollReveal>
      <ScrollReveal>
        <NewsletterSection />
      </ScrollReveal>
    </>
  );
}
