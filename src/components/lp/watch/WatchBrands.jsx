import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const brands = [
  { name: "ROLEX", domain: "rolex.com" },
  { name: "PATEK PHILIPPE", domain: "patek.com" },
  { name: "AUDEMARS PIGUET", domain: "audemarspiguet.com" },
  { name: "VACHERON CONSTANTIN", domain: "vacheron-constantin.com" },
  { name: "OMEGA", domain: "omegawatches.com" },
  { name: "IWC", domain: "iwc.com" },
  { name: "CARTIER", domain: "cartier.com" },
  { name: "BREITLING", domain: "breitling.com" },
  { name: "TAG HEUER", domain: "tagheuer.com" },
  { name: "PANERAI", domain: "panerai.com" },
  { name: "LONGINES", domain: "longines.com" },
  { name: "TUDOR", domain: "tudorwatch.com" },
  { name: "GRAND SEIKO", domain: "grand-seiko.com" },
  { name: "CITIZEN", domain: "citizen.co.jp" },
  { name: "CASIO", domain: "casio.com" },
  { name: "SEIKO", domain: "seiko.com" },
];

function BrandCard({ brand, i }) {
  const [imgError, setImgError] = useState(false);
  const logoUrl = brand.domain ? `https://www.google.com/s2/favicons?domain=${brand.domain}&sz=64` : null;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: i * 0.03 }}
      className="item-card bg-white rounded-xl border border-border h-20 flex flex-col items-center justify-center px-2 py-2 shadow-sm gap-1"
    >
      {logoUrl && !imgError ? (
        <>
          <img src={logoUrl} alt={brand.name} className="h-8 w-8 object-contain" onError={() => setImgError(true)} />
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