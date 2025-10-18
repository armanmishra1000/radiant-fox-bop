import { FinancingCalculator } from "@/components/financing-calculator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financing Calculator | Thumpstar Demo",
  description: "Estimate your monthly payments for a new bike or ATV.",
};

export default function FinancingPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase">
          Financing Calculator
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Use our tool to estimate your monthly payment and plan your budget for your next ride.
        </p>
      </div>

      <div className="mt-16 max-w-5xl mx-auto">
        <FinancingCalculator />
      </div>
    </div>
  );
}