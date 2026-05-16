import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const reasons = [
  { num: "01", title: "高価買取に自信", desc: "独自の販売ルートを活かし、仲介業者を介さず適正価格で丁寧に査定。ロレックス・パテック・オメガなど高級時計も最高値でお買い取りします。", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80" },
  { num: "02", title: "状態が悪くても相談OK", desc: "動かない時計、箱や保証書がない時計、傷や汚れのある時計もご相談ください。丁寧に査定いたします。", image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=300&q=80" },
  { num: "03", title: "最短即日対応", desc: "ご予約状況や地域により、当日の出張査定も可能です。「今日来てほしい」というご要望もお気軽にどうぞ。", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&q=80" },
  { num: "04", title: "査定料・出張費 無料", desc: "査定後に金額にご納得いただけない場合はキャンセルOK。費用は一切かかりません。安心してご利用ください。", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=80" },
  { num: "05", title: "丁寧・誠実な接客", desc: "大切なお品物を一点ずつ確認し、分かりやすくご説明します。時計専門の経験豊富なスタッフが真摯に対応いたします。", image: "https://images.unsplash.com/photo-1524508762098-f9e1dbef2b57?w=300&q=80" },
];

export default function WatchReasons() {
  return (
    <section className="py-20 px-6 bg-muted" id="reasons">
      <div className="max-w-6xl mx-auto">
        <SectionHeader en="Why Choose Us" ja={<>時計買取センターが<span className="text-navy">選ばれる5つの理由</span></>} sub="安心・丁寧・高価買取を徹底しています" />
        <div className="space-y-6">
          {reasons.map((r, i) => (
            <motion.div key={r.num} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className={`flex flex-col md:flex-row items-center gap-6 bg-white rounded-xl shadow-sm p-6 border border-border ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="flex-shrink-0 w-full md:w-48">
                <img src={r.image} alt={r.title} className="w-full h-36 md:h-32 object-cover rounded-lg" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl font-black text-navy font-mono">{r.num}</span>
                  <h3 className="font-jp text-lg font-black text-navy">{r.title}</h3>
                </div>
                <p className="font-jp text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}