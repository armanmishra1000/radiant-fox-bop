import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatsappButton } from "@/components/whatsapp-button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Thumpstar Demo",
  description: "Get in touch with our sales, service, or parts departments via WhatsApp.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase">
          Contact Us
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Have a question? We're here to help. The best way to reach us is via WhatsApp.
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
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Thumpstar Demo Dealer</p>
                  <p className="text-muted-foreground">123 Powersports Lane<br />Motocross City, USA 54321</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:1-800-555-1234" className="text-muted-foreground hover:text-primary">1-800-555-1234</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:sales@thumpstardemo.com" className="text-muted-foreground hover:text-primary">sales@thumpstardemo.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Hours</p>
                  <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* WhatsApp CTAs */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="font-heading uppercase">Chat with a Department</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <WhatsappButton
                size="lg"
                message="Hello, I have a sales question."
                className="w-full bg-primary text-primary-foreground"
              >
                Contact Sales
              </WhatsappButton>
              <WhatsappButton
                size="lg"
                message="Hello, I'd like to request a service appointment."
                className="w-full"
                variant="secondary"
              >
                Contact Service
              </WhatsappButton>
              <WhatsappButton
                size="lg"
                message="Hello, I have a question about parts."
                className="w-full"
                variant="secondary"
              >
                Contact Parts
              </WhatsappButton>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}