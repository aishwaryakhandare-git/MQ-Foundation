/**
 * Home Page — Marcos Quay Foundation
 * Premium, bright, modern landing page.
 */

import Hero from "@/components/home/Hero";
import WhySportMatters from "@/components/home/WhySportMatters";
import OurFocus from "@/components/home/OurFocus";
import QualitySystem from "@/components/home/QualitySystem";
import ImpactSection from "@/components/home/ImpactSection";
import SuccessStories from "@/components/home/SuccessStories";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import RecognitionSection from "@/components/home/RecognitionSection";
import NewsletterResearchSection from "@/components/home/Newsletter&Research";
import TrustedBy from "@/components/home/TrustedBy";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <Hero />

      <WhySportMatters />

      <OurFocus />

      <QualitySystem />

      <ImpactSection />

      <SuccessStories />

      <TestimonialsSection />

      <RecognitionSection />

      {/* Newsletter + Research */}
      <NewsletterResearchSection />

      <TrustedBy />

      <FAQSection />
    </main>
  );
}