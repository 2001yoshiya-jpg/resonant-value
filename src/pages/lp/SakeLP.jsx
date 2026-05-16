import CategoryLP from "@/components/lp/CategoryLP";

const config = {
  logoChar: "酒",
  brandName: "お酒買取センター",
  itemName: "お酒",
  itemPlaceholder: "例：山崎12年、ドンペリニヨン",
  slides: [
    { image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=1400&q=90", headline: "高級ウイスキー・ワインを", highlight: "高価買取", sub: "ご自宅へ出張査定いたします" },
    { image: "https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?w=1400&q=90", headline: "飲まないお酒を", highlight: "現金化しませんか", sub: "査定・出張費 完全無料" },
    { image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1400&q=90", headline: "出張費・査定料", highlight: "完全無料", sub: "その場で現金でお支払いします" },
  ],
  items: [
    { name: "山崎 18年 700ml", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&q=80", market: 85000, ours: 110500 },
    { name: "響 21年 700ml", image: "https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?w=400&q=80", market: 68000, ours: 88400 },
    { name: "ドンペリニヨン ヴィンテージ 2010", image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&q=80", market: 25000, ours: 32500 },
    { name: "マッカラン 25年 700ml", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&q=80", market: 320000, ours: 416000 },
    { name: "竹鶴 17年 700ml", image: "https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?w=400&q=80", market: 45000, ours: 58500 },
    { name: "ペトリュス 2005 750ml", image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&q=80", market: 280000, ours: 364000 },
    { name: "バランタイン 30年 700ml", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&q=80", market: 55000, ours: 71500 },
    { name: "シャトー・マルゴー 2010", image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&q=80", market: 95000, ours: 123500 },
  ],
  conditions: [
    { image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&q=80", title: "ラベルが汚れたお品物" },
    { image: "https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?w=400&q=80", title: "箱がないお品物" },
    { image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&q=80", title: "古いお品物" },
  ],
  conditionExamples: [
    "ラベルが汚れ・剥がれているお酒", "化粧箱がないウイスキー・ワイン", "開封済みのお酒（状態による）",
    "年代が分からないヴィンテージワイン", "もらい物で飲まないお酒",
  ],
  reasons: [
    { num: "01", title: "お酒専門の高価買取", desc: "ウイスキー・ワイン・日本酒・焼酎を専門とするスタッフが市場価格を把握し、高価買取いたします。", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=300&q=80" },
    { num: "02", title: "箱なし・ラベル汚れOK", desc: "化粧箱がなくても、ラベルに汚れがあっても適正価格で査定いたします。", image: "https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?w=300&q=80" },
    { num: "03", title: "最短即日対応", desc: "当日の出張査定も可能。大量にある場合もお気軽にどうぞ。", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&q=80" },
    { num: "04", title: "査定料・出張費 無料", desc: "キャンセルしても費用は一切かかりません。安心してご利用ください。", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=80" },
    { num: "05", title: "丁寧・誠実な接客", desc: "お酒の専門スタッフが真摯に対応。分かりやすくご説明します。", image: "https://images.unsplash.com/photo-1524508762098-f9e1dbef2b57?w=300&q=80" },
  ],
  brands: [
    { name: "サントリー", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Suntory_logo.svg/320px-Suntory_logo.svg.png" },
    { name: "ニッカ", logo: null },
    { name: "マッカラン", logo: null },
    { name: "バランタイン", logo: null },
    { name: "シバスリーガル", logo: null },
    { name: "ジョニーウォーカー", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Johnnie_Walker_logo.svg/320px-Johnnie_Walker_logo.svg.png" },
    { name: "ジャックダニエル", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Jack_Daniel%27s_logo.svg/320px-Jack_Daniel%27s_logo.svg.png" },
    { name: "ドンペリニヨン", logo: null },
    { name: "モエ・シャンドン", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Mo%C3%ABt_%26_Chandon_logo.svg/320px-Mo%C3%ABt_%26_Chandon_logo.svg.png" },
    { name: "ヘネシー", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Hennessy_logo.svg/320px-Hennessy_logo.svg.png" },
    { name: "ペトリュス", logo: null },
    { name: "ロマネコンティ", logo: null },
    { name: "シャトーマルゴー", logo: null },
    { name: "オーパスワン", logo: null },
    { name: "山崎", logo: null },
    { name: "響", logo: null },
  ],
  testimonials: [
    { category: "山崎18年", location: "東京都", text: "もらい物のウイスキーを売りました。予想を超える価格で大変満足しています。", age: "40代・男性", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=200&q=80" },
    { category: "ドンペリ", location: "神奈川県", text: "飲まないシャンパンを売りました。査定スタッフが詳しくて安心できました。", age: "50代・女性", image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=200&q=80" },
    { category: "ヴィンテージワイン", location: "大阪府", text: "父が遺したワインを売りました。年代が古くても高く買い取ってもらえました。", age: "60代・男性", image: "https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?w=200&q=80" },
    { category: "響21年", location: "千葉県", text: "箱がないウイスキーでも査定してもらえました。出張費無料で助かりました。", age: "30代・男性", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=200&q=80" },
    { category: "マッカラン", location: "埼玉県", text: "大量のウイスキーコレクションをまとめて売りました。一本一本丁寧に査定してもらいました。", age: "50代・男性", image: "https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?w=200&q=80" },
    { category: "ワインセラー", location: "京都府", text: "即日対応してもらい、その場で現金払い。とても便利でした。", age: "40代・女性", image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=200&q=80" },
  ],
};

export default function SakeLP() {
  return <CategoryLP config={config} />;
}