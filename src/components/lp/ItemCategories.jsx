import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";

const categories = [
  { name: "ブランド品", image: "https://media.base44.com/images/public/6a02b79e8a040050e4d74ca3/141a3a296_brand.jpg", href: "/brand" },
  { name: "時計", image: "https://media.base44.com/images/public/6a02b79e8a040050e4d74ca3/7e1f715e8_tokeijpg.jpg", href: "/watch" },
  { name: "金・プラチナ", image: "https://media.base44.com/images/public/6a02b79e8a040050e4d74ca3/ae467c5ba_image.png", href: "/gold" },
  { name: "ジュエリー", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&q=80", href: "/jewelry" },
  { name: "カメラ", image: "https://media.base44.com/images/public/6a02b79e8a040050e4d74ca3/121579384_kamerajpg.jpg", href: "/camera" },
  { name: "家電", image: "https://media.base44.com/images/public/6a02b79e8a040050e4d74ca3/75203e49b_image.png", href: "/appliance" },
  { name: "骨董品", image: "https://media.base44.com/images/public/6a02b79e8a040050e4d74ca3/9f413df6f_kotoujpg.jpg", href: "/antiques" },
  { name: "楽器", image: "https://media.base44.com/images/public/6a02b79e8a040050e4d74ca3/91cb6409c_image.png", href: "/instrument" },
  { name: "切手・古銭", image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=300&q=80", href: "/stamps" },
  { name: "お酒", image: "https://media.base44.com/images/public/6a02b79e8a040050e4d74ca3/1bd4456d0_ske.jpg", href: "/sake" },
  { name: "食器", image: "https://media.base44.com/images/public/6a02b79e8a040050e4d74ca3/7e2b2324f_sara.jpg", href: "/dishes" },
  { name: "家具", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&q=80", href: "/furniture" },
];

export default function ItemCategories() {
  return (
    <section className="py-20 px-6 bg-muted" id="items">
      <div className="max-w-7xl mx-auto">
        <SectionHeader en="Items" ja={<>買取<span className="text-navy">品目</span></>} sub="「箱なし」「古い」「壊れている」お品物も査定可能です" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link to={item.href} className="item-card group block bg-white rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md hover:border-navy transition-all">
                <div className="relative overflow-hidden h-32 md:h-40">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-3 text-center">
                  <p className="font-jp text-sm font-bold text-navy group-hover:text-primary transition-colors">{item.name}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}