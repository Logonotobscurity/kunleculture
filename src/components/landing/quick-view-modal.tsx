
'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { Facebook, Twitter, Mail } from "lucide-react";

interface QuickViewModalProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    product: {
        title: string;
        price: string;
        image: ImagePlaceholder | undefined;
    };
    isShareModal?: boolean;
}

export function QuickViewModal({ isOpen, onOpenChange, product, isShareModal = false }: QuickViewModalProps) {

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareText = `Check out this amazing product: ${product.title}`;

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[825px] bg-stone-100 p-0">
                {isShareModal ? (
                    <div className="p-8">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold mb-4">Share "{product.title}"</DialogTitle>
                        </DialogHeader>
                        <div className="flex justify-center space-x-4">
                            <Button variant="outline" size="lg" asChild>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">
                                    <Facebook className="mr-2 h-5 w-5" /> Facebook
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer">
                                    <Twitter className="mr-2 h-5 w-5" /> Twitter
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <a href={`mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(shareUrl)}`}>
                                    <Mail className="mr-2 h-5 w-5" /> Email
                                </a>
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-0 items-start">
                        <div className="relative h-full min-h-[400px] md:min-h-[550px]">
                            {product.image && (
                                <Image
                                    src={product.image.imageUrl}
                                    alt={product.image.description}
                                    fill
                                    className="object-cover rounded-l-lg"
                                    data-ai-hint={product.image.imageHint}
                                />
                            )}
                        </div>
                        <div className="p-8">
                            <DialogHeader>
                                <DialogTitle className="text-3xl font-bold font-sans mb-4">{product.title}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                                <p className="text-muted-foreground">This is a placeholder description for the {product.title}. A full, engaging description would go here, detailing the fabric, fit, and unique features of this exquisite garment.</p>
                                <Button size="lg" variant="outline" className="w-full">Request for Quote</Button>
                            </div>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
