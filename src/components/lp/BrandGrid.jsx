import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const brands = [
  { name: "YAMAHA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Yamaha_logo.svg/320px-Yamaha_logo.svg.png" },
  { name: "KAWAI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Kawai_logo.svg/320px-Kawai_logo.svg.png" },
  { name: "Gibson", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Gibson_logo.svg/320px-Gibson_logo.svg.png" },
  { name: "Fender", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Fender_logo.svg/320px-Fender_logo.svg.png" },
  { name: "Martin", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/C.F._Martin_%26_Company_logo.svg/320px-C.F._Martin_%26_Company_logo.svg.png" },
  { name: "Roland", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Roland_logo.svg/320px-Roland_logo.svg.png" },
  { name: "SELMER", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Henri_Selmer_Paris_logo.svg/320px-Henri_Selmer_Paris_logo.svg.png" },
  { name: "Pearl", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Pearl_Drums_logo.svg/320px-Pearl_Drums_logo.svg.png" },
  { name: "Ibanez", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Ibanez_logo.svg/320px-Ibanez_logo.svg.png" },
  { name: "Ovation", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Ovation_Guitars_logo.svg/320px-Ovation_Guitars_logo.svg.png" },
  { name: "Morris", logo: null },
  { name: "Yanagisawa", logo: null },
  { name: "Muramatsu", logo: null },
  { name: "BUFFET CRAMPON", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Buffet_Crampon_logo.svg/320px-Buffet_Crampon_logo.svg.png" },
  { name: "Taylor", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Taylor_Guitars_logo.svg/320px-Taylor_Guitars_logo.svg.png" },
  { name: "SUZUKI", logo: null },
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