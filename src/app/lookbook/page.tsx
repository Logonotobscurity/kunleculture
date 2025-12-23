'use client';
import { useState } from "react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

// Note: Metadata can't be exported from a client component.
// For dynamic metadata on this page, this file would need to be refactored.
// export const metadata: Metadata = {
//   title: "Lookbook",
//   description: "A visual journey through the world of Kunle Couture. Explore our curated collections of Agbada, suits, tunics, and draw inspiration from our signature styling.",
// };

const allLooks = PlaceHolderImages.filter(p => p.id.startsWith('collection-') || p.id.startsWith('editorial-') || p.id.startsWith('category-'));

const categories = ["All", "Agbada", "Suits", "Tunic", "Casuals"];

const looksByCategory: Record<string, typeof allLooks> = {
    "All": allLooks,
    "Agbada": allLooks.filter(l => l.description.toLowerCase().includes('agbada')),
    "Suits": allLooks.filter(l => l.description.toLowerCase().includes('suit')),
    "Tunic": allLooks.filter(l => l.description.toLowerCase().includes('tunic')),
    "Casuals": allLooks.filter(l => l.description.toLowerCase().includes('casual')),
}

export default function LookbookPage() {
  const [activeTab, setActiveTab] = useState("All");

  const MasonryImage = ({ look, index }: { look: any; index: number }) => {
    const isTall = index % 4 === 0 || index % 4 === 3;
    return (
        <div className={cn("relative group overflow-hidden rounded-lg shadow-large", isTall ? 'row-span-2' : '')}>
            <Image
            src={look.imageUrl}
            alt={look.description}
            width={500}
            height={isTall ? 800 : 400}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={look.imageHint}
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold drop-shadow-md">{look.description}</p>
            </div>
        </div>
    )
  }

  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-h1-mobile md:text-h1-desktop font-sans font-semibold">
                The Lookbook
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                A visual journey through the world of Kunle Couture. Explore our curated collections and draw inspiration from our signature styling.
              </p>
            </div>
            
            <div className="flex justify-center my-12">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="bg-stone-100/50">
                        {categories.map(category => (
                            <TabsTrigger key={category} value={category} className="data-[state=active]:bg-yellow-900/10 data-[state=active]:text-yellow-900">{category}</TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
                {looksByCategory[activeTab].map((look, index) => (
                    <MasonryImage key={look.id} look={look} index={index} />
                ))}
            </div>
            {looksByCategory[activeTab].length === 0 && (
                <div className="text-center py-20">
                    <p className="text-muted-foreground text-lg">No looks found for this category.</p>
                </div>
            )}

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
