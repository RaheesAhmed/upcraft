import { Metadata } from "next";
import { getAllPosts } from "@/utils/posts";
import { BlogContent } from "@/components/BlogContent";

export const metadata: Metadata = {
  title: "Upwork & Freelancing Blog | Upcraft",
  description: "Expert tips and strategies for Upwork success and freelancing. Learn how to optimize your profile, win more clients, and grow your freelance business.",
  keywords: "Upwork tips, freelancing blog, freelance success, Upwork profile optimization, freelance business tips, remote work advice",
  openGraph: {
    title: "Upwork & Freelancing Blog | Upcraft",
    description: "Expert tips and strategies for Upwork success and freelancing.",
    images: [{ url: "/blog/blog-og.jpg", width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Upcraft Blog",
    "description": "Expert tips and strategies for Upwork success and freelancing",
    "publisher": {
      "@type": "Organization",
      "name": "Upcraft",
      "logo": {
        "@type": "ImageObject",
        "url": "https://upcraft.vercel.app/logo.png"
      }
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "datePublished": post.publishedAt,
      "author": {
        "@type": "Person",
        "name": post.author.name
      },
      "keywords": post.tags.join(", ")
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <BlogContent />
      </main>
    </>
  );
}
