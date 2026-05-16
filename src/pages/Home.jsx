import TopNav from "../components/lp/TopNav";
import HeroSection from "../components/lp/HeroSection";
import PriceGallery from "../components/lp/PriceGallery";
import ConditionSection from "../components/lp/ConditionSection";
import BrandGrid from "../components/lp/BrandGrid";
import ProcessSteps from "../components/lp/ProcessSteps";
import CTASection from "../components/lp/CTASection";
import StickyBottomBar from "../components/lp/StickyBottomBar";
import Footer from "../components/lp/Footer";

const HERO_IMAGE = "https://media.base44.com/images/public/6a07fe0d9aa87ec73e08277b/d801e7d5f_generated_9243e68f.png";
const PROCESS_IMAGE = "https://media.base44.com/images/public/6a07fe0d9aa87ec73e08277b/0d5487275_generated_a26a8094.png";

const instruments = [
  {
    name: "YAMAHA アップライトピアノ",
    image: "https://media.base44.com/images/public/6a07fe0d9aa87ec73e08277b/c257669b9_generated_315b6d68.png",
    marketPrice: 410000,
    ourPrice: 533000,
  },
  {
    name: "ヤマハ ロータリートランペット YTR-946G",
    image: "https://media.base44.com/images/public/6a07fe0d9aa87ec73e08277b/9b3cf2f32_generated_5ce60af0.png",
    marketPrice: 310000,
    ourPrice: 403000,
  },
  {
    name: "アルトサックス セルマー SELMER SERIE III",
    image: "https://media.base44.com/images/public/6a07fe0d9aa87ec73e08277b/b23bedba4_generated_0d9e38d1.png",
    marketPrice: 930000,
    ourPrice: 1209000,
  },
  {
    name: "Martin OM-45 アコースティックギター",
    image: "https://media.base44.com/images/public/6a07fe0d9aa87ec73e08277b/dbaa5ef28_generated_c2906623.png",
    marketPrice: 1000000,
    ourPrice: 1300000,
  },
  {
    name: "Gibson ES-330 エレキギター",
    image: "https://media.base44.com/images/public/6a07fe0d9aa87ec73e08277b/740920e33_generated_3cbea467.png",
    marketPrice: 470000,
    ourPrice: 611000,
  },
  {
    name: "クラリネット BUFFET CRAMPON Divine",
    image: "https://media.base44.com/images/public/6a07fe0d9aa87ec73e08277b/577a9275d_generated_70592f78.png",
    marketPrice: 390000,
    ourPrice: 507000,
  },
  {
    name: "Muramatsu PTP RC フルート",
    image: "https://media.base44.com/images/public/6a07fe0d9aa87ec73e08277b/2f5b6b3a8_generated_17fb752e.png",
    marketPrice: 760000,
    ourPrice: 988000,
  },
  {
    name: "SUZUKI ヴァイオリン EVIDENCE",
    image: "https://media.base44.com/images/public/6a07fe0d9aa87ec73e08277b/2ea3afa19_generated_3fd69a05.png",
    marketPrice: 430000,
    ourPrice: 559000,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />
      <HeroSection heroImage={HERO_IMAGE} />
      <PriceGallery instruments={instruments} />
      <ConditionSection />
      <ProcessSteps processImage={PROCESS_IMAGE} />
      <BrandGrid />
      <CTASection />
      <Footer />
      <StickyBottomBar />
    </div>
  );
}