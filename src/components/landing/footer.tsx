import { KunleLogo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const sections = {
  Solutions: [
    { title: "Analytics", href: "#" },
    { title: "Marketing", href: "#" },
    { title: "Commerce", href: "#" },
    { title: "Insights", href: "#" },
  ],
  Company: [
    { title: "About", href: "#" },
    { title: "Jobs", href: "#" },
    { title: "Press", href: "#" },
    { title: "Partners", href: "#" },
  ],
  Support: [
    { title: "Pricing", href: "#" },
    { title: "Documentation", href: "#" },
    { title: "Guides", href: "#" },
    { title: "API Status", href: "#" },
  ],
  Legal: [
    { title: "Claim", href: "#" },
    { title: "Privacy", href: "#" },
    { title: "Terms", href: "#" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 flex flex-col">
            <Link href="#" className="mb-4">
              <KunleLogo className="h-8 w-auto text-foreground" />
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
                Providing reliable B2B solutions to power your business growth and success.
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
                    <h3 className="font-semibold text-foreground mb-4">{title}</h3>
                    <ul className="space-y-3">
                        {links.map(link => (
                            <li key={link.title}>
                                <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {year} Acme Inc. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
