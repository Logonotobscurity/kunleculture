"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants";
import { KunleLogo } from "../icons";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);


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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-stone-100/80 backdrop-blur-sm shadow-sm"
      )}
    >
      <div className="container mx-auto px-[18.9121px] md:px-[39.1675px]">
        <div className="flex items-center justify-between h-[90.7782px] md:h-[94.0021px]">
          <Link href="/" className="flex items-center gap-2">
            <KunleLogo className="w-[150px] md:w-[200px] h-auto text-yellow-900" />
          </Link>

          <nav className="hidden md:flex items-center gap-x-[30.2594px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-yellow-900 text-[17.6254px] font-medium transition-colors hover:text-yellow-700 pb-1 border-b-2 border-transparent hover:border-yellow-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" className="hidden md:inline-flex">
              <Link href="https://wa.me/2348123456789" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-6 w-6 text-yellow-900"/>
                <span className="sr-only">WhatsApp</span>
              </Link>
            </Button>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-12 w-12 text-yellow-900">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full bg-background p-0">
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between p-4 border-b border-yellow-900/20">
                            <Link href="/">
                                <KunleLogo className="w-[180px] h-auto text-yellow-900" />
                            </Link>
                            <SheetClose asChild>
                                <Button variant="ghost" size="icon" className="text-yellow-900">
                                    <X className="h-6 w-6" />
                                </Button>
                            </SheetClose>
                        </div>
                        <nav className="flex flex-col items-center justify-center flex-1 gap-8 p-6">
                            {navLinks.map((link) => (
                            <SheetClose asChild key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-[22.6946px] font-normal text-yellow-900 transition-colors hover:text-yellow-700"
                                >
                                    {link.label}
                                </Link>
                            </SheetClose>
                            ))}
                        </nav>
                         <div className="p-6 mt-auto border-t border-yellow-900/20">
                            <Button asChild className="w-full" variant="ghost">
                               <Link href="https://wa.me/2348123456789" target="_blank" rel="noopener noreferrer">
                                <WhatsAppIcon className="h-6 w-6 mr-2 text-yellow-900" />
                                Contact on WhatsApp
                              </Link>
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
