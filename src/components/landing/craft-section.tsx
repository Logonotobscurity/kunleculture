import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const craftCards = [
  {
    title: "Construction Techniques",
    description: "Explore the intricate hand-stitching and structural details that define a Kunle Couture garment.",
    image: PlaceHolderImages.find(p => p.id === 'craft-construction'),
    link: "#"
  },
  {
    title: "Fabric Guides",
    description: "Learn about the origins and properties of our premium fabrics, from Aso Oke to Italian wool.",
    image: PlaceHolderImages.find(p => p.id === 'craft-fabric'),
    link: "#"
  },
  {
    title: "Care Instructions",
    description: "Preserve the beauty and longevity of your pieces with our expert care recommendations.",
    image: PlaceHolderImages.find(p => p.id === 'craft-care'),
    link: "#"
  }
];

export function CraftSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-h3-mobile md:text-h3-desktop font-headline font-semibold text-foreground">
            The Craft of Kunle Couture
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A commitment to excellence in every thread, stitch, and silhouette.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {craftCards.map((card) => (
            <Card key={card.title} className="flex flex-col group overflow-hidden rounded-xl shadow-subtle hover:shadow-large transition-all duration-300">
              {card.image && (
                <div className="overflow-hidden">
                    <Image
                        src={card.image.imageUrl}
                        alt={card.image.description}
                        width={600}
                        height={400}
                        className="object-cover w-full h-auto aspect-video transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={card.image.imageHint}
                    />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{card.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0 text-primary group-hover:text-accent">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
