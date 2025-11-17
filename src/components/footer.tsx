import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { SvgLogo } from "./svg-logo";

export function Footer() {
  return (
    <footer className="bg-bg-dark text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-block">
            <SvgLogo className="h-10" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-lg uppercase">Products</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/dirt-bike" className="hover:text-accent">Dirt Bikes</Link></li>
              <li><Link href="/pit-bike" className="hover:text-accent">Pit Bikes</Link></li>
              <li><Link href="/atv" className="hover:text-accent">ATVs</Link></li>
              <li><Link href="/parts" className="hover:text-accent">Parts</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg uppercase">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/workshop" className="hover:text-accent">Workshop</Link></li>
              <li><Link href="/faq" className="hover:text-accent">FAQ</Link></li>
              <li><Link href="/testimonials" className="hover:text-accent">Testimonials</Link></li>
              <li><Link href="/gallery" className="hover:text-accent">Gallery</Link></li>
              <li><Link href="/financing" className="hover:text-accent">Financing</Link></li>
              <li><Link href="/feedback" className="hover:text-accent">Feedback</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg uppercase">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-accent">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-accent">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="hover:text-accent">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg uppercase">Connect</h3>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="hover:text-accent"><Facebook size={24} /></a>
              <a href="#" className="hover:text-accent"><Instagram size={24} /></a>
              <a href="#" className="hover:text-accent"><Youtube size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}