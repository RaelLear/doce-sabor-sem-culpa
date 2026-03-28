import TopBar from "@/components/TopBar";
import HeroSection from "@/components/HeroSection";
import RecipeCarousel from "@/components/RecipeCarousel";
import BenefitsSection from "@/components/BenefitsSection";
import BonusSection from "@/components/BonusSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FinalCTASection from "@/components/FinalCTASection";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <HeroSection />
      <RecipeCarousel />
      <BenefitsSection />
      <BonusSection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCTASection />
      <FloatingCTA />
    </div>
  );
};

export default Index;
