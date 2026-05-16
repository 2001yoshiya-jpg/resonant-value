import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setVisible(scrollPercent > 0.25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-4 bg-background/80 backdrop-blur-xl border-t border-border/50"
        >
          <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
            <div className="hidden md:block">
              <p className="font-jp text-sm font-bold text-foreground">無料査定受付中</p>
              <p className="font-mono text-xs text-muted-foreground">24時間いつでもご相談OK</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Button
                size="lg"
                className="flex-1 md:flex-none h-12 px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full text-sm"
                onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Phone className="w-4 h-4 mr-2" />
                電話で相談
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 md:flex-none h-12 px-6 border-primary/30 hover:bg-primary/10 font-bold rounded-full text-sm"
                onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                LINE査定
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}