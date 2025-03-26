import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostById, getAllPosts } from "@/utils/posts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { SocialShare } from "@/components/SocialShare";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostById(params.id);
  
  if (!post) {
    return {
      title: "Post Not Found | Upcraft Blog",
      description: "The requested blog post could not be found."
    };
  }

  return {
    title: `${post.title} | Upcraft Blog`,
    description: post.description,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [{ url: post.thumbnail, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.thumbnail],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPost({ params }: Props) {
  const post = getPostById(params.id);

  if (!post) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.thumbnail,
    "datePublished": post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author.name,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Upcraft",
      "logo": {
        "@type": "ImageObject",
        "url": "https://upcraft.vercel.app/logo.png"
      }
    },
    "keywords": post.tags.join(", "),
    "articleBody": post.content
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <article className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link href="/blog" className="inline-block mb-8">
            <Button variant="ghost" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          {/* Hero Section */}
          <header className="mb-12">
            <div className="flex gap-2 mb-6 flex-wrap">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <time dateTime={post.publishedAt}>
                  {format(new Date(post.publishedAt), "MMMM d, yyyy")}
                </time>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full mb-12 rounded-lg overflow-hidden">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Social Share */}
          <SocialShare 
            url={`https://upcraft.vercel.app/blog/${post.id}`}
            title={post.title}
          />

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-lead:text-muted-foreground prose-a:text-primary">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-4xl font-bold tracking-tight mt-8 mb-4">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold tracking-tight mt-6 mb-3">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
    </>
  );
} 