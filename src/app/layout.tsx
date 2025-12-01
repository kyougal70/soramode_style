import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PreferenceProvider } from '@/contexts/preference-context';
import {FpjsProvider} from "@fingerprintjs/fingerprintjs-pro-react";

export const metadata: Metadata = {
  title: {
    default: 'SoraMode Style - 本物の日本のファッション',
    template: '%s | SoraMode Style',
  },
  description:
    'ミニマリストで現代的な日本のファッションを発見してください。SoraMode Styleは、高品質な素材、倫理的な生産、時代を超越したデザインに焦点を当てた、男性、女性、ユニセックス向けの厳選されたコレクションを提供しています。',
  openGraph: {
    title: 'SoraMode Style - 本物の日本のファッション',
    description: '現代のワードローブのための時代を超越した日本のデザイン。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://soramode-style.example.com',
    siteName: 'SoraMode Style',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
          <script async defer src="https://tools.luckyorange.com/core/lo.js?site-id=bbd549d8"></script>
          {/* Google Tag Manager Script */}
          <script
              src="https://www.googletagmanager.com/gtag/js?id=AW-17642653097"
          />

          <script id="gtag-init">
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17642653097');
          `}
          </script>
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased'
        )}
      >
      <FpjsProvider
          loadOptions={{
            apiKey: 'tANDnMoEVRSEhxd2XdqQ',
          }}
      >
        <PreferenceProvider>
          <div className="relative flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </PreferenceProvider>

      </FpjsProvider>
      </body>
    </html>
  );
}
