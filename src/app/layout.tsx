import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppWidget } from "@/components/landing/whatsapp-widget";

export const metadata: Metadata = {
  title: "Kunle Couture",
  description: "Contemporary luxury menswear fusing traditional African tailoring with modern design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("antialiased")}>
        {children}
        <WhatsAppWidget />
        <Toaster />
      </body>
    </html>
  );
}
