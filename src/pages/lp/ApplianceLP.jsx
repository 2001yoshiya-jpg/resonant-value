import CategoryLP from "@/components/lp/CategoryLP";

const config = {
  logoChar: "電",
  brandName: "家電買取センター",
  itemName: "家電",
  itemPlaceholder: "例：ダイソン掃除機、ソニー BRAVIA",
  slides: [
    { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=90", headline: "家電製品を", highlight: "高価買取", sub: "ご自宅へ出張査定いたします" },
    { image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=1400&q=90", headline: "引越し・買い替えの", highlight: "不用品買取", sub: "査定・出張費 完全無料" },
    { image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1400&q=90", headline: "出張費・査定料", highlight: "完全無料", sub: "その場で現金でお支払いします" },
  ],
  items: [
    { name: "ダイソン V15 Detect", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", market: 45000, ours: 58500 },
    { name: "ソニー BRAVIA 65型 4K", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829e1?w=400&q=80", market: 95000, ours: 123500 },
    { name: "シャープ 空気清浄機 KI-PX100", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&q=80", market: 35000, ours: 45500 },
    { name: "パナソニック ドラム式洗濯機", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", market: 78000, ours: 101400 },
    { name: "バルミューダ オーブンレンジ", image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&q=80", market: 48000, ours: 62400 },
    { name: "アップル MacBook Pro M3", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80", market: 185000, ours: 240500 },
    { name: "ソニー PlayStation 5", image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&q=80", market: 42000, ours: 54600 },
    { name: "デロンギ 全自動コーヒーメーカー", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80", market: 68000, ours: 88400 },
  ],
  conditions: [
    { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", title: "動作不良のお品物" },
    { image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=400&q=80", title: "古い年式のお品物" },
    { image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&q=80", title: "付属品がないお品物" },
  ],
  conditionExamples: [
    "動作不良・電源が入らない家電", "外装に傷・汚れのある家電", "取扱説明書・付属品がない家電",
    "製造から5年以上経過した家電", "引越しで不要になった家電",
  ],
  reasons: [
    { num: "01", title: "高価買取に自信", desc: "家電専門の査定スタッフが独自ルートで高価買取。他社より高い価格をお約束します。", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80" },
    { num: "02", title: "まとめて買取もOK", desc: "引越しや遺品整理で大量の家電があっても大歓迎。まとめて査定いたします。", image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=300&q=80" },
    { num: "03", title: "最短即日対応", desc: "当日の出張査定も可能。大型家電も対応しますのでお気軽にどうぞ。", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&q=80" },
    { num: "04", title: "査定料・出張費 無料", desc: "キャンセルしても費用は一切かかりません。安心してご利用ください。", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=80" },
    { num: "05", title: "丁寧・誠実な接客", desc: "家電専門の経験豊富なスタッフが、一点ずつ丁寧に確認し分かりやすくご説明します。", image: "https://images.unsplash.com/photo-1524508762098-f9e1dbef2b57?w=300&q=80" },
  ],
  brands: [
    { name: "SONY", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/320px-Sony_logo.svg.png" },
    { name: "PANASONIC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Panasonic_logo_%28Blue%29.svg/320px-Panasonic_logo_%28Blue%29.svg.png" },
    { name: "SHARP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Sharp_logo.svg/320px-Sharp_logo.svg.png" },
    { name: "TOSHIBA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Toshiba_logo.svg/320px-Toshiba_logo.svg.png" },
    { name: "HITACHI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Hitachi_logo.svg/320px-Hitachi_logo.svg.png" },
    { name: "MITSUBISHI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Mitsubishi_Electric_logo.svg/320px-Mitsubishi_Electric_logo.svg.png" },
    { name: "DYSON", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Dyson_logo.svg/320px-Dyson_logo.svg.png" },
    { name: "BALMUDA", logo: null },
    { name: "APPLE", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/320px-Apple_logo_black.svg.png" },
    { name: "DELL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/320px-Dell_Logo.png" },
    { name: "LENOVO", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/320px-Lenovo_logo_2015.svg.png" },
    { name: "MICROSOFT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/320px-Microsoft_logo_%282012%29.svg.png" },
    { name: "NINTENDO", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/320px-Nintendo.svg.png" },
    { name: "PLAYSTATION", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/320px-Playstation_logo_colour.svg.png" },
    { name: "DELONGHI", logo: null },
    { name: "NESPRESSO", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Nespresso_logo.svg/320px-Nespresso_logo.svg.png" },
  ],
  testimonials: [
    { category: "ダイソン掃除機", location: "東京都", text: "引越しで不要になった家電をまとめて売りました。大型家電も対応してもらえて助かりました。", age: "30代・女性", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80" },
    { category: "ソニー BRAVIA", location: "神奈川県", text: "古いテレビでしたが、思ったより高く売れました。即日現金払いで便利でした。", age: "50代・男性", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829e1?w=200&q=80" },
    { category: "MacBook Pro", location: "大阪府", text: "新機種に買い替えで売りました。専門スタッフが丁寧に査定してくれて満足です。", age: "30代・男性", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&q=80" },
    { category: "PlayStation 5", location: "千葉県", text: "使わなくなったゲーム機を売りました。予想より高い価格で満足しています。", age: "20代・男性", image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=200&q=80" },
    { category: "コーヒーメーカー", location: "埼玉県", text: "付属品がなかったのに、しっかり査定してもらえました。スタッフが親切でした。", age: "40代・女性", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&q=80" },
    { category: "洗濯機", location: "福岡県", text: "遺品整理で家電をまとめて売りました。大量でも嫌な顔せず対応してくれました。", age: "50代・男性", image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=200&q=80" },
  ],
};

export default function ApplianceLP() {
  return <CategoryLP config={config} />;
}