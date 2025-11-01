import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PlayCircle } from "lucide-react";

const editorialContent = [
  {
    type: "image",
    image: PlaceHolderImages.find(p => p.id === 'editorial-1')
  },
  {
    type: "video",
    title: "Campaign Film: SS'24",
    image: PlaceHolderImages.find(p => p.id === 'editorial-2')
  },
  {
    type: "image",
    image: PlaceHolderImages.find(p => p.id === 'editorial-3')
  },
    {
    type: "image",
    image: PlaceHolderImages.find(p => p.id === 'editorial-4')
  },
  {
    type: "image",
    image: PlaceHolderImages.find(p => p.id === 'editorial-5')
  },
]

export function EditorialSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-editorial-section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-h3-mobile md:text-h3-desktop font-sans font-semibold text-foreground">
            Lookbook & Editorials
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stories told through cloth, culture, and camera.
          </p>
        </div>

        <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
                {editorialContent.map((item, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className="overflow-hidden shadow-large rounded-none">
                                <CardContent className="relative flex aspect-video items-center justify-center p-0">
                                    {item.image && (
                                        <Image
                                            src={item.image.imageUrl}
                                            alt={item.image.description}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={item.image.imageHint}
                                        />
                                    )}
                                    {item.type === 'video' && (
                                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
                                            <PlayCircle className="w-16 h-16 mb-2" />
                                            <p className="font-semibold">{item.title}</p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="ml-14" />
            <CarouselNext className="mr-14" />
        </Carousel>

        <div className="mt-12 text-center">
          <Button size="lg" className="rounded-full shadow-large">
            View Full Lookbook
          </Button>
        </div>
      </div>
    </section>
  );
}
