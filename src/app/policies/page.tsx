import type { Metadata } from 'next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
  title: 'ポリシー',
  description: 'プライバシーポリシー、利用規約、配送と返品、広告とクッキーに関する情報をお読みください。',
};

const policyContent = {
  privacy: {
    title: 'プライバシーポリシー',
    content: `
      <p><strong>最終更新日:</strong> ${new Date().toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <p>SoraMode Style（「私たち」、「私たちの」、または「私たち」）は、お客様のプライバシーを保護することをお約束します。このプライバシーポリシーは、お客様が当社のウェブサイトを訪問した際に、当社がお客様の情報をどのように収集、使用、開示、保護するかを説明するものです。このポリシーを注意深くお読みください。このプライバシーポリシーの条項に同意しない場合は、サイトにアクセスしないでください。</p>
      
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">収集する情報</h3>
      <p>当社は、お客様がお問い合わせフォームを使用したり、ニュースレターに登録したりするなど、自発的に提供された場合にのみ、お客様の名前やメールアドレスなどの個人を特定できる情報を収集します。当社は、機密性の高い個人データ（健康、宗教、政治的意見など）を収集しません。</p>
      
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">お客様の情報の使用</h3>
      <p>お客様に関する正確な情報を持つことで、スムーズで効率的、かつカスタマイズされた体験を提供することができます。具体的には、サイトを通じて収集したお客様に関する情報を以下の目的で使用することがあります。</p>
      <ul class="list-disc list-inside space-y-2 mt-2">
        <li>お客様のコメントや質問に回答し、カスタマーサービスを提供する。</li>
        <li>お客様がオプトインした場合、ニュースレターを送信する。</li>
        <li>サイトでの体験を向上させるために、使用状況と傾向を監視および分析する。</li>
      </ul>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">データセキュリティ</h3>
      <p>当社は、お客様の個人情報を保護するために、管理的、技術的、物理的なセキュリティ対策を使用しています。当社はお客様から提供された個人情報を保護するために合理的な措置を講じていますが、当社の努力にもかかわらず、セキュリティ対策が完全または侵入不可能であることはなく、データ送信方法が傍受やその他の種類の誤用に対して保証されることはないことにご注意ください。</p>
      
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">お客様の権利</h3>
      <p>お客様は、メールの「購読解除」リンクをクリックすることで、いつでも当社のマーケティングコミュニケーション（ニュースレターなど）をオプトアウトする権利を有します。お客様の所在地によっては、個人データへのアクセス、修正、削除などの他の権利を有する場合があります。そのような要求を行うには、当社にご連絡ください。</p>
    `,
  },
  terms: {
    title: '利用規約',
    content: `
      <p>[あなたのウェブサイトURL]のウェブサイトにアクセスすることにより、これらの利用規約、適用されるすべての法律および規制に拘束されることに同意し、適用される地域の法律の遵守に責任があることに同意するものとします。</p>
      
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">使用許諾</h3>
      <p>SoraMode Styleのウェブサイト上の資料（情報またはソフトウェア）を、個人的、非商業的な一時的な閲覧のためにのみ一時的に1部ダウンロードすることが許可されます。これはライセンスの付与であり、所有権の譲渡ではありません。</p>
      
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">免責事項</h3>
      <p>SoraMode Styleのウェブサイト上の資料は「現状のまま」提供されます。SoraMode Styleは、明示または黙示を問わず、いかなる保証も行わず、商品性、特定目的への適合性、または知的財産権の非侵害またはその他の権利侵害に関する黙示の保証または条件を含むがこれに限定されない、その他すべての保証を否認し、否定します。</p>
    `,
  },
  shipping: {
    title: '配送と返品',
    content: `
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">配送</h3>
      <p>日本国内および海外への配送を行っております。配送料は、お客様の所在地とご注文の重量に基づいてチェックアウト時に計算されます。発送前に注文処理のために3〜5営業日お待ちください。</p>
      
      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">返品</h3>
      <p>未着用、未洗濯、未損傷の商品の返品は、配達後30日以内に受け付けます。返品を開始するには、カスタマーサービスチームにご連絡ください。商品に欠陥がある場合を除き、返品送料はお客様のご負担となりますのでご注意ください。</p>
    `,
  },
  cookies: {
    title: '広告とクッキーに関するポリシー',
    content: `
      <p>このページでは、SoraMode Styleがお客様が当社のウェブサイトを訪問した際にクッキーおよび同様の技術をどのように使用して認識するかを説明します。これらの技術が何であるか、なぜ使用するのか、そしてそれらの使用を制御するお客様の権利について説明します。</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">クッキーとは？</h3>
      <p>クッキーは、ウェブサイトを訪問したときにお客様のコンピュータまたはモバイルデバイスに配置される小さなデータファイルです。当社は、必須のサイト機能およびお客様の体験を向上させるために、非常に限られた数のクッキーを使用しています。</p>
      <ul class="list-disc list-inside space-y-2 mt-2">
        <li><strong>設定クッキー:</strong> 「体験を調整する」機能を使用し、設定を記憶させることを選択した場合、ブラウザのローカルストレージに単一の単純なクッキー（<code>user-preference</code>）を設定します。このクッキーには、選択した設定（例：「男性」、「女性」）のみが含まれ、次回の訪問時にサイトのコンテンツをフィルタリングするためにのみ使用されます。広告のパーソナライズや追跡には使用されません。</li>
        <li><strong>分析クッキー:</strong> 当社サイトがどのように使用されているかを理解するために、Google Analyticsなどの分析サービスを使用することがあります。これらのサービスは、匿名ベースでデータを収集するためにクッキーを配置することがあります。これにより、どのページが人気であるか、サイトをどのように改善できるかがわかります。</li>
      </ul>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">広告</h3>
      <p>当社は、お客様が当社のサイトを訪問した後に他のウェブサイトで広告を表示するために、Google Adsなどの広告サービスを使用することがあります（リマーケティング）。これらのサービスは、過去の訪問に基づいて広告を配信するためにクッキーを使用します。当社は、このデータを使用して機密性の高いカテゴリに基づくプロファイルを構築したり、18歳未満の個人をターゲットにしたりすることはありません。</p>

      <h3 class="font-headline text-xl font-semibold mt-6 mb-2">お客様の同意と管理</h3>
      <p>欧州経済領域（EEA）および英国のユーザーの場合、必須ではないクッキー（分析や広告など）をお客様のデバイスに配置する前に、お客様の同意を求めます。お客様はいつでもクッキーの設定を管理できます。また、ブラウザを設定して、すべてまたは一部のブラウザクッキーを拒否したり、ウェブサイトがクッキーを設定またはアクセスしたときに警告を発したりすることもできます。クッキーの管理方法およびターゲット広告のオプトアウト方法の詳細については、<a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" class="text-accent underline">Digital Advertising Alliance</a>または<a href="https://youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" class="text-accent underline">Your Online Choices</a>（EUユーザー向け）をご覧ください。</p>
      <p>当社は、フィンガープリンティングやその他の侵襲的な追跡技術を使用しません。私たちの目標は、機能的で楽しいショッピング体験を提供しながら、透明性を保ち、お客様のプライバシーを尊重することです。</p>
    `,
  },
};

export default function PoliciesPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">私たちのポリシー</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          お客様のプライバシーと信頼は私たちにとって重要です。ここでは、私たちのポリシーに関する詳細情報をご覧いただけます。
        </p>
      </div>

      <Tabs defaultValue="privacy" className="mt-12 mx-auto max-w-4xl">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
          <TabsTrigger value="privacy">プライバシー</TabsTrigger>
          <TabsTrigger value="terms">利用規約</TabsTrigger>
          <TabsTrigger value="shipping">配送/返品</TabsTrigger>
          <TabsTrigger value="cookies">広告とクッキー</TabsTrigger>
        </TabsList>
        {Object.entries(policyContent).map(([key, value]) => (
          <TabsContent value={key} key={key} className="mt-6">
            <div className="prose prose-lg max-w-none bg-white p-6 rounded-lg shadow-sm border prose-headings:font-headline">
              <h2 className="font-headline text-2xl">{value.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: value.content }} />
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
