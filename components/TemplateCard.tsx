"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Template } from "@/utils/data";
import { Code, Smile, TrendingUp, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const iconMap = {
  code: Code,
  smile: Smile,
  "trending-up": TrendingUp
};

interface TemplateCardProps {
  category: Template;
}

export default function TemplateCard({ category }: TemplateCardProps) {
  const Icon = iconMap[category.icon as keyof typeof iconMap];
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      toast.success("Prompt copied!");
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      toast.error("Failed to copy prompt");
    }
  };

  // Group templates by every 10 items for better organization
  const groupedTemplates = category.templates.reduce((acc, template, index) => {
    const groupIndex = Math.floor(index / 10);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push({ template, index });
    return acc;
  }, [] as Array<Array<{ template: string; index: number }>>);

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader className="flex-none">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-lg ${category.color}`}>
            <Icon className={`text-${category.color.split('-')[1]}-600`} size={24} />
          </div>
          <div>
            <CardTitle className="text-xl">{category.title}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {category.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <ScrollArea className="h-[480px] pr-4">
          <Accordion type="single" collapsible className="space-y-2">
            {groupedTemplates.map((group, groupIndex) => (
              <AccordionItem 
                key={groupIndex} 
                value={`group-${groupIndex}`}
                className="border rounded-lg px-2"
              >
                <AccordionTrigger className="text-sm hover:no-underline">
                  Prompts {groupIndex * 10 + 1}-{groupIndex * 10 + group.length}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 py-2">
                    {group.map(({ template, index }) => (
                      <div
                        key={index}
                        className="group relative flex items-start gap-2 p-3 rounded-md hover:bg-muted transition-colors"
                      >
                        <p className="text-sm flex-1 pr-10">{template}</p>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => copyToClipboard(template, index)}
                        >
                          {copiedIndex === index ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollArea>
      </CardContent>
    </Card>
  );
} 