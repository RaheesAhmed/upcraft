import { templateCategories } from "@/utils/data";
import TemplateCard from "@/components/TemplateCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Powered Upwork Proposal Templates | Upcraft",
  description: "Choose from our curated collection of smart templates designed to help you create winning Upwork proposals. Our AI customizes each template to match your skills and project requirements.",
  keywords: "Upwork templates, proposal templates, AI writing, freelance proposals, Upwork success, technical proposals, business proposals, creative proposals",
  openGraph: {
    title: "AI-Powered Upwork Proposal Writing | Upcraft",
    description: "Create winning Upwork proposals with our AI-powered templates. Customized for your skills and project requirements.",
    type: "website",
    url: "https://upcraft.vercel.app/prompts",
    images: [
      {
        url: "/og-templates.png",
        width: 1200,
        height: 630,
        alt: "Upcraft AI-Powered Templates"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Upwork Proposal Templates",
    description: "Create winning Upwork proposals with our AI-powered templates. Customized for your skills and project requirements.",
    images: ["/og-templates.png"]
  }
};

// Structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Upcraft AI Templates",
  "applicationCategory": "BusinessApplication",
  "description": "AI-powered templates for creating winning Upwork proposals",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Technical Development Templates",
    "Creative & Design Templates",
    "Business & Consulting Templates"
  ]
};

export default function Templates() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">
            AI-Powered Templates
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Choose from our curated collection of smart templates designed to help you create winning Upwork proposals. 
            Our AI will customize each template to match your skills and the project requirements.
          </p>
        </section>

        <section 
          className="bg-card rounded-xl p-6 shadow-sm border"
          aria-label="Template Categories and Prompts"
        >
          <TemplateCard categories={templateCategories} />
        </section>
      </main>
    </>
  );
}