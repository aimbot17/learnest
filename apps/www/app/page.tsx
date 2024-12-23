import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/feature-section";
import CTASection from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="relative min-h-[100svh] flex flex-col items-center overflow-hidden bg-gradient-to-b from-primary/10 via-primary/5 to-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
