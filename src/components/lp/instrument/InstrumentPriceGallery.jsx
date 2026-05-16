import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const fmt = (n) => new Intl.NumberFormat("ja-JP").format(n);

const instruments = [
  { name: "ヤマハ アコースティックギター", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300&q=80", market: 15000, ours: 20000 },
  { name: "カワイ電子ピアノ", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80", market: 80000, ours: 105000 },
  { name: "フェンダー ストラトキャスター", image: "https://images.unsplash.com/photo-1514919635889-1786ccf1e9d1?w=300&q=80", market: 35000, ours: 45000 },
  { name: "ローランド キーボード", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&q=80", market: 25000, ours: 32000 },
];

export default function InstrumentPriceGallery() {
  return (
    <section className="py-20 px-6 bg-muted" id="items">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          en="Recent Valuations"
          ja={<>相場買取価格よりも<br /><span className="text-navy">こんなに高く</span>買い取ります！</>}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instruments.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="item-card bg-white rounded-xl overflow-hidden shadow-sm border border-border"
            >
              <div className="relative">
                <img src={item.image} alt={item.name} className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="p-4">
                <p className="font-jp text-xs font-semibold text-foreground leading-snug mb-3 line-clamp-2">
                  {item.name}
                </p>
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