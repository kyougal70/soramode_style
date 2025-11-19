import Link from 'next/link';
import { Logo } from '@/components/shared/logo';
import { Github, Twitter, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Github, href: '#', label: 'Github' },
];

const footerLinks = [
  { href: '/about', label: '私たちについて' },
  { href: '/journal', label: 'ジャーナル' },
  { href: '/contact', label: 'お問い合わせ' },
  { href: '/policies', label: 'ポリシー' },
  { href: '/policies#shipping', label: '配送と返品' },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-4">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground">
              現代のワードローブのための、時代を超えた日本のデザイン。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div>
              <h3 className="font-headline text-sm font-semibold tracking-wider text-foreground">ショップ</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/collections/men" className="text-sm text-muted-foreground hover:text-foreground">メンズ</Link></li>
                <li><Link href="/collections/women" className="text-sm text-muted-foreground hover:text-foreground">ウィメンズ</Link></li>
                <li><Link href="/collections/unisex" className="text-sm text-muted-foreground hover:text-foreground">ユニセックス</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-sm font-semibold tracking-wider text-foreground">会社概要</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.map(link => (
                    <li key={link.href}>
                        <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                            {link.label}
                        </Link>
                    </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-sm font-semibold tracking-wider text-foreground">フォローする</h3>
              <div className="mt-4 flex space-x-4">
                {socialLinks.map((social) => (
                  <Link key={social.label} href={social.href} className="text-muted-foreground hover:text-foreground">
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SoraMode Style. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
