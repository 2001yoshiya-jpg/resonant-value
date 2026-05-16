import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const watches = [
  { name: "ロレックス サブマリーナー Ref.116610LN", image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400&q=80", market: 1200000, ours: 1560000 },
  { name: "パテック フィリップ カラトラバ 5196", image: "https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=400&q=80", market: 2800000, ours: 3640000 },
  { name: "オメガ スピードマスター プロフェッショナル", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", market: 350000, ours: 455000 },
  { name: "IWC パイロットウォッチ マーク XVIII", image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=400&q=80", market: 480000, ours: 624000 },
  { name: "カルティエ タンク ソロ LM", image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&q=80", market: 320000, ours: 416000 },
  { name: "ブライトリング ナビタイマー 01", image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=400&q=80", market: 560000, ours: 728000 },
  { name: "タグ・ホイヤー カレラ キャリバー5", image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&q=80", market: 180000, ours: 234000 },
  { name: "ヴァシュロン・コンスタンタン トラディショナル", image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=400&q=80", market: 1800000, ours: 2340000 },
];

const fmt = (n) => new Intl.NumberFormat("ja-JP").format(n);

export default function WatchPriceGallery() {
  return (
    <section className="py-20 px-6 bg-muted" id="items">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          en="Recent Valuations"
          ja={<>相場買取価格よりも<br /><span className="text-navy">こんなに高く</span>買い取ります！</>}
          sub="独自のルートで他社より高く買い取れる体制を整えています"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {watches.map((item, i) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }} className="item-card bg-white rounded-xl overflow-hidden shadow-sm border border-border">
              <div className="relative">
                <img src={item.image} alt={item.name} className="w-full aspect-[4/3] object-cover" />

              </div>
              <div className="p-4">
                <p className="font-jp text-xs font-semibold text-foreground leading-snug mb-3 line-clamp-2">{item.name}</p>
                <div className="flex items-center justify-between bg-navy/10 rounded px-2 py-1">
                  <span className="text-xs text-navy font-jp font-bold">買取価格</span>
                  <span className="text-sm font-black text-navy font-mono">¥{fmt(item.ours)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}