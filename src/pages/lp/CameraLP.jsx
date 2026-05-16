import CategoryLP from "@/components/lp/CategoryLP";

const config = {
  logoChar: "撮",
  brandName: "カメラ買取センター",
  itemName: "カメラ",
  itemPlaceholder: "例：ニコン D850、キヤノン EOS R5",
  slides: [
    { image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1400&q=90", headline: "カメラ・レンズを", highlight: "高価買取", sub: "ご自宅へ出張査定いたします" },
    { image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1400&q=90", headline: "使わなくなった機材を", highlight: "現金化しませんか", sub: "査定・出張費 完全無料" },
    { image: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=1400&q=90", headline: "出張費・査定料", highlight: "完全無料", sub: "その場で現金でお支払いします" },
  ],
  items: [
    { name: "ニコン D850 ボディ", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80", market: 280000, ours: 364000 },
    { name: "キヤノン EOS R5 ボディ", image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&q=80", market: 380000, ours: 494000 },
    { name: "ソニー α7 IV ボディ", image: "https://images.unsplash.com/photo-1593321025120-08e6eb44e9e4?w=400&q=80", market: 310000, ours: 403000 },
    { name: "ライカ M10 シルバー", image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=400&q=80", market: 650000, ours: 845000 },
    { name: "キヤノン RF50mm F1.2L", image: "https://images.unsplash.com/photo-1617634089991-b01b8bb5caff?w=400&q=80", market: 230000, ours: 299000 },
    { name: "ニコン Z 70-200mm f/2.8", image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=400&q=80", market: 280000, ours: 364000 },
    { name: "フジフイルム X-T5 ボディ", image: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=400&q=80", market: 190000, ours: 247000 },
    { name: "ライカ Q2 ボディ", image: "https://images.unsplash.com/photo-1605918321372-23d29c2a6c43?w=400&q=80", market: 520000, ours: 676000 },
  ],
  conditions: [
    { image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80", title: "動作不良のお品物" },
    { image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&q=80", title: "外装傷のあるお品物" },
    { image: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=400&q=80", title: "古い機種のお品物" },
  ],
  conditionExamples: [
    "シャッター不良・AFが合わないカメラ", "外装に傷・凹みのあるカメラ", "付属品・箱がないカメラ",
    "古いフィルムカメラ・レンジファインダー", "ジャンク品・部品取り品",
  ],
  reasons: [
    { num: "01", title: "カメラ専門の高価買取", desc: "デジタル一眼・ミラーレス・フィルムカメラまで、専門知識を持つスタッフが適正価格で査定します。", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&q=80" },
    { num: "02", title: "ジャンク品でもOK", desc: "動作不良・外装傷・レンズカビがあるカメラでもお気軽にご相談ください。", image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&q=80" },
    { num: "03", title: "最短即日対応", desc: "当日の出張査定も可能。機材がたくさんある方も大歓迎です。", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&q=80" },
    { num: "04", title: "査定料・出張費 無料", desc: "キャンセルしても費用は一切かかりません。安心してご利用ください。", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=80" },
    { num: "05", title: "丁寧・誠実な接客", desc: "大切な機材を一台ずつ確認し、分かりやすくご説明します。", image: "https://images.unsplash.com/photo-1524508762098-f9e1dbef2b57?w=300&q=80" },
  ],
  brands: [
    { name: "CANON", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Canon_logo.svg/320px-Canon_logo.svg.png" },
    { name: "NIKON", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Nikon_Logo.svg/320px-Nikon_Logo.svg.png" },
    { name: "SONY", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/320px-Sony_logo.svg.png" },
    { name: "FUJIFILM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Fujifilm_logo.svg/320px-Fujifilm_logo.svg.png" },
    { name: "LEICA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Leica_Camera_logo.svg/320px-Leica_Camera_logo.svg.png" },
    { name: "OLYMPUS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Olympus_Corporation_logo.svg/320px-Olympus_Corporation_logo.svg.png" },
    { name: "PANASONIC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Panasonic_logo_%28Blue%29.svg/320px-Panasonic_logo_%28Blue%29.svg.png" },
    { name: "PENTAX", logo: null },
    { name: "SIGMA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Sigma_logo.svg/320px-Sigma_logo.svg.png" },
    { name: "TAMRON", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tamron_logo.svg/320px-Tamron_logo.svg.png" },
    { name: "TOKINA", logo: null },
    { name: "ZEISS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Zeiss_logo.svg/320px-Zeiss_logo.svg.png" },
    { name: "VOIGTLANDER", logo: null },
    { name: "HASSELBLAD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Hasselblad_logo.svg/320px-Hasselblad_logo.svg.png" },
    { name: "PHASE ONE", logo: null },
    { name: "MAMIYA", logo: null },
  ],
  testimonials: [
    { category: "ニコン D850", location: "東京都", text: "使わなくなった一眼レフを高く買い取っていただきました。機材が多くても丁寧に対応してもらえました。", age: "40代・男性", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&q=80" },
    { category: "キヤノン EOS R5", location: "神奈川県", text: "新機種に乗り換えで売りました。予想より高い価格で満足しています。", age: "30代・男性", image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=200&q=80" },
    { category: "ライカ M10", location: "大阪府", text: "父から受け継いだライカを売りました。価値を正しく評価してもらえて感謝しています。", age: "50代・男性", image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=200&q=80" },
    { category: "フジフイルム X-T5", location: "千葉県", text: "古いフィルムカメラも含めてまとめて査定してもらいました。即日現金払いで便利でした。", age: "60代・男性", image: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=200&q=80" },
    { category: "ソニー α7", location: "埼玉県", text: "外装に傷があったのですが、それでもしっかり査定してもらえました。", age: "30代・女性", image: "https://images.unsplash.com/photo-1593321025120-08e6eb44e9e4?w=200&q=80" },
    { category: "レンズ複数", location: "京都府", text: "レンズ10本をまとめて売りました。スタッフが専門的で安心できました。", age: "50代・男性", image: "https://images.unsplash.com/photo-1617634089991-b01b8bb5caff?w=200&q=80" },
  ],
};

export default function CameraLP() {
  return <CategoryLP config={config} />;
}