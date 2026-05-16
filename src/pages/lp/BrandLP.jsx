import CategoryLP from "@/components/lp/CategoryLP";

const config = {
  logoChar: "品",
  brandName: "ブランド品買取センター",
  itemName: "ブランド品",
  itemPlaceholder: "例：ルイ・ヴィトン バッグ",
  slides: [
    { image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1400&q=90", headline: "ブランド品を", highlight: "高価買取", sub: "ご自宅へ出張査定いたします" },
    { image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1400&q=90", headline: "使わないバッグ・財布", highlight: "現金化しませんか", sub: "査定・出張費 完全無料" },
    { image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1400&q=90", headline: "出張費・査定料", highlight: "完全無料", sub: "ご自宅までスタッフが伺います" },
  ],
  items: [
    { name: "ルイ・ヴィトン ネヴァーフル MM", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80", market: 85000, ours: 110500 },
    { name: "シャネル マトラッセ チェーンバッグ", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80", market: 480000, ours: 624000 },
    { name: "エルメス バーキン 30", image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&q=80", market: 1200000, ours: 1560000 },
    { name: "グッチ GGマーモント バッグ", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80", market: 95000, ours: 123500 },
    { name: "プラダ サフィアーノ 二つ折り財布", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80", market: 38000, ours: 49400 },
    { name: "ルイ・ヴィトン ポルトフォイユ", image: "https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=400&q=80", market: 42000, ours: 54600 },
    { name: "バレンシアガ スピード トレーナー", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", market: 52000, ours: 67600 },
    { name: "ゴヤール サンルイ トート", image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&q=80", market: 72000, ours: 93600 },
  ],
  conditions: [
    { image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80", title: "使用感のあるお品物" },
    { image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80", title: "付属品がないお品物" },
    { image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80", title: "古いお品物" },
  ],
  conditionExamples: [
    "傷・汚れ・色落ちのあるバッグ・財布", "箱・ギャランティカードがない", "使用済みの衣類・小物",
    "シーズンオフのアイテム", "購入から何年も経過しているお品物",
  ],
  reasons: [
    { num: "01", title: "高価買取に自信", desc: "独自の販売ルートと豊富な実績で、他社より高く買い取れる体制を整えています。", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&q=80" },
    { num: "02", title: "付属品なしでもOK", desc: "箱・保証書・付属品がなくても適正価格で査定いたします。まずはご相談ください。", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&q=80" },
    { num: "03", title: "最短即日対応", desc: "当日の出張査定も可能。「今日来てほしい」というご要望もお気軽にどうぞ。", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&q=80" },
    { num: "04", title: "査定料・出張費 無料", desc: "査定後にキャンセルしても費用は一切かかりません。安心してご利用ください。", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=80" },
    { num: "05", title: "丁寧・誠実な接客", desc: "ブランド専門スタッフが真摯に対応。大切なお品物を一点ずつ丁寧に確認します。", image: "https://images.unsplash.com/photo-1524508762098-f9e1dbef2b57?w=300&q=80" },
  ],
  brands: ["LOUIS VUITTON", "CHANEL", "HERMÈS", "GUCCI", "PRADA", "DIOR", "BALENCIAGA", "GOYARD", "CELINE", "BOTTEGA", "FENDI", "BURBERRY", "COACH", "MK", "TORY BURCH", "KATE SPADE"],
  testimonials: [
    { category: "ルイ・ヴィトン", location: "東京都", text: "使わなくなったバッグを高く買い取っていただきました。スタッフの方が丁寧で安心できました。", age: "40代・女性", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&q=80" },
    { category: "シャネル", location: "神奈川県", text: "箱がなかったのですが、それでも満足のいく価格で売れました。また利用したいです。", age: "50代・女性", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200&q=80" },
    { category: "エルメス", location: "大阪府", text: "遺品整理でブランド品をまとめて売りました。一点ずつ丁寧に査定してもらえて感謝しています。", age: "60代・男性", image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=200&q=80" },
    { category: "グッチ", location: "千葉県", text: "他社より高い価格を提示してもらえました。出張費も無料で助かりました。", age: "30代・女性", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&q=80" },
    { category: "プラダ", location: "埼玉県", text: "古い財布でしたが、思っていたより高く買い取ってもらえて驚きました。", age: "40代・男性", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=200&q=80" },
    { category: "ヴィトン", location: "京都府", text: "査定後に断ってもキャンセル料がかからないと聞いて安心して呼べました。", age: "50代・男性", image: "https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=200&q=80" },
  ],
};

export default function BrandLP() {
  return <CategoryLP config={config} />;
}