"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { WhatsappButton } from "@/components/whatsapp-button";

const graphicKits = [
  { id: "standard", name: "Standard Issue", price: 0 },
  { id: "flow", name: "Flow Series", price: 49.99 },
  { id: "velocity", name: "Velocity Series", price: 59.99 },
];

export default function GraphicsPage() {
  const [name, setName] = React.useState("Your Name");
  const [number, setNumber] = React.useState("7");
  const [selectedKit, setSelectedKit] = React.useState(graphicKits[0].id);

  const currentKit = graphicKits.find(kit => kit.id === selectedKit);
  const totalPrice = currentKit?.price ?? 0;

  const whatsappMessage = `Hello, I'd like to order a graphics kit with the following details:\n- Kit: ${currentKit?.name}\n- Name: ${name}\n- Number: ${number}`;

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase">
          Customize Your Graphics
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Personalize your ride. Choose your kit, add your name and number, and see it come to life.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-3 gap-12">
        {/* Preview */}
        <div className="lg:col-span-2">
          <Card className="overflow-hidden sticky top-24">
            <CardContent className="p-0">
              <div className="aspect-[4/3] relative bg-gray-100 dark:bg-gray-800">
                <Image
                  src="/placeholders/graphics-template.webp"
                  alt="Bike graphics template"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-black -translate-y-4">
                    <p
                      className="font-bold text-5xl md:text-7xl"
                      style={{ WebkitTextStroke: "2px white" }}
                    >
                      {number || "0"}
                    </p>
                    <p
                      className="font-semibold text-2xl md:text-3xl uppercase -mt-2"
                      style={{ WebkitTextStroke: "1px white" }}
                    >
                      {name || "Your Name"}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Customization Options</CardTitle>
              <CardDescription>Enter your details below.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="number">Race Number</Label>
                <Input
                  id="number"
                  type="number"
                  placeholder="Enter your number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="space-y-3">
                <Label>Select Graphics Kit</Label>
                <RadioGroup
                  value={selectedKit}
                  onValueChange={setSelectedKit}
                  className="space-y-2"
                >
                  {graphicKits.map((kit) => (
                    <Label
                      key={kit.id}
                      htmlFor={kit.id}
                      className="flex items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                      <span className="font-semibold">{kit.name}</span>
                      <span>{kit.price > 0 ? `$${kit.price}` : "Included"}</span>
                      <RadioGroupItem value={kit.id} id={kit.id} className="sr-only" />
                    </Label>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
                <div className="w-full text-2xl font-bold text-right">
                    Total: ${totalPrice.toFixed(2)}
                </div>
              <WhatsappButton
                size="lg"
                message={whatsappMessage}
                className="w-full bg-accent text-black hover:bg-accent-600"
              >
                Inquire to Order
              </WhatsappButton>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}