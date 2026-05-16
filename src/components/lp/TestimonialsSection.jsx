import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    category: "ピアノ・鍵盤楽器",
    location: "東京都",
    text: "思っていたより高く買い取っていただけて大満足です。スタッフの方がとても丁寧で安心できました。",
    age: "60代・女性",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=200&q=80",
  },
  {
    category: "ギター・弦楽器",
    location: "神奈川県",
    text: "電話してから当日に来ていただけました。大きなギターも何本かあったのですが全部見てくれて助かりました。",
    age: "40代・男性",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=200&q=80",
  },
  {
    category: "管楽器",
    location: "大阪府",
    text: "ずっと使っておらず、倉庫に眠っていたサックスを納得の価格で買い取っていただきました。",
    age: "30代・女性",
    image: "https://images.unsplash.com/photo-1601786564607-59a5d07f5b39?w=200&q=80",
  },
  {
    category: "ヴァイオリン",
    location: "千葉県",
    text: "箱もない古いヴァイオリンでしたが、丁寧に査定してもらい納得の価格で売れました。また利用したいです。",
    age: "50代・男性",
    image: "https://images.unsplash.com/photo-1612225330812-01a90bfd55bc?w=200&q=80",
  },
  {
    category: "ドラム・打楽器",
    location: "京都府",
    text: "大量にお願いしましたが、嫌な顔一つせず全部見てもらえました。ありがとうございました。",
    age: "30代・女性",
    image: "https://images.unsplash.com/photo-1543443258-92b04ad5ec6b?w=200&q=80",
  },
  {
    category: "電子楽器",
    location: "静岡県",
    text: "出張費も無料で、査定後にキャンセルも可能と聞いて安心して呼べました。金額も満足です。",
    age: "60代・男性",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&q=80",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          en="Testimonials"
          ja="お客様の声"
          sub='たくさんの「ありがとう」をいただいています'
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-muted rounded-xl overflow-hidden border border-border shadow-sm"
            >
              <img src={t.image} alt={t.category} className="w-full h-36 object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-amber bg-amber/10 px-2 py-0.5 rounded font-jp">{t.category}</span>
                  <span className="text-xs text-muted-foreground font-jp">{t.location}</span>
                </div>
                <p className="font-jp text-sm text-foreground leading-relaxed mb-3">"{t.text}"</p>
                <p className="font-jp text-xs text-muted-foreground text-right">— {t.age}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}