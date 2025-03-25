"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";


export default function CraftPage() {
  const [loading, setLoading] = useState(false);
  const [generatedProposal, setGeneratedProposal] = useState("");
  const [generatedJobPost, setGeneratedJobPost] = useState("");
  const [userName, setUserName] = useState("");
  const [clientName, setClientName] = useState("");

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast("Content copied!", {
        description: "Text has been copied to your clipboard",
        action: {
          label: "Dismiss",
          onClick: () => console.log("Dismissed")
        }
      });
    } catch (error) {
      console.error("Failed to copy:", error);
      toast("Copy failed", {
        description: "Unable to copy text to clipboard",
        action: {
          label: "Try Again",
          onClick: () => copyToClipboard(text)
        },
        duration: 3000
      });
    }
  };

  const regenerateProposal = async (formData: FormData, previousProposal: string) => {
    const jobTitle = formData.get("job-title") as string;
    const jobDescription = formData.get("job-description") as string;
    const experience = formData.get("experience") as string;
    const rate = formData.get("rate") as string;
    const availability = formData.get("availability") as string;
    const userNameValue = formData.get("user-name") as string;
    const clientNameValue = formData.get("client-name") as string;

    if (!jobTitle || !jobDescription || !experience || !rate || !availability || !userNameValue) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobTitle,
          jobDescription,
          experience,
          rate,
          availability,
          clientName: clientNameValue,
          previousProposal,
          isRegeneration: true
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to regenerate proposal");
      }

      const data = await response.json();
      setGeneratedProposal(data.proposal);
      toast.success("Proposal regenerated successfully!");
    } catch (error) {
      console.error("Error regenerating proposal:", error);
      toast.error("Failed to regenerate proposal. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const generateProposal = async (formData: FormData) => {
    const jobTitle = formData.get("job-title") as string;
    const jobDescription = formData.get("job-description") as string;
    const experience = formData.get("experience") as string;
    const rate = formData.get("rate") as string;
    const availability = formData.get("availability") as string;
    const userNameValue = formData.get("user-name") as string;
    const clientNameValue = formData.get("client-name") as string;

    if (!jobTitle || !jobDescription || !experience || !rate || !availability || !userNameValue) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);
    setGeneratedProposal("");
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobTitle,
          jobDescription,
          experience,
          rate,
          availability,
          clientName: clientNameValue,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate proposal");
      }

      const data = await response.json();
      setGeneratedProposal(data.proposal);
      toast.success("Proposal generated successfully!");
    } catch (error) {
      console.error("Error generating proposal:", error);
      toast.error("Failed to generate proposal. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-primary">Craft Your Perfect Proposal</h1>
          <p className="text-lg text-muted-foreground">
            Generate highly effective Upwork proposals and job descriptions with AI
          </p>
        </div>

        <Tabs defaultValue="proposal" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-muted">
            <TabsTrigger value="proposal" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Write Proposal</TabsTrigger>
            <TabsTrigger value="job" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Write Job Post</TabsTrigger>
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
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  await generateProposal(formData);
                }} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="job-title">Job Title</Label>
                    <Input
                      id="job-title"
                      name="job-title"
                      placeholder="e.g. React Developer needed for SaaS project"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="job-description">Job Description</Label>
                    <Textarea
                      id="job-description"
                      name="job-description"
                      placeholder="Paste the job description here..."
                      className="min-h-[100px]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Your Relevant Experience</Label>
                    <Textarea
                      id="experience"
                      name="experience"
                      placeholder="Describe your relevant experience and skills..."
                      className="min-h-[100px]"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="rate">Hourly Rate ($)</Label>
                      <Input
                        id="rate"
                        name="rate"
                        type="number"
                        placeholder="e.g. 50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="availability">Availability (hrs/week)</Label>
                      <Input
                        id="availability"
                        name="availability"
                        type="number"
                        placeholder="e.g. 40"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user-name">Your Name*</Label>
                    <Input
                      id="user-name"
                      name="user-name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="client-name">Client Name (if available)</Label>
                    <Input
                      id="client-name"
                      name="client-name"
                      placeholder="Enter client's name"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-accent text-primary-foreground" size="lg" type="submit" disabled={loading}>
                    {loading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        <span>Generating...</span>
                      </div>
                    ) : (
                      "Generate Proposal"
                    )}
                  </Button>
                </form>
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
                {loading ? (
                  <div className="space-y-4">
                    <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
                    <div className="h-4 w-full animate-pulse rounded bg-muted" />
                    <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
                    <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
                  </div>
                ) : (
                  <Textarea
                    placeholder="Your generated proposal will appear here..."
                    className="min-h-[200px]"
                    value={generatedProposal}
                    readOnly
                  />
                )}
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-primary hover:bg-primary/10"
                    onClick={() => copyToClipboard(generatedProposal)}
                    disabled={!generatedProposal}
                  >
                    Copy to Clipboard
                  </Button>
                  <Button 
                    className="flex-1 bg-primary hover:bg-accent text-primary-foreground"
                    onClick={async () => {
                      const form = document.querySelector('form');
                      if (form && generatedProposal) {
                        const formData = new FormData(form);
                        await regenerateProposal(formData, generatedProposal);
                      }
                    }}
                    disabled={!generatedProposal || loading}
                  >
                    Regenerate Proposal
                  </Button>
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
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const projectTitle = formData.get("project-title") as string;
                  const projectDescription = formData.get("project-description") as string;
                  const budget = formData.get("budget") as string;
                  const duration = formData.get("duration") as string;

                  if (!projectTitle || !projectDescription || !budget || !duration) {
                    toast.error("Please fill in all required fields");
                    return;
                  }

                  setLoading(true);
                  setGeneratedJobPost("");
                  try {
                    const response = await fetch("/api/job-post", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        projectTitle,
                        projectDescription,
                        budget,
                        duration,
                      }),
                    });

                    if (!response.ok) {
                      throw new Error("Failed to generate job post");
                    }

                    const data = await response.json();
                    setGeneratedJobPost(data.jobPost);
                    toast.success("Job post generated successfully!");
                  } catch (error) {
                    console.error("Error generating job post:", error);
                    toast.error("Failed to generate job post. Please try again.");
                  } finally {
                    setLoading(false);
                  }
                }} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="project-title">Project Title</Label>
                    <Input
                      id="project-title"
                      name="project-title"
                      placeholder="e.g. Expert React Developer for SaaS Platform"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="project-description">Project Description</Label>
                    <Textarea
                      id="project-description"
                      name="project-description"
                      placeholder="Describe your project requirements..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range ($)</Label>
                      <Input
                        id="budget"
                        name="budget"
                        placeholder="e.g. 1000-2000"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Project Duration</Label>
                      <Input
                        id="duration"
                        name="duration"
                        placeholder="e.g. 2-3 months"
                        required
                      />
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-accent text-primary-foreground" size="lg" type="submit" disabled={loading}>
                    {loading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        <span>Generating...</span>
                      </div>
                    ) : (
                      "Generate Job Post"
                    )}
                  </Button>
                </form>
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
                {loading ? (
                  <div className="space-y-4">
                    <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
                    <div className="h-4 w-full animate-pulse rounded bg-muted" />
                    <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
                    <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
                  </div>
                ) : (
                  <Textarea
                    placeholder="Your generated job post will appear here..."
                    className="min-h-[200px]"
                    value={generatedJobPost}
                    readOnly
                  />
                )}
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-primary hover:bg-primary/10"
                    onClick={() => copyToClipboard(generatedJobPost)}
                    disabled={!generatedJobPost}
                  >
                    Copy to Clipboard
                  </Button>
                  <Button 
                    className="flex-1 bg-primary hover:bg-accent text-primary-foreground"
                    onClick={async () => {
                      const form = document.querySelector('form:last-of-type');
                      if (form && generatedJobPost) {
                        const formData = new FormData(form);
                        const projectTitle = formData.get("project-title") as string;
                        const projectDescription = formData.get("project-description") as string;
                        const budget = formData.get("budget") as string;
                        const duration = formData.get("duration") as string;

                        if (!projectTitle || !projectDescription || !budget || !duration) {
                          toast.error("Please fill in all required fields");
                          return;
                        }

                        setLoading(true);
                        try {
                          const response = await fetch("/api/job-post", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              projectTitle,
                              projectDescription,
                              budget,
                              duration,
                              previousJobPost: generatedJobPost,
                              isRegeneration: true
                            }),
                          });

                          if (!response.ok) {
                            throw new Error("Failed to regenerate job post");
                          }

                          const data = await response.json();
                          setGeneratedJobPost(data.jobPost);
                          toast.success("Job post regenerated successfully!");
                        } catch (error) {
                          console.error("Error regenerating job post:", error);
                          toast.error("Failed to regenerate job post. Please try again.");
                        } finally {
                          setLoading(false);
                        }
                      }
                    }}
                    disabled={!generatedJobPost || loading}
                  >
                    Regenerate Job Post
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}