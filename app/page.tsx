import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import FeaturesSection from "@/components/sections/features-section";
import ProcessSection from "@/components/sections/process-section";
import CTASection from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="process">
          <ProcessSection />
        </div>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

