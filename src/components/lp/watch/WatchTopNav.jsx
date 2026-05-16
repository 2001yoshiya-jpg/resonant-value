import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "買取品目", href: "#items" },
  { label: "選ばれる理由", href: "#reasons" },
  { label: "買取の流れ", href: "#flow" },
  { label: "無料査定", href: "#contact" },
  { label: "会社概要", href: "#about" },
];

export default function WatchTopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-navy rounded flex items-center justify-center">
            <span className="text-amber font-bold text-sm">時</span>
          </div>
          <div className="leading-tight">
            <p className="text-xs text-muted-foreground font-jp">出張買取</p>
            <p className="text-sm font-black text-navy font-jp tracking-wide">時計買取センター</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button key={link.label} onClick={() => scrollTo(link.href)} className="text-sm text-foreground hover:text-navy font-jp font-medium transition-colors">
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button size="sm" className="h-9 px-4 bg-red-500 hover:bg-red-600 text-white font-jp font-bold rounded text-sm" onClick={() => scrollTo("#contact")}>
            <Phone className="w-3.5 h-3.5 mr-1" />電話で無料査定
          </Button>
          <Button size="sm" className="h-9 px-4 bg-green-500 hover:bg-green-600 text-white font-jp font-bold rounded text-sm" onClick={() => scrollTo("#contact")}>
            <Mail className="w-3.5 h-3.5 mr-1" />メールで相談する
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-border px-4 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <button key={link.label} onClick={() => scrollTo(link.href)} className="block w-full text-left text-sm text-foreground font-jp py-2 border-b border-border/40">
              {link.label}
            </button>
          ))}
          <div className="flex gap-2 pt-2">
            <Button size="sm" className="flex-1 bg-red-500 hover:bg-red-600 text-white font-jp font-bold text-xs" onClick={() => scrollTo("#contact")}>
              <Phone className="w-3 h-3 mr-1" />電話で無料査定
            </Button>
            <Button size="sm" className="flex-1 bg-green-500 hover:bg-green-600 text-white font-jp font-bold text-xs" onClick={() => scrollTo("#contact")}>
              <Mail className="w-3 h-3 mr-1" />メールで相談
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}