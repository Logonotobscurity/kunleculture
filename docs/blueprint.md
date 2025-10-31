Kunle Couture — Website Framework (replica Blueprint)
Kunle Couture — Website Framework (Replica Blueprint)

Brand Statement (Replace the original content with this brand copy)

Kunle Couture is a contemporary luxury menswear brand that fuses the artistry of traditional African tailoring with modern design sensibilities. Rooted in craftsmanship, cultural pride, and individuality, each Kunle Couture piece tells a story of elegance and purpose — designed for the modern man who values authenticity and distinction.

The brand’s creative philosophy centers on regal simplicity, blending heritage-inspired patterns, rich textures, and timeless silhouettes with a fresh, urban edge. From bespoke agbadas and fitted tunics to premium ready-to-wear collections, Kunle Couture redefines African fashion through precision tailoring, innovation, and detail-oriented finishing.

Guided by the principles of confidence, culture, and class, Kunle Couture celebrates Black excellence and global sophistication. It is more than clothing — it is a statement of legacy, strength, and evolving style.

Purpose of this Blueprint

This document is a direct, technical replication blueprint: translate the provided design, interactions, and UX patterns into a production-ready frontend using React + TypeScript + Tailwind CSS and the listed dependencies. The replication is for educational/design study purposes — do not reuse any protected branding or copyrighted content from other sites.

Technical Stack

Core Framework

React 18.2.0

TypeScript

Vite 6.3.5

Tailwind CSS 3.4.16

Additional Dependencies

React Router DOM 6.8.1

Lucide React 0.453.0

Radix UI (accessible primitives)

@radix-ui/react-slot

@radix-ui/react-toggle

@radix-ui/react-toggle-group

Class Variance Authority

Design System Specifications
Colors (CSS variables)
--teal-950: #0A3D3D
--teal-900: #0B4F4F
--slate-500: #64748B
--slate-600: #475569
--pink-900: #831843
--orange-400: #FB923C
--orange-300: #FDBA74
--orange-200: #FED7AA
--yellow-700: #A16207
--yellow-900: #713F12
--emerald-600: #059669
--emerald-700: #047857
--lime-200: #D9F99D


/* Neutral Colors */
--white: #FFFFFF
--stone-100: #F5F5F4
--stone-200: #E7E5E4
--stone-500: #78716C
--black: #000000
--black-opacity-10: rgba(0,0,0,0.1)
--black-opacity-20: rgba(0,0,0,0.2)
--black-opacity-30: rgba(0,0,0,0.3)
--white-opacity-10: rgba(255,255,255,0.1)
--white-opacity-20: rgba(255,255,255,0.2)
--white-opacity-50: rgba(255,255,255,0.5)
--white-opacity-70: rgba(255,255,255,0.7)
Gradient Backgrounds

Hero/Lookbook Overlay: linear-gradient(rgba(0,0,0,0) 19%, rgba(0,0,0,0.5) 100%, rgb(0,0,0) 112%)

Editorial Section: linear-gradient(167deg, rgb(244,241,230) 0%, rgb(250,248,242) 38%, rgb(250,248,242) 84%, rgb(244,241,230) 100%)

Tailoring Process Section: linear-gradient(rgb(215,227,235) 0%, rgb(250,234,171) 100%)

Typography System

Font Family: font-family: 'Sofia Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

Font sizes (mobile → desktop)

--text-hero-mobile: 25px / 24.75px line-height

--text-hero-desktop: 40.8023px / 40.3943px

--text-h1-mobile: 32px / 36.07px

--text-h1-desktop: 58.33px / 65.63px

--text-h3-mobile: 22px / 22px

--text-h3-desktop: 50px / 48.6px

--text-small: 12px / 15.6px

Font Weights

--font-light: 300

--font-regular: 400

--font-medium: 500

--font-semibold: 700

Spacing System

Base unit: 4px

--space-6: 24px

--space-8: 32px

--space-10: 40px

--space-20: 80px

--space-24: 96px

padding-top: 60px

Border Radius System

--radius-sm: 8px

--radius-lg: 16px

--radius-xl: 24px

--radius-2xl: 48px

--radius-full: 9999px

Shadow System

Subtle: box-shadow: rgba(0,0,0,0.05) 0px 2px 10px 0, rgba(0,0,0,0.05) 0px 2px 16px 0px

Large: box-shadow: rgba(0,0,0,0.1) 0px 4px 8px 0px

Responsive Breakpoints

Mobile first

@media (min-width: 768px) { /* Tablet */ }

@media (min-width: 1024px) { /* Desktop */ }

@media (min-width: 1440px) { /* Large Desktop */ }

Component Architecture (Kunle Couture adaptation)
1. Navigation System

Navbar Structure

<nav> (fixed, z-index: 701)
  └── NavbarContent
      ├── NavbarLogo (left-aligned) — Kunle Couture logomark / text
      └── NavbarActions (right-aligned)
          ├── Shop (link)
          ├── Bespoke (link)
          ├── Lookbook (link)
          ├── About (link)
          ├── LoginButton
          └── Menu

Navbar Specs

Height: 57px

Background: White

Position: fixed top with transform-on-scroll behavior

Logo: SVG icon (20px mobile / 24px desktop)

Login Button: white background, shadow, rounded-full

Menu Button: transparent, 48×48 touch target

2. Hero / Lookbook

Hero Title

Large hero with animated rotating categories (AnimatedText) that reflect Kunle Couture's range:

Bespoke Agbadas

Tailoring Services

Ready-to-Wear

Seasonal Collection

Accessories

Lookbook

Hero Elements

Full-bleed hero image / video (responsive)

AnimatedText for rotating themes

Primary CTAs: Explore Collection, Book Bespoke

Overlay gradient for legibility

3. Category Grid

CategoryGrid — 4 primary cards and 3 secondary compact cards to highlight major collections and services:

Primary Cards: Bespoke, Collections, Tailoring, Made-to-Measure

Secondary Cards: Accessories, Lookbook, Visit Studio

Cards should support image backgrounds, badges (e.g., "New"), and hover lift effects.

4. Collection Sections (replaces Product Sections)

CollectionsSection

SeasonalCollectionHero with gradient overlay and hero imagery

CollectionCards — grid of collection teasers (high-quality imagery, quick view, add-to-wishlist)

Bespoke & Tailoring Section

TailoringHero with timeline / steps (Consultation → Measurements → Fitting → Finish)

CTA: Book Appointment and How Bespoke Works

Feature cards: Fabric sourcing, Expert Tailors, Measurement Precision

Lookbook / Editorial Section

Carousel of editorial imagery

Video cards (campaign films) and style guides

CTA: View Lookbook

Testimonials / Press

TestimonialCarousel: client stories and quotes

TrustLogos: press mentions (e.g., GQ, Vogue, Men's Health) horizontal scroll

5. Knowledge / Craft Section (replaces Knowledge Section)

CraftSection

Title: The Craft of Kunle Couture

Cards explaining construction techniques, fabric guides, care instructions

BlogCarousel: editorial posts on style, culture, heritage

6. FAQ Section

FAQSection (accordion style)

Typical questions for a fashion house, e.g.:

How does bespoke ordering work?

What are your measurement/fitting policies?

Shipping & returns

Care instructions

Do you offer international shipping?

How long does a bespoke piece take?

7. Newsletter / Studio Booking Section

NewsletterSection

Title: Join the Kunle Circle

Email input + Subscribe button

Alternative CTA: Book a Studio Appointment (appointment form)

8. Footer

FooterContent

Left column: Brand blurb, social icons, newsletter CTA

Middle columns: Shop (links), About (links), Services (Bespoke, Consultations), Support (shipping, returns, contact)

Right column: Press / Careers / Legal

Legal links & copyright

Interaction Patterns

Button Styles (retain original system but adapted visually for Kunle Couture)

Primary Button: white background, subtle shadow, rounded pill, hover scale + shadow

Secondary & Ghost variations with semi-transparent backgrounds for hero overlays

Card Hover Effects

transform: translateY(-4px) on hover, micro-shadow increase

Carousel Behavior

Horizontal smooth scroll with snap points

Desktop: navigation arrows on hover

Mobile: touch swipe enabled

Auto-advance optional (5s)

Accordion Behavior

Closed default height with plus/minus icon transitions

Forms

Input focus border-color: --pink-900 or violet-600 equivalent

Error state border red, success border green, inline messages

Animation Specifications

Page load fade-in & slideUp animations with 400–500ms durations and 100ms stagger

AnimatedText rotation: 12s loop, ease-in-out

Carousel auto-advance: 5s interval (configurable)

Hover lift transition: 200ms ease-out

Accessibility Requirements

Semantic HTML and correct heading hierarchy

ARIA labels for interactive controls

Keyboard navigation and visible focus indicators

Color contrast checks for all text/interactive elements

Touch target minimums

Performance Optimization

Responsive <picture> assets with WebP fallbacks

Preload hero images

Lazy load below-the-fold content

Code splitting and deferred non-critical JS

Inline critical CSS where appropriate

Project Structure (src/)
src/
├── components/
│   ├── AnimatedText.tsx
│   ├── CollectionCard.tsx
│   ├── CategoryCard.tsx
│   ├── LoginButton.tsx
│   ├── MenuButton.tsx
│   ├── TestimonialCarousel.tsx
│   └── TopicCard.tsx
├── sections/
│   ├── Navbar/
│   │   ├── index.tsx
│   │   └── components/
│   │       ├── NavbarLogo.tsx
│   │       ├── NavbarActions.tsx
│   │       └── NavbarContent.tsx
│   ├── Hero/
│   │   ├── index.tsx
│   │   └── components/
│   │       ├── HeroHeader.tsx
│   │       ├── HeroTitle.tsx
│   │       ├── CategoryGrid.tsx
│   │       └── LookbookCarousel.tsx
│   ├── CollectionsSection/
│   ├── BespokeSection/
│   ├── LookbookSection/
│   ├── CraftSection/
│   ├── NewsletterSection/
│   └── Footer/
├── App.tsx
├── index.tsx
└── styles/tailwind.css
Implementation Checklist

Phase 1: Foundation

Set up Vite + React + TypeScript

Configure Tailwind with custom theme and CSS variables

Install dependencies (React Router, Lucide, Radix UI, CVA)

Phase 2: Navigation & Hero

Build Navbar and fixed header behavior

Create Hero with AnimatedText and Lookbook carousel

Category grid

Phase 3: Collections & Bespoke

CollectionsSection with cards and quick view UI

Bespoke/Tailoring section with booking flow

Lookbook carousel and editorial cards

Phase 4: Content & Trust

Craft and Knowledge section

Testimonials and press logos

FAQ accordion

Phase 5: Forms & Footer

Newsletter form + booking form with validation

Footer layout

Phase 6: Polish & Optimization

Interaction polish (hover, transitions)

Accessibility and performance testing