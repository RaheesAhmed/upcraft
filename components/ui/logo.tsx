import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/gemma-ai-logo.svg"
        alt="Gemma AI Logo"
        width={160}
        height={40}
        priority
        className={showText ? 'w-auto h-10' : 'w-10 h-10'}
      />
      {!showText && <span className="sr-only">Gemma AI</span>}
    </Link>
  );
} 