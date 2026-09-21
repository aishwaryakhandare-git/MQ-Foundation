import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Apple,
  BookOpen,
  CalendarDays,
  ClipboardList,
  Dumbbell,
  HeartPulse,
  LineChart,
  Sprout,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { Link } from "wouter";

const fade = (delay: number, from: "left" | "right" = "left") => ({
  initial: { opacity: 0, x: from === "left" ? -32 : 32, y: 20 },
  whileInView: { opacity: 1, x: 0, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function WhySportMatters() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0A1E4F 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container relative pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Large arch image composition ── */}
          <motion.div
            {...fade(0)}
            className="relative max-w-[650px] mx-auto lg:mx-0 w-full h-[600px] sm:h-[650px]"
          >
            {/* Large main arched image */}
            <div
              className="
                absolute
                left-0
                top-[4%]
                w-[72%]
                h-[92%]
                overflow-hidden
                rounded-t-[220px]
                rounded-b-[32px]
                shadow-[0_30px_70px_-24px_rgba(10,30,79,0.28)]
              "
            >
              <img
                src="/images/WhySportsMatter/Image_1.jpeg"
                alt="Children playing sports together"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Top-right image */}
            <div
              className="
                absolute
                top-[2%]
                right-0
                w-[30%]
                h-[38%]
                overflow-hidden
                rounded-[26px]
                border-4
                border-white
                shadow-[0_18px_40px_-14px_rgba(10,30,79,0.3)]
                z-20
              "
            >
              <img
                src="images/WhySportsMatter/Image2.jpeg"
                alt="Coach leading a sports class"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Bottom-right image */}
            <div
              className="
                absolute
                bottom-[2%]
                right-0
                w-[30%]
                h-[38%]
                overflow-hidden
                rounded-[26px]
                border-4
                border-white
                shadow-[0_18px_40px_-14px_rgba(10,30,79,0.3)]
                z-20
              "
            >
              <img
                src="images/WhySportsMatter/Image3.jpeg"
                alt="Students in fitness training"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Yellow accent */}
            <div
              className="
                absolute
                top-0
                right-[24%]
                w-16
                h-16
                rounded-full
                bg-[#F4B400]
                z-10
              "
            />

            {/* Impact badge */}
            <div
              className="
                absolute
                top-1/2
                -translate-y-1/2
                right-[22%]
                z-30
                bg-white
                rounded-[18px]
                px-5
                py-4
                shadow-[0_15px_40px_-15px_rgba(10,30,79,0.3)]
                border
                border-[#E7EBF3]
              "
            >
              <span className="block font-heading font-extrabold text-[28px] leading-none text-[#FF6B35]">
                14+
              </span>

              <span className="block text-[11px] font-semibold text-[#6B7280] mt-1 whitespace-nowrap">
                Years of Experience
              </span>
            </div>
          </motion.div>

          {/* ── Right: text content ── */}
          <motion.div {...fade(0.1, "right")} className="text-left">
            <motion.h2 {...fade(0.05, "right")} className="heading-2 text-[40px] sm:text-[44px] text-[#0A1E4F] font-extrabold leading-[1.08] tracking-tight">
              Why{" "}
              <span className="relative inline-block text-[#E31B23] leading-none text-[1.45em] italic" style={{ fontFamily: "'DM Serif Display', serif" }}>
                Marcos Quay?
                <svg
                  className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3"
                  viewBox="0 0 120 12"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 8 C 24 2, 48 10, 72 7 C 90 4.5, 100 7, 116 5"
                    stroke="#165DFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h2>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Sports Audit & Gap Analysis", icon: ClipboardList },
                { label: "Sports Vision & Strategy", icon: Target },
                { label: "Life-Skill Development", icon: Sprout },
                { label: "UK Based Sports Curriculum", icon: BookOpen },
                { label: "Certified Coaches", icon: Award },
                { label: "Nutrition & Sports Psychology Workshops", icon: Apple },
                { label: "Age Appropriate Equipment", icon: Dumbbell },
                { label: "PE & Grassroots Sports", icon: HeartPulse },
                { label: "Parent & Teacher Engagement Programs", icon: Users },
                { label: "Inter-School & Intra-School Competitions", icon: Trophy },
                { label: "Annual Sports Day Management", icon: CalendarDays },
                { label: "Fitness Assessments", icon: LineChart },
              ].map(({ label, icon: Icon }) => (
                <div key={label} className="rounded-[14px] border border-[#165DFF] bg-[#F7FAFE] px-4 py-3 flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#165DFF]/10 border border-[#165DFF]/20 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-[#165DFF]" strokeWidth={2.2} />
                  </span>
                  <h3 className="font-heading text-[12.5px] sm:text-[13px] font-bold text-[#0A1E4F] leading-snug">
                    {label}
                  </h3>
                </div>
              ))}
            </div>

            <motion.div {...fade(0.3, "right")} className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-[#165DFF] text-white font-heading font-bold text-[14px] sm:text-[15px] px-7 sm:px-8 py-3.5 sm:py-4 shadow-[0_14px_30px_-12px_rgba(22,93,255,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(22,93,255,0.6)]"
              >
                Read More - About Us
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}