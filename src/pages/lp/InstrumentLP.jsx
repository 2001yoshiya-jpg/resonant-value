import TopNav from "../../components/lp/instrument/InstrumentTopNav";
import InstrumentHero from "../../components/lp/instrument/InstrumentHero";
import InstrumentAbout from "../../components/lp/instrument/InstrumentAbout";
import InstrumentPriceGallery from "../../components/lp/instrument/InstrumentPriceGallery";
import InstrumentCondition from "../../components/lp/instrument/InstrumentCondition";
import InstrumentBrands from "../../components/lp/instrument/InstrumentBrands";
import InstrumentCTA from "../../components/lp/instrument/InstrumentCTA";
import InstrumentStickyBar from "../../components/lp/instrument/InstrumentStickyBar";
import Footer from "../../components/lp/Footer";

export default function InstrumentLP() {
  return (
    <div className="min-h-screen bg-background text-foreground font-jp">
      <TopNav />
      <div className="pt-16">
        <InstrumentHero />
        <InstrumentAbout />
        <InstrumentPriceGallery />
        <InstrumentCondition />
        <InstrumentBrands />
        <InstrumentCTA />
        <Footer />
      </div>
      <InstrumentStickyBar />
    </div>
  );
}