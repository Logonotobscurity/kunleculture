import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppWidget } from "@/components/landing/whatsapp-widget";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const defaultMetadataImage = PlaceHolderImages.find(p => p.id === 'hero-background');

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'), // Replace with your actual domain in production
  title: {
    default: "Kunle Couture - Luxury African Menswear",
    template: "%s | Kunle Couture",
  },
  description: "Experience contemporary luxury menswear fusing traditional African tailoring with modern design. Specializing in bespoke agbadas, suits, and ready-to-wear collections.",
  keywords: ["bespoke menswear", "African tailoring", "luxury agbada", "Nigerian fashion", "men's suits", "Kunle Couture", "ready-to-wear"],
  applicationName: "Kunle Couture",
  openGraph: {
    title: "Kunle Couture - Luxury African Menswear",
    description: "Contemporary luxury menswear fusing traditional African tailoring with modern design.",
    url: "http://localhost:3000", // Replace with your actual domain
    siteName: "Kunle Couture",
    images: [
      {
        url: defaultMetadataImage?.imageUrl || '/og-image.png',
        width: 1200,
        height: 630,
        alt: "A man wearing a stylish Kunle Couture garment.",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kunle Couture - Luxury African Menswear",
    description: "Contemporary luxury menswear fusing traditional African tailoring with modern design.",
    images: [defaultMetadataImage?.imageUrl || '/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/Gilroy-Bold.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Gilroy-SemiBold.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
         <link
          rel="preload"
          href="/fonts/Gilroy-Medium.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Gilroy-Regular.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>
      <body className={cn("antialiased")}>
        {children}
        <WhatsAppWidget />
        <Toaster />
      </body>
    </html>
  );
}
