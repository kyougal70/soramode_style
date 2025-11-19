import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import {imgUrl} from "@/config";

export const metadata: Metadata = {
  title: '私たちについて',
  description: 'SoraMode Styleの哲学、サステナブルな素材へのこだわり、そして日本の職人とのパートナーシップについてご覧ください。',
};

export default function AboutPage() {
  const img1 = `${imgUrl}/about1.jpg`
  const img2 = `${imgUrl}/about2.jpg`
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            私たちの哲学
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            SoraMode Styleは、日本の美意識—バランス、静かな自信、本質的なフォルムへの集中—への深い感謝から生まれました。私たちはただ着るだけでなく、その中で生きるための服を創り出します。
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <Image
              src={img1}
              alt="藍染めの生地を丁寧に折りたたむ職人の手。"
              width={800}
              height={600}
              className="rounded-lg object-cover shadow-lg"
              data-ai-hint="artisan hands indigo fabric"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight">
              SoraMode Styleの物語
            </h2>
            <p className="mt-4 text-muted-foreground">
              デザイナーの伊藤亜美によって設立されたSoraMode Styleは、モダンでありながら時代を超越した服を見つけるための個人的な探求から始まりました。祖母のヴィンテージ着物コレクションと自身のミニマリスト建築への愛情に触発され、亜美は世代を繋ぐワードローブを構想しました。彼女は伝統的な日本のシルエットの優雅さと、現代的なライフスタイルに必要な実用性を融合させることを目指しました。
            </p>
            <p className="mt-4 text-muted-foreground">
              私たちの名前はこの二元性を反映しています。「そら」は空を意味し、瞬間の儚い美しさを表し、「モード」は永続的で個人的な自己表現を意味します。私たちはトレンドを追いかけるのではなく、年月をかけて大切にされ、着用者と共に進化し、個性を増していくような、考え抜かれた作品を創り出します。それは「より少なく、しかしより良く」という哲学であり、ファストファッションのペースに対する静かな反抗です。
            </p>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-center font-headline text-3xl font-bold tracking-tight">
            素材とサステナビリティ
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-muted-foreground">
            品質は原材料から始まると私たちは信じています。サステナビリティへの私たちのコミットメントは、あらゆる段階で責任ある選択を行うことに焦点を当てた、継続的な改善の旅です。
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
            <div className="text-center">
              <h3 className="font-headline text-xl font-semibold">天然繊維</h3>
              <p className="mt-2 text-muted-foreground">
                私たちは、GOTS認定オーガニックコットン、通気性の良いリネン、柔らかいTencel™リヨセルなど、再生可能で生分解性の素材を優先し、合成繊維への依存を減らしています。
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-headline text-xl font-semibold">日本の職人技</h3>
              <p className="mt-2 text-muted-foreground">
                私たちのデニムは、セルビッジの専門知識で知られる岡山の有名な工場から調達しています。生地の多くは、日本中の小規模で専門的な工房で織られ、染められています。
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-headline text-xl font-semibold">意識的な生産</h3>
              <p className="mt-2 text-muted-foreground">
                私たちは廃棄物を最小限に抑え、過剰生産を避けるために少量生産を行っています。私たちのパッケージはプラスチックフリーで、リサイクルされたリサイクル可能な素材で作られています。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 rounded-lg bg-background p-8 sm:p-16">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
                <div>
                    <h2 className="font-headline text-3xl font-bold tracking-tight">私たちの職人パートナー</h2>
                    <p className="mt-4 text-muted-foreground">
                    私たちのコレクションは、日本の熟練した職人の手によって生み出されています。私たちは、世代を超えて技術を磨いてきた小規模な、多くは家族経営の工房と提携していることを誇りに思っています。これらのパートナーシップは私たちのブランドの心臓部であり、伝統的な技術を保存し、公正な労働慣行を確保し、地域経済を支援することを可能にしています。京都の染物屋から備中地域の織物工場まで、私たちはその道の達人たちと協力して、卓越した品質と個性を持つ衣服を創り出しています。
                    </p>
                </div>
                <div>
                  <Image
                    src={img2}
                    alt="明るく照らされた工房にある伝統的な日本の織機。"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover shadow-md"
                    data-ai-hint="Japanese weaving loom workshop"
                  />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
