import CategoryLP from "@/components/lp/CategoryLP";

const config = {
  logoChar: "切",
  brandName: "切手・古銭買取センター",
  itemName: "切手・古銭",
  itemPlaceholder: "例：見返り美人切手、明治通宝",
  slides: [
    { image: "https://images.unsplash.com/photo-1579208570378-8c970854bc23?w=1400&q=90", headline: "切手・古銭を", highlight: "高価買取", sub: "ご自宅へ出張査定いたします" },
    { image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1400&q=90", headline: "コレクションを", highlight: "現金化しませんか", sub: "専門鑑定士が正確に査定します" },
    { image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1400&q=90", headline: "出張費・査定料", highlight: "完全無料", sub: "その場で現金でお支払いします" },
  ],
  items: [
    { name: "見返り美人 切手（未使用）", image: "https://images.unsplash.com/photo-1579208570378-8c970854bc23?w=400&q=80", market: 180000, ours: 234000 },
    { name: "月に雁 切手（未使用）", image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80", market: 120000, ours: 156000 },
    { name: "明治通宝 1円札", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80", market: 85000, ours: 110500 },
    { name: "昭和切手アルバム（300枚）", image: "https://images.unsplash.com/photo-1579208570378-8c970854bc23?w=400&q=80", market: 45000, ours: 58500 },
    { name: "古銭セット 江戸期寛永通宝", image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80", market: 35000, ours: 45500 },
    { name: "記念切手シート 1980年代", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80", market: 28000, ours: 36400 },
    { name: "外国切手アルバム", image: "https://images.unsplash.com/photo-1579208570378-8c970854bc23?w=400&q=80", market: 22000, ours: 28600 },
    { name: "金貨・銀貨セット", image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80", market: 95000, ours: 123500 },
  ],
  conditions: [
    { image: "https://images.unsplash.com/photo-1579208570378-8c970854bc23?w=400&q=80", title: "使用済み切手" },
    { image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80", title: "価値が分からない古銭" },
    { image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80", title: "大量にあるコレクション" },
  ],
  conditionExamples: [
    "使用済み・消印のある切手", "価値が分からない切手・コイン", "整理されていない大量の切手",
    "古いアルバムごとの切手コレクション", "外国切手・外国コイン",
  ],
  reasons: [
    { num: "01", title: "切手・古銭専門の鑑定士", desc: "切手・古銭・紙幣を専門とする鑑定士が正確に査定。適正価格をお約束します。", image: "https://images.unsplash.com/photo-1579208570378-8c970854bc23?w=300&q=80" },
    { num: "02", title: "大量コレクションもOK", desc: "アルバムごと・段ボールごとでもまとめて査定いたします。", image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=300&q=80" },
    { num: "03", title: "最短即日対応", desc: "当日の出張査定も可能。遺品整理でお急ぎの方もご連絡ください。", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&q=80" },
    { num: "04", title: "査定料・出張費 無料", desc: "キャンセルしても費用は一切かかりません。安心してご利用ください。", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=80" },
    { num: "05", title: "丁寧・誠実な接客", desc: "大切なコレクションを一点ずつ確認し、分かりやすくご説明します。", image: "https://images.unsplash.com/photo-1524508762098-f9e1dbef2b57?w=300&q=80" },
  ],
  brands: [
    "見返り美人", "月に雁", "記念切手", "普通切手", "外国切手", "初日カバー",
    "寛永通宝", "明治通宝", "大正通宝", "昭和コイン", "オリンピック記念", "金貨",
    "銀貨", "古紙幣", "外国コイン", "エラーコイン",
  ],
  testimonials: [
    { category: "見返り美人切手", location: "東京都", text: "祖父のコレクションを売りました。価値が分からなかったのですが、専門家に丁寧に説明してもらいました。", age: "60代・男性", image: "https://images.unsplash.com/photo-1579208570378-8c970854bc23?w=200&q=80" },
    { category: "切手アルバム", location: "神奈川県", text: "大量の切手アルバムをまとめて査定してもらいました。整理されていなくても対応してもらえました。", age: "50代・女性", image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=200&q=80" },
    { category: "古銭セット", location: "大阪府", text: "価値が分からない古銭でも丁寧に調べてもらえました。思ったより高く売れて驚きました。", age: "70代・男性", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&q=80" },
    { category: "記念切手", location: "千葉県", text: "使用済み切手でも買い取ってもらえるとは知りませんでした。助かりました。", age: "50代・女性", image: "https://images.unsplash.com/photo-1579208570378-8c970854bc23?w=200&q=80" },
    { category: "金貨セット", location: "埼玉県", text: "即日対応してもらい、その場で現金払い。迅速な対応でした。", age: "60代・男性", image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=200&q=80" },
    { category: "外国切手", location: "静岡県", text: "キャンセルしても費用がかからないと聞いて、安心して依頼できました。", age: "40代・男性", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&q=80" },
  ],
};

export default function StampsLP() {
  return <CategoryLP config={config} />;
}