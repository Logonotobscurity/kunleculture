
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

const Filters = () => (
    <div className="space-y-6">
        <Accordion type="multiple" defaultValue={["category", "size", "price"]} className="w-full">
            <AccordionItem value="category">
                <AccordionTrigger className="text-lg font-semibold">Category</AccordionTrigger>
                <AccordionContent className="pt-2">
                    <div className="space-y-2">
                        {["Agbada", "Suits", "Tunics", "Trousers", "Shirts"].map(cat => (
                            <div key={cat} className="flex items-center space-x-2">
                                <Checkbox id={cat.toLowerCase()} />
                                <label htmlFor={cat.toLowerCase()} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    {cat}
                                </label>
                            </div>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="size">
                <AccordionTrigger className="text-lg font-semibold">Size</AccordionTrigger>
                <AccordionContent className="pt-2">
                    <div className="space-y-2">
                        {["S", "M", "L", "XL", "XXL"].map(size => (
                            <div key={size} className="flex items-center space-x-2">
                                <Checkbox id={size.toLowerCase()} />
                                <label htmlFor={size.toLowerCase()} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    {size}
                                </label>
                            </div>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="color">
                <AccordionTrigger className="text-lg font-semibold">Color</AccordionTrigger>
                <AccordionContent className="pt-2">
                    <div className="flex flex-wrap gap-2">
                        {["#000000", "#FFFFFF", "#103A3A", "#D18D2F", "#A1A1AA"].map(color => (
                            <button key={color} className="w-8 h-8 rounded-full border" style={{ backgroundColor: color }} />
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="price">
                <AccordionTrigger className="text-lg font-semibold">Price</AccordionTrigger>
                <AccordionContent className="pt-4">
                     <Slider defaultValue={[500, 2500]} max={5000} step={100} />
                     <div className="flex justify-between text-sm text-muted-foreground mt-2">
                         <span>$500</span>
                         <span>$2500</span>
                     </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        <Button className="w-full" size="lg">Apply Filters</Button>
    </div>
);


export default function ShopPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="w-full py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-h1-mobile md:text-h1-desktop font-sans font-semibold text-foreground">
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
                    <h2 className="text-2xl font-bold mb-4">Filters</h2>
                    <Filters />
                </aside>

                {/* Mobile Filters & Sorting */}
                <div className="md:hidden flex justify-between items-center mb-4">
                     <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline"><Filter className="w-4 h-4 mr-2" /> Filters</Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <div className="p-4">
                                <h2 className="text-2xl font-bold mb-4">Filters</h2>
                                <Filters />
                            </div>
                        </SheetContent>
                    </Sheet>
                    
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">Sort by <ChevronDown className="w-4 h-4 ml-2" /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Newest</DropdownMenuItem>
                            <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                            <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                            <DropdownMenuItem>Featured</DropdownMenuItem>
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
