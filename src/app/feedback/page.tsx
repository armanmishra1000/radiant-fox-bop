import { FeedbackForm } from "@/components/feedback-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback | Gapuchee Demo",
  description: "Share your feedback to help us improve our products and services.",
};

export default function FeedbackPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase">
          Share Your Feedback
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          We value your opinion. Whether you have a suggestion, a bug to report, or general feedback, we’d love to hear from you.
        </p>
      </div>

      <div className="mt-12 max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Feedback Form</CardTitle>
            <CardDescription>
              Please fill out the form below and we’ll get back to you if necessary.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FeedbackForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}