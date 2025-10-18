"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const bikeCategories = [
  {
    title: "Dirt Bikes",
    href: "/dirt-bike",
    description: "High-performance bikes for the trail and track.",
    image: "/placeholders/tfx250-1.webp",
  },
  {
    title: "Pit Bikes",
    href: "/pit-bike",
    description: "Compact fun for the backyard and beyond.",
    image: "/placeholders/tsx140-1.webp",
  },
  {
    title: "ATVs",
    href: "/atv",
    description: "Rugged machines for work and play.",
    image: "/placeholders/atx125-1.webp",
  },
];

export function MegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Bikes</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] ">
              {bikeCategories.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  image={component.image}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link href="/parts" className={navigationMenuTriggerStyle()}>
            Parts
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/workshop" className={navigationMenuTriggerStyle()}>
            Workshop
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/gallery" className={navigationMenuTriggerStyle()}>
            Gallery
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string; image: string }
>(({ className, title, children, image, ...props }, ref) => {
  return (
    <li>
      <Link
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md mb-2">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";