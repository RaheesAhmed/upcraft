"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/utils/posts";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { NewsletterSubscribe } from "@/components/NewsletterSubscribe";

export function BlogContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  const allPosts = getAllPosts();
  const allTags = Array.from(new Set(allPosts.flatMap(post => post.tags)));
  
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  return (
    <div className="container mx-auto max-w-7xl">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Upwork Success & Freelancing Tips
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Expert insights to help you thrive in your freelancing career.
          Learn from experienced professionals and stay ahead in the game.
        </p>
      </section>

      {/* Newsletter Section */}
      <section className="mb-16">
        <NewsletterSubscribe />
      </section>

      {/* Search and Filter Section */}
      <section className="mb-12">
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Tags Filter */}
          <div className="flex gap-2 flex-wrap justify-center sm:justify-end">
            <Badge
              variant={selectedTag === null ? "default" : "secondary"}
              className="cursor-pointer"
              onClick={() => setSelectedTag(null)}
            >
              All
            </Badge>
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? "default" : "secondary"}
                className="cursor-pointer"
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Card 
              key={post.id}
              className="group hover:shadow-lg transition-all duration-300"
            >
              <Link href={`/blog/${post.id}`}>
                <CardHeader className="p-0">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground line-clamp-2">
                    {post.description}
                  </p>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div className="text-sm">
                      <p className="font-medium">{post.author.name}</p>
                      <p className="text-muted-foreground">{post.author.role}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {post.readingTime}
                  </div>
                </CardFooter>
              </Link>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-lg text-muted-foreground">
              No articles found matching your search criteria.
            </p>
          </div>
        )}
      </section>
    </div>
  );
} 