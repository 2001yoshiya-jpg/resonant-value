import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1400&q=90",
    headline: "高級時計は、必要としている",
    highlight: "方へ",
    sub: "大切な時計を適正価格で",
  },
  {
    image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=1400&q=90",
    headline: "どんな時計でも",
    highlight: "高価買取",
    sub: "動かなくても・傷があっても",
  },
  {
    image: "https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=1400&q=90",
    headline: "出張費・査定料",
    highlight: "完全無料",
    sub: "ご自宅までスタッフが伺います",
  },
];

export default function WatchHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4500);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "90vh" }}>
      <AnimatePresence mode="wait">
        <motion.div key={current} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0">
          <img src={slides[current].image} alt="hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/45" />
        </motion.div>
      </AnimatePresence>

      <button onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm">
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button onClick={() => setCurrent((c) => (c + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm">
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-2.5 rounded-full transition-all ${i === current ? "bg-navy w-6" : "bg-white/50 w-2.5"}`} />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-[90vh] px-4">
        <AnimatePresence mode="wait">
          <motion.div key={current} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/90 backdrop-blur-sm rounded-lg px-8 md:px-16 py-8 text-center max-w-2xl shadow-2xl">
            <p className="text-muted-foreground text-sm font-jp mb-2">{slides[current].sub}</p>
            <h1 className="font-jp text-3xl md:text-5xl font-black text-navy leading-tight">
              {slides[current].headline}
              <span className="text-navy">{slides[current].highlight}</span>
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 bg-navy/95 py-5 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white font-jp text-sm md:text-base font-bold text-center">
            時計買取センターは、リサイクル活動を通じて<br className="hidden md:block" />
            積極的に<span className="text-white font-black">SDG's</span>に取り組んでいます
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <Button className="h-11 px-5 bg-red-500 hover:bg-red-600 text-white font-jp font-bold rounded text-sm" onClick={scrollToContact}>
              <Phone className="w-4 h-4 mr-1.5" />電話で無料査定
            </Button>
            <Button className="h-11 px-5 bg-green-500 hover:bg-green-600 text-white font-jp font-bold rounded text-sm" onClick={scrollToContact}>
              <Mail className="w-4 h-4 mr-1.5" />メールで相談する
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}