import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { journalArticles } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'ジャーナル',
  description: 'SoraMode Styleチームがお届けする、日本のファッション文化、職人技、スタイリングに関するストーリー。',
};

export default function JournalPage() {
  return (
    <div>
      <section className="border-b bg-white">
        <div className="container mx-auto px-4 py-16 text-center sm:py-24">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            ジャーナルより
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            ストーリー、スタイルガイド、そして日本の職人技の世界への探求のためのスペース。
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          {journalArticles.map((article) => (
            <Link href={`/journal/${article.slug}`} key={article.slug} className="group">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={article.image}
                  alt={`記事「${article.title}」のヘッダー`}
                  width={1600}
                  height={900}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={article.dataAiHint}
                />
              </div>
              <div className="mt-6">
                <h2 className="font-headline text-2xl font-bold group-hover:text-accent">
                  {article.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {article.author} · {new Date(article.date).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="mt-4 text-base text-muted-foreground">
                  {article.excerpt}
                </p>
                <p className="mt-4 font-semibold text-accent group-hover:underline">
                  続きを読む
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
