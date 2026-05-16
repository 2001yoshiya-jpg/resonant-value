import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { Check } from "lucide-react";

const conditions = [
  { image: "https://images.unsplash.com/photo-1584999734482-0361aecad844?w=400&q=80", title: "動かないお品物" },
  { image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400&q=80", title: "古いお品物" },
  { image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&q=80", title: "傷・破損したお品物" },
];

const examples = [
  "動かない・止まっている時計",
  "ベルトが破損・劣化している時計",
  "箱・保証書がない時計",
  "傷やくもりのある時計",
  "メーカーや年代が分からない時計",
];

export default function WatchCondition() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader en="Any Condition" ja={<>こんな状態のお品物でも<br /><span className="text-amber">出張買取</span>いたします</>} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {conditions.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className="text-center">
              <div className="rounded-xl overflow-hidden mb-3 shadow-sm">
                <img src={item.image} alt={item.title} className="w-full h-44 object-cover" />
              </div>
              <p className="font-jp font-bold text-navy text-base">{item.title}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-muted rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
          <p className="font-jp text-sm font-bold text-navy mb-4 text-center">こんな時計もお気軽にご相談ください</p>
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