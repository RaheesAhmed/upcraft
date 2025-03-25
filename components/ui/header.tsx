import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { 
  ImageIcon, 
  Sparkles, 
  FolderOpen, 
  User,
  Menu
} from "lucide-react";
import {
  SignInButton,
  SignedIn, 
  SignedOut, 
  UserButton 
} from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="w-full max-w-6xl mx-auto py-3 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="mr-6">
            <Logo />
          </Link>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/edit">Editor</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/generate">Generate</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/gallery">Gallery</Link>
              </DropdownMenuItem>
              <SignedIn>
                <DropdownMenuItem asChild>
                  <Link href="/account">My Account</Link>
                </DropdownMenuItem>
              </SignedIn>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="hidden md:flex items-center space-x-3">
          <Button asChild variant="ghost" size="sm">
            <Link href="/edit">
              <ImageIcon className="mr-2 h-4 w-4" /> Edit
            </Link>
          </Button>
          
          <Button asChild variant="ghost" size="sm">
            <Link href="/generate">
              <Sparkles className="mr-2 h-4 w-4" /> Create
            </Link>
          </Button>
          
          <Button asChild variant="ghost" size="sm">
            <Link href="/gallery">
              <FolderOpen className="mr-2 h-4 w-4" /> Gallery
            </Link>
          </Button>
          
          <SignedIn>
            <Button asChild variant="outline" size="sm">
              <Link href="/account">
                <User className="mr-2 h-4 w-4" /> My Account
              </Link>
            </Button>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-8 h-8"
                }
              }}
            />
          </SignedIn>
          
          <SignedOut>
            <SignInButton mode="modal">
              <Button size="sm" variant="default">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
          
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
} 