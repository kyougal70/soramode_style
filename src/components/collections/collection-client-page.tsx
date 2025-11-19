"use client";

import { useMemo, useState } from 'react';
import Image from 'next/image';
import type { Product } from '@/lib/types';
import { ProductCard } from '@/components/shared/product-card';
import { usePreferenceContext } from '@/contexts/preference-context';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info } from 'lucide-react';

type SortOption = 'newest' | 'price-asc' | 'price-desc';

interface CollectionClientPageProps {
    pageSlug: string;
    data: {
        title: string;
        description: string;
        banner: { src: string, hint: string };
    };
    allProducts: Product[];
}

export default function CollectionClientPage({ pageSlug, data, allProducts }: CollectionClientPageProps) {
    const { preference } = usePreferenceContext();
    const [sort, setSort] = useState<SortOption>('newest');

    const filteredProducts = useMemo(() => {
        let initialFilter: Product[];
        if (pageSlug === 'men' || pageSlug === 'women' || pageSlug === 'unisex') {
            initialFilter = allProducts.filter((p) => p.category === pageSlug || p.category === 'unisex');
        } else {
            initialFilter = allProducts.filter((p) => p.category === pageSlug);
        }

        if (preference !== 'all' && preference !== pageSlug) {
            if(pageSlug === 'unisex' && (preference === 'men' || preference === 'women')) {
            } else if (pageSlug !== 'men' && pageSlug !== 'women') {
                initialFilter = initialFilter.filter(p => p.category === preference || p.category === 'unisex' || p.category === pageSlug)
            }
        }

        switch (sort) {
            case 'price-asc':
                return [...initialFilter].sort((a, b) => a.price - b.price);
            case 'price-desc':
                return [...initialFilter].sort((a, b) => b.price - a.price);
            case 'newest':
            default:
                return initialFilter;
        }
    }, [pageSlug, sort, preference, allProducts]);

    return (
        <div>
            <section className="relative h-64 w-full bg-primary/10">
                <Image
                    src={data.banner.src}
                    alt={`Banner for ${data.title}`}
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                    priority
                    data-ai-hint={data.banner.hint}
                />
                <div className="relative z-10 flex h-full flex-col items-center justify-center bg-black/20 text-center text-white">
                    <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">{data.title}</h1>
                    <p className="mt-4 max-w-2xl px-4 text-lg">{data.description}</p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                <div className="mb-8 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">{filteredProducts.length} 商品</p>
                    <Select onValueChange={(value) => setSort(value as SortOption)} defaultValue="newest">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="並べ替え" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="newest">新着順</SelectItem>
                            <SelectItem value="price-asc">価格: 安い順</SelectItem>
                            <SelectItem value="price-desc">価格: 高い順</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {preference !== 'all' && (preference === 'men' || preference === 'women') && (
                    <Alert className="mb-8 bg-accent/20 border-accent/50">
                        <Info className="h-4 w-4 text-accent" />
                        <AlertTitle className="font-headline text-accent">フィルター表示</AlertTitle>
                        <AlertDescription>
                            「{preference === 'men' ? '男性' : '女性'}」の好みに基づいて結果を表示しています。これはいつでも変更できます。
                        </AlertDescription>
                    </Alert>
                )}

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="py-24 text-center">
                        <h2 className="font-headline text-2xl">商品が見つかりません</h2>
                        <p className="mt-2 text-muted-foreground">
                            現在のフィルターに一致する商品がありません。
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
