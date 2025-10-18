import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className={cn("flex flex-col h-full bg-dot-pattern")}>
      <CardHeader>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <blockquote className="italic text-foreground">
          "{testimonial.quote}"
        </blockquote>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <p className="font-bold text-sm">{testimonial.author}</p>
        <Badge variant="secondary">{testimonial.riderType}</Badge>
      </CardFooter>
    </Card>
  );
}