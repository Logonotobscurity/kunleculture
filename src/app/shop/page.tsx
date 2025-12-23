import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { CollectionSection } from "@/components/landing/collection-section";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { ChevronDown, Filter } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ready-to-Wear Collection",
  description: "Explore our curated collections of ready-to-wear garments, including agbadas, suits, and tunics, crafted with the same precision and passion as our bespoke pieces.",
};


const Filters = () => (
    <div className="space-y-6">
        <Accordion type="multiple" defaultValue={["category", "size"]} className="w-full">
            <AccordionItem value="category" className="border-yellow-900/20">
                <AccordionTrigger className="text-lg font-semibold">Category</AccordionTrigger>
                <AccordionContent className="pt-2">
                    <div className="space-y-2">
                        {["Agbada", "Suits", "Tunics", "Trousers", "Shirts"].map(cat => (
                            <div key={cat} className="flex items-center space-x-2">
                                <Checkbox id={cat.toLowerCase()} />
                                <label htmlFor={cat.toLowerCase()} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground">
                                    {cat}
                                </label>
                            </div>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="size" className="border-yellow-900/20">
                <AccordionTrigger className="text-lg font-semibold">Size</AccordionTrigger>
                <AccordionContent className="pt-2">
                    <div className="space-y-2">
                        {["S", "M", "L", "XL", "XXL"].map(size => (
                            <div key={size} className="flex items-center space-x-2">
                                <Checkbox id={size.toLowerCase()} />
                                <label htmlFor={size.toLowerCase()} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground">
                                    {size}
                                </label>
                            </div>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="color" className="border-yellow-900/20">
                <AccordionTrigger className="text-lg font-semibold">Color</AccordionTrigger>
                <AccordionContent className="pt-2">
                    <div className="flex flex-wrap gap-2">
                        {["#D6C5A3", "#FFFFFF", "#1E4242", "#E2A753", "#57575D"].map(color => (
                            <button key={color} className="w-8 h-8 rounded-full border border-yellow-900/20" style={{ backgroundColor: color }} />
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        <Button className="w-full" size="lg">Apply Filters</Button>
    </div>
);


export default function ShopPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="w-full py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-h1-mobile md:text-h1-desktop font-sans font-semibold">
                Ready-to-Wear
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Explore our curated collections of ready-to-wear garments, crafted with the same precision and passion as our bespoke pieces.
              </p>
            </div>
          </div>
        </section>
        
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Desktop Filters */}
                <aside className="hidden md:block w-full md:w-1/4 lg:w-1/5">
                    <Filters />
                </aside>

                {/* Mobile Filters & Sorting */}
                <div className="md:hidden flex justify-between items-center mb-4">
                     <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="border-yellow-900 text-yellow-900 hover:bg-yellow-900/10"><Filter className="w-4 h-4 mr-2" /> Filters</Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-background">
                            <div className="p-4">
                                <Filters />
                            </div>
                        </SheetContent>
                    </Sheet>
                    
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="border-yellow-900 text-yellow-900 hover:bg-yellow-900/10">Sort by <ChevronDown className="w-4 h-4 ml-2" /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-stone-100 border-yellow-900/20">
                            <DropdownMenuItem className="focus:bg-yellow-900/10">Newest</DropdownMenuItem>
                            <DropdownMenuItem className="focus:bg-yellow-900/10">Price: Low to High</DropdownMenuItem>
                            <DropdownMenuItem className="focus:bg-yellow-900/10">Price: High to Low</DropdownMenuItem>
                            <DropdownMenuItem className="focus:bg-yellow-900/10">Featured</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                
                {/* Products */}
                <div className="w-full md:w-3/4 lg:w-4/5">
                    <CollectionSection />
                </div>
            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
