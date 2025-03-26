import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

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
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/craft" className="text-muted-foreground hover:text-foreground transition-colors">
            Create Proposal
          </Link>
          <Link href="/templates" className="text-muted-foreground hover:text-foreground transition-colors">
            Templates
          </Link>
          <Link href='/tos' className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
          <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <>
              <SignInButton mode="redirect">
                <Button variant="ghost">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="redirect">
                <Button>Get Started</Button>
              </SignUpButton>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
