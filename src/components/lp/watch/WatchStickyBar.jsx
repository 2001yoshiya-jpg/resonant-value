import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WatchStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div initial={{ y: 80 }} animate={{ y: 0 }} exit={{ y: 80 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="fixed bottom-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-t border-white/10 px-4 py-3 shadow-2xl">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
            <div className="hidden md:block">
              <p className="font-jp text-white text-sm font-bold">査定・相談 完全無料</p>
              <p className="font-jp text-white/60 text-xs">出張費・キャンセル料もかかりません</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Button className="flex-1 md:flex-none h-11 px-5 bg-red-500 hover:bg-red-600 text-white font-jp font-bold rounded text-sm" onClick={scrollToContact}>
                <Phone className="w-4 h-4 mr-1.5" />電話で無料査定
              </Button>
              <Button className="flex-1 md:flex-none h-11 px-5 bg-green-500 hover:bg-green-600 text-white font-jp font-bold rounded text-sm" onClick={scrollToContact}>
                <Mail className="w-4 h-4 mr-1.5" />メールで相談
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}