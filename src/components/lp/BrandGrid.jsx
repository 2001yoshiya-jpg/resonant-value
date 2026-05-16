import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const brands = [
  { name: "YAMAHA", logo: "https://logo.clearbit.com/yamaha.com" },
  { name: "KAWAI", logo: "https://logo.clearbit.com/kawai.co.jp" },
  { name: "Gibson", logo: "https://logo.clearbit.com/gibson.com" },
  { name: "Fender", logo: "https://logo.clearbit.com/fender.com" },
  { name: "Martin", logo: "https://logo.clearbit.com/martinguitar.com" },
  { name: "Roland", logo: "https://logo.clearbit.com/roland.com" },
  { name: "SELMER", logo: "https://logo.clearbit.com/selmer.fr" },
  { name: "Pearl", logo: "https://logo.clearbit.com/pearldrum.com" },
  { name: "Ibanez", logo: "https://logo.clearbit.com/ibanez.com" },
  { name: "Ovation", logo: null },
  { name: "Morris", logo: null },
  { name: "Yanagisawa", logo: null },
  { name: "Muramatsu", logo: null },
  { name: "BUFFET CRAMPON", logo: "https://logo.clearbit.com/buffet-crampon.com" },
  { name: "SUZUKI", logo: "https://logo.clearbit.com/suzuki-music.co.jp" },
  { name: "Taylor", logo: "https://logo.clearbit.com/taylorguitars.com" },
];

function BrandCard({ brand, i }) {
  const [imgError, setImgError] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: i * 0.03 }}
      className="item-card bg-white rounded-xl border border-border h-20 flex flex-col items-center justify-center px-2 py-2 shadow-sm gap-1"
    >
      {brand.logo && !imgError ? (
        <>
          <img
            src={brand.logo}
            alt={brand.name}
            className="h-7 w-auto max-w-full object-contain"
            onError={() => setImgError(true)}
          />
          <span className="font-jp text-[10px] text-muted-foreground text-center leading-tight">{brand.name}</span>
        </>
      ) : (
        <span className="font-jp text-xs font-bold text-navy text-center leading-tight px-1">{brand.name}</span>
      )}
    </motion.div>
  );
}

export default function BrandGrid() {
  return (
    <section className="py-20 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          en="Brands"
          ja={<>取り扱い<span className="text-amber">メーカー</span>・ブランド</>}
          sub="掲載のないブランドも査定可能です。お気軽にご相談ください。"
        />
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {brands.map((brand, i) => (
            <BrandCard key={brand.name} brand={brand} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}