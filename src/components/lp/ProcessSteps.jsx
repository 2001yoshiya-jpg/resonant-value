import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Phone, Truck, ClipboardCheck, Banknote } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "無料査定申し込み",
    desc: "まずは、「こんな物でも買い取ってもらえるか」など、なんでもお気軽にご相談ください。",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&q=80",
  },
  {
    num: "02",
    icon: Truck,
    title: "査定",
    desc: "ご希望に添えるよう、訪問日時の調整から決定。ご自宅に査定員が訪問し、お品物を慎重かつ丁寧に査定いたします。",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=300&q=80",
  },
  {
    num: "03",
    icon: ClipboardCheck,
    title: "査定結果のご案内",
    desc: "確かな鑑定眼だけでなく、マナーを心得た査定員が丁寧に対応。ご安心ください。",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=80",
  },
  {
    num: "04",
    icon: Banknote,
    title: "買い取り",
    desc: "査定金額にご納得いただけましたら、その場で現金でお支払い。不成立でも手数料等は一切かかりません。",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&q=80",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 px-6 bg-white" id="flow">
      <div className="max-w-6xl mx-auto">
        <SectionHeader en="How It Works" ja={<>買取の<span className="text-amber">流れ</span></>} />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Connector arrow */}
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