
'use client';

import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Eye, Share2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { QuickViewModal } from './quick-view-modal';
import dynamic from 'next/dynamic';

const collections: {
  title: string;
  image: ImagePlaceholder | undefined;
}[] = [
  {
    title: "The Monarch Agbada",
    image: PlaceHolderImages.find((p) => p.id === "collection-1"),
  },
  {
    title: "Lagosian Tunic Set",
    image: PlaceHolderImages.find((p) => p.id === "collection-2"),
  },
  {
    title: "The Chairman's Suit",
    image: PlaceHolderImages.find((p) => p.id === "collection-3"),
  },
  {
    title: "Sokoto Casuals",
    image: PlaceHolderImages.find((p) => p.id === "collection-4"),
  },
  {
    title: "Urban Regal Attire",
    image: PlaceHolderImages.find((p) => p.id === "editorial-1"),
  },
  {
    title: "The Advocate Ensemble",
    image: PlaceHolderImages.find((p) => p.id === "editorial-4"),
  },
  {
    title: "Noble Edit Jacket",
    image: PlaceHolderImages.find((p) => p.id === "craft-fabric"),
  },
  {
    title: "Roots and Royalty",
    image: PlaceHolderImages.find((p) => p.id === "editorial-2"),
  },
  {
    title: "The Oba Line",
    image: PlaceHolderImages.find((p) => p.id === "hero-background")
  },
  {
    title: "Legacy Line",
    image: PlaceHolderImages.find((p) => p.id === "category-bespoke")
  },
  {
    title: "Vanguard Line",
    image: PlaceHolderImages.find((p) => p.id === "category-collections")
  },
  {
    title: "The Renaissance Drop",
    image: PlaceHolderImages.find((p) => p.id === "category-tailoring")
  }
];

const DynamicQuickViewModal = dynamic(() => import('./quick-view-modal').then(m => m.QuickViewModal), { ssr: false });


export function CollectionSection() {
    const { toast } = useToast();
    const [selectedProduct, setSelectedProduct] = useState<typeof collections[0] | null>(null);
    const [isQuickViewOpen, setQuickViewOpen] = useState(false);
    const [isShareModalOpen, setShareModalOpen] = useState(false);

    const handleWishlistClick = (itemTitle: string) => {
        toast({
            title: "Added to Wishlist",
            description: `${itemTitle} has been added to your wishlist.`,
        });
    };

    const handleQuickViewClick = (product: typeof collections[0]) => {
        setSelectedProduct(product);
        setQuickViewOpen(true);
    }
    
    const handleShareClick = (product: typeof collections[0]) => {
        setSelectedProduct(product);
        setShareModalOpen(true);
    }

  return (
    <>
    <section className="w-full py-16 md:py-24" aria-labelledby="collection-heading">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 id="collection-heading" className="text-h3-mobile md:text-h3-desktop font-sans font-semibold">
            Full Collection
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover our latest ready-to-wear pieces, crafted with precision and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {collections.map((item) => (
            <Card key={item.title} className="group overflow-hidden border-none shadow-subtle hover:shadow-large transition-shadow duration-300 rounded-none bg-stone-100/50">
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
                    <Button size="icon" variant="secondary" className="rounded-full shadow-lg h-10 w-10 bg-background/80 hover:bg-background" onClick={() => handleWishlistClick(item.title)} aria-label={`Add ${item.title} to wishlist`}>
                        <Heart className="w-5 h-5 text-muted-foreground" />
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full shadow-lg h-10 w-10 bg-background/80 hover:bg-background" onClick={() => handleQuickViewClick(item)} aria-label={`Quick view ${item.title}`}>
                        <Eye className="w-5 h-5 text-muted-foreground" />
                    </Button>
                     <Button size="icon" variant="secondary" className="rounded-full shadow-lg h-10 w-10 bg-background/80 hover:bg-background" onClick={() => handleShareClick(item)} aria-label={`Share ${item.title}`}>
                        <Share2 className="w-5 h-5 text-muted-foreground" />
                    </Button>
                </div>
              </div>
              <CardContent className="p-4 bg-stone-100/50 flex flex-col items-start">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <Button variant="link" className="p-0 h-auto text-muted-foreground mt-1 font-medium hover:no-underline rounded-full" asChild>
                    <Link href={`/quote?product=${encodeURIComponent(item.title)}`}>Request for Quote</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button size="lg" className="rounded-full shadow-large px-8 md:px-12" asChild>
              <Link href="/shop">Explore More</Link>
            </Button>
        </div>
      </div>
    </section>

    {selectedProduct && (
        <>
            <DynamicQuickViewModal 
                isOpen={isQuickViewOpen} 
                onOpenChange={setQuickViewOpen} 
                product={selectedProduct}
            />
            <DynamicQuickViewModal 
                isOpen={isShareModalOpen} 
                onOpenChange={setShareModalOpen} 
                product={selectedProduct}
                isShareModal
            />
        </>
    )}
    </>
  );
}
