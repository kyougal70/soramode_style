"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Logo } from '@/components/shared/logo';
import { cn } from '@/lib/utils';
import type { NavLink } from '@/lib/types';
import { usePathname } from 'next/navigation';

const navLinks: NavLink[] = [
  {
    href: '/collections/men',
    label: 'メンズ',
  },
  {
    href: '/collections/women',
    label: 'ウィメンズ',
  },
  {
    href: '/collections/unisex',
    label: 'ユニセックス',
  },
  {
    href: '#',
    label: 'スタイル別',
    subLinks: [
      { href: '/collections/traditional', label: 'トラディショナル' },
      { href: '/collections/streetwear', label: 'ストリートウェア' },
      { href: '/collections/minimal-workwear', label: 'ミニマルワークウェア' },
    ],
  },
  {
    href: '/journal',
    label: 'ジャーナル',
  },
  {
    href: '/about',
    label: '私たちについて',
  },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) =>
            link.subLinks ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-sm font-medium">
                    {link.label}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {link.subLinks.map((subLink) => (
                    <DropdownMenuItem key={subLink.href} asChild>
                      <Link href={subLink.href}>{subLink.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                    "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                    pathname === link.href && "text-foreground"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
        <div className="flex items-center gap-2">
            <Button asChild variant="ghost">
                <Link href="/contact">お問い合わせ</Link>
            </Button>
            <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
            >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) =>
              link.subLinks ? (
                <div key={link.label}>
                    <p className="px-2 py-1.5 text-sm font-semibold">{link.label}</p>
                    {link.subLinks.map((subLink) => (
                        <Link
                            key={subLink.href}
                            href={subLink.href}
                            className="block rounded-md px-4 py-2 text-muted-foreground hover:bg-accent"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {subLink.label}
                        </Link>
                    ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-2 py-2 text-base font-medium text-muted-foreground hover:bg-accent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
