import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { href: "#items", label: "買取品目" },
  { href: "#reasons", label: "選ばれる理由" },
  { href: "#flow", label: "買取の流れ" },
  { href: "#contact", label: "無料査定" },
  { href: "#about", label: "会社概要" },
];

export default function WatchTopNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}>
      <div className="flex items-center px-6 h-[90px] gap-8">
        <div className="flex-shrink-0">
          <img src="https://media.base44.com/images/public/6a07fe0d9aa87ec73e08277b/6cdcdf294_image.png" alt="買取 くらの助" className="h-[85px] w-auto block" />
        </div>
        <nav className="hidden md:flex items-center gap-12 flex-1">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-[18px] font-medium text-[#222] hover:opacity-70 transition-opacity whitespace-nowrap">{link.label}</a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3 flex-shrink-0 ml-auto">
          <a href="tel:0120000000" className="inline-flex items-center justify-center gap-2 h-[58px] px-7 rounded-full text-white text-[15px] font-bold whitespace-nowrap transition-opacity hover:opacity-85" style={{ background: "#eb5a9a" }}>
            <Phone className="w-4 h-4" />電話で無料査定
          </a>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 h-[58px] px-7 rounded-full text-white text-[15px] font-bold whitespace-nowrap transition-opacity hover:opacity-85" style={{ background: "#00b140" }}>
            <Mail className="w-4 h-4" />メールで相談する
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden ml-auto p-2 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="メニュー">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-border px-6 pb-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium border-b border-border last:border-0">{link.label}</a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <a href="tel:0120000000" className="flex items-center justify-center gap-2 h-[56px] rounded-full text-white font-bold text-sm" style={{ background: "#eb5a9a" }}>
              <Phone className="w-4 h-4" />電話で無料査定
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 h-[56px] rounded-full text-white font-bold text-sm" style={{ background: "#00b140" }}>
              <Mail className="w-4 h-4" />メールで相談する
            </a>
          </div>
        </div>
      )}
    </header>
  );
}