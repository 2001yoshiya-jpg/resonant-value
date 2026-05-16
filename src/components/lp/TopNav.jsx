import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/30"
          : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-6 bg-primary rounded-full" />
          <span className="font-mono text-sm font-bold tracking-wider text-foreground">
            RESONANT<span className="text-primary">.</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:block font-mono text-sm text-muted-foreground">
            0120-925-710
          </span>
          <Button
            size="sm"
            className="h-9 px-4 bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full text-xs"
            onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Phone className="w-3.5 h-3.5 mr-1.5" />
            無料査定
          </Button>
        </div>
      </div>
    </motion.header>
  );
}