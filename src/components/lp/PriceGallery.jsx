import { motion } from "framer-motion";
import PriceCard from "./PriceCard";

export default function PriceGallery({ instruments }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4">
            Recent Valuations
          </p>
          <h2 className="font-jp text-3xl md:text-4xl font-black text-foreground mb-4">
            相場買取価格よりも
            <br />
            <span className="text-primary">こんなに高く</span>買い取ります
          </h2>
          <div className="soundwave-divider w-32 mx-auto mt-8" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instruments.map((item, index) => (
            <PriceCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}