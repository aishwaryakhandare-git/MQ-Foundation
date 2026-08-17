import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ── Decorative faint paw-like pattern ── */
function PawPattern({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="currentColor" className={className} aria-hidden="true">
      <ellipse cx="24" cy="14" rx="8" ry="10" />
      <ellipse cx="56" cy="14" rx="8" ry="10" />
      <ellipse cx="12" cy="36" rx="7" ry="9" />
      <ellipse cx="68" cy="36" rx="7" ry="9" />
      <ellipse cx="40" cy="52" rx="18" ry="16" />
    </svg>
  );
}

export default function AboutUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFFCF7]">
      {/* ── Faint decorative patterns ── */}
      <PawPattern className="absolute top-8 left-[6%] w-14 h-14 text-white/60 pointer-events-none hidden md:block" />
      <PawPattern className="absolute top-20 right-[10%] w-10 h-10 text-white/50 pointer-events-none hidden lg:block rotate-12" />
      <PawPattern className="absolute bottom-16 left-[15%] w-12 h-12 text-white/45 pointer-events-none hidden lg:block -rotate-20" />
      <PawPattern className="absolute bottom-8 right-[6%] w-14 h-14 text-white/55 pointer-events-none hidden md:block rotate-[25deg]" />
      <PawPattern className="absolute top-1/2 left-[3%] w-8 h-8 text-white/40 pointer-events-none hidden xl:block -rotate-10" />
      <PawPattern className="absolute top-1/3 right-[3%] w-9 h-9 text-white/35 pointer-events-none hidden xl:block rotate-[40deg]" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0A1E4F 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container relative pt-16 pb-24 sm:pt-15 sm:pb-32 lg:pt-15 lg:pb-40">
        {/* ── Desktop layout: images around centered text ── */}
        <div className="relative max-w-[1280px] mx-auto">

          {/* ── Far left image ── */}
          <motion.div
            {...fade(0.1)}
            className="hidden lg:block absolute -left-8 top-4 z-10"
          >
            <div className="relative w-[200px] h-[260px]">
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/15 to-[#FF8C42]/8"
                style={{ borderRadius: 16 }}
              />
              <div
                className="relative overflow-hidden w-full h-full"
                style={{ borderRadius: 16 }}
              >
                <img
                  src="/images/hero-sports.jpg"
                  alt="Students playing sports"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* ── Lower left image ── */}
          <motion.div
            {...fade(0.2)}
            className="hidden lg:block absolute left-[16%] -bottom-24 z-10"
          >
            <div className="relative w-[170px] h-[220px]">
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/15 to-[#06B6D4]/8"
                style={{ borderRadius: 16 }}
              />
              <div
                className="relative overflow-hidden w-full h-full"
                style={{ borderRadius: 16 }}
              >
                <img
                  src="/images/solutions/curriculum.jpg"
                  alt="Coach leading sports class"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* ── Lower right image ── */}
          <motion.div
            {...fade(0.3)}
            className="hidden lg:block absolute right-[16%] -bottom-24 z-10"
          >
            <div className="relative w-[170px] h-[220px]">
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#165DFF]/12 to-[#3F7CFF]/6"
                style={{ borderRadius: 16 }}
              />
              <div
                className="relative overflow-hidden w-full h-full"
                style={{ borderRadius: 16 }}
              >
                <img
                  src="/images/solutions/multisport.jpg"
                  alt="Multi-sport programme"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* ── Far right image ── */}
          <motion.div
            {...fade(0.4)}
            className="hidden lg:block absolute -right-8 top-4 z-10"
          >
            <div className="relative w-[200px] h-[260px]">
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#FB7185]/12 to-[#FDA4B4]/6"
                style={{ borderRadius: 16 }}
              />
              <div
                className="relative overflow-hidden w-full h-full"
                style={{ borderRadius: 16 }}
              >
                <img
                  src="/images/solutions/fitness.jpg"
                  alt="Students fitness training"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* ── Mobile layout: 2x2 grid of images + text below ── */}
          <div className="lg:hidden grid grid-cols-2 gap-4 mb-10">
            <motion.div {...fade(0.05)} className="flex justify-end">
              <div className="relative w-[130px] h-[170px]">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/15 to-[#FF8C42]/8"
                  style={{ borderRadius: 16 }}
                />
                <div
                  className="relative overflow-hidden w-full h-full"
                  style={{ borderRadius: 16 }}
                >
                  <img src="/images/hero-sports.jpg" alt="Students playing sports" className="w-full h-full object-cover object-center" />
                </div>
              </div>
            </motion.div>
            <motion.div {...fade(0.1)} className="flex justify-start">
              <div className="relative w-[130px] h-[170px]">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/15 to-[#06B6D4]/8"
                  style={{ borderRadius: 16 }}
                />
                <div
                  className="relative overflow-hidden w-full h-full"
                  style={{ borderRadius: 16 }}
                >
                  <img src="/images/solutions/curriculum.jpg" alt="Coach leading sports class" className="w-full h-full object-cover object-center" />
                </div>
              </div>
            </motion.div>
            <motion.div {...fade(0.15)} className="flex justify-end">
              <div className="relative w-[130px] h-[170px]">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#165DFF]/12 to-[#3F7CFF]/6"
                  style={{ borderRadius: 16 }}
                />
                <div
                  className="relative overflow-hidden w-full h-full"
                  style={{ borderRadius: 16 }}
                >
                  <img src="/images/solutions/multisport.jpg" alt="Multi-sport programme" className="w-full h-full object-cover object-center" />
                </div>
              </div>
            </motion.div>
            <motion.div {...fade(0.2)} className="flex justify-start">
              <div className="relative w-[130px] h-[170px]">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#FB7185]/12 to-[#FDA4B4]/6"
                  style={{ borderRadius: 16 }}
                />
                <div
                  className="relative overflow-hidden w-full h-full"
                  style={{ borderRadius: 16 }}
                >
                  <img src="/images/solutions/fitness.jpg" alt="Students fitness training" className="w-full h-full object-cover object-center" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Center text content ── */}
          <div className="relative z-20 text-center max-w-[620px] mx-auto px-4 lg:px-0">
            <motion.p {...fade(0)} className="font-heading font-bold text-sm sm:text-base tracking-wide text-[#F4B400] mb-4">
              Together, we can make a difference!
            </motion.p>

            <motion.h2 {...fade(0.1)} className="heading-2 text-[#0A1E4F] sm:text-[2.2rem] lg:text-[2.6rem]">
              Learn more about us
            </motion.h2>

            <motion.p {...fade(0.2)} className="mt-6 sm:mt-7 text-base sm:text-lg lg:text-xl leading-relaxed text-[#6B7280] max-w-[580px] mx-auto">
              Marcos Quay Foundation is dedicated to transforming the lives of
              children across India through structured sports education. We partner
              with schools to provide certified coaching, NEP-aligned curricula and
              multi-sport programmes — ensuring every child has access to health,
              fitness and life skills development, regardless of background.
            </motion.p>

            <motion.div {...fade(0.3)} className="mt-7 sm:mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-[#165DFF] text-white font-heading font-bold text-[14px] sm:text-[15px] px-7 sm:px-8 py-3.5 sm:py-4 shadow-[0_14px_30px_-12px_rgba(22,93,255,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(22,93,255,0.6)]"
              >
                Become a partner
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
