import { KunleLogo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const sections = {
  Shop: [
    { title: "Ready-to-Wear", href: "#" },
    { title: "Agbadas", href: "#" },
    { title: "Tunics", href: "#" },
    { title: "Accessories", href: "#" },
  ],
  About: [
    { title: "Our Story", href: "#" },
    { title: "The Craft", href: "#" },
    { title: "Editorials", href: "#" },
    { title: "Press", href: "#" },
  ],
  Services: [
    { title: "Bespoke", href: "#" },
    { title: "Made-to-Measure", href: "#" },
    { title: "Consultations", href: "#" },
    { title: "Book Appointment", href: "#" },
  ],
  Support: [
    { title: "Contact Us", href: "#" },
    { title: "Shipping & Returns", href: "#" },
    { title: "FAQ", href: "#" },
    { title: "Care Guide", href: "#" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 flex flex-col">
            <Link href="#" className="mb-4">
              <KunleLogo className="h-8 w-auto text-primary-foreground" />
            </Link>
            <p className="text-sm text-primary-foreground/70 mb-6 max-w-sm">
                Kunle Couture is a contemporary luxury menswear brand that fuses the artistry of traditional African tailoring with modern design sensibilities.
            </p>
            <div className="flex space-x-4 mb-6">
                <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 hover:opacity-80 transition-opacity" /></Link>
                <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6 hover:opacity-80 transition-opacity" /></Link>
                <Link href="#" aria-label="Facebook"><Facebook className="h-6 w-6 hover:opacity-80 transition-opacity" /></Link>
                <Link href="#" aria-label="Youtube"><Youtube className="h-6 w-6 hover:opacity-80 transition-opacity" /></Link>
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(sections).map(([title, links]) => (
                <div key={title}>
                    <h3 className="font-semibold text-primary-foreground mb-4">{title}</h3>
                    <ul className="space-y-3">
                        {links.map(link => (
                            <li key={link.title}>
                                <Link href={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/50">
          <p>&copy; {year} Kunle Couture. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary-foreground/80">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary-foreground/80">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
