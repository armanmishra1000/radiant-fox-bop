import { faqItems } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Gapuchee Demo",
  description: "Frequently asked questions about orders, parts, assembly, and maintenance.",
};

export default function FaqPage() {
  const categories = [...new Set(faqItems.map((item) => item.category))];

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Find answers to common questions about our products and services.
        </p>
      </div>

      <div className="mt-12 max-w-3xl mx-auto">
        <Tabs defaultValue={categories[0]} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <Accordion type="single" collapsible className="w-full mt-4">
                {faqItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <AccordionItem key={item.id} value={item.id}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}