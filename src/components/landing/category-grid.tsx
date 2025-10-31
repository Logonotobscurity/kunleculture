import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const primaryCategories = [
  {
    title: "Bespoke",
    image: PlaceHolderImages.find((p) => p.id === "category-bespoke"),
    badge: "New",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
  },
  {
    title: "Collections",
    image: PlaceHolderImages.find((p) => p.id === "category-collections"),
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
  },
  {
    title: "Tailoring",
    image: PlaceHolderImages.find((p) => p.id === "category-tailoring"),
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    title: "Made-to-Measure",
    image: PlaceHolderImages.find((p) => p.id === "category-made-to-measure"),
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
];

const secondaryCategories = [
  {
    title: "Accessories",
    image: PlaceHolderImages.find((p) => p.id === "category-accessories"),
  },
  {
    title: "Lookbook",
    image: PlaceHolderImages.find((p) => p.id === "category-lookbook"),
  },
  {
    title: "Visit Studio",
    image: PlaceHolderImages.find((p) => p.id === "category-studio"),
  },
];

export function CategoryGrid() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {primaryCategories.slice(0, 2).map((cat) => (
            <div key={cat.title} className={cn("group relative overflow-hidden rounded-xl h-96 md:h-auto", cat.colSpan, cat.rowSpan)}>
                <Card className="h-full w-full shadow-large transition-transform duration-300 group-hover:scale-105">
                    {cat.image && (
                        <Image
                        src={cat.image.imageUrl}
                        alt={cat.image.description}
                        fill
                        className="object-cover"
                        data-ai-hint={cat.image.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-black/40"></div>
                    <CardContent className="relative z-10 flex flex-col h-full justify-end p-6">
                        {cat.badge && (
                        <Badge variant="destructive" className="absolute top-4 left-4 bg-accent text-accent-foreground">{cat.badge}</Badge>
                        )}
                        <h3 className="text-3xl font-bold text-white font-sans">{cat.title}</h3>
                    </CardContent>
                </Card>
            </div>
          ))}
          <div className="flex flex-col gap-6 h-96 md:h-auto">
             {primaryCategories.slice(2, 4).map((cat) => (
                <div key={cat.title} className="group relative overflow-hidden rounded-xl flex-1">
                    <Card className="h-full w-full shadow-large transition-transform duration-300 group-hover:scale-105">
                        {cat.image && (
                            <Image
                            src={cat.image.imageUrl}
                            alt={cat.image.description}
                            fill
                            className="object-cover"
                            data-ai-hint={cat.image.imageHint}
                            />
                        )}
                        <div className="absolute inset-0 bg-black/40"></div>
                        <CardContent className="relative z-10 flex flex-col h-full justify-end p-6">
                            <h3 className="text-3xl font-bold text-white font-sans">{cat.title}</h3>
                        </CardContent>
                    </Card>
                </div>
              ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {secondaryCategories.map((cat) => (
                 <div key={cat.title} className="group relative overflow-hidden rounded-xl h-56">
                    <Card className="h-full w-full shadow-large transition-transform duration-300 group-hover:scale-105">
                        {cat.image && (
                            <Image
                            src={cat.image.imageUrl}
                            alt={cat.image.description}
                            fill
                            className="object-cover"
                            data-ai-hint={cat.image.imageHint}
                            />
                        )}
                        <div className="absolute inset-0 bg-black/30"></div>
                        <CardContent className="relative z-10 flex h-full items-center justify-center p-6">
                            <h3 className="text-2xl font-bold text-white font-sans">{cat.title}</h3>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
