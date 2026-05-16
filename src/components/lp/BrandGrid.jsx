import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const brands = [
  { name: "YAMAHA", domain: "yamaha.com" },
  { name: "KAWAI", domain: "kawai.co.jp" },
  { name: "Gibson", domain: "gibson.com" },
  { name: "Fender", domain: "fender.com" },
  { name: "Martin", domain: "martinguitar.com" },
  { name: "Roland", domain: "roland.com" },
  { name: "SELMER", domain: "selmer.fr" },
  { name: "Pearl", domain: "pearldrum.com" },
  { name: "Ibanez", domain: "ibanez.com" },
  { name: "Ovation", domain: "ovationguitars.com" },
  { name: "Morris", domain: "morris-guitar.com" },
  { name: "Yanagisawa", domain: "yanagisawasax.com" },
  { name: "Muramatsu", domain: "muramatsuflute.com" },
  { name: "BUFFET CRAMPON", domain: "buffet-crampon.com" },
  { name: "SUZUKI", domain: "suzuki-music.co.jp" },
  { name: "Taylor", domain: "taylorguitars.com" },
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