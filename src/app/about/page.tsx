import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Gapuchee Demo",
  description: "Learn about our passion for powersports and our commitment to quality and performance.",
};

const ourValues = [
    "Performance-Driven Engineering",
    "Rider-Focused Innovation",
    "Uncompromising Quality",
    "Community and Adventure"
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full bg-bg-dark text-white flex items-center justify-center text-center">
        <Image
          src="/placeholders/gallery/gallery-5.webp"
          alt="Dirt bike leaning against a tree in a forest"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="container relative z-20 max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-wider">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Fueled by passion, engineered for the dirt.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Our Story */}
          <div>
            <h2 className="font-heading text-3xl font-bold uppercase">Our Story</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Founded by a group of lifelong riders and mechanics, Gapuchee Demo was born from a simple idea: to build high-quality, performance-oriented powersports machines that don’t break the bank. We were tired of seeing fellow enthusiasts compromise between quality and affordability. So, we set out to change that.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From our humble beginnings in a small workshop, we’ve grown into a trusted name in the community, known for our durable bikes, innovative features like the Tri-Bar chassis, and a commitment to supporting the riders who use our products.
            </p>
          </div>
          
          {/* Image */}
          <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
            <Image
              src="/placeholders/gallery/gallery-6.webp"
              alt="Rider cleaning their ATV after a muddy ride"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Our Mission & Values */}
        <div className="mt-24">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-heading text-3xl font-bold uppercase">Our Mission</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
                    To empower riders of all levels with reliable, high-performance machines that fuel their passion for adventure and push the boundaries of what’s possible on two or four wheels.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {ourValues.map(value => (
                    <Card key={value} className="text-center bg-dot-pattern">
                        <CardHeader>
                            <CardTitle className="flex flex-col items-center gap-3">
                                <CheckCircle className="h-8 w-8 text-primary" />
                                <span>{value}</span>
                            </CardTitle>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </>
  );
}