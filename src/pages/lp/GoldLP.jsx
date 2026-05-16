import CategoryLP from "@/components/lp/CategoryLP";

const config = {
  logoChar: "金",
  brandName: "金・プラチナ買取センター",
  itemName: "金・プラチナ",
  itemPlaceholder: "例：18金ネックレス、プラチナリング",
  aboutImage: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=85",
  slides: [
    { image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1400&q=90", headline: "金・プラチナを", highlight: "高価買取", sub: "ご自宅へ出張査定いたします" },
    { image: "https://images.unsplash.com/photo-1573408301185-9519f94de441?w=1400&q=90", headline: "使わないアクセサリー", highlight: "現金化しませんか", sub: "相場連動の最高価格で買い取ります" },
    { image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1400&q=90", headline: "出張費・査定料", highlight: "完全無料", sub: "その場で現金でお支払いします" },
  ],
  items: [
    { name: "18金（K18）ネックレス 40g", image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&q=80", market: 220000, ours: 286000 },
    { name: "プラチナ（Pt950）リング 8g", image: "https://images.unsplash.com/photo-1573408301185-9519f94de441?w=400&q=80", market: 38000, ours: 49400 },
    { name: "24金（K24）インゴット 10g", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80", market: 96000, ours: 124800 },
    { name: "18金（K18）ブレスレット 15g", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80", market: 82000, ours: 106600 },
    { name: "プラチナ（Pt900）ネックレス 12g", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", market: 56000, ours: 72800 },
    { name: "14金（K14）指輪 5g", image: "https://images.unsplash.com/photo-1563721032-aya8f5a4fa23?w=400&q=80", market: 22000, ours: 28600 },
    { name: "18金 金歯・金冠", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80", market: 15000, ours: 19500 },
    { name: "銀（Silver925）セット", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80", market: 8000, ours: 10400 },
  ],
  conditions: [
    { image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&q=80", title: "変色・くすんだお品物" },
    { image: "https://images.unsplash.com/photo-1573408301185-9519f94de441?w=400&q=80", title: "壊れたアクセサリー" },
    { image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80", title: "古いお品物・金歯" },
  ],
  conditionExamples: [
    "変形・破損したネックレス・リング", "石が外れたアクセサリー", "使わなくなった金・プラチナのアクセサリー全般",
    "金歯・金冠", "インゴット・地金",
  ],
  reasons: [
    { num: "01", title: "相場連動の最高価格", desc: "金・プラチナの国際相場に連動し、常に最高水準の買取価格をご提供します。", image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=300&q=80" },
    { num: "02", title: "壊れていてもOK", desc: "変形・破損・変色していても素材の価値で査定。どんな状態でもお持ちください。", image: "https://images.unsplash.com/photo-1573408301185-9519f94de441?w=300&q=80" },
    { num: "03", title: "最短即日対応", desc: "当日の出張査定も可能。お急ぎの方もお気軽にご連絡ください。", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&q=80" },
    { num: "04", title: "査定料・出張費 無料", desc: "キャンセルしても費用は一切かかりません。安心してご利用ください。", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=80" },
    { num: "05", title: "貴金属専門スタッフ", desc: "金・プラチナ・銀を熟知した専門スタッフが正確に査定。適正価格をお約束します。", image: "https://images.unsplash.com/photo-1524508762098-f9e1dbef2b57?w=300&q=80" },
  ],
  brands: [
    "K24（純金）", "K22", "K18", "K14", "K10",
    "Pt999", "Pt950", "Pt900", "Pt850",
    "Silver925", "Silver950", "金歯・金冠",
    "インゴット", "コイン", "金杯", "仏具",
  ],
  testimonials: [
    { category: "K18ネックレス", location: "東京都", text: "相場より高く買い取っていただけました。壊れていたのに査定してもらえて助かりました。", age: "60代・女性", image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=200&q=80" },
    { category: "プラチナリング", location: "神奈川県", text: "使わなくなった指輪をまとめて売りました。即日対応してもらえて便利でした。", age: "50代・女性", image: "https://images.unsplash.com/photo-1573408301185-9519f94de441?w=200&q=80" },
    { category: "金インゴット", location: "大阪府", text: "父が遺した金を売りました。価格も満足で、スタッフの対応も丁寧でした。", age: "50代・男性", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=200&q=80" },
    { category: "K18ブレスレット", location: "千葉県", text: "他社より高い価格を出してもらいました。出張費も無料で大変助かりました。", age: "40代・女性", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=200&q=80" },
    { category: "プラチナネックレス", location: "埼玉県", text: "キャンセルしても費用がかからないと聞いて、気軽に査定を依頼できました。", age: "30代・女性", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&q=80" },
    { category: "金歯", location: "福岡県", text: "金歯でも買い取ってもらえると聞いて驚きました。思ったより高く売れました。", age: "70代・男性", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=200&q=80" },
  ],
};

export default function GoldLP() {
  return (
    <div>
      <CategoryLP config={config} />
    </div>
  );
}