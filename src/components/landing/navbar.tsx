
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants";
import { KunleLogo } from "../icons";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
    </svg>
);


export function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
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
        hasScrolled ? "bg-stone-100/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center gap-2">
            <KunleLogo className="w-[180px] md:w-[200px] h-auto text-yellow-900" />
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                    "px-4 py-2 rounded-full text-lg font-semibold text-yellow-900 transition-colors duration-300",
                    isActive ? "bg-yellow-900/10" : "hover:bg-yellow-900/10"
                )}
              >
                {link.label}
              </Link>
            )})}
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="icon" className="hidden md:inline-flex rounded-full">
              <Link href="https://wa.me/2348123456789" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-6 w-6 text-yellow-900"/>
                <span className="sr-only">WhatsApp</span>
              </Link>
            </Button>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-12 w-12 text-yellow-900">
                    <Menu className="h-7 w-7" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-sm bg-background p-0">
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between p-6 border-b border-yellow-900/20">
                            <SheetClose asChild>
                                <Link href="/">
                                    <KunleLogo className="w-[180px] h-auto text-yellow-900" />
                                </Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Button variant="ghost" size="icon" className="text-yellow-900 h-10 w-10">
                                    <X className="h-6 w-6" />
                                </Button>
                            </SheetClose>
                        </div>
                        <nav className="flex flex-col items-center justify-center flex-1 gap-4 p-6">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                <SheetClose asChild key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "w-full text-center text-2xl font-semibold text-yellow-900 transition-colors rounded-full py-3",
                                            isActive ? "bg-yellow-900/10" : "hover:bg-yellow-900/10"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </SheetClose>
                            )})}
                        </nav>
                         <div className="p-6 mt-auto border-t border-yellow-900/20">
                            <Button asChild className="w-full h-12 rounded-full" size="lg" variant="default">
                               <Link href="https://wa.me/2348123456789" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                <WhatsAppIcon className="h-6 w-6 text-white" />
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
