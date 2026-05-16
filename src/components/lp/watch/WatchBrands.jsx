import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const brands = [
  { name: "ROLEX", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Rolex_logo.svg/320px-Rolex_logo.svg.png" },
  { name: "PATEK PHILIPPE", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Patek_Philippe_SA_logo.svg/320px-Patek_Philippe_SA_logo.svg.png" },
  { name: "AUDEMARS PIGUET", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Audemars_Piguet_logo.svg/320px-Audemars_Piguet_logo.svg.png" },
  { name: "VACHERON", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Vacheron_Constantin_logo.svg/320px-Vacheron_Constantin_logo.svg.png" },
  { name: "OMEGA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Omega_Brand_logo.svg/320px-Omega_Brand_logo.svg.png" },
  { name: "IWC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/IWC_logo.svg/320px-IWC_logo.svg.png" },
  { name: "CARTIER", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cartier_logo.svg/320px-Cartier_logo.svg.png" },
  { name: "BREITLING", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Breitling_logo.svg/320px-Breitling_logo.svg.png" },
  { name: "TAG HEUER", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/TAG_Heuer_logo.svg/320px-TAG_Heuer_logo.svg.png" },
  { name: "PANERAI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Officine_Panerai_logo.svg/320px-Officine_Panerai_logo.svg.png" },
  { name: "LONGINES", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Longines_logo.svg/320px-Longines_logo.svg.png" },
  { name: "TUDOR", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tudor_logo.svg/320px-Tudor_logo.svg.png" },
  { name: "GRAND SEIKO", logo: null },
  { name: "CITIZEN", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Citizen_brand_logo.svg/320px-Citizen_brand_logo.svg.png" },
  { name: "CASIO", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Casio_logo.svg/320px-Casio_logo.svg.png" },
  { name: "SEIKO", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Seiko_Logo.svg/320px-Seiko_Logo.svg.png" },
];

function BrandCard({ brand, i }) {
  const [imgError, setImgError] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: i * 0.03 }}
      className="item-card bg-white rounded-xl border border-border flex flex-col items-center justify-center gap-2 p-3 shadow-sm aspect-square"
    >
      {brand.logo && !imgError ? (
        <img
          src={brand.logo}
          alt={brand.name}
          className="w-full h-12 object-contain"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="font-jp text-sm font-bold text-navy text-center leading-tight px-1">{brand.name}</span>
      )}
    </motion.div>
  );
}

export default function WatchBrands() {
  return (
    <section className="py-20 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <SectionHeader en="Brands" ja={<>取り扱い<span className="text-navy">メーカー</span>・ブランド</>} sub="掲載のないブランドも査定可能です。お気軽にご相談ください。" />
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {brands.map((brand, i) => (
            <BrandCard key={brand.name} brand={brand} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}