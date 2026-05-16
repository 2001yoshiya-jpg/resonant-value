/**
 * Generic reusable LP template.
 * Pass a `config` object with category-specific content.
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, ChevronLeft, ChevronRight, Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/lp/Header";

/* ── Hero ── */
function Hero({ config }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % config.slides.length), 4500);
    return () => clearInterval(t);
  }, [config.slides.length]);
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "90vh" }}>
      <AnimatePresence mode="wait">
        <motion.div key={current} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0">
          <img src={config.slides[current].image} alt="hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/45" />
        </motion.div>
      </AnimatePresence>
      <button onClick={() => setCurrent(c => (c - 1 + config.slides.length) % config.slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center backdrop-blur-sm">
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button onClick={() => setCurrent(c => (c + 1) % config.slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center backdrop-blur-sm">
        <ChevronRight className="w-5 h-5 text-white" />
      </button>
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {config.slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-2.5 rounded-full transition-all ${i === current ? "bg-navy w-6" : "bg-white/50 w-2.5"}`} />
        ))}
      </div>
      <div className="relative z-10 flex items-center justify-center min-h-[90vh] px-4">
        <AnimatePresence mode="wait">
          <motion.div key={current} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/90 backdrop-blur-sm rounded-lg px-8 md:px-16 py-8 text-center max-w-2xl shadow-2xl">
            <p className="text-muted-foreground text-sm font-jp mb-2">{config.slides[current].sub}</p>
            <h1 className="font-jp text-3xl md:text-5xl font-black text-navy leading-tight">
              {config.slides[current].headline}<span className="text-navy">{config.slides[current].highlight}</span>
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-navy/95 py-5 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white font-jp text-sm md:text-base font-bold text-center">
            {config.brandName}は、リサイクル活動を通じて積極的に<span className="text-white font-black">SDG's</span>に取り組んでいます
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <Button className="h-11 px-5 bg-red-500 hover:bg-red-600 text-white font-jp font-bold rounded text-sm" onClick={scrollToContact}><Phone className="w-4 h-4 mr-1.5" />電話で無料査定</Button>
            <Button className="h-11 px-5 bg-green-500 hover:bg-green-600 text-white font-jp font-bold rounded text-sm" onClick={scrollToContact}><Mail className="w-4 h-4 mr-1.5" />メールで相談する</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── About ── */
const aboutPoints = ["査定無料", "出張費無料", "キャンセル無料", "即日対応"];

function AboutSection({ config }) {
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="py-20 px-6 bg-white" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-8 bg-navy rounded-full" />
              <span className="text-navy text-xs font-bold tracking-widest uppercase">About</span>
            </div>
            <h2 className="font-jp text-2xl md:text-3xl font-black text-navy leading-snug mb-4">
              ご自宅の不用な{config.itemName}<br />
              <span style={{ color: "#1a3a6b" }}>くらの助</span>が出張買取
            </h2>
            <p className="text-muted-foreground font-jp text-sm leading-relaxed mb-6">
              「この{config.itemName}、売れるかな？」「状態が悪いけど価値はある？」<br />
              そんなお品物も、くらの助がご自宅までお伺いします。
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {aboutPoints.map((p) => (
                <div key={p} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
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
              <img src={config.aboutImage || "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=85"} alt="スタッフ" className="w-full h-72 md:h-96 object-cover" />
              <div className="absolute top-4 right-4 bg-navy text-white rounded-lg px-4 py-3 text-center shadow-lg">
                <p className="font-jp text-xs font-bold">出張費・査定料</p>
                <p className="font-jp text-lg font-black">完全無料!!!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Price Gallery ── */
const fmt = (n) => new Intl.NumberFormat("ja-JP").format(n);
function PriceGallery({ config }) {
  return (
    <section className="py-20 px-6 bg-muted" id="items">
      <div className="max-w-7xl mx-auto">
        <SectionHeader en="Recent Valuations" ja={<>相場買取価格よりも<br /><span className="text-navy">こんなに高く</span>買い取ります！</>} sub="独自のルートで他社より高く買い取れる体制を整えています" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {config.items.map((item, i) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }} className="item-card bg-white rounded-xl overflow-hidden shadow-sm border border-border">
              <div className="relative">
                <img src={item.image} alt={item.name} className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="p-4">
                <p className="font-jp text-xs font-semibold text-foreground leading-snug mb-3 line-clamp-2">{item.name}</p>
                <div className="flex items-center justify-between bg-navy/10 rounded px-2 py-1">
                  <span className="text-xs text-navy font-jp font-bold">買取価格</span>
                  <span className="text-sm font-black text-navy font-mono">¥{fmt(item.ours)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Condition ── */
function ConditionSection({ config }) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader en="Any Condition" ja={<>こんな状態のお品物でも<br /><span className="text-navy">出張買取</span>いたします</>} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {config.conditions.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className="text-center">
              <div className="rounded-xl overflow-hidden mb-3 shadow-sm">
                <img src={item.image} alt={item.title} className="w-full h-44 object-cover" />
              </div>
              <p className="font-jp font-bold text-navy text-base">{item.title}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-muted rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
          <p className="font-jp text-sm font-bold text-navy mb-4 text-center">こんな{config.itemName}もお気軽にご相談ください</p>
          <ul className="space-y-2">
            {config.conditionExamples.map(e => (
              <li key={e} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                <span className="font-jp text-sm text-foreground">{e}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Reasons ── */
function ReasonsSection({ config }) {
  return (
    <section className="py-20 px-6 bg-muted" id="reasons">
      <div className="max-w-6xl mx-auto">
        <SectionHeader en="Why Choose Us" ja={<>{config.brandName}が<span className="text-navy">選ばれる5つの理由</span></>} />
        <div className="space-y-6">
          {config.reasons.map((r, i) => (
            <motion.div key={r.num} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className={`flex flex-col md:flex-row items-center gap-6 bg-white rounded-xl shadow-sm p-6 border border-border ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="flex-shrink-0 w-full md:w-48">
                <img src={r.image} alt={r.title} className="w-full h-36 md:h-32 object-cover rounded-lg" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl font-black text-navy font-mono">{r.num}</span>
                  <h3 className="font-jp text-lg font-black text-navy">{r.title}</h3>
                </div>
                <p className="font-jp text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Process ── */
const processSteps = [
  { num: "01", title: "無料査定申し込み", desc: "お電話・メールからお気軽にご連絡ください。どんなお品物でもまずはご相談を。", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&q=80" },
  { num: "02", title: "出張訪問・査定", desc: "ご希望日時にスタッフがご自宅へ。お品物を一点ずつ丁寧に査定いたします。", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&q=80" },
  { num: "03", title: "査定結果のご案内", desc: "査定金額を分かりやすくご説明。他社との比較もお気軽にどうぞ。", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=80" },
  { num: "04", title: "即日現金払い", desc: "査定金額にご納得いただけましたら、その場で現金でお支払い。不成立でも費用はゼロです。", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&q=80" },
];
function ProcessSection() {
  return (
    <section className="py-20 px-6 bg-white" id="flow">
      <div className="max-w-6xl mx-auto">
        <SectionHeader en="How It Works" ja={<>買取の<span className="text-navy">流れ</span></>} />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <motion.div key={step.num} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative">
              {i < processSteps.length - 1 && <div className="hidden md:block absolute top-16 left-[85%] text-navy text-2xl z-10 font-black">›</div>}
              <div className="bg-muted rounded-xl overflow-hidden shadow-sm border border-border">
                <img src={step.image} alt={step.title} className="w-full h-36 object-cover" />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-black text-navy font-mono">{step.num}</span>
                    <h3 className="font-jp text-sm font-black text-navy">{step.title}</h3>
                  </div>
                  <p className="font-jp text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Brands ── */
function BrandCard({ brand, i }) {
  const [imgError, setImgError] = useState(false);
  const name = typeof brand === "string" ? brand : brand.name;
  const logo = typeof brand === "object" && brand.logo ? brand.logo : null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: i * 0.03 }}
      className="item-card bg-white rounded-xl border border-border flex flex-col items-center justify-center gap-2 p-3 shadow-sm aspect-square"
    >
      {logo && !imgError ? (
        <img src={logo} alt={name} className="w-full h-12 object-contain" onError={() => setImgError(true)} />
      ) : (
        <span className="font-jp text-xs font-bold text-navy text-center leading-tight px-1">{name}</span>
      )}
    </motion.div>
  );
}

function BrandsSection({ config }) {
  return (
    <section className="py-20 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <SectionHeader en="Brands" ja={<>取り扱い<span className="text-navy">メーカー</span>・ブランド</>} sub="掲載のないブランドも査定可能です。お気軽にご相談ください。" />
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {config.brands.map((brand, i) => (
            <BrandCard key={typeof brand === "string" ? brand : brand.name} brand={brand} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ── */
function Testimonials({ config }) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader en="Testimonials" ja="お客様の声" sub='たくさんの「ありがとう」をいただいています' />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {config.testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-muted rounded-xl overflow-hidden border border-border shadow-sm">
              <img src={t.image} alt={t.category} className="w-full h-36 object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-navy bg-navy/10 px-2 py-0.5 rounded font-jp">{t.category}</span>
                  <span className="text-xs text-muted-foreground font-jp">{t.location}</span>
                </div>
                <p className="font-jp text-sm text-foreground leading-relaxed mb-3">"{t.text}"</p>
                <p className="font-jp text-xs text-muted-foreground text-right">— {t.age}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ── */
function CTASection({ config }) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="py-20 px-6 bg-navy" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-white/40" />
            <span className="text-white/80 text-xs font-bold tracking-widest uppercase">Free Consultation</span>
            <div className="h-px w-12 bg-white/40" />
          </div>
          <h2 className="font-jp text-2xl md:text-3xl font-black text-white">「この{config.itemName}、売れる？」だけでも<span className="text-white">大丈夫です。</span></h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white/10 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center"><Phone className="w-5 h-5 text-white" /></div>
                <div>
                  <p className="font-jp text-xs text-white/60">お電話でのお問い合わせ</p>
                  <p className="font-mono text-xl font-black text-white tracking-tight">0120-XXX-XXX</p>
                </div>
              </div>
              <p className="font-jp text-xs text-white/60">営業時間 9:00〜19:00（年中無休）</p>
              <Button className="w-full mt-4 h-12 bg-red-500 hover:bg-red-600 text-white font-jp font-bold rounded"><Phone className="w-4 h-4 mr-2" />今すぐ電話する</Button>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center"><Mail className="w-5 h-5 text-white" /></div>
                <div>
                  <p className="font-jp text-xs text-white/60">メールでのお問い合わせ</p>
                  <p className="font-jp text-sm font-bold text-white">24時間受付中</p>
                </div>
              </div>
              <Button className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-jp font-bold rounded"><Mail className="w-4 h-4 mr-2" />メールで相談する</Button>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-xl p-6">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-navy/20 rounded-full flex items-center justify-center mb-4"><Send className="w-7 h-7 text-navy" /></div>
                <p className="font-jp text-navy font-bold text-lg">お問い合わせありがとうございます</p>
                <p className="font-jp text-sm text-muted-foreground mt-2">担当者よりご連絡いたします</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <h3 className="font-jp font-black text-navy text-base mb-4">無料査定を申し込む</h3>
                <div className="space-y-1"><Label className="font-jp text-xs">お名前 <span className="text-red-500">*</span></Label><Input className="h-10 font-jp text-sm" placeholder="山田 太郎" required /></div>
                <div className="space-y-1"><Label className="font-jp text-xs">電話番号 <span className="text-red-500">*</span></Label><Input className="h-10 font-jp text-sm" placeholder="090-XXXX-XXXX" required /></div>
                <div className="space-y-1"><Label className="font-jp text-xs">メールアドレス <span className="text-red-500">*</span></Label><Input type="email" className="h-10 font-jp text-sm" placeholder="example@mail.com" required /></div>
                <div className="space-y-1"><Label className="font-jp text-xs">査定希望品</Label><Input className="h-10 font-jp text-sm" placeholder={config.itemPlaceholder} /></div>
                <div className="space-y-1"><Label className="font-jp text-xs">メッセージ</Label><Textarea className="font-jp text-sm resize-none" rows={3} placeholder="状態や詳細をご記入ください" /></div>
                <Button type="submit" className="w-full h-12 bg-navy hover:bg-navy/90 text-white font-jp font-black rounded text-base">無料査定を申し込む</Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ── */
function FooterSection() {
  return (
    <footer style={{ background: "#111", color: "#ccc", padding: "40px 6%", textAlign: "center" }}>
      <p className="font-bold text-white text-lg mb-4">買取 くらの助</p>
      <p style={{ fontSize: 13, lineHeight: 2 }}>
        【買取事業本部オフィス】〒292-0016 千葉県木更津市高砂１－９－１９<br />
        古物商許可　埼玉公安委員会　第431360069254号
      </p>
      <p className="font-bold text-white mt-6 mb-2">拠点一覧</p>
      <p style={{ fontSize: 13, lineHeight: 2 }}>
        【事業会社本社】〒352-0011 埼玉県新座市野火止7-21-12<br />
        水橋ビル2階　合同会社キューコネクト<br />
        【練馬オフィス】〒178-0061 東京都練馬区大泉学園町7-19-17<br />
        【神奈川リメイクセンター　家具家電】〒251-0037 藤沢市鵠沼海岸7-10-12<br />
        【神奈川リメイクセンター　衣類】〒242-0002 神奈川県中郡大磯町生沢1035
      </p>
      <p style={{ fontSize: 12, marginTop: 24, color: "#888" }}>© 2026 買取 くらの助</p>
    </footer>
  );
}

/* ── Sticky Bar ── */
function StickyBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
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
              <Button className="flex-1 md:flex-none h-11 px-5 bg-red-500 hover:bg-red-600 text-white font-jp font-bold rounded text-sm" onClick={scrollToContact}><Phone className="w-4 h-4 mr-1.5" />電話で無料査定</Button>
              <Button className="flex-1 md:flex-none h-11 px-5 bg-green-500 hover:bg-green-600 text-white font-jp font-bold rounded text-sm" onClick={scrollToContact}><Mail className="w-4 h-4 mr-1.5" />メールで相談</Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── SectionHeader ── */
function SectionHeader({ en, ja, sub }) {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-2">
        <div className="h-px w-12 bg-navy" />
        <span className="text-navy text-xs font-bold tracking-widest uppercase">{en}</span>
        <div className="h-px w-12 bg-navy" />
      </div>
      <h2 className="font-jp text-2xl md:text-3xl font-black text-navy leading-snug">{ja}</h2>
      {sub && <p className="font-jp text-sm text-muted-foreground mt-3">{sub}</p>}
    </div>
  );
}

/* ── Main Export ── */
export default function CategoryLP({ config }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-jp">
      <Header />
      <div className="pt-16">
        <Hero config={config} />
        <AboutSection config={config} />
        <PriceGallery config={config} />
        <ConditionSection config={config} />
        <BrandsSection config={config} />
        <CTASection config={config} />
        <FooterSection />
      </div>
      <StickyBar />
    </div>
  );
}