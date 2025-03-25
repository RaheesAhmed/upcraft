import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-[60vh] flex items-center justify-center">
      <Card className="max-w-2xl w-full px-6">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary mb-4">Flexible Pricing Plans</CardTitle>
          <CardDescription className="text-lg mb-6">
            We're finalizing our pricing tiers to ensure you get the best value for your Upwork success. 
            Choose from plans that fit freelancers and clients of all sizes.
          </CardDescription>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" size="lg" disabled>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
              View Pricing Plans
            </Button>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}