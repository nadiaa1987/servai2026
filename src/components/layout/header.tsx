'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#how-it-works', label: 'Processo' },
  { href: '#services', label: 'Servizi' },
  { href: '#case-studies', label: 'Casi di Successo' },
  { href: '#contact', label: 'Contatti' },
  { href: '#faqs', label: 'Domande Frequenti' },
];

const Logo = () => (
    <div className="flex items-center gap-2 text-2xl font-bold font-headline tracking-tight">
        <div className="w-7 h-7 flex items-center justify-center bg-primary rounded-md">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="hsl(var(--primary-foreground))"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 8V4H8" />
                <rect width="12" height="12" x="4" y="8" rx="2" />
                <path d="M8 12h4" />
                <path d="M12 16h4" />
                <path d="M16 12v4" />
            </svg>
        </div>
      <span className="text-white">SERV</span>
      <span className="text-primary">AI</span>
    </div>
);


export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-center">
          {/* Desktop and Tablet navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-between backdrop-blur-md bg-black/30 border border-gray-800/50 rounded-full px-4 py-2">
            <Link href="/" className="flex-shrink-0">
              <Logo />
            </Link>
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
              <a href="mailto:Servai@pec.servai.it">Richiedi una Demo</a>
            </Button>
          </div>

          {/* Mobile navigation */}
          <div className="lg:hidden flex w-full items-center justify-between px-4">
            <Link href="/">
              <Logo />
            </Link>
            <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l-gray-800 w-full">
                <div className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                     <Link href="/" onClick={() => setMenuOpen(false)}>
                        <Logo />
                     </Link>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetTrigger>
                  </div>
                  <nav className="mt-12 flex flex-col space-y-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-gray-200 hover:text-white"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                   <Button asChild className="mt-auto bg-primary text-primary-foreground hover:bg-primary/90">
                      <a href="mailto:Servai@pec.servai.it">Richiedi una Demo</a>
                    </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
