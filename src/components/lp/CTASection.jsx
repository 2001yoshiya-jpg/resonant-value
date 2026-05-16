import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section id="cta-section" className="py-24 px-6 relative overflow-hidden">
      {/* Amber glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
      <div className="absolute top-0 left-0 right-0 soundwave-divider" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4">
            Free Consultation
          </p>
          <h2 className="font-jp text-3xl md:text-5xl font-black text-foreground mb-3">
            出張費・査定料<span className="text-primary">完全無料</span>
          </h2>
          <p className="text-muted-foreground text-base mb-12 max-w-lg mx-auto">
            安心・丁寧・高価買取！まずはお気軽にご相談ください。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Phone */}
          <div className="glass-card rounded-2xl p-8 text-center group hover:border-primary/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground mb-2 font-jp">お電話でのお問い合わせ</p>
            <p className="font-mono text-2xl font-bold text-primary tracking-tight">0120-925-710</p>
            <p className="text-xs text-muted-foreground mt-2">営業時間 9:00 〜 19:00</p>
          </div>

          {/* LINE */}
          <div className="glass-card rounded-2xl p-8 text-center group hover:border-primary/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground mb-4 font-jp">LINEからのお申し込み</p>
            <Button className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full">
              LINEで査定を申し込む
            </Button>
            <p className="text-xs text-muted-foreground mt-2">24時間受付中</p>
          </div>

          {/* Email */}
          <div className="glass-card rounded-2xl p-8 text-center group hover:border-primary/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground mb-4 font-jp">メールでお問い合わせ</p>
            <Button variant="outline" className="w-full h-12 border-primary/30 text-foreground hover:bg-primary/10 font-bold rounded-full">
              メールで問い合わせ
            </Button>
            <p className="text-xs text-muted-foreground mt-2">24時間受付中</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}