import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Templates() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-[60vh] flex items-center justify-center">
      <Card className="max-w-2xl w-full px-6">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary mb-4">AI-Powered Templates</CardTitle>
          <CardDescription className="text-lg mb-6">
            We're crafting a collection of smart templates that will revolutionize how you create Upwork proposals. 
            Our AI-driven system will help you stand out and win more projects.
          </CardDescription>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" size="lg" disabled>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              Browse Templates
            </Button>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}