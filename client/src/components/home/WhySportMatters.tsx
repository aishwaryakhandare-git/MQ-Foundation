import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardList,
  Compass,
  BookOpen,
  UserCheck,
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
<motion.h2 {...fade(0.05, "right")} className="heading-2 text-[28px] sm:text-[33px] text-[#0A1E4F] font-extrabold leading-[1.1] tracking-tight">
              <span className="text-[1.1em] font-bold">Why </span>
              <span className="relative inline-block text-[#E31B23] leading-none text-[1.2em]" style={{ fontFamily: "'DM Serif Display', serif" }}>
                Marcos Quay?
                <svg
                  className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-2.5"
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

            <div className="mt-4 space-y-4 text-justify">
              <p className="text-[13.5px] sm:text-[14.5px] leading-[1.7] text-black">
                For too many children, sport begins and ends with simply watching. At Marcos Quay, we believe every child should have the opportunity to step onto the field, experience sport, and discover what they are capable of. Sport provides more than physical activity—it creates a space where children can build confidence, develop discipline and teamwork, form meaningful connections, and learn through participation. Our focus is on creating structured and inclusive sporting environments where every child has the opportunity to take part, explore their abilities, and enjoy the experience of being active.
              </p>
              <p className="text-[13.5px] sm:text-[14.5px] leading-[1.7] text-black">
                What begins as a first experience on the field can become a lasting pathway for growth. A child who starts by simply playing for enjoyment can gradually develop skills, resilience, confidence, and a deeper understanding of sport. Through consistent opportunities to participate, learn, and compete, children can discover their interests and develop their abilities at their own pace. Marcos Quay is committed to creating these opportunities—not to make every child a professional athlete, but to help every child experience the value of sport and discover their own potential.
              </p>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                {
                  title: "Sports Audit & Gap Analysis",
                  desc: "Understand the current provision",
                  icon: ClipboardList,
                },
                {
                  title: "Sports Vision & Strategy",
                  desc: "Set priorities and direction",
                  icon: Compass,
                },
                {
                  title: "UK Based Sports Curriculum",
                  desc: "Structured progressive learning",
                  icon: BookOpen,
                },
                {
                  title: "Certified Coaches",
                  desc: "Consistent, expert instruction",
                  icon: UserCheck,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-xl border-2 border-[#165DFF]/50 bg-white px-3.5 py-2.5 shadow-[0_6px_18px_-10px_rgba(10,30,79,0.18)]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#165DFF] to-[#3F7CFF] shadow-[0_6px_14px_-6px_rgba(22,93,255,0.55)]">
                    <item.icon className="h-4.5 w-4.5 text-white" strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="block font-heading font-bold text-[12.5px] sm:text-[13px] leading-snug text-[#0A1E4F]">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block text-[11px] sm:text-[11.5px] leading-tight text-[#6B7280]">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <motion.div {...fade(0.3, "right")} className="mt-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-[#165DFF] text-white font-heading font-bold text-[14px] sm:text-[15px] px-6 sm:px-7 py-3 shadow-[0_14px_30px_-12px_rgba(22,93,255,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(22,93,255,0.6)]"
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