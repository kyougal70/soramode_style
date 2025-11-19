import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, Feather, Scissors, Wind } from 'lucide-react';
import { ProductCard } from '@/components/shared/product-card';
import { products } from '@/lib/constants';
import { NewsletterForm } from '@/components/shared/newsletter-form';
import {imgUrl} from "@/config";

export default function Home() {
  const featuredProducts = products.filter(p => ['men', 'women', 'unisex'].includes(p.category)).slice(0, 3);
  const img1 = `${imgUrl}/home.png`
  const img2 = `${imgUrl}/home2.png`

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] min-h-[400px] w-full bg-primary/20">
        <Image
          src={img1}
          alt="夕暮れの東京の路上でミニマリストな重ね着の衣装を着たモデルたち。"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
          data-ai-hint="Tokyo dusk street models minimalist layered"
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center bg-black/30 text-center text-white">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            フォルムの簡潔さ
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            日本の精密さと時代を超えた快適さが融合した、厳選されたワードローブをご覧ください。
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/collections/unisex">新着商品をみる</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Feather className="mb-4 h-10 w-10 text-accent" />
              <h3 className="font-headline text-2xl font-semibold">
                本物の職人技
              </h3>
              <p className="mt-2 text-muted-foreground">
                日本中の小規模な家族経営の工房と提携し、本物の品質をお届けします。
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Scissors className="mb-4 h-10 w-10 text-accent" />
              <h3 className="font-headline text-2xl font-semibold">
                考え抜かれたデザイン
              </h3>
              <p className="mt-2 text-muted-foreground">
                すべてのアイテムは、多様性、快適さ、長寿命を考慮してデザインされており、一時的なトレンドを超越しています。
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Wind className="mb-4 h-10 w-10 text-accent" />
              <h3 className="font-headline text-2xl font-semibold">
                意識的な素材
              </h3>
              <p className="mt-2 text-muted-foreground">
                オーガニックコットンから日本のセルビッジデニムまで、サステナブルで高品質な生地を優先しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              注目コレクション
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              現代のライフスタイルのあらゆる側面に対応する、当社のコアコレクションをご覧ください。
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/collections/unisex">
                すべてのコレクションを見る <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                季節の新作：リネン特集
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                暖かい季節を、軽やかで通気性の良いリネン素材の新しいコレクションで迎えましょう。関西地方で巧みに織られ、仕立てられたこれらの衣服は、比類のない快適さと優雅でリラックスしたシルエットを提供します。重ね着としても、単独で主張するアイテムとしても最適です。
              </p>
              <Button asChild className="mt-6">
                <Link href="/collections/women">コレクションを見る</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src={img2}
                alt="ニュートラルカラーのミニマリストなリネン服の平置き。"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint="linen clothing flat lay neutral"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">倫理的でサステナブル</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            SoraMode Styleでは、真のスタイルは意識的であると信じています。環境に優しい素材の調達から、職人パートナーへの公正な賃金の確保まで、倫理的な生産と持続可能な慣行に取り組んでいます。私たちの目標は、人と地球の両方に敬意を払って作られた、着ていて気持ちの良い美しい服を作ることです。
            </p>
            <Button asChild variant="link" className="mt-4 text-accent">
                <Link href="/about">
                    私たちの哲学についてもっと知る <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </section>

      <section className="border-t py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              私たちの世界に参加する
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              新着商品、限定コレクション、ジャーナルの物語をいち早くお届けします。
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
