
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye } from "lucide-react";

const collections = [
  {
    title: "The Monarch Agbada",
    price: "1,250",
    image: PlaceHolderImages.find((p) => p.id === "collection-1"),
  },
  {
    title: "Lagosian Tunic Set",
    price: "480",
    image: PlaceHolderImages.find((p) => p.id === "collection-2"),
  },
  {
    title: "The Chairman's Suit",
    price: "1,800",
    image: PlaceHolderImages.find((p) => p.id === "collection-3"),
  },
  {
    title: "Sokoto Casuals",
    price: "350",
    image: PlaceHolderImages.find((p) => p.id === "collection-4"),
  },
  {
    title: "Urban Regal Attire",
    price: "850",
    image: PlaceHolderImages.find((p) => p.id === "editorial-1"),
  },
  {
    title: "The Advocate Ensemble",
    price: "950",
    image: PlaceHolderImages.find((p) => p.id === "editorial-4"),
  },
  {
    title: "Noble Edit Jacket",
    price: "1,100",
    image: PlaceHolderImages.find((p) => p.id === "craft-fabric"),
  },
  {
    title: "Roots and Royalty",
    price: "720",
    image: PlaceHolderImages.find((p) => p.id === "editorial-2"),
  },
  {
    title: "The Oba Line",
    price: "Request for Quote",
    image: PlaceHolderImages.find((p) => p.id === "hero-background")
  },
  {
    title: "Legacy Line",
    price: "Request for Quote",
    image: PlaceHolderImages.find((p) => p.id === "category-bespoke")
  },
  {
    title: "Vanguard Line",
    price: "Request for Quote",
    image: PlaceHolderImages.find((p) => p.id === "category-collections")
  },
  {
    title: "The Renaissance Drop",
    price: "Request for Quote",
    image: PlaceHolderImages.find((p) => p.id === "category-tailoring")
  }
];

export function CollectionSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-h3-mobile md:text-h3-desktop font-sans font-semibold text-foreground">
            Full Collection
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover our latest ready-to-wear pieces, crafted with precision and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {collections.map((item) => (
            <Card key={item.title} className="group overflow-hidden border-none shadow-subtle hover:shadow-large transition-shadow duration-300 rounded-none">
              <div className="relative">
                {item.image && (
                  <Image
                    src={item.image.imageUrl}
                    alt={item.image.description}
                    width={500}
                    height={650}
                    className="object-cover w-full h-auto aspect-[1/1.25] transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={item.image.imageHint}
                  />
                )}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="secondary" className="rounded-full shadow-lg h-10 w-10 bg-background/80 hover:bg-background">
                        <Heart className="w-5 h-5 text-muted-foreground" />
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full shadow-lg h-10 w-10 bg-background/80 hover:bg-background">
                        <Eye className="w-5 h-5 text-muted-foreground" />
                    </Button>
                </div>
              </div>
              <CardContent className="p-4 bg-background">
                <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                <p className="text-muted-foreground mt-1 font-medium">Request for Quote</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button size="lg" className="rounded-full shadow-large">Explore More</Button>
        </div>
      </div>
    </section>
  );
}
