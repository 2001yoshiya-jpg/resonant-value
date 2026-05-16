import CategoryLP from "@/components/lp/CategoryLP";

const config = {
  logoChar: "宝",
  brandName: "ジュエリー買取センター",
  itemName: "ジュエリー",
  itemPlaceholder: "例：ダイヤモンドリング、パールネックレス",
  slides: [
    { image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1400&q=90", headline: "大切なジュエリーを", highlight: "高価買取", sub: "ご自宅へ出張査定いたします" },
    { image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1400&q=90", headline: "ダイヤ・ルビー・サファイア", highlight: "適正価格で買取", sub: "宝石鑑定士が正確に査定します" },
    { image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1400&q=90", headline: "出張費・査定料", highlight: "完全無料", sub: "その場で現金でお支払いします" },
  ],
  items: [
    { name: "ダイヤモンドリング 0.5ct D-VVS1", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80", market: 180000, ours: 234000 },
    { name: "南洋真珠ネックレス 10mm", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", market: 120000, ours: 156000 },
    { name: "エメラルドリング 1ct", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80", market: 95000, ours: 123500 },
    { name: "ルビーペンダント 0.8ct", image: "https://images.unsplash.com/photo-1601121141461-9d6647bef0a1?w=400&q=80", market: 85000, ours: 110500 },
    { name: "アコヤ真珠イヤリング セット", image: "https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?w=400&q=80", market: 32000, ours: 41600 },
    { name: "サファイアブレスレット", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80", market: 68000, ours: 88400 },
    { name: "ダイヤモンドネックレス 0.3ct", image: "https://images.unsplash.com/photo-1573408301185-9519f94de441?w=400&q=80", market: 75000, ours: 97500 },
    { name: "タンザナイトリング 2ct", image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&q=80", market: 55000, ours: 71500 },
  ],
  conditions: [
    { image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80", title: "石が取れたお品物" },
    { image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", title: "古いお品物" },
    { image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80", title: "ブランド不明のお品物" },
  ],
  conditionExamples: [
    "石が取れた・欠けたリング", "メッキが剥がれたアクセサリー", "鑑定書・保証書がないジュエリー",
    "ブランドが分からない指輪・ネックレス", "アンティークジュエリー",
  ],
  reasons: [
    { num: "01", title: "宝石鑑定士が正確に査定", desc: "GIA・AGT認定の宝石鑑定士が一点ずつ丁寧に査定。正確な価値をお伝えします。", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&q=80" },
    { num: "02", title: "鑑定書なしでもOK", desc: "鑑定書・保証書がなくても適正価格で査定いたします。お気軽にどうぞ。", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&q=80" },
    { num: "03", title: "最短即日対応", desc: "当日の出張査定も可能です。お急ぎの方もご連絡ください。", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&q=80" },
    { num: "04", title: "査定料・出張費 無料", desc: "キャンセルしても費用は一切かかりません。安心してご利用ください。", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=80" },
    { num: "05", title: "丁寧・誠実な接客", desc: "大切なジュエリーを一点ずつ確認し、分かりやすくご説明します。", image: "https://images.unsplash.com/photo-1524508762098-f9e1dbef2b57?w=300&q=80" },
  ],
  brands: [
    { name: "TIFFANY", logo: "https://logo.clearbit.com/tiffany.com" },
    { name: "CARTIER", logo: "https://logo.clearbit.com/cartier.com" },
    { name: "BVLGARI", logo: "https://logo.clearbit.com/bulgari.com" },
    { name: "HARRY WINSTON", logo: "https://logo.clearbit.com/harrywinston.com" },
    { name: "MIKIMOTO", logo: "https://logo.clearbit.com/mikimoto.com" },
    { name: "VAN CLEEF", logo: "https://logo.clearbit.com/vancleefarpels.com" },
    { name: "GRAFF", logo: "https://logo.clearbit.com/graffdiamonds.com" },
    { name: "CHAUMET", logo: "https://logo.clearbit.com/chaumet.com" },
    { name: "DAMIANI", logo: "https://logo.clearbit.com/damiani.com" },
    { name: "PIAGET", logo: "https://logo.clearbit.com/piaget.com" },
    { name: "CHOPARD", logo: "https://logo.clearbit.com/chopard.com" },
    { name: "DE BEERS", logo: "https://logo.clearbit.com/debeers.com" },
    { name: "TASAKI", logo: "https://logo.clearbit.com/tasaki.co.jp" },
    { name: "AGETE", logo: "https://logo.clearbit.com/agete.com" },
    { name: "4℃", logo: null },
    { name: "AHKAH", logo: null },
  ],
  testimonials: [
    { category: "ダイヤリング", location: "東京都", text: "離婚後に使わなくなった婚約指輪を売りました。丁寧に対応していただき安心でした。", age: "40代・女性", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&q=80" },
    { category: "真珠ネックレス", location: "神奈川県", text: "母から受け継いだ真珠を売りました。価値を正しく評価してもらえて満足です。", age: "50代・女性", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&q=80" },
    { category: "エメラルドリング", location: "大阪府", text: "鑑定書がないジュエリーでも、しっかり査定してもらえました。", age: "60代・女性", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&q=80" },
    { category: "ルビーペンダント", location: "千葉県", text: "他社より高い価格を出してもらいました。スタッフの方の説明が丁寧でした。", age: "50代・男性", image: "https://images.unsplash.com/photo-1601121141461-9d6647bef0a1?w=200&q=80" },
    { category: "真珠イヤリング", location: "埼玉県", text: "古いジュエリーをまとめて査定してもらいました。即日現金払いで助かりました。", age: "70代・女性", image: "https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?w=200&q=80" },
    { category: "ダイヤネックレス", location: "京都府", text: "査定後にキャンセルしてもよいと聞いて、気軽に依頼できました。", age: "30代・女性", image: "https://images.unsplash.com/photo-1573408301185-9519f94de441?w=200&q=80" },
  ],
};

export default function JewelryLP() {
  return <CategoryLP config={config} />;
}