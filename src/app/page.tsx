import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Wrench, Award } from "lucide-react";
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

const collections = [
  {
    name: "Dirt Bikes",
    href: "/dirt-bike",
    imageSrc: "/placeholders/tfx250-1.webp",
    imageAlt: "A high-performance dirt bike on a trail.",
  },
  {
    name: "Pit Bikes",
    href: "/pit-bike",
    imageSrc: "/placeholders/tsx140-1.webp",
    imageAlt: "A compact and agile pit bike.",
  },
  {
    name: "ATVs",
    href: "/atv",
    imageSrc: "/placeholders/atx125-1.webp",
    imageAlt: "A rugged all-terrain vehicle.",
  },
];

const highlights = [
    {
        icon: ShieldCheck,
        title: "Race-Proven Durability",
        description: "Built with high-strength materials to withstand the toughest conditions."
    },
    {
        icon: Award,
        title: "Performance Tuned",
        description: "Engines and suspension tuned for maximum performance and rider feedback."
    },
    {
        icon: Wrench,
        title: "Easy Maintenance",
        description: "Designed for simple access to key components, making upkeep a breeze."
    }
]

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const featuredTestimonials = testimonials.slice(0, 2);
  const featuredGalleryImages = galleryImages.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[75vh] min-h-[500px] w-full bg-bg-dark text-white flex items-center justify-center text-center">
        <Image
          src="/placeholders/gallery/gallery-1.webp"
          alt="Rider on a dirt bike kicking up dust"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="container relative z-20 max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-wider">
            Engineered for the Dirt
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our range of high-performance dirt bikes, pit bikes, and ATVs built to conquer any terrain.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-black hover:bg-accent-600">
              <Link href="/collections">
                Explore Bikes <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black">
              Book a Test Ride
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Link href={collection.href} key={collection.name} className="group relative block h-64 overflow-hidden rounded-2xl">
                <Image
                  src={collection.imageSrc}
                  alt={collection.imageAlt}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-heading text-3xl font-bold text-white uppercase">{collection.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Bikes Section */}
      <section className="py-16 sm:py-24 bg-bg-dark">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-white">Featured Bikes</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Check out our most popular models, built for performance and reliability.
            </p>
          </div>

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
                    <ProductCard product={product} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      {/* Highlights Banner */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {highlights.map((highlight) => (
                    <div key={highlight.title}>
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/20 mx-auto">
                            <highlight.icon className="h-8 w-8 text-accent" />
                        </div>
                        <h3 className="mt-6 font-heading text-xl font-bold uppercase">{highlight.title}</h3>
                        <p className="mt-2 text-muted-foreground">{highlight.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Testimonials Teaser */}
      <section className="py-16 sm:py-24 bg-bg-dark">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-white">What Riders Are Saying</h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                    Real feedback from riders who trust our machines.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {featuredTestimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
            </div>
        </div>
      </section>

      {/* Latest Gallery Grid */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-foreground">From the Trail</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Capturing the adventure, one ride at a time.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredGalleryImages.map((image) => (
              <Link href="/gallery" key={image.id} className="group aspect-square relative overflow-hidden rounded-2xl block">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/gallery">
                View Full Gallery <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}