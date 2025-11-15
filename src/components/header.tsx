"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SearchDialog } from "./search-dialog";
import { WhatsAppIcon } from "./icons/whatsapp-icon";
import { MegaMenu } from "./mega-menu";

// Mobile navigation links
const mobileNavLinks = [
  { href: "/dirt-bike", label: "Dirt Bikes" },
  { href: "/pit-bike", label: "Pit Bikes" },
  { href: "/atv", label: "ATVs" },
  { href: "/parts", label: "Parts" },
  { href: "/workshop", label: "Workshop" },
  { href: "/graphics", label: "Graphics" },
  { href: "/database", label: "Database" },
  { href: "/gallery", label: "Gallery" },
];

const WHATSAPP_PHONE_NUMBER = "15551234567";
const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent("Hello! I have a question.")}`;

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top utility bar */}
      <div className="bg-bg-dark text-white">
        <div className="container mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 text-sm">
          <div className="flex items-center gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
              <WhatsAppIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Chat on WhatsApp</span>
            </a>
            <a href="tel:1-800-555-1234" className="flex items-center gap-2 hover:text-primary">
              <Phone size={16} />
              <span className="hidden sm:inline">1-800-555-1234</span>
            </a>
            <a href="mailto:sales@gapucheedemo.com" className="flex items-center gap-2 hover:text-primary">
              <Mail size={16} />
              <span className="hidden sm:inline">sales@gapucheedemo.com</span>
            </a>
          </div>
          <div>
            {/* Placeholder for other links like Dealer Locator */}
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/gapuchee-logo.png" alt="Gapuchee Logo" width={150} height={30} className="h-7 w-auto" />
          </Link>
          <nav className="hidden md:flex">
            <MegaMenu />
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <SearchDialog />
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                <Image src="/gapuchee-logo.png" alt="Gapuchee Logo" width={150} height={30} className="h-7 w-auto" />
              </Link>
              <nav className="flex flex-col gap-4">
                {mobileNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}