"use client";

import * as React from "react";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TestimonialForm } from "@/components/testimonial-form";

export default function TestimonialsPage() {
  const [open, setOpen] = React.useState(false);

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
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-primary text-primary-foreground">
              Submit Your Testimonial
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Share Your Feedback</DialogTitle>
              <DialogDescription>
                We’d love to hear about your experience. Fill out the form below to submit your testimonial.
              </DialogDescription>
            </DialogHeader>
            <TestimonialForm setOpen={setOpen} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}