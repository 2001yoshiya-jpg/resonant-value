import TopNav from "../components/lp/TopNav";
import HeroSection from "../components/lp/HeroSection";
import AboutBand from "../components/lp/AboutBand";
import PriceGallery from "../components/lp/PriceGallery";
import ConditionSection from "../components/lp/ConditionSection";
import ReasonsSection from "../components/lp/ReasonsSection";
import ProcessSteps from "../components/lp/ProcessSteps";
import BrandGrid from "../components/lp/BrandGrid";
import TestimonialsSection from "../components/lp/TestimonialsSection";
import CTASection from "../components/lp/CTASection";
import StickyBottomBar from "../components/lp/StickyBottomBar";
import Footer from "../components/lp/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-jp">
      <TopNav />
      <div className="pt-16">
        <HeroSection />
        <AboutBand />
        <PriceGallery />
        <ConditionSection />
        <ReasonsSection />
        <ProcessSteps />
        <BrandGrid />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </div>
      <StickyBottomBar />
    </div>
  );
}