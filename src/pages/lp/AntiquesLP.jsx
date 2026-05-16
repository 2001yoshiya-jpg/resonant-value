import CategoryLP from "@/components/lp/CategoryLP";

const config = {
  logoChar: "骨",
  brandName: "骨董品買取センター",
  itemName: "骨董品",
  itemPlaceholder: "例：伊万里焼、掛け軸、茶道具",
  aboutImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=85",
  slides: [
    { image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1400&q=90", headline: "骨董品・古美術を", highlight: "高価買取", sub: "ご自宅へ出張査定いたします" },
    { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=90", headline: "価値が分からなくても", highlight: "まずはご相談", sub: "専門鑑定士が正確に査定します" },
    { image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=90", headline: "出張費・査定料", highlight: "完全無料", sub: "その場で現金でお支払いします" },
  ],
  items: [
    { name: "伊万里焼 色絵花文大皿", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80", market: 85000, ours: 110500 },
    { name: "掛け軸 山水画（江戸期）", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", market: 120000, ours: 156000 },
    { name: "茶碗 萩焼 江戸後期", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80", market: 45000, ours: 58500 },
    { name: "日本刀 脇差（保存刀剣）", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80", market: 280000, ours: 364000 },
    { name: "古伊万里 染付花唐草皿", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", market: 65000, ours: 84500 },
    { name: "浮世絵 歌川広重 原版", image: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=400&q=80", market: 180000, ours: 234000 },
    { name: "銀製 茶道具セット", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80", market: 95000, ours: 123500 },
    { name: "根付 象牙製 明治期", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80", market: 55000, ours: 71500 },
  ],
  conditions: [
    { image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80", title: "欠け・ひびのあるお品物" },
    { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", title: "価値が分からないお品物" },
    { image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80", title: "古くて汚れたお品物" },
  ],
  conditionExamples: [
    "欠け・ひびのある陶磁器", "作者不明の掛け軸・絵画", "状態の悪い茶道具・花道具",
    "年代が分からない骨董品", "遺品整理で出てきた古美術品",
  ],
  reasons: [
    { num: "01", title: "専門鑑定士が正確に査定", desc: "骨董・古美術の専門鑑定士が一点ずつ丁寧に査定。正確な価値をお伝えします。", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&q=80" },
    { num: "02", title: "価値が分からなくてもOK", desc: "「これ売れる？」だけでも大丈夫。専門家が丁寧にご説明します。", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80" },
    { num: "03", title: "最短即日対応", desc: "当日の出張査定も可能。遺品整理でお急ぎの方もご連絡ください。", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&q=80" },
    { num: "04", title: "査定料・出張費 無料", desc: "キャンセルしても費用は一切かかりません。安心してご利用ください。", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=80" },
    { num: "05", title: "丁寧・誠実な接客", desc: "大切なお品物を一点ずつ確認し、分かりやすくご説明します。", image: "https://images.unsplash.com/photo-1524508762098-f9e1dbef2b57?w=300&q=80" },
  ],
  brands: [
    "伊万里焼", "有田焼", "九谷焼", "萩焼", "備前焼", "信楽焼",
    "清水焼", "掛け軸", "浮世絵", "茶道具", "日本刀", "根付",
    "印籠", "仏像", "古銭", "古地図",
  ],
  testimonials: [
    { category: "伊万里焼", location: "東京都", text: "遺品整理で出てきた骨董品を売りました。価値が分からなかったのですが、丁寧に説明してもらいました。", age: "60代・男性", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&q=80" },
    { category: "掛け軸", location: "京都府", text: "祖父が集めた骨董品をまとめて査定してもらいました。専門家の説明が分かりやすかったです。", age: "50代・女性", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80" },
    { category: "茶道具", location: "大阪府", text: "状態が悪かったのですが、しっかり査定してもらえました。想定より高く売れました。", age: "70代・男性", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80" },
    { category: "浮世絵", location: "神奈川県", text: "作者が分からない絵画でも丁寧に調べてもらえました。スタッフの知識に感心しました。", age: "60代・女性", image: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=200&q=80" },
    { category: "陶磁器", location: "千葉県", text: "欠けのある陶器でも買い取ってもらえて助かりました。迅速な対応でした。", age: "50代・男性", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&q=80" },
    { category: "茶碗", location: "静岡県", text: "キャンセルしてもよいと聞いて、安心して依頼できました。価格も満足です。", age: "40代・女性", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80" },
  ],
};

export default function AntiquesLP() {
  return <CategoryLP config={config} />;
}