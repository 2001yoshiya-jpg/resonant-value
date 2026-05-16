import CategoryLP from "@/components/lp/CategoryLP";

const config = {
  logoChar: "家",
  brandName: "家具買取センター",
  itemName: "家具",
  itemPlaceholder: "例：カリモク ソファ、Fritz Hansen チェア",
  aboutImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=85",
  slides: [
    { image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=90", headline: "高級家具・ブランド家具を", highlight: "高価買取", sub: "ご自宅へ出張査定いたします" },
    { image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1400&q=90", headline: "引越し・模様替えの", highlight: "不用品買取", sub: "査定・出張費 完全無料" },
    { image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1400&q=90", headline: "出張費・査定料", highlight: "完全無料", sub: "その場で現金でお支払いします" },
  ],
  items: [
    { name: "カリモク ソファ 3人掛け", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80", market: 95000, ours: 123500 },
    { name: "Fritz Hansen セブンチェア", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80", market: 45000, ours: 58500 },
    { name: "Herman Miller アーロンチェア", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80", market: 120000, ours: 156000 },
    { name: "Cassina イクスクロス テーブル", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80", market: 180000, ours: 234000 },
    { name: "アクタス ダイニングセット", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80", market: 68000, ours: 88400 },
    { name: "ウニコ 収納棚（大）", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80", market: 52000, ours: 67600 },
    { name: "北欧ヴィンテージ チェスト", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80", market: 85000, ours: 110500 },
    { name: "無印良品 ベッドフレーム シングル", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80", market: 35000, ours: 45500 },
  ],
  conditions: [
    { image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80", title: "傷・汚れのあるお品物" },
    { image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80", title: "古い年式のお品物" },
    { image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80", title: "大型のお品物" },
  ],
  conditionExamples: [
    "傷・汚れのあるソファ・テーブル", "フレームに傷のあるチェア", "引越しで不要になった家具",
    "購入から年数が経った家具", "大型の食器棚・タンス",
  ],
  reasons: [
    { num: "01", title: "家具専門の高価買取", desc: "国産・北欧・イタリア家具を専門とするスタッフが適正価格で査定します。", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&q=80" },
    { num: "02", title: "大型家具もOK", desc: "ソファ・タンス・ベッドなど大型家具も対応。分解・搬出もご相談ください。", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300&q=80" },
    { num: "03", title: "最短即日対応", desc: "当日の出張査定も可能。引越し前日でもお気軽にご連絡ください。", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&q=80" },
    { num: "04", title: "査定料・出張費 無料", desc: "キャンセルしても費用は一切かかりません。安心してご利用ください。", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=80" },
    { num: "05", title: "丁寧・誠実な接客", desc: "家具専門スタッフが真摯に対応。分かりやすくご説明します。", image: "https://images.unsplash.com/photo-1524508762098-f9e1dbef2b57?w=300&q=80" },
  ],
  brands: [
    { name: "カリモク", logo: null },
    { name: "Fritz Hansen", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Fritz_Hansen_logo.svg/320px-Fritz_Hansen_logo.svg.png" },
    { name: "Herman Miller", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Herman_Miller_logo.svg/320px-Herman_Miller_logo.svg.png" },
    { name: "Cassina", logo: null },
    { name: "IKEA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/IKEA_logo.svg/320px-IKEA_logo.svg.png" },
    { name: "Vitra", logo: null },
    { name: "Knoll", logo: null },
    { name: "無印良品", logo: null },
    { name: "アクタス", logo: null },
    { name: "UNICO", logo: null },
    { name: "天童木工", logo: null },
    { name: "飛騨産業", logo: null },
    { name: "大川家具", logo: null },
    { name: "B&B Italia", logo: null },
    { name: "Arflex", logo: null },
    { name: "Cassina IXC", logo: null },
  ],
  testimonials: [
    { category: "カリモクソファ", location: "東京都", text: "引越しで不要になったソファを売りました。大型家具でも丁寧に対応してもらえました。", age: "30代・女性", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80" },
    { category: "Herman Millerチェア", location: "神奈川県", text: "高級チェアを高価で買い取ってもらいました。専門家の査定で安心できました。", age: "40代・男性", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=200&q=80" },
    { category: "ダイニングセット", location: "大阪府", text: "傷があったのですが、それでも査定してもらえました。即日対応で助かりました。", age: "50代・女性", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200&q=80" },
    { category: "北欧ヴィンテージ", location: "千葉県", text: "古い家具でも価値を正しく評価してもらいました。満足の価格で売れました。", age: "60代・男性", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80" },
    { category: "収納棚", location: "埼玉県", text: "大量の家具をまとめて売りました。効率よく査定してもらえて時間を節約できました。", age: "40代・女性", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=200&q=80" },
    { category: "ベッドフレーム", location: "福岡県", text: "キャンセルしても費用がかからないと聞いて、安心して依頼できました。", age: "30代・男性", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200&q=80" },
  ],
};

export default function FurnitureLP() {
  return <CategoryLP config={config} />;
}