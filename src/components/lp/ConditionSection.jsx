import { motion } from "framer-motion";
import { AlertTriangle, VolumeX, PackageOpen } from "lucide-react";

const conditions = [
  {
    icon: AlertTriangle,
    title: "壊れている",
    desc: "破損・ひび割れがあっても査定可能",
  },
  {
    icon: VolumeX,
    title: "音が出ない",
    desc: "動作不良でも高価買取の実績あり",
  },
  {
    icon: PackageOpen,
    title: "付属品が無い",
    desc: "ケース・パーツ欠品でもOK",
  },
];

export default function ConditionSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4">
            Any Condition Accepted
          </p>
          <h2 className="font-jp text-3xl md:text-4xl font-black text-foreground">
            こんな状態でも
            <span className="text-primary">出張買取</span>いたします
          </h2>
          <div className="soundwave-divider w-32 mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {conditions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-2xl p-8 text-center group hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-jp text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-center mt-16"
        >
          <p className="text-muted-foreground leading-relaxed font-jp text-sm">
            古い楽器、音が出ない楽器、メーカーが分からない楽器がございましたら、ぜひ一度ご相談ください。
            他にはない独自のルートがあるため、一般的な市場では取り扱いが難しい商品に対しても、最適な査定・高価買取が可能です。
          </p>
        </motion.div>
      </div>
    </section>
  );
}