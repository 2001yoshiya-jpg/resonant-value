import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Check } from "lucide-react";

const conditions = [
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    title: "動かないお品物",
  },
  {
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    title: "古いお品物",
  },
  {
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400&q=80",
    title: "破損したお品物",
  },
];

const examples = [
  "チューニングが合わない、音が出ない楽器",
  "付属品・ケース・説明書がない楽器",
  "壊れている・割れているお品物",
  "メーカーや年代が分からない楽器",
  "古すぎて価値が分からないもの",
];

export default function ConditionSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          en="Any Condition"
          ja={<>こんな状態のお品物でも<br /><span className="text-amber">出張買取</span>いたします</>}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {conditions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center"
            >
              <div className="rounded-xl overflow-hidden mb-3 shadow-sm">
                <img src={item.image} alt={item.title} className="w-full h-44 object-cover" />
              </div>
              <p className="font-jp font-bold text-navy text-base">{item.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Example list */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-muted rounded-xl p-6 md:p-8 max-w-2xl mx-auto"
        >
          <p className="font-jp text-sm font-bold text-navy mb-4 text-center">こんな楽器もお気軽にご相談ください</p>
          <ul className="space-y-2">
            {examples.map((e) => (
              <li key={e} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" />
                <span className="font-jp text-sm text-foreground">{e}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}