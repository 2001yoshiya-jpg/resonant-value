import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const brands = [
  "KAWAI", "YAMAHA", "Ibanez", "Martin",
  "Ovation", "Pearl", "SELMER", "Gibson",
  "Fender", "Morris", "Roland", "Yanagisawa",
  "Muramatsu", "BUFFET CRAMPON", "SUZUKI", "Taylor",
];

export default function BrandGrid() {
  return (
    <section className="py-20 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          en="Brands"
          ja={<>取り扱い<span className="text-amber">メーカー</span>・ブランド</>}
          sub="掲載のないブランドも査定可能です。お気軽にご相談ください。"
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="item-card bg-white rounded-xl border border-border h-16 flex items-center justify-center px-2 shadow-sm"
            >
              <span className="font-jp text-xs font-bold text-navy text-center leading-tight">{brand}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}