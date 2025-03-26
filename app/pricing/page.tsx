"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Free",
    description: "Perfect for trying out Upcraft",
    monthlyPrice: "0",
    annualPrice: "0",
    features: [
      "5 AI-generated proposals per month",
      "Basic templates",
      "Basic customization",
      "Preview mode",
      "Community support"
    ],
    buttonText: "Get Started",
    popular: false
  },
  {
    name: "Basic",
    description: "For growing freelancers",
    monthlyPrice: "4.99",
    annualPrice: "3.74",
    features: [
      "50 AI-generated proposals per month",
      "All premium templates",
      "Full customization options",
      "Proposal history",
      "Save custom templates",
      "Email support",
      "Analytics dashboard"
    ],
    buttonText: "Start Basic",
    popular: true
  },
  {
    name: "Pro",
    description: "For power users",
    monthlyPrice: "9.99",
    annualPrice: "7.49",
    features: [
      "Unlimited AI-generated proposals",
      "Everything in Basic",
      "Priority support 24/7",
      "Advanced analytics",
      "A/B testing",
      "API access",
      "Custom branding"
    ],
    buttonText: "Go Pro",
    popular: false
  }
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Simple, Transparent Pricing</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Choose the perfect plan for your freelancing journey. Save money on Upwork connects and win more clients.
        </p>
        <div className="inline-flex items-center gap-2 bg-muted p-1 rounded-lg mb-8">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-4 py-2 rounded-md transition-colors ${
              !isAnnual ? 'bg-primary text-primary-foreground' : 'hover:bg-muted-foreground/10'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-4 py-2 rounded-md transition-colors ${
              isAnnual ? 'bg-primary text-primary-foreground' : 'hover:bg-muted-foreground/10'
            }`}
          >
            Annual (Save 25%)
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <Card key={plan.name} className={`relative flex flex-col ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
              <CardDescription className="mt-2">{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-muted-foreground">/{isAnnual ? 'month' : 'month'}</span>
                {isAnnual && plan.monthlyPrice !== "0" && (
                  <div className="text-sm text-muted-foreground mt-1">
                    Billed annually (${(parseFloat(plan.annualPrice) * 12).toFixed(2)}/year)
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Regional Pricing Available</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We offer special discounts for freelancers from different regions. Prices are automatically adjusted based on your location to ensure Upcraft is accessible to everyone.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Card className="p-4">
            <p className="font-medium">Pakistan/India/Bangladesh</p>
            <p className="text-primary">60% off</p>
          </Card>
          <Card className="p-4">
            <p className="font-medium">Latin America</p>
            <p className="text-primary">50% off</p>
          </Card>
          <Card className="p-4">
            <p className="font-medium">Eastern Europe</p>
            <p className="text-primary">40% off</p>
          </Card>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm text-muted-foreground">
          All plans include: No credit card required for free plan • Cancel anytime • 7-day money-back guarantee
        </p>
      </div>
    </div>
  );
}