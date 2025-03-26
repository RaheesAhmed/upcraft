import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export async function Header() {
  const { userId } = await auth();
  const isSignedIn = !!userId;

  return (
    <header className="border-b w-full">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-primary"
          >
            <path d="M2 20h.01M7 20v-4" />
            <path d="M12 20v-8" />
            <path d="M17 20V8" />
            <path d="M22 4v16" />
          </svg>
          <span className="font-bold text-xl">Upcraft</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/craft" className="text-muted-foreground hover:text-foreground transition-colors">
            Create Proposal
          </Link>
          <Link href="/prompts" className="text-muted-foreground hover:text-foreground transition-colors">
            Prompts
          </Link>
          <Link href='/tos' className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
          <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href='/blog' className='text-muted-foreground hover:text-foreground transition-colors'>Blog</Link>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-primary hover:text-primary/90">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] p-0">
              <SheetHeader className="p-6 border-b">
                <SheetTitle className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M2 20h.01M7 20v-4" />
                    <path d="M12 20v-8" />
                    <path d="M17 20V8" />
                    <path d="M22 4v16" />
                  </svg>
                  <span className="font-bold text-xl">Upcraft</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col py-6">
                <Link 
                  href="/craft" 
                  className="px-6 py-3 text-sm font-medium hover:bg-muted transition-colors flex items-center text-foreground"
                >
                  Create Proposal
                </Link>
                <Link 
                  href="/prompts" 
                  className="px-6 py-3 text-sm font-medium hover:bg-muted transition-colors flex items-center text-foreground"
                >
                  Prompts
                </Link>
                <Link 
                  href='/tos' 
                  className="px-6 py-3 text-sm font-medium hover:bg-muted transition-colors flex items-center text-foreground"
                >
                  Terms of Service
                </Link>
                <Link 
                  href="/pricing" 
                  className="px-6 py-3 text-sm font-medium hover:bg-muted transition-colors flex items-center text-foreground"
                >
                  Pricing
                </Link>
                <Link 
                  href='/blog' 
                  className="px-6 py-3 text-sm font-medium hover:bg-muted transition-colors flex items-center text-foreground"
                >
                  Blog
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <ThemeToggle />
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <>
              <SignInButton mode="redirect">
                <Button variant="default" className="md:variant-ghost">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="redirect" className="hidden md:block">
                <Button>Get Started</Button>
              </SignUpButton>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
