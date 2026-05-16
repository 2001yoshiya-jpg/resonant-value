import { motion } from "framer-motion";

const brands = [
  "KAWAI", "YAMAHA", "Ibanez", "Martin",
  "Ovation", "Pearl", "SELMER", "Gibson",
  "Fender", "Morris", "Roland", "Yanagisawa",
  "Muramatsu", "BUFFET CRAMPON", "SUZUKI", "Taylor",
];

export default function BrandGrid() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4">
            Brands We Acquire
          </p>
          <h2 className="font-jp text-3xl md:text-4xl font-black text-foreground">
            取り扱い<span className="text-primary">メーカー</span>・ブランド
          </h2>
          <div className="soundwave-divider w-32 mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="glass-card rounded-xl p-4 flex items-center justify-center h-20 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default"
            >
              <span className="font-mono text-xs font-semibold text-muted-foreground text-center leading-tight">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}