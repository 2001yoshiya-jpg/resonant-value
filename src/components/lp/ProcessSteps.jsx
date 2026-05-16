import { motion } from "framer-motion";
import { Phone, Truck, ClipboardCheck, Banknote } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "お問い合わせ",
    desc: "お電話・LINE・メールからお気軽にご連絡ください",
  },
  {
    icon: Truck,
    step: "02",
    title: "出張訪問",
    desc: "ご都合の良い日時にスタッフが無料でお伺いします",
  },
  {
    icon: ClipboardCheck,
    step: "03",
    title: "査定",
    desc: "その場で丁寧に査定し、金額をご提示いたします",
  },
  {
    icon: Banknote,
    step: "04",
    title: "即日現金払い",
    desc: "ご納得いただければ、その場で現金をお支払いします",
  },
];

export default function ProcessSteps({ processImage }) {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={processImage} alt="Craftsmanship" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4">
            How It Works
          </p>
          <h2 className="font-jp text-3xl md:text-4xl font-black text-foreground">
            買取の<span className="text-primary">流れ</span>
          </h2>
          <div className="soundwave-divider w-32 mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="relative inline-flex flex-col items-center">
                <span className="font-mono text-xs text-primary font-bold mb-3">{item.step}</span>
                <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mb-5 border border-border">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="font-jp text-base font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px] mx-auto">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}