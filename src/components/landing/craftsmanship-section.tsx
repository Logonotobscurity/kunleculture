import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export function CraftsmanshipSection() {
  const craftImage = PlaceHolderImages.find(p => p.id === 'craftsmanship-video-poster');

  return (
    <section className="relative text-white rounded-none">
      <div className="container mx-auto px-4 md:px-6">
        <div className="py-8 md:py-12">
          <div className="relative z-[2] text-amber-300">
            <div className="flex flex-col justify-between min-h-[567px] p-5 md:min-h-[588px] md:p-10">
              <div className="text-sm font-bold tracking-wider uppercase text-left">
                The Soul of Craft
              </div>
              <div className="max-w-md">
                <div className="mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                    Our Tradition <em className="font-serif not-italic">Can</em> Be Worn
                  </h2>
                </div>
                <div className="mb-8 md:mb-12">
                  <p className="md:text-lg text-white/80">
                    Conventional fashion gets conventional results. Our pieces are crafted by rewiring traditional techniques to help you express yourself.
                  </p>
                </div>
                <div className="text-left">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-black rounded-full"
                  >
                    Why Bespoke
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 -z-[1] rounded-lg overflow-hidden">
                {craftImage && (
                    <video
                        poster={craftImage.imageUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover -z-10"
                    >
                        <source src="/videos/craft-video.mp4" type="video/mp4" />
                    </video>
                )}
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
