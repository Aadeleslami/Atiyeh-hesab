// * pages
import BenefitsSection from "@/components/pages/homePage/BenefitsSection";
import FeaturesSection from "@/components/pages/homePage/FeaturesSection";
import HeaderSection from "@/components/pages/homePage/HeaderSection";
import QuestionsSection from "@/components/pages/homePage/QuestionsSection";
import StatisticsSection from "@/components/pages/homePage/StatisticsSection";

export default function Home() {
  return (
    <div className="space-y-8">
      <HeaderSection />
      <FeaturesSection />
      <BenefitsSection />
      <StatisticsSection />
      <QuestionsSection />
    </div>
  );
}
