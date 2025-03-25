import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CraftPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Craft Your Perfect Proposal</h1>
          <p className="text-lg text-muted-foreground">
            Generate highly effective Upwork proposals and job descriptions with AI
          </p>
        </div>

        <Tabs defaultValue="proposal" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="proposal">Write Proposal</TabsTrigger>
            <TabsTrigger value="job">Write Job Post</TabsTrigger>
          </TabsList>

          <TabsContent value="proposal" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Create Proposal</CardTitle>
                <CardDescription>
                  Enter the job details and your experience to generate a tailored proposal
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="job-title">Job Title</Label>
                  <Input id="job-title" placeholder="e.g. React Developer needed for SaaS project" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="job-description">Job Description</Label>
                  <Textarea
                    id="job-description"
                    placeholder="Paste the job description here..."
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Your Relevant Experience</Label>
                  <Textarea
                    id="experience"
                    placeholder="Describe your relevant experience and skills..."
                    className="min-h-[100px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="rate">Hourly Rate ($)</Label>
                    <Input id="rate" type="number" placeholder="e.g. 50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability (hrs/week)</Label>
                    <Input id="availability" type="number" placeholder="e.g. 40" />
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  Generate Proposal
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Generated Proposal</CardTitle>
                <CardDescription>
                  Review and edit your AI-generated proposal before sending
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Your generated proposal will appear here..."
                  className="min-h-[200px]"
                />
                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1">
                    Copy to Clipboard
                  </Button>
                  <Button className="flex-1">Download as PDF</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="job" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Create Job Post</CardTitle>
                <CardDescription>
                  Enter your project details to generate a professional job posting
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="project-title">Project Title</Label>
                  <Input id="project-title" placeholder="e.g. Expert React Developer for SaaS Platform" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-description">Project Description</Label>
                  <Textarea
                    id="project-description"
                    placeholder="Describe your project requirements..."
                    className="min-h-[150px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range ($)</Label>
                    <Input id="budget" placeholder="e.g. 1000-2000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Project Duration</Label>
                    <Input id="duration" placeholder="e.g. 2-3 months" />
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  Generate Job Post
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Generated Job Post</CardTitle>
                <CardDescription>
                  Review and edit your AI-generated job posting
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Your generated job post will appear here..."
                  className="min-h-[200px]"
                />
                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1">
                    Copy to Clipboard
                  </Button>
                  <Button className="flex-1">Download as PDF</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}