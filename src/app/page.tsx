"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Frame, GitCommit, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/testimonial-card";
import { galleryImages } from "@/data/gallery";
import { WhatsappButton } from "@/components/whatsapp-button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ProductQuickView } from "@/components/product-quick-view";
import type { Product } from "@/lib/types";

const collections = [
  {
    name: "Dirt Bikes",
    href: "/dirt-bike",
    imageSrc: "/Dirt%20Bike%20Lock%20Screen.jpeg",
    imageAlt: "High-performance dirt bike cutting through a dusty trail at golden hour.",
    description: "Built for the ultimate off-road experience."
  },
  {
    name: "Pit Bikes",
    href: "/pit-bike",
    imageSrc: "/pit_bike_wkx_racing_une-1.webp",
    imageAlt: "Gapuchee WKX pit bike parked on a track.",
    description: "Delivering big fun in a compact package."
  },
  {
    name: "ATVs",
    href: "/atv",
    imageSrc: "/b03b2ca1e0f6233c4b6bd1ca026b6578.jpg",
    imageAlt: "Gapuchee ATV racing through a wooded trail.",
    imagePosition: "center",
    description: "Designed to handle the toughest terrain."
  },
];

const highlights = [
    {
        icon: Frame,
        title: "Tri-Bar Chassis",
        description: "Our race-proven Tri-Bar frame provides superior rigidity and handling."
    },
    {
        icon: GitCommit,
        title: "Linkage Suspension",
        description: "Advanced linkage rear suspension for a smoother ride and better traction."
    },
    {
        icon: Lightbulb,
        title: "Enduro Spec Lighting",
        description: "Bright, reliable lighting on select models for extending your rides beyond sunset."
    }
]

export default function Home() {
  const [quickViewProduct, setQuickViewProduct] = React.useState<Product | null>(null);
  const featuredProducts = products.slice(0, 4);
  const featuredGalleryImages = galleryImages.slice(0, 3);

  return (
    <>
      <ProductQuickView 
        product={quickViewProduct}
        open={!!quickViewProduct}
        onOpenChange={(open) => {
          if (!open) {
            setQuickViewProduct(null);
          }
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[75vh] min-h-[500px] w-full bg-bg-dark text-white flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/hero-background.webp"
          alt="Motocross rider powering through rugged terrain at golden hour"
          fill
          sizes="100vw"
          className="object-cover animate-kenburns"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-bg-dark/60 to-transparent z-10"></div>
        <div className="container relative z-20 max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-wider animate-in fade-in slide-in-from-bottom-12 duration-1000">
            Engineered for the Dirt
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            Discover our range of high-performance dirt bikes, pit bikes, and ATVs built to conquer any terrain.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
            <Button asChild size="lg" className="bg-primary text-primary-foreground animate-shine">
              <Link href="/collections">
                Explore Bikes <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <WhatsappButton
              size="lg"
              variant="outline"
              message="Hello, I'm interested in learning more about your bikes."
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Inquire on WhatsApp
            </WhatsappButton>
          </div>
        </div>
      </section>

      {/* Highlights Banner */}
      <section className="py-16 sm:py-24 bg-background bg-dot-pattern">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-center">
                {highlights.map((highlight, index) => (
                    <AnimateOnScroll key={highlight.title} delay={index * 150}>
                        <div className="group rounded-2xl p-4 lg:p-6 transition-all duration-300 hover:bg-card hover:shadow-card hover:-translate-y-1">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:rotate-6">
                                <highlight.icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                            </div>
                            <h3 className="mt-6 font-heading text-xl font-bold uppercase">{highlight.title}</h3>
                            <p className="mt-2 text-muted-foreground">{highlight.description}</p>
                        </div>
                    </AnimateOnScroll>
                ))}
            </div>
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className="py-16 sm:py-24 bg-bg-dark text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {collections.map((collection) => (
              <Link key={collection.name} href={collection.href} className="group relative block overflow-hidden rounded-2xl">
                <div className="aspect-[4/3] bg-bg-dark">
                  <Image
                    src={collection.imageSrc}
                    alt={collection.imageAlt}
                    fill
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    style={{ objectPosition: collection.imagePosition ?? "center" }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="font-heading text-3xl font-bold text-white uppercase transition-transform duration-300 group-hover:-translate-y-10">{collection.name}</h3>
                  <div className="transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:-translate-y-10">
                      <p className="mt-1 text-sm text-gray-300">{collection.description}</p>
                      <div className="mt-2 flex items-center text-primary font-bold text-sm">
                          <span>View Collection</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Bikes Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-foreground">Featured Bikes</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Check out our most popular models, built for performance and reliability.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full mt-12"
            >
              <CarouselContent>
                {featuredProducts.map((product) => (
                  <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <ProductCard product={product} onQuickView={setQuickViewProduct} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex" />
              <CarouselNext className="hidden lg:flex" />
            </Carousel>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonials Teaser */}
      <section className="relative bg-bg-dark">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{ backgroundImage: "url(/placeholders/gallery/gallery-3.webp)" }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <AnimateOnScroll className="text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-white">What Riders Are Saying</h2>
                <p className="mt-4 max-w-2xl mx-auto text-gray-300">
                    Real feedback from riders who trust our machines.
                </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-4xl mx-auto mt-12"
              >
                <CarouselContent>
                  {testimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id} className="md:basis-1/2">
                      <div className="p-1">
                        <TestimonialCard testimonial={testimonial} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden lg:flex" />
                <CarouselNext className="hidden lg:flex" />
              </Carousel>
            </AnimateOnScroll>
        </div>
      </section>

      {/* Latest Gallery Grid */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-foreground">From the Trail</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Capturing the adventure, one ride at a time.
            </p>
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredGalleryImages.map((image) => (
              <Link key={image.id} href="/gallery" className="group aspect-square relative overflow-hidden rounded-2xl block">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <p className="font-bold text-sm line-clamp-2">{image.alt}</p>
                </div>
              </Link>
            ))}
          </div>
          <AnimateOnScroll className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/gallery">
                View Full Gallery <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-gradient">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-primary-foreground">
              Ready for Your Next Adventure?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80">
              Contact us today to get a quote, book a test ride, or find the perfect bike for your needs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsappButton
                size="lg"
                variant="secondary"
                message="Hello! I have a question and would like to chat."
                className="animate-shine"
              >
                Chat on WhatsApp
              </WhatsappButton>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/collections">
                  Browse All Bikes
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}