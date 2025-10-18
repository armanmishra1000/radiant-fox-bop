"use client";

import * as React from "react";
import Image from "next/image";
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
import { cn } from "@/lib/utils";

const graphicKits = [
  { id: "standard", name: "Standard Issue", price: 0, preview: "/placeholders/tsx140-1.webp" },
  { id: "flow", name: "Flow Series", price: 49.99, preview: "/placeholders/tsx140-2.webp" },
  { id: "velocity", name: "Velocity Series", price: 59.99, preview: "/placeholders/tsx140-3.webp" },
];

export default function GraphicsPage() {
  const [name, setName] = React.useState("Your Name");
  const [number, setNumber] = React.useState("7");
  const [selectedKitId, setSelectedKitId] = React.useState(graphicKits[0].id);

  const selectedKit = graphicKits.find(kit => kit.id === selectedKitId) || graphicKits[0];
  const totalPrice = selectedKit.price;

  const whatsappMessage = `Hello, I'd like to order a graphics kit with the following details:\n- Kit: ${selectedKit.name}\n- Name: ${name}\n- Number: ${number}`;

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
              <div className="aspect-[4/3] relative bg-bg-dark">
                <Image
                  key={selectedKit.id}
                  src={selectedKit.preview}
                  alt={`${selectedKit.name} graphics kit preview`}
                  fill
                  className="object-contain animate-in fade-in-50 duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="text-center text-black -translate-y-4 transform -skew-y-6"
                  >
                    <p
                      className="font-heading font-bold text-5xl md:text-8xl"
                      style={{ WebkitTextStroke: "3px white", paintOrder: "stroke fill" }}
                    >
                      {number || "0"}
                    </p>
                    <p
                      className="font-heading font-bold text-2xl md:text-3xl uppercase -mt-2"
                      style={{ WebkitTextStroke: "2px white", paintOrder: "stroke fill" }}
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
                  value={selectedKitId}
                  onValueChange={setSelectedKitId}
                  className="grid grid-cols-3 gap-2"
                >
                  {graphicKits.map((kit) => (
                    <div key={kit.id}>
                      <RadioGroupItem value={kit.id} id={kit.id} className="sr-only" />
                      <Label
                        htmlFor={kit.id}
                        className={cn(
                            "block rounded-lg border-2 p-1 cursor-pointer",
                            selectedKitId === kit.id ? "border-accent ring-2 ring-accent" : "border-muted"
                        )}
                      >
                        <Image 
                            src={kit.preview}
                            alt={kit.name}
                            width={100}
                            height={75}
                            className="aspect-[4/3] object-cover w-full rounded-md"
                        />
                        <span className="block text-center text-xs font-semibold mt-1">{kit.name}</span>
                      </Label>
                    </div>
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