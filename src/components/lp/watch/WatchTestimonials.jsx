import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const testimonials = [
  { category: "ロレックス", location: "東京都", text: "予想をはるかに超える金額で買い取っていただきました。スタッフの方が時計に詳しく、安心して任せられました。", age: "60代・男性", image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=200&q=80" },
  { category: "オメガ", location: "神奈川県", text: "父から受け継いだオメガを売ることにしました。価値を正しく評価してもらい、納得の価格で売れました。", age: "50代・女性", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80" },
  { category: "カルティエ", location: "大阪府", text: "箱も保証書もなかったのですが、しっかり査定していただけました。出張費も無料で助かりました。", age: "40代・女性", image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=200&q=80" },
  { category: "タグ・ホイヤー", location: "千葉県", text: "止まってしまった時計でしたが、想定より高く買い取っていただけました。また利用したいです。", age: "30代・男性", image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=200&q=80" },
  { category: "グランドセイコー", location: "京都府", text: "遺品整理で複数の時計をまとめて買い取ってもらいました。嫌な顔一つせず対応してくれて感謝しています。", age: "50代・女性", image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=200&q=80" },
  { category: "IWC", location: "静岡県", text: "出張費も無料で、査定後にキャンセルも可能と聞いて安心して呼べました。金額も満足です。", age: "40代・男性", image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=200&q=80" },
];

export default function WatchTestimonials() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader en="Testimonials" ja="お客様の声" sub='たくさんの「ありがとう」をいただいています' />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-muted rounded-xl overflow-hidden border border-border shadow-sm">
              <img src={t.image} alt={t.category} className="w-full h-36 object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-navy bg-navy/10 px-2 py-0.5 rounded font-jp">{t.category}</span>
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