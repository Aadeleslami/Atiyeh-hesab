// * pages
import BenefitsSection from "@/components/pages/homePage/BenefitsSection";
import FeaturesSection from "@/components/pages/homePage/FeaturesSection";
import HeaderSection from "@/components/pages/homePage/HeaderSection";
import QuestionsSection from "@/components/pages/homePage/QuestionsSection";
import CompanyMember from "@/components/pages/homePage/CompanyMember";
import Swiper from "swiper";
import SwiperUserComment from "@/components/pages/homePage/SwiperUserComment";

export default function Home() {
  return (
    <div className="space-y-8">
      <HeaderSection />
      <FeaturesSection />
      <BenefitsSection />
      <CompanyMember />
      <SwiperUserComment />
      <QuestionsSection />
    </div>
  );
}
