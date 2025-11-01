"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from 'next/image';

const navLinks = [
  { href: "#", label: "Shop" },
  { href: "#", label: "Bespoke" },
  { href: "#", label: "Lookbook" },
  { href: "#", label: "About" },
];

export function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        hasScrolled ? "bg-background/80 shadow-sm backdrop-blur-sm" : "bg-background"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-[57px]">
          <Link href="/" className="flex items-center gap-2">
            <Image src="https://i.ibb.co/HppVNSzb/Kunlecouture.jpg" alt="Kunlecouture" width={140} height={24} />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xl font-medium transition-colors hover:text-primary hover:underline hover:decoration-white decoration-[1.5008px]",
                  "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
             <Button variant="outline" size="sm" className="hidden md:inline-flex rounded-full shadow-large bg-white">
                Login
            </Button>
            
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className={cn("h-12 w-12", "text-foreground")}>
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full bg-background p-0">
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between p-4 border-b">
                            <Link href="/">
                                <Image src="https://i.ibb.co/HppVNSzb/Kunlecouture.jpg" alt="Kunlecouture" width={140} height={24} />
                            </Link>
                            <SheetClose asChild>
                                <Button variant="ghost" size="icon">
                                    <X className="h-6 w-6" />
                                </Button>
                            </SheetClose>
                        </div>
                        <nav className="flex flex-col items-center justify-center flex-1 gap-8 p-6">
                            {navLinks.map((link) => (
                            <SheetClose asChild key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-2xl font-medium text-foreground transition-colors hover:text-primary"
                                >
                                    {link.label}
                                </Link>
                            </SheetClose>
                            ))}
                        </nav>
                        <div className="p-6 border-t">
                             <Button className="w-full" size="lg">
                                Login / Sign Up
                            </Button>
                        </div>
                    </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
