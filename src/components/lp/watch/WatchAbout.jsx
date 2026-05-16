import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const points = ["査定無料", "出張費無料", "キャンセル無料", "即日対応"];

export default function WatchAbout() {
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-20 px-6 bg-white" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-8 bg-amber rounded-full" />
              <span className="text-amber text-xs font-bold tracking-widest uppercase">About</span>
            </div>
            <h2 className="font-jp text-2xl md:text-3xl font-black text-navy leading-snug mb-4">
              ご自宅の不用な時計<br />
              <span className="text-navy">くらの助</span>が出張買取
            </h2>
            <p className="text-muted-foreground font-jp text-sm leading-relaxed mb-6">
              「この時計、売れるかな？」「動かなくなったけど価値はある？」<br />
              そんなお品物も、くらの助がご自宅までお伺いします。
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {points.map((p) => (
                <div key={p} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-amber flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-navy" />
                  </div>
                  <span className="font-jp text-sm font-bold text-navy">{p}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="h-12 px-6 bg-red-500 hover:bg-red-600 text-white font-jp font-bold rounded" onClick={scrollToContact}>
                <Phone className="w-4 h-4 mr-2" />電話で無料査定　0120-XXX-XXX
              </Button>
              <Button variant="outline" className="h-12 px-6 border-navy text-navy hover:bg-navy hover:text-white font-jp font-bold rounded" onClick={scrollToContact}>
                <Mail className="w-4 h-4 mr-2" />メールで相談する
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1 w-full">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=85" alt="時計買取スタッフ" className="w-full h-72 md:h-96 object-cover" />
              <div className="absolute top-4 right-4 bg-navy text-white rounded-lg px-4 py-3 text-center shadow-lg">
                <p className="font-jp text-xs font-bold">出張費・査定料</p>
                <p className="font-jp text-lg font-black text-amber">完全無料!!!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}