"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  vehiclePrice: z.coerce.number().min(500, "Price must be at least $500"),
  downPayment: z.coerce.number().min(0, "Down payment cannot be negative"),
  interestRate: z.coerce.number().min(0, "Rate cannot be negative").max(30, "Rate seems too high"),
  loanTerm: z.coerce.number().min(12, "Term must be at least 12 months").max(84, "Term cannot exceed 84 months"),
}).refine(data => data.downPayment < data.vehiclePrice, {
  message: "Down payment must be less than the vehicle price",
  path: ["downPayment"],
});

type FormValues = z.infer<typeof formSchema>;

interface CalculationResult {
  monthlyPayment: number;
  totalInterest: number;
  totalAmountPaid: number;
}

export function FinancingCalculator() {
  const searchParams = useSearchParams();
  const priceFromUrl = searchParams.get("price");

  const [result, setResult] = React.useState<CalculationResult | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vehiclePrice: Number(priceFromUrl) || 5000,
      downPayment: 1000,
      interestRate: 7.5,
      loanTerm: 60,
    },
  });

  React.useEffect(() => {
    if (priceFromUrl) {
      form.setValue("vehiclePrice", Number(priceFromUrl));
    }
  }, [priceFromUrl, form]);

  function calculatePayment(values: FormValues) {
    const { vehiclePrice, downPayment, interestRate, loanTerm } = values;
    const principal = vehiclePrice - downPayment;
    
    if (principal <= 0) {
        setResult({ monthlyPayment: 0, totalInterest: 0, totalAmountPaid: principal });
        return;
    }

    const monthlyRate = interestRate / 100 / 12;
    
    if (monthlyRate === 0) {
        const monthlyPayment = principal / loanTerm;
        setResult({ monthlyPayment, totalInterest: 0, totalAmountPaid: principal });
        return;
    }

    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) /
      (Math.pow(1 + monthlyRate, loanTerm) - 1);

    const totalAmountPaid = monthlyPayment * loanTerm;
    const totalInterest = totalAmountPaid - principal;

    setResult({ monthlyPayment, totalInterest, totalAmountPaid });
  }

  function onSubmit(values: FormValues) {
    calculatePayment(values);
    toast.success("Calculation updated!");
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
      <Card>
        <CardHeader>
          <CardTitle>Payment Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="vehiclePrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vehicle Price ($)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="downPayment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Down Payment ($)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="interestRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Interest Rate (APR %)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="loanTerm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Loan Term (Months)</FormLabel>
                    <FormControl>
                        <>
                            <Input type="number" {...field} className="mb-2" />
                            <Slider
                                value={[field.value]}
                                onValueChange={(value) => field.onChange(value[0])}
                                min={12}
                                max={84}
                                step={12}
                            />
                        </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-primary text-primary-foreground">
                Calculate
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="space-y-6">
        <Card className={cn("transition-opacity duration-500", result ? "opacity-100" : "opacity-50")}>
          <CardHeader>
            <CardTitle>Estimated Monthly Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-primary">
              {result ? formatCurrency(result.monthlyPayment) : "$0.00"}
            </p>
          </CardContent>
        </Card>
        <Card className={cn("transition-opacity duration-500", result ? "opacity-100" : "opacity-50")}>
          <CardHeader>
            <CardTitle>Calculation Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Loan Amount</span>
              <span>{formatCurrency(form.getValues("vehiclePrice") - form.getValues("downPayment"))}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Interest Paid</span>
              <span>{result ? formatCurrency(result.totalInterest) : "$0.00"}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span className="text-foreground">Total Amount Paid</span>
              <span>{result ? formatCurrency(result.totalAmountPaid) : "$0.00"}</span>
            </div>
          </CardContent>
        </Card>
        <p className="text-xs text-muted-foreground text-center">
            *This is an estimate only. Your actual payment may vary. This is not a credit application.
        </p>
      </div>
    </div>
  );
}