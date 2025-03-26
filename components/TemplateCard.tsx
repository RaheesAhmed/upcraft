"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Template } from "@/utils/data";
import { Code, Smile, TrendingUp, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const iconMap = {
  code: Code,
  smile: Smile,
  "trending-up": TrendingUp
};

interface TemplateCardProps {
  categories: Template[];
}

export default function TemplateCard({ categories }: TemplateCardProps) {
  const [selectedCategory, setSelectedCategory] = useState<Template>(categories[0]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      toast.success("Prompt copied to clipboard!", {
        style: {
          background: '#1a1a1a',
          color: '#ffffff',
          borderRadius: '8px',
          border: `1px solid ${selectedCategory.color}`,
        },
      });
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      toast.error("Failed to copy prompt");
    }
  };

  return (
    <div className="flex gap-8">
      {/* Left Sidebar - Categories */}
      <nav 
        className="w-80 flex-shrink-0 space-y-2"
        aria-label="Template Categories"
      >
        {categories.map((category) => {
          const Icon = iconMap[category.icon as keyof typeof iconMap];
          const isSelected = selectedCategory.id === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category)}
              className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-200 ${
                isSelected 
                  ? 'bg-opacity-10 shadow-sm backdrop-blur-sm' 
                  : 'hover:bg-accent/10'
              }`}
              style={{
                backgroundColor: isSelected ? `${category.color}20` : undefined,
                borderLeft: isSelected ? `4px solid ${category.color}` : '4px solid transparent'
              }}
              aria-selected={isSelected}
              aria-controls={`prompts-${category.id}`}
              role="tab"
            >
              <div 
                className={`p-2 rounded-lg ${isSelected ? `${category.color} bg-opacity-100` : 'bg-opacity-10'}`}
                style={{ backgroundColor: category.color }}
                aria-hidden="true"
              >
                <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-primary'}`} />
              </div>
              <div>
                <h3 className={`font-medium ${isSelected ? 'text-primary' : ''}`}>
                  {category.title}
                </h3>
                <p className={`text-xs ${
                  isSelected ? 'text-primary/80' : 'text-muted-foreground'
                }`}>
                  {category.description}
                </p>
              </div>
            </button>
          );
        })}
      </nav>

      {/* Right Content - Individual Prompt Cards */}
      <div 
        className="flex-1"
        role="tabpanel"
        id={`prompts-${selectedCategory.id}`}
        aria-label={`${selectedCategory.title} Prompts`}
      >
        <header className="mb-6">
          <h2 className="text-2xl font-semibold text-foreground">
            {selectedCategory.title}
          </h2>
          <p className="text-sm text-muted-foreground">
            Click on any prompt to copy it to your clipboard
          </p>
        </header>

        <div 
          className="grid gap-4"
          role="list"
          aria-label={`${selectedCategory.title} Template List`}
        >
          {selectedCategory.templates.map((template, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              role="listitem"
            >
              <Card 
                className="group relative border hover:border-primary/20 transition-all duration-200"
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-green shrink-0"
                      style={{ 
                        backgroundColor: selectedCategory.color,
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                      }}
                      aria-hidden="true"
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1 pr-10">
                      <p className="text-sm leading-relaxed">
                        {template}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-all duration-200"
                      onClick={() => copyToClipboard(template, index)}
                      aria-label={`Copy template ${index + 1}`}
                    >
                      {copiedIndex === index ? (
                        <Check className="h-4 w-4 text-green-500" aria-hidden="true" />
                      ) : (
                        <Copy className="h-4 w-4" aria-hidden="true" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 