import { notFound } from 'next/navigation';
import { products } from '@/lib/constants';
import CollectionClientPage from '@/components/collections/collection-client-page';
import {imgUrl} from "@/config";

const collectionData = {
  men: {
    title: 'メンズコレクション',
    description: '現代の男性のために考え抜かれた、品質、快適さ、そして時代を超越したスタイルのエッセンシャル。',
    banner: { src: `${imgUrl}/man_top.jpg`, hint: 'mens fashion minimalist' },
  },
  women: {
    title: 'ウィメンズコレクション',
    description: '現代的な美学と永続的な職人技を融合させた、エレガントで多目的なアイテム。',
    banner: { src: `${imgUrl}/woman_top.jpg`, hint: 'womens fashion elegant' },
  },
  unisex: {
    title: 'ユニセックスコレクション',
    description: 'フォルムと機能に焦点を当て、伝統的な境界を超えて誰もが着られるようにデザインされた衣服。',
    banner: { src: `${imgUrl}/home.png`, hint: 'unisex fashion modern' },
  },
  traditional: {
    title: '伝統的なインスピレーション',
    description: '時代を超越したシルエットと技術を称賛する、クラシックな日本の衣服の現代的な解釈。',
    banner: { src: `${imgUrl}/traditional_top.jpg`, hint: 'kimono garment wooden stand' },
  },
  streetwear: {
    title: 'ストリートウェア',
    description: '東京のストリートの活気に満ちたエネルギーにインスパイアされた、リラックスしたフィット感と現代的なグラフィック。',
    banner: { src: `${imgUrl}/streetwear_top.jpg`, hint: 'Harajuku crosswalk blur model' },
  },
  'minimal-workwear': {
    title: 'ミニマルワークウェア',
    description: '仕事と余暇の境界線を曖昧にする、洗練された機能的なアイテム。耐久性とスタイルを追求。',
    banner: { src: `${imgUrl}/minimal-workwear_top.jpg`, hint: 'minimalist office fashion' },
  },
};

export async function generateStaticParams() {
  return Object.keys(collectionData).map((slug) => ({
    slug,
  }));
}


export default function CollectionPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  if (!Object.keys(collectionData).includes(slug)) {
    notFound();
  }

  const data = collectionData[slug as keyof typeof collectionData];
  const allProducts = products;

  return <CollectionClientPage pageSlug={slug} data={data} allProducts={allProducts} />;
}
