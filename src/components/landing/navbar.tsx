"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants";
import { KunleLogo } from "../icons";

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm"
      )}
    >
      <div className="container mx-auto px-[18.9121px] md:px-[39.1675px]">
        <div className="flex items-center justify-between h-[90.7782px] md:h-[94.0021px]">
          <Link href="/" className="flex items-center gap-2">
            <KunleLogo className="w-[150px] md:w-[200px] h-auto text-primary" />
          </Link>

          <nav className="hidden md:flex items-center gap-x-[30.2594px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-black text-[17.6254px] font-medium transition-colors hover:text-primary pb-1 border-b-2 border-transparent hover:border-black"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden md:inline-flex text-amber-300 text-[15.1297px] font-medium hover:shadow-get-started hover:bg-transparent">
              Get started
            </Button>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-12 w-12 text-foreground">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full bg-background p-0">
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between p-4 border-b">
                            <Link href="/">
                                <KunleLogo className="w-[180px] h-auto text-primary" />
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
                                    className="text-[22.6946px] font-normal text-foreground transition-colors hover:text-primary"
                                >
                                    {link.label}
                                </Link>
                            </SheetClose>
                            ))}
                        </nav>
                         <div className="p-6 mt-auto border-t">
                            <Button className="w-full text-amber-300 text-[15.1297px] font-medium hover:shadow-get-started hover:bg-transparent" variant="ghost">
                                Get started
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
