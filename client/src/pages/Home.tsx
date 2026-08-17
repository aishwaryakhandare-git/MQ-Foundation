/**
 * Home Page — Marcos Quay Foundation
 * Premium, bright, modern landing page.
 * Sections: Hero, Feature Strip, Impact, Problems, Journey, Stories, Philosophy, CTA
 */
import Hero from "@/components/home/Hero";
import AboutUsSection from "@/components/home/AboutUsSection";
import FeatureStrip from "@/components/home/FeatureStrip";
import ImpactSection from "@/components/home/ImpactSection";
import ProblemsSection from "@/components/home/ProblemsSection";
import JourneySection from "@/components/home/JourneySection";
import SuccessStories from "@/components/home/SuccessStories";
import PhilosophySection from "@/components/home/PhilosophySection";
import WaveDivider from "@/components/home/WaveDivider";
import CtaBanner from "@/components/home/CtaBanner";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <Hero />
      <AboutUsSection />
      <FeatureStrip />
      <ImpactSection />

      {/* Logo scroll band */}
      <div className="relative bg-gradient-to-b from-[#F0F4FF] via-[#F8FBFF] to-[#F0F4FF] py-12 sm:py-14 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3F7CFF]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3F7CFF]/20 to-transparent" />

       
        {/* Hollow gradient outline heading */}
        <div className="relative mb-4">
          <h3
            className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-[0.15em] select-none"
            style={{
              WebkitTextStroke: "1px transparent",
              backgroundImage: "linear-gradient(90deg, #FF6B35, #FF8A6B, #F297A8, #E879A8)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            Trusted by leading schools
          </h3>
          <h3
            className="absolute inset-0 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-[0.15em] select-none pointer-events-none"
            style={{
              WebkitTextStroke: "1px #FF6B35",
              color: "transparent",
            }}
          >
            Trusted by leading schools
          </h3>
        </div>

        <div className="relative mt-7">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#F0F4FF] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#F0F4FF] to-transparent z-10 pointer-events-none" />

          <div className="flex items-center gap-14 sm:gap-20 lg:gap-28 animate-scroll-left">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-14 sm:gap-20 lg:gap-28 shrink-0">
                {[
                  "/images/School Logos/DPS School.png",
                  "/images/School Logos/Nanavati School Logo.png",
                  "/images/School Logos/NSM School Logo.png",
                  "/images/School Logos/RN Shah PNG.png",
                  "/images/School Logos/KES School.png",
                  "/images/School Logos/Nahar PNG.png",
                  "/images/School Logos/Om Public School Logo.png",
                  "/images/School Logos/Elite Eductaional Institute Logo.png",
                  "/images/School Logos/AVM 2.png",
                  "/images/School Logos/Cosmo Primary Logo.png",
                  "/images/School Logos/Nalanda School.png",
                  "/images/School Logos/Guru Nanak Global Academy.png",
                ].map((src) => (
                  <div key={`${setIdx}-${src}`} className="w-24 sm:w-28 h-14 sm:h-16 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-500">
                    <img
                      src={src}
                      alt="School logo"
                      className="max-w-full max-h-full object-contain transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <TestimonialsSection />

      <WaveDivider fill="#F8FBFF" />
      <ProblemsSection />
      <WaveDivider fill="#ffffff" flip />
      <JourneySection />
      <WaveDivider fill="#ffffff" />
      <SuccessStories />
      <WaveDivider fill="#FDFDFB" flip />
      <PhilosophySection />
      <CtaBanner />
    </main>
  );
}
