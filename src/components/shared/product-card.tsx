import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <Link href="#">
          <div className="aspect-square relative w-full overflow-hidden">
            <Image
              src={product.image}
              alt={product.description}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              data-ai-hint={product.dataAiHint}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="text-lg font-headline">
          <Link href="#" className="hover:underline">{product.name}</Link>
        </CardTitle>
        <CardDescription className="mt-2 text-base text-foreground">
          ¥{product.price.toLocaleString('ja-JP')}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full" variant="outline">
          <Link href="#">商品を見る</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
