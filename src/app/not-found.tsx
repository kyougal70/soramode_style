import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Frown } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <Frown className="h-16 w-16 text-muted-foreground" />
      <h1 className="mt-8 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
        404 - ページが見つかりません
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        申し訳ありませんが、お探しのページは見つかりませんでした。
      </p>
      <Button asChild className="mt-8">
        <Link href="/">ホームに戻る</Link>
      </Button>
    </div>
  );
}
