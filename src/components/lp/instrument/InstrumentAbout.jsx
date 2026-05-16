import { motion } from "framer-motion";
import { Check, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const points = ["査定無料", "出張費無料", "キャンセル無料", "即日対応"];

export default function InstrumentAbout() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-20 px-6 bg-white" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-8 bg-navy rounded-full" />
              <span className="text-navy text-xs font-bold tracking-widest uppercase">About</span>
            </div>
            <h2 className="font-jp text-2xl md:text-3xl font-black text-navy leading-snug mb-4">
              ご自宅の不用な楽器<br />
              <span style={{ color: "#1a3a6b" }}>くらの助</span>が出張買取
            </h2>
            <p className="text-muted-foreground font-jp text-sm leading-relaxed mb-6">
              「この楽器、売れるかな？」「弾かなくなったけど価値はある？」<br />
              そんなお品物も、くらの助がご自宅までお伺いします。
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {points.map((p) => (
                <div key={p} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-jp text-sm font-bold text-navy">{p}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="h-12 px-6 bg-red-500 hover:bg-red-600 text-white font-jp font-bold rounded"
                onClick={scrollToContact}
              >
                <Phone className="w-4 h-4 mr-2" />
                電話で無料査定　0120-XXX-XXX
              </Button>
              <Button
                variant="outline"
                className="h-12 px-6 border-navy text-navy hover:bg-navy hover:text-white font-jp font-bold rounded"
                onClick={scrollToContact}
              >
                <Mail className="w-4 h-4 mr-2" />
                メールで相談する
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1514919635889-1786ccf1e9d1?w=800&q=85"
                alt="楽器買取スタッフ"
                className="w-full h-72 md:h-96 object-cover"
              />
              <div className="absolute top-4 right-4 bg-navy text-white rounded-lg px-4 py-3 text-center shadow-lg">
                <p className="font-jp text-xs font-bold">出張費・査定料</p>
                <p className="font-jp text-lg font-black text-navy">完全無料!!!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}