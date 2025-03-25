import Image from "next/image";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col items-center text-center gap-8">
              <Logo showText={true} className="w-48 h-auto" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Write Winning Upwork<br />
                <span className="text-primary">Proposals with AI</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                Generate tailored, high-converting Upwork proposals in seconds.
                Save your connects and increase your success rate with AI-powered assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Generate Proposal
                </Button>
                <Button size="lg" variant="outline">
                  Create Job Post
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Upcraft</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 mb-4 text-primary">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-6 rounded-lg bg-background shadow-sm">
                  <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
     
    </div>
  );
}

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.171-.879-1.171-2.303 0-3.182C10.582 7.72 11.45 7.5 12 7.5c.725 0 1.45.22 2.003.659" />
      </svg>
    ),
    title: "Save Your Connects",
    description: "Get AI-generated proposals that convert, ensuring you never waste connects on ineffective pitches."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "AI-Powered Writing",
    description: "Our AI analyzes job posts and crafts compelling proposals that highlight your relevant skills and experience."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Best Practices Built-in",
    description: "Every proposal follows proven templates and strategies that increase your chances of getting hired."
  }
];

const testimonials = [
  {
    quote: "Upcraft's AI helped me land 3 clients in my first week on Upwork. The proposals were perfectly tailored to each job.",
    name: "Sarah Chen",
    role: "Freelance Designer",
    avatar: "/avatars/avatar-1.svg"
  },
  {
    quote: "The AI understands exactly what clients want to hear. My interview rate has doubled since I started using Upcraft.",
    name: "Michael Rodriguez",
    role: "Full-stack Developer",
    avatar: "/avatars/avatar-2.svg"
  },
  {
    quote: "As a client, I love how Upcraft helps freelancers write clear, focused proposals that address my project needs.",
    name: "Emily Taylor",
    role: "Project Manager",
    avatar: "/avatars/avatar-3.svg"
  }
];
