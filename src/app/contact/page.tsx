import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Thumpstar Demo",
  description: "Get in touch with our sales, service, or parts departments.",
};

const ContactForm = ({ subject }: { subject: string }) => (
  <form className="space-y-4">
    <input type="hidden" name="subject" value={subject} />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor={`name-${subject}`}>Full Name</Label>
        <Input id={`name-${subject}`} placeholder="John Doe" />
      </div>
      <div className="space-y-2">
        <Label htmlFor={`email-${subject}`}>Email Address</Label>
        <Input id={`email-${subject}`} type="email" placeholder="john.doe@example.com" />
      </div>
    </div>
    <div className="space-y-2">
      <Label htmlFor={`phone-${subject}`}>Phone Number (Optional)</Label>
      <Input id={`phone-${subject}`} type="tel" placeholder="(123) 456-7890" />
    </div>
    <div className="space-y-2">
      <Label htmlFor={`message-${subject}`}>Message</Label>
      <Textarea id={`message-${subject}`} placeholder="How can we help you today?" rows={5} />
    </div>
    <Button type="submit" size="lg" className="w-full bg-accent text-black hover:bg-accent-600">
      Send Message
    </Button>
  </form>
);

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase">
          Contact Us
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Have a question? We're here to help. Reach out to the right department below.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-heading uppercase">Our Location</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-accent mt-1" />
                <div>
                  <p className="font-semibold">Thumpstar Demo Dealer</p>
                  <p className="text-muted-foreground">123 Powersports Lane<br />Motocross City, USA 54321</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-accent mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:1-800-555-1234" className="text-muted-foreground hover:text-accent">1-800-555-1234</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-accent mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:sales@thumpstardemo.com" className="text-muted-foreground hover:text-accent">sales@thumpstardemo.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-accent mt-1" />
                <div>
                  <p className="font-semibold">Hours</p>
                  <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div>
          <Tabs defaultValue="sales" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="service">Service</TabsTrigger>
              <TabsTrigger value="parts">Parts</TabsTrigger>
            </TabsList>
            <TabsContent value="sales" className="mt-6">
              <ContactForm subject="Sales Inquiry" />
            </TabsContent>
            <TabsContent value="service" className="mt-6">
              <ContactForm subject="Service Request" />
            </TabsContent>
            <TabsContent value="parts" className="mt-6">
              <ContactForm subject="Parts Question" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}