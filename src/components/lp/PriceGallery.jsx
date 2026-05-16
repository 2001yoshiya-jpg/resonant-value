import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const instruments = [
  { name: "YAMAHA アップライトピアノ", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&q=80", market: 410000, ours: 533000 },
  { name: "ヤマハ ロータリートランペット", image: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400&q=80", market: 310000, ours: 403000 },
  { name: "セルマー アルトサックス SERIE III", image: "https://images.unsplash.com/photo-1601786564607-59a5d07f5b39?w=400&q=80", market: 930000, ours: 1209000 },
  { name: "Martin OM-45 アコースティックギター", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&q=80", market: 1000000, ours: 1300000 },
  { name: "Gibson ES-330 エレキギター", image: "https://images.unsplash.com/photo-1561345400-1f91e9a1b3f8?w=400&q=80", market: 470000, ours: 611000 },
  { name: "BUFFET CRAMPON クラリネット Divine", image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=400&q=80", market: 390000, ours: 507000 },
  { name: "Muramatsu PTP RC フルート", image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&q=80", market: 760000, ours: 988000 },
  { name: "SUZUKI ヴァイオリン EVIDENCE", image: "https://images.unsplash.com/photo-1612225330812-01a90bfd55bc?w=400&q=80", market: 430000, ours: 559000 },
];

const fmt = (n) => new Intl.NumberFormat("ja-JP").format(n);

export default function PriceGallery() {
  return (
    <section className="py-20 px-6 bg-muted" id="items">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          en="Recent Valuations"
          ja={<>相場買取価格よりも<br /><span className="text-amber">こんなに高く</span>買い取ります！</>}
          sub="独自のルートで他社より高く買い取れる体制を整えています"
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
                <div className="absolute top-2 right-2 bg-amber text-navy text-xs font-black px-2 py-0.5 rounded">
                  30%増額
                </div>
              </div>
              <div className="p-4">
                <p className="font-jp text-xs font-semibold text-foreground leading-snug mb-3 line-clamp-2">{item.name}</p>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-jp">相場</span>
                    <span className="text-xs text-muted-foreground line-through font-mono">¥{fmt(item.market)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-amber/10 rounded px-2 py-1">
                    <span className="text-xs text-amber font-jp font-bold">買取価格</span>
                    <span className="text-sm font-black text-navy font-mono">¥{fmt(item.ours)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}