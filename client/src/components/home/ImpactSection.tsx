import { motion } from "framer-motion";
import {
  Award,
  Building2,
  Goal,
  MapPin,
  Target,
  Trophy,
  UserCheck,
  Users,
  Volleyball,
} from "lucide-react";
import Counter from "./Counter";

const STATS = [
  {
    icon: Building2,
    value: 450,
    suffix: "+",
    label: "Schools Empowered",
    color: "#165DFF",
  },
  {
    icon: Users,
    value: 125000,
    suffix: "+",
    label: "Students Impacted",
    color: "#27AE60",
  },
  {
    icon: MapPin,
    value: 120,
    suffix: "+",
    label: "Cities Reached",
    color: "#E89200",
  },
  {
    icon: UserCheck,
    value: 650,
    suffix: "+",
    label: "Certified Coaches",
    color: "#8B5CF6",
  },
  {
    icon: Goal,
    value: 15,
    suffix: "+",
    label: "Sports Covered",
    color: "#FF6B35",
  },
  {
    icon: Award,
    value: 8,
    suffix: "+",
    label: "Years Experience",
    color: "#0D9488",
  },
];

const fade = (delay: number) => ({
  initial: { y: 26 },
  animate: { y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function ImpactSection() {
  return (
    <section className="relative overflow-hidden pt-12 sm:pt-14 lg:pt-16 pb-12 sm:pb-14 lg:pb-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/Our impact Image.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60" />
      </div>

      <div className="container relative z-10">
        <div className="relative px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">

          <div className="relative z-10">
            {/* ── Header ── */}
            <motion.div {...fade(0)} className="max-w-2xl mx-auto text-center">
              <p className="eyebrow justify-center text-[#27AE60] mb-4">Our Impact</p>
              <h2 className="heading-2 text-[#0A1E4F]">
                Our Impact Across India
              </h2>
              <p className="body-lg mt-5">
                Real numbers from the ground — a movement that keeps growing,
                one school at a time.
              </p>
            </motion.div>

            {/* ── Inner layer behind statistics ── */}
            <div className="relative mt-14 rounded-[28px] bg-[#F8FBFF] border border-[#E6EFFB] px-5 sm:px-8 lg:px-10 py-8 sm:py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_28px_-12px_rgba(10,30,79,0.1)]">
              {/* Subtle glass highlight inside inner layer */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/70 to-transparent pointer-events-none rounded-t-[28px]" />

              {/* ── Statistics cards ── */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
                {STATS.map((s, i) => (
                  <motion.div key={s.label} {...fade(i * 80)} className="h-full">
                    <div className="group relative h-full rounded-[24px] bg-white p-6 sm:p-7 shadow-card overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_44px_90px_-34px_rgba(13,59,184,0.45)]">
                      {/* Watermark illustration */}
                      <s.icon
                        className="absolute -top-4 -right-4 w-24 h-24 opacity-[0.06] group-hover:opacity-[0.14] transition-opacity duration-700 pointer-events-none"
                        strokeWidth={1.2}
                        style={{ color: s.color }}
                      />
                      {/* Colored glow behind icon */}
                      <div
                        className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"
                        style={{ background: `${s.color}2E` }}
                      />
                      {/* Glass highlight */}
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />

                      <div className="relative flex flex-col items-center">
                        {/* Circular gradient icon */}
                        <motion.div
                          initial={{ rotate: -10, scale: 0.8 }}
                          animate={{ rotate: 0, scale: 1 }}
                          transition={{
                            duration: 0.7,
                            delay: 0.15 + i * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110"
                          style={{
                            background: `linear-gradient(135deg, ${s.color}24 0%, ${s.color}0F 100%)`,
                            boxShadow: `inset 0 0 0 1.5px ${s.color}44, 0 12px 28px -14px ${s.color}66`,
                          }}
                        >
                          <s.icon className="w-6 h-6" strokeWidth={2.2} style={{ color: s.color }} />
                        </motion.div>

                        {/* Animated number */}
                        <p
                          className="font-heading font-extrabold text-[30px] sm:text-3xl lg:text-[34px] leading-none tracking-tight"
                          style={{ color: s.color }}
                        >
                          <Counter to={s.value} suffix={s.suffix} />
                        </p>
                        <p className="mt-2 text-[12.5px] sm:text-[13px] font-bold text-[#1A2333] text-center">
                          {s.label}
                        </p>

                        {/* Colored line */}
                        <span
                          className="mt-3.5 block h-[3px] w-9 rounded-full transition-all duration-500 group-hover:w-14"
                          style={{
                            background: `linear-gradient(90deg, ${s.color}, ${s.color}66)`,
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
