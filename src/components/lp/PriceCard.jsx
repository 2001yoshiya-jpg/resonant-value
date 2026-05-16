import { motion } from "framer-motion";

export default function PriceCard({ item, index }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('ja-JP').format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/30">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        
        {/* Boost badge */}
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground font-mono text-xs font-bold px-3 py-1.5 rounded-full">
          30%増額
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-jp text-sm font-semibold text-foreground leading-snug line-clamp-2 mb-4">
          {item.name}
        </h3>

        {/* Prices */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground font-jp">相場</span>
            <span className="animate-strike text-muted-foreground font-mono text-sm">
              ¥{formatPrice(item.marketPrice)}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-primary font-jp font-semibold">買取</span>
            <span className="text-primary font-mono text-xl font-bold tracking-tight">
              ¥{formatPrice(item.ourPrice)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}