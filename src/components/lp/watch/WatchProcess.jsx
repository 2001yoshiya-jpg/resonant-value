import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const steps = [
  { num: "01", title: "無料査定申し込み", desc: "お電話・メール・LINEからお気軽にご連絡ください。どんな時計でもまずはご相談を。", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&q=80" },
  { num: "02", title: "出張訪問・査定", desc: "ご希望日時にスタッフがご自宅へ。時計を一点ずつ丁寧に査定いたします。", image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=300&q=80" },
  { num: "03", title: "査定結果のご案内", desc: "査定金額を分かりやすくご説明。他社との比較もお気軽にどうぞ。", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=80" },
  { num: "04", title: "即日現金払い", desc: "査定金額にご納得いただけましたら、その場で現金でお支払い。不成立でも費用はゼロです。", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&q=80" },
];

export default function WatchProcess() {
  return (
    <section className="py-20 px-6 bg-white" id="flow">
      <div className="max-w-6xl mx-auto">
        <SectionHeader en="How It Works" ja={<>買取の<span className="text-amber">流れ</span></>} />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div key={step.num} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[85%] text-amber text-2xl z-10 font-black">›</div>
              )}
              <div className="bg-muted rounded-xl overflow-hidden shadow-sm border border-border">
                <img src={step.image} alt={step.title} className="w-full h-36 object-cover" />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-black text-amber font-mono">{step.num}</span>
                    <h3 className="font-jp text-sm font-black text-navy">{step.title}</h3>
                  </div>
                  <p className="font-jp text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}