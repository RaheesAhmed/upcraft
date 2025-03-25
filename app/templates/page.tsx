import { templateCategories } from "@/utils/data";
import  TemplateCard  from "@/components/TemplateCard";

export default function Templates() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">AI-Powered Templates</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose from our curated collection of smart templates designed to help you create winning Upwork proposals. 
          Our AI will customize each template to match your skills and the project requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templateCategories.map((category) => (
          <TemplateCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}