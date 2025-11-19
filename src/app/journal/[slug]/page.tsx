import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { journalArticles } from '@/lib/constants';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = journalArticles.find((p) => p.slug === params.slug);
  if (!article) {
    return {
      title: '記事が見つかりません',
    };
  }
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
        title: article.title,
        description: article.excerpt,
        type: 'article',
        authors: [article.author],
        publishedTime: new Date(article.date).toISOString(),
    }
  };
}

export async function generateStaticParams() {
    return journalArticles.map((article) => ({
      slug: article.slug,
    }));
}

export default function JournalArticlePage({ params }: { params: { slug: string } }) {
  const article = journalArticles.find((p) => p.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article>
        <header className="relative h-96 w-full">
            <Image
                src={article.image}
                alt={`記事「${article.title}」のヘッダー画像`}
                fill
                className="object-cover"
                priority
                data-ai-hint={article.dataAiHint}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                <h1 className="font-headline text-4xl font-bold max-w-4xl px-4 md:text-6xl">
                    {article.title}
                </h1>
                <p className="mt-4 text-lg">
                    {article.author} &middot; {new Date(article.date).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
            </div>
        </header>
      
        <div className="bg-white py-16 sm:py-24">
            <div
                className="prose prose-lg lg:prose-xl mx-auto px-4 text-foreground prose-headings:font-headline prose-headings:text-foreground"
                dangerouslySetInnerHTML={{ __html: article.content }}
            />
        </div>
    </article>
  );
}
