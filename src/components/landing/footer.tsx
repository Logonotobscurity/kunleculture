
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { KunleLogo } from "../icons";

const sections = {
  Shop: [
    { title: "Collections", href: "/shop" },
    { title: "Ready-to-Wear", href: "/shop" },
    { title: "Accessories", href: "/shop" },
  ],
  About: [
    { title: "Our Story", href: "/about" },
    { title: "The Craft", href: "/about" },
    { title: "Press", href: "/about" },
  ],
  Services: [
    { title: "Bespoke", href: "/bespoke" },
    { title: "Consultations", href: "/bespoke" },
    { title: "Styling", href: "/bespoke" },
  ],
  Support: [
    { title: "Contact Us", href: "#" },
    { title: "Shipping & Returns", href: "#" },
    { title: "FAQ", href: "#" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-transparent text-yellow-900 border-t border-yellow-900/10">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="mb-4">
               <KunleLogo className="w-[200px] h-auto" />
            </Link>
            <p className="text-sm text-yellow-900/70 mb-6 max-w-sm">
                Kunle Couture is a contemporary luxury menswear brand that fuses the artistry of traditional African tailoring with modern design sensibilities.
            </p>
            <div className="flex space-x-4 mb-6">
                <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 text-yellow-900/70 hover:text-yellow-900 transition-opacity" /></Link>
                <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6 text-yellow-900/70 hover:text-yellow-900 transition-opacity" /></Link>
                <Link href="#" aria-label="Facebook"><Facebook className="h-6 w-6 text-yellow-900/70 hover:text-yellow-900 transition-opacity" /></Link>
                <Link href="#" aria-label="Youtube"><Youtube className="h-6 w-6 text-yellow-900/70 hover:text-yellow-900 transition-opacity" /></Link>
            </div>
             <form className="w-full max-w-sm flex gap-2">
                <Input
                    type="email"
                    placeholder="Join the Kunle Circle"
                    className="h-10 bg-black/5 border-yellow-900/20 text-yellow-900 placeholder:text-yellow-900/70 focus:bg-black/10 flex-grow"
                />
                <Button type="submit" size="default" className="h-10">
                    Subscribe
                </Button>
            </form>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(sections).map(([title, links]) => (
                <div key={title}>
                    <h3 className="font-semibold text-yellow-900 mb-4">{title}</h3>
                    <ul className="space-y-3">
                        {links.map(link => (
                            <li key={link.title}>
                                <Link href={link.href} className="text-sm text-yellow-900/70 hover:text-yellow-900 transition-colors">{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-yellow-900/10">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-yellow-900/50">
          <p>&copy; {year} Kunle Couture. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-yellow-900">Privacy Policy</Link>
            <Link href="#" className="hover:text-yellow-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
