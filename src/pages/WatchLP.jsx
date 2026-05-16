import TopNav from "../components/lp/watch/WatchTopNav";
import WatchHero from "../components/lp/watch/WatchHero";
import WatchAbout from "../components/lp/watch/WatchAbout";
import WatchPriceGallery from "../components/lp/watch/WatchPriceGallery";
import WatchCondition from "../components/lp/watch/WatchCondition";
import WatchBrands from "../components/lp/watch/WatchBrands";
import WatchTestimonials from "../components/lp/watch/WatchTestimonials";
import WatchCTA from "../components/lp/watch/WatchCTA";
import WatchStickyBar from "../components/lp/watch/WatchStickyBar";
import WatchFooter from "../components/lp/watch/WatchFooter";

export default function WatchLP() {
  return (
    <div className="min-h-screen bg-background text-foreground font-jp">
      <TopNav />
      <div className="pt-16">
        <WatchHero />
        <WatchAbout />
        <WatchPriceGallery />
        <WatchCondition />
        <WatchBrands />
        <WatchTestimonials />
        <WatchCTA />
        <WatchFooter />
      </div>
      <WatchStickyBar />
    </div>
  );
}