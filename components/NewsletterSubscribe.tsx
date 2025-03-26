"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "sonner";

export function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Implement actual newsletter subscription
    // For now, just simulate an API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast.success("Successfully subscribed!", {
      description: "Thank you for subscribing to our newsletter."
    });

    setEmail("");
    setIsLoading(false);
  };

  return (
    <div className="w-full bg-primary/5 rounded-lg p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-4">
        <Mail className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Subscribe to Our Newsletter</h3>
      </div>
      
      <p className="text-muted-foreground mb-6">
        Get the latest freelancing tips and Upwork strategies delivered directly to your inbox.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
} 