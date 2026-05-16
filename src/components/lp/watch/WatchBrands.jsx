import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const brands = [
  { name: "ROLEX", logo: "https://logo.clearbit.com/rolex.com" },
  { name: "PATEK PHILIPPE", logo: "https://logo.clearbit.com/patek.com" },
  { name: "AUDEMARS PIGUET", logo: "https://logo.clearbit.com/audemarspiguet.com" },
  { name: "VACHERON", logo: "https://logo.clearbit.com/vacheron-constantin.com" },
  { name: "OMEGA", logo: "https://logo.clearbit.com/omegawatches.com" },
  { name: "IWC", logo: "https://logo.clearbit.com/iwc.com" },
  { name: "CARTIER", logo: "https://logo.clearbit.com/cartier.com" },
  { name: "BREITLING", logo: "https://logo.clearbit.com/breitling.com" },
  { name: "TAG HEUER", logo: "https://logo.clearbit.com/tagheuer.com" },
  { name: "PANERAI", logo: "https://logo.clearbit.com/panerai.com" },
  { name: "LONGINES", logo: "https://logo.clearbit.com/longines.com" },
  { name: "TUDOR", logo: "https://logo.clearbit.com/tudorwatch.com" },
  { name: "GRAND SEIKO", logo: "https://logo.clearbit.com/grand-seiko.com" },
  { name: "CITIZEN", logo: "https://logo.clearbit.com/citizen.co.jp" },
  { name: "CASIO", logo: "https://logo.clearbit.com/casio.com" },
  { name: "SEIKO", logo: "https://logo.clearbit.com/seiko.com" },
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

export default function WatchBrands() {
  return (
    <section className="py-20 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <SectionHeader en="Brands" ja={<>取り扱い<span className="text-amber">メーカー</span>・ブランド</>} sub="掲載のないブランドも査定可能です。お気軽にご相談ください。" />
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {brands.map((brand, i) => (
            <BrandCard key={brand.name} brand={brand} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}