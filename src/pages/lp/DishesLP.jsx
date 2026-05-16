import CategoryLP from "@/components/lp/CategoryLP";

const config = {
  logoChar: "食",
  brandName: "食器買取センター",
  itemName: "食器",
  itemPlaceholder: "例：ウェッジウッド、マイセン",
  slides: [
    { image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1400&q=90", headline: "高級食器・洋食器を", highlight: "高価買取", sub: "ご自宅へ出張査定いたします" },
    { image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1400&q=90", headline: "使わない食器セットを", highlight: "現金化しませんか", sub: "査定・出張費 完全無料" },
    { image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=90", headline: "出張費・査定料", highlight: "完全無料", sub: "その場で現金でお支払いします" },
  ],
  items: [
    { name: "マイセン 金彩カップ＆ソーサー 6客", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&q=80", market: 180000, ours: 234000 },
    { name: "ウェッジウッド フロレンティーン セット", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80", market: 95000, ours: 123500 },
    { name: "リモージュ ディナーセット 12客", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80", market: 120000, ours: 156000 },
    { name: "ロイヤルコペンハーゲン ブルーフルーテッド", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&q=80", market: 68000, ours: 88400 },
    { name: "ノリタケ ティーセット 6客", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80", market: 45000, ours: 58500 },
    { name: "エルメス ブルーダイユール プレート", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80", market: 85000, ours: 110500 },
    { name: "ビレロイ&ボッホ ディナーセット", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&q=80", market: 52000, ours: 67600 },
    { name: "有田焼 金彩 茶器セット", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80", market: 38000, ours: 49400 },
  ],
  conditions: [
    { image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&q=80", title: "欠け・傷のあるお品物" },
    { image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80", title: "セットがバラバラのお品物" },
    { image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80", title: "古いお品物" },
  ],
  conditionExamples: [
    "欠け・ひびのある食器", "セットがそろっていない食器", "箱がない食器",
    "使用感のある食器セット", "もらい物で使わない食器",
  ],
  reasons: [
    { num: "01", title: "食器専門の高価買取", desc: "洋食器・和食器を専門とするスタッフが適正価格で査定。高価買取をお約束します。", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&q=80" },
    { num: "02", title: "セット不揃いでもOK", desc: "セットがそろっていなくても、一点から買い取りいたします。", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&q=80" },
    { num: "03", title: "最短即日対応", desc: "当日の出張査定も可能。大量の食器セットも大歓迎です。", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&q=80" },
    { num: "04", title: "査定料・出張費 無料", desc: "キャンセルしても費用は一切かかりません。安心してご利用ください。", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=80" },
    { num: "05", title: "丁寧・誠実な接客", desc: "大切な食器を一点ずつ確認し、分かりやすくご説明します。", image: "https://images.unsplash.com/photo-1524508762098-f9e1dbef2b57?w=300&q=80" },
  ],
  brands: [
    { name: "MEISSEN", domain: "meissen.com" },
    { name: "WEDGWOOD", domain: "wedgwood.com" },
    { name: "LIMOGES", domain: "limoges.com" },
    { name: "ROYAL COPENHAGEN", domain: "royalcopenhagen.com" },
    { name: "NORITAKE", domain: "noritake.com" },
    { name: "HERMÈS", domain: "hermes.com" },
    { name: "VILLEROY&BOCH", domain: "villeroy-boch.com" },
    { name: "BERNARDAUD", domain: "bernardaud.com" },
    { name: "CHRISTOFLE", domain: "christofle.com" },
    { name: "BACCARAT", domain: "baccarat.com" },
    { name: "WATERFORD", domain: "waterford.com" },
    { name: "SPODE", domain: "spode.co.uk" },
    { name: "MINTON", domain: "minton.co.uk" },
    { name: "ROYAL CROWN DERBY", domain: "royalcrownderby.co.uk" },
    { name: "有田焼", domain: "arita.jp" },
    { name: "清水焼", domain: "kiyomizuyaki.com" },
  ],
  testimonials: [
    { category: "マイセン", location: "東京都", text: "相続した食器セットを売りました。専門家が丁寧に説明してくれて、適正価格で売れました。", age: "60代・女性", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=200&q=80" },
    { category: "ウェッジウッド", location: "神奈川県", text: "使わないティーセットを売りました。箱がなくても査定してもらえました。", age: "50代・女性", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&q=80" },
    { category: "ロイヤルコペンハーゲン", location: "大阪府", text: "セットがバラバラでしたが、一点から買い取ってもらえました。", age: "70代・女性", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&q=80" },
    { category: "ノリタケ", location: "千葉県", text: "大量の食器をまとめて査定してもらいました。即日現金払いで助かりました。", age: "50代・男性", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=200&q=80" },
    { category: "エルメス食器", location: "埼玉県", text: "高価な食器の価値が分からなかったのですが、専門家が丁寧に教えてくれました。", age: "40代・女性", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&q=80" },
    { category: "有田焼", location: "佐賀県", text: "査定後にキャンセルしても費用がかからないと聞いて、安心して依頼できました。", age: "60代・男性", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&q=80" },
  ],
};

export default function DishesLP() {
  return <CategoryLP config={config} />;
}