import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Thumpstar Demo",
  description: "See what our customers have to say about our bikes.",
};

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase">
          Customer Testimonials
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Real feedback from riders who trust our machines on the track and trail.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button size="lg" className="bg-accent text-black hover:bg-accent-600">
          Submit Your Testimonial
        </Button>
      </div>
    </div>
  );
}