import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeader from "../SectionHeader";

const conditions = [
  { title: "古い楽器", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300&q=80" },
  { title: "壊れた楽器", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&q=80" },
  { title: "動かない楽器", image: "https://images.unsplash.com/photo-1514919635889-1786ccf1e9d1?w=300&q=80" },
];

const examples = [
  "弦が切れている、交換が必要なギター",
  "カビが生えている楽器",
  "キーが壊れているキーボード",
  "音が出ない楽器",
  "ペダルが反応しないキーボード",
  "ケースなしの楽器",
];

export default function InstrumentCondition() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          en="Any Condition"
          ja={
            <>
              こんな状態のお品物でも<br />
              <span className="text-navy">出張買取</span>いたします
            </>
          }
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
                <Check className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                <span className="font-jp text-sm text-foreground">{e}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}