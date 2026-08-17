/**
 * Schools Page — Marcos Quay Foundation
 * Design: Editorial, premium, mission-driven — the main conversion page.
 * Section 1 (Why Sport Matters): 60/40 hero with photo collage + benefit panels
 *           + bottom impact strip. Then Our Process, Case Studies, Downloads,
 *           FAQs, Book Consultation.
 */
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import Counter from "@/components/home/Counter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Award,
  ArrowRight,
  BookOpen,
  Building2,
  CalendarCheck,
  Download,
  GraduationCap,
  HeartPulse,
  LayoutGrid,
  RefreshCw,
  Rocket,
  Search,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";

/* ─── Scroll Reveal Wrapper ─── */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.15);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── Decorative helpers ─── */

function Dots({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g fill="#165DFF">
        {Array.from({ length: 30 }).map((_, i) => (
          <circle key={i} cx={10 + (i % 6) * 20} cy={10 + Math.floor(i / 6) * 20} r="2.4" />
        ))}
      </g>
    </svg>
  );
}

function CurvedLines({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={className} fill="none" aria-hidden="true">
      <path d="M8 100a110 110 0 0 1 184 0" stroke="#165DFF" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M28 110a90 90 0 0 1 144 0" stroke="#27AE60" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M48 118a70 70 0 0 1 104 0" stroke="#F4B400" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function SportsSilhouettes({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 160" className={className} fill="currentColor" aria-hidden="true">
      <g>
        <circle cx="120" cy="40" r="11" />
        <path d="M112 52l-6 34 12 4 4-26 6 22 12 3 2-12-10-14v-8l-20 7z" />
        <path d="M96 52l18 4M104 96l-4 18 10-2 2-16" />
        <path d="M96 52l18 4" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      </g>
      <g>
        <circle cx="290" cy="42" r="11" />
        <path d="M282 54l-4 34 13 3 3-24 10 22 12 2-4-18-10-10v-8l-20 9z" />
        <path d="M266 56l18 3M268 94l-5 16 11-2 2-15" />
        <circle cx="352" cy="86" r="10" />
        <path d="M348 84l8-5-3 9z" fill="#000" opacity="0.85" />
      </g>
      <g>
        <circle cx="470" cy="40" r="11" />
        <path d="M462 54l-6 36 13 3 4-28 4 26 13 2 3-12-8-16-8-7z" />
        <path d="M444 48l18 8M452 96l-6 18 11-2 1-16M500 46l-18 9" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      </g>
      <path d="M560 60c0 34-16 54-40 60M560 60h16v-6h-16M520 120h40M540 120v8h20v-8" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/* ─── Floating Badge ─── */

function FloatingBadge({
  icon: Icon,
  label,
  from,
  color,
  to,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  from: string;
  color: string;
  to: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-2xl bg-white/95 backdrop-blur-md px-3.5 py-2.5 shadow-[0_18px_40px_-18px_rgba(10,30,79,0.45)] ring-1 ring-[#E6EEF9]">
      <span
        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
        style={{
          background: `radial-gradient(circle at 32% 28%, ${from} 0%, ${color} 58%, ${to} 100%)`,
          boxShadow: `0 8px 18px -8px ${color}aa`,
        }}
      >
        <Icon className="w-4.5 h-4.5 text-white" strokeWidth={2.2} />
      </span>
      <span className="font-heading font-bold text-[12px] sm:text-[12.5px] text-[#0A1E4F] leading-tight">
        {label}
      </span>
    </div>
  );
}

/* ─── Why Sport Matters — Data ─── */

const WHY_BENEFITS = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    desc: "Improves classroom focus and learning outcomes.",
    stat: "25%",
    statLabel: "Better academic performance",
    color: "#165DFF",
    from: "#7FA8FF",
    to: "#0D3BB8",
  },
  {
    icon: HeartPulse,
    title: "Health & Fitness",
    desc: "Creates healthier, stronger and more active children.",
    stat: "40%",
    statLabel: "Better fitness improvement",
    color: "#27AE60",
    from: "#6FD69B",
    to: "#1E8A4C",
  },
  {
    icon: Users,
    title: "Behaviour & Discipline",
    desc: "Builds respect, teamwork and confidence.",
    stat: "60%",
    statLabel: "Reduction in disciplinary issues",
    color: "#F4B400",
    from: "#FFD25E",
    to: "#D99E00",
  },
  {
    icon: Trophy,
    title: "Leadership",
    desc: "Develops leadership through sport.",
    stat: "70%",
    statLabel: "Improvement in leadership skills",
    color: "#8B5CF6",
    from: "#B39DFF",
    to: "#6D28D9",
  },
  {
    icon: CalendarCheck,
    title: "Better Attendance",
    desc: "Keeps students engaged in school.",
    stat: "35%",
    statLabel: "Increase in attendance",
    color: "#FF8A00",
    from: "#FFB45E",
    to: "#E07600",
  },
  {
    icon: Award,
    title: "School Reputation",
    desc: "Strengthens school branding and parent trust.",
    stat: "3×",
    statLabel: "Higher school visibility",
    color: "#14B8A6",
    from: "#5EEAD4",
    to: "#0F9488",
  },
];

const IMPACT_STATS = [
  { icon: Users, value: 92, suffix: "%", label: "Student Participation", color: "#165DFF", from: "#7FA8FF", to: "#0D3BB8" },
  { icon: CalendarCheck, value: 35, suffix: "%", label: "Higher Attendance", color: "#27AE60", from: "#6FD69B", to: "#1E8A4C" },
  { icon: HeartPulse, value: 40, suffix: "%", label: "Better Fitness Scores", color: "#F4B400", from: "#FFD25E", to: "#D99E00" },
  { icon: BookOpen, value: 100, suffix: "%", label: "NEP Alignment", color: "#8B5CF6", from: "#B39DFF", to: "#6D28D9" },
  { icon: Building2, value: 450, suffix: "+", label: "Partner Schools", color: "#FF8A00", from: "#FFB45E", to: "#E07600" },
  { icon: Sparkles, value: 125000, suffix: "+", label: "Students Impacted", color: "#14B8A6", from: "#5EEAD4", to: "#0F9488" },
];

const COLLAGE_PHOTOS = [
  {
    src: "/images/solutions/multisport.jpg",
    fallback: "/images/hero-sports.jpg",
    alt: "Students training in structured multi-sport sessions",
    className: "left-0 top-0 w-[58%] h-[60%] rounded-[28px]",
    rotate: "-rotate-1",
    delay: 0.05,
  },
  {
    src: "/images/solutions/fitness.jpg",
    fallback: "/images/hero-sports.jpg",
    alt: "Fitness and conditioning during PE class",
    className: "right-0 top-[6%] w-[44%] h-[38%] rounded-[24px]",
    rotate: "rotate-2",
    delay: 0.15,
  },
  {
    src: "/images/hero-sports.jpg",
    fallback: "/images/hero-sports.jpg",
    alt: "Children playing organised team sports",
    className: "right-1 bottom-0 w-[48%] h-[46%] rounded-[28px]",
    rotate: "-rotate-1",
    delay: 0.25,
  },
  {
    src: "/images/solutions/curriculum.jpg",
    fallback: "/images/hero-sports.jpg",
    alt: "Coach mentoring young students",
    className: "left-1 bottom-[14%] w-[32%] h-[26%] rounded-[22px]",
    rotate: "rotate-2",
    delay: 0.35,
  },
  {
    src: "/images/problems/low-participation.jpg",
    fallback: "/images/hero-sports.jpg",
    alt: "School children enjoying athletics",
    className: "left-[30%] -top-3 w-[20%] h-[13%] rounded-[18px]",
    rotate: "-rotate-2",
    delay: 0.45,
  },
];

const COLLAGE_BADGES = [
  {
    icon: Trophy,
    label: "95% Student Participation",
    from: "#7FA8FF",
    color: "#165DFF",
    to: "#0D3BB8",
    className: "absolute -top-2 left-[2%] z-30 animate-float",
  },
  {
    icon: GraduationCap,
    label: "Certified Coaches",
    from: "#6FD69B",
    color: "#27AE60",
    to: "#1E8A4C",
    className: "absolute -left-1 bottom-[18%] z-30 animate-float-slow",
  },
  {
    icon: BookOpen,
    label: "NEP 2020 Aligned",
    from: "#FFD25E",
    color: "#F4B400",
    to: "#D99E00",
    className: "absolute right-0 top-[32%] z-30 animate-float-delayed",
  },
  {
    icon: Target,
    label: "Multi-Sport Curriculum",
    from: "#FFB45E",
    color: "#FF8A00",
    to: "#E07600",
    className: "absolute -bottom-2 right-[6%] z-30 animate-float-slow",
  },
];

/* ─── Process Steps ─── */
const processSteps = [
  {
    icon: Search,
    title: "Discovery",
    desc: "Initial meeting to understand your school's vision, current sports status, and specific needs.",
  },
  {
    icon: LayoutGrid,
    title: "Planning",
    desc: "Comprehensive assessment and programme design tailored to your school's infrastructure and goals.",
  },
  {
    icon: Rocket,
    title: "Implementation",
    desc: "Deployment of certified coaches, equipment, and full programme rollout across all classes.",
  },
  {
    icon: Award,
    title: "Review",
    desc: "Regular progress assessments, parent meetings, and data-driven programme evaluation.",
  },
  {
    icon: RefreshCw,
    title: "Renewal",
    desc: "Continuous improvement cycle with updated curriculum, advanced coaching, and expanded programmes.",
  },
];

/* ─── FAQs ─── */
const faqs = [
  {
    q: "How does the programme work in our school?",
    a: "We deploy certified coaches to your school who conduct structured PE classes as part of the regular timetable. The programme covers multiple sports, fitness assessments, and inter-school competitions.",
  },
  {
    q: "What sports are included?",
    a: "We offer football, basketball, cricket, athletics, volleyball, kabaddi, kho kho, badminton, and more. The specific sports are customised based on your school's facilities and student interests.",
  },
  {
    q: "Is this aligned with NEP 2020?",
    a: "Yes, our entire curriculum is designed to be NEP 2020 compliant. We focus on holistic education, skill development, and experiential learning through sports.",
  },
  {
    q: "How many students can participate?",
    a: "We work with schools of all sizes, from 200 to 5,000+ students. Our coach-to-student ratio ensures every child gets quality attention and coaching.",
  },
  {
    q: "What is the cost structure?",
    a: "Pricing is based on school size, number of classes, and programme scope. We offer flexible packages and CSR funding options. Contact us for a custom quote.",
  },
  {
    q: "How do you measure impact?",
    a: "We use comprehensive assessment tools including fitness metrics, participation rates, competition results, academic correlation studies, and parent/teacher satisfaction surveys.",
  },
  {
    q: "Can existing PE teachers continue?",
    a: "Absolutely. We work alongside existing PE teachers, providing them with training, resources, and development opportunities to enhance their capabilities.",
  },
  {
    q: "What age groups do you cover?",
    a: "We serve students from Class 1 to Class 12 (ages 6-18), with age-appropriate curriculum and coaching methods for each grade level.",
  },
];

/* ─── MAIN PAGE ─── */
export default function Schools() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* ═══════ WHY SPORT MATTERS ═══════ */}
      <section
        id="why-sport-matters"
        className="relative overflow-hidden bg-white pt-4 sm:pt-6 lg:pt-8 pb-10 sm:pb-12 lg:pb-14 scroll-mt-24"
      >
        {/* background decor */}
        <div className="absolute -top-40 -right-44 w-[34rem] h-[34rem] rounded-full bg-[#165DFF]/[0.05] blur-3xl pointer-events-none" />
        <div className="absolute top-[30%] -left-52 w-[32rem] h-[32rem] rounded-full bg-[#27AE60]/[0.06] blur-3xl pointer-events-none" />
        <div className="absolute left-[3%] top-[8%] w-56 h-56 rounded-full border border-[#165DFF]/[0.08] pointer-events-none" />
        <div className="absolute left-[3%] top-[8%] w-40 h-40 rounded-full border border-[#165DFF]/[0.08] pointer-events-none" />
        <div className="absolute right-[10%] bottom-[6%] w-44 h-44 rounded-[60%_40%_55%_45%/45%_58%_42%_55%] bg-[#F4B400]/[0.12] blur-2xl animate-blob pointer-events-none" />
        <Dots className="absolute right-[6%] top-[14%] w-24 opacity-[0.05] pointer-events-none" />
        <Dots className="absolute left-[44%] bottom-[2%] w-20 opacity-[0.04] pointer-events-none" />
        <CurvedLines className="absolute left-[2%] top-[52%] w-40 opacity-[0.06] pointer-events-none" />
        <SportsSilhouettes className="absolute left-0 right-0 bottom-0 h-32 text-[#165DFF]/[0.03] pointer-events-none" />

        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-10 xl:gap-14 items-start">
            {/* ═══ Left — Editorial photo collage (60%) ═══ */}
            <div className="lg:col-span-3">
              <div className="relative mx-auto max-w-[620px] h-[560px] sm:h-[600px] lg:h-[620px] lg:max-w-none">
                {/* organic gradient shapes */}
                <div className="absolute -top-8 -left-6 w-72 h-72 rounded-full bg-gradient-to-br from-[#165DFF]/[0.12] to-[#27AE60]/[0.1] blur-3xl pointer-events-none" />
                <div className="absolute top-[42%] -right-10 w-80 h-80 rounded-full bg-[#27AE60]/[0.12] blur-3xl pointer-events-none" />
                <div className="absolute bottom-4 left-8 w-44 h-44 rounded-[62%_38%_55%_45%/45%_56%_44%_55%] bg-[#F4B400]/[0.18] blur-xl animate-blob pointer-events-none" />
                <div className="absolute -top-10 right-[4%] w-56 h-56 rounded-full border-[1.5px] border-[#165DFF]/[0.1] pointer-events-none" />
                <div className="absolute -top-6 right-[7%] w-40 h-40 rounded-full border-[1.5px] border-[#27AE60]/[0.12] pointer-events-none" />
                <Dots className="absolute left-[2%] top-[2%] w-24 opacity-[0.06] pointer-events-none" />
                <CurvedLines className="absolute right-[0%] bottom-[2%] w-40 opacity-[0.07] pointer-events-none" />

                {/* layered photo cards */}
                {COLLAGE_PHOTOS.map((p) => (
                  <motion.div
                    key={p.src}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.7, delay: p.delay, ease: [0.22, 1, 0.36, 1] as const }}
                    className={`absolute overflow-hidden ${p.rotate} ${p.className} shadow-[0_24px_50px_-22px_rgba(10,30,79,0.4)] ring-4 ring-white`}
                  >
                    <img
                      src={p.src}
                      alt={p.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        const el = e.currentTarget;
                        if (el.src !== p.fallback) el.src = p.fallback;
                      }}
                    />
                  </motion.div>
                ))}

                {/* floating badges */}
                {COLLAGE_BADGES.map((b) => (
                  <div key={b.label} className={b.className}>
                    <FloatingBadge icon={b.icon} label={b.label} from={b.from} color={b.color} to={b.to} />
                  </div>
                ))}
              </div>
            </div>

            {/* ═══ Right — Headline + benefits (40%) ═══ */}
            <div className="lg:col-span-2">
              <Reveal>
                <p className="eyebrow !text-[#165DFF]">
                  <span className="inline-block h-px w-8 bg-[#165DFF]/60" />
                  Why Sport Matters
                </p>
                <h1 className="mt-5 font-heading font-extrabold text-[#0A1E4F] text-[1.7rem] leading-[1.16] tracking-[-0.02em] sm:text-[2.05rem] sm:leading-[1.12] lg:text-[2.1rem] xl:text-[2.4rem] xl:leading-[1.1]">
                  Sport Builds Better Students, Better Schools, and Better Futures.
                </h1>
              </Reveal>

              {/* benefit panels */}
              <div className="mt-8 space-y-3.5">
                {WHY_BENEFITS.map((b, i) => (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.55, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] as const }}
                  >
                    <div className="group relative overflow-hidden rounded-[24px] bg-white border border-[#E9EFF8] shadow-[0_10px_30px_-14px_rgba(20,33,61,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_54px_-24px_rgba(20,33,61,0.28)]">
                      {/* left accent border */}
                      <span
                        className="absolute left-0 top-5 bottom-5 w-1 rounded-full"
                        style={{ background: `linear-gradient(180deg, ${b.color}, ${b.color}40)` }}
                      />
                      {/* gradient glow on hover */}
                      <div
                        className="absolute -top-12 -right-12 w-36 h-36 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                        style={{ background: `radial-gradient(circle, ${b.color}30, transparent 70%)` }}
                      />
                      <div className="relative flex items-center gap-4 py-4 pl-6 pr-5">
                        <span
                          className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                          style={{
                            background: `radial-gradient(circle at 32% 28%, ${b.from} 0%, ${b.color} 58%, ${b.to} 100%)`,
                            boxShadow: `0 10px 20px -8px ${b.color}99`,
                          }}
                        >
                          <b.icon className="w-5.5 h-5.5 text-white" strokeWidth={2.2} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="font-heading font-bold text-[15px] text-[#0A1E4F] leading-snug">
                            {b.title}
                          </p>
                          <p className="mt-0.5 text-[12.5px] leading-snug text-[#6B7280]">
                            {b.desc}
                          </p>
                        </div>
                        <div className="shrink-0 text-right">
                          <p className="font-heading font-extrabold text-[20px] leading-none" style={{ color: b.color }}>
                            {b.stat}
                          </p>
                          <p className="mt-1 text-[10px] font-semibold text-[#6B7280] max-w-[84px] ml-auto leading-tight">
                            {b.statLabel}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Button
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#165DFF] to-[#3F7CFF] text-white font-heading font-bold text-[14.5px] px-7 py-3.5 shadow-[0_18px_40px_-16px_rgba(22,93,255,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_52px_-18px_rgba(22,93,255,0.65)]"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Book a Consultation
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* ═══ Bottom — Impact Strip ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-16 lg:mt-20"
          >
            <div className="relative overflow-hidden rounded-[36px] sm:rounded-[44px] border border-[#E3EEFB] bg-gradient-to-br from-[#EEF5FF] via-[#F5F9FF] to-[#EAF3FF] px-5 sm:px-8 lg:px-12 py-9 sm:py-12 shadow-[0_50px_110px_-55px_rgba(20,33,61,0.3)]">
              {/* decor */}
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#165DFF]/[0.08] blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-[#27AE60]/[0.08] blur-3xl pointer-events-none" />
              <div className="absolute left-[45%] top-[6%] w-28 h-28 rounded-[60%_40%_55%_45%/45%_58%_42%_55%] bg-[#F4B400]/[0.18] blur-sm animate-blob pointer-events-none" />
              <Dots className="absolute right-[4%] top-[14%] w-20 opacity-[0.05] pointer-events-none" />
              <CurvedLines className="absolute left-[3%] bottom-[10%] w-36 opacity-[0.06] pointer-events-none" />

              <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:divide-x lg:divide-[#D9E7FB]">
                {IMPACT_STATS.map((s) => (
                  <div key={s.label} className="relative flex flex-col items-center text-center px-3 py-4 lg:py-2">
                    <span
                      className="w-11 h-11 rounded-full flex items-center justify-center"
                      style={{
                        background: `radial-gradient(circle at 32% 28%, ${s.from} 0%, ${s.color} 58%, ${s.to} 100%)`,
                        boxShadow: `0 10px 20px -8px ${s.color}88`,
                      }}
                    >
                      <s.icon className="w-5 h-5 text-white" strokeWidth={2.2} />
                    </span>
                    <p className="mt-3 font-heading font-extrabold text-[26px] sm:text-[30px] lg:text-[32px] text-[#0A1E4F] leading-none">
                      <Counter to={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-2 text-[12px] font-semibold text-[#5B6B8C]">{s.label}</p>
                    <span className="mt-3 h-[3px] w-9 rounded-full" style={{ background: s.color }} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ OUR PROCESS ═══════ */}
      <section className="section-padding bg-[#F7FAFC]">
        <div className="container">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[#32B768] font-semibold text-sm uppercase tracking-widest mb-3">
                Our Process
              </p>
              <h2 className="heading-2 text-[#1F2937]">
                How We Partner With Your School
              </h2>
              <p className="body-lg mt-4 max-w-2xl mx-auto">
                A proven five-step process that ensures seamless integration and
                measurable results.
              </p>
            </div>
          </Reveal>

          <div className="max-w-3xl mx-auto">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-xl bg-[#1E5AA8] text-white flex items-center justify-center shrink-0">
                      <step.icon className="w-6 h-6" />
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="w-0.5 h-8 bg-[#1E5AA8]/20" />
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-heading font-semibold text-lg text-[#1F2937] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CASE STUDIES ═══════ */}
      <section className="section-padding bg-white">
        <div className="container">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[#F4B400] font-semibold text-sm uppercase tracking-widest mb-3">
                Case Studies
              </p>
              <h2 className="heading-2 text-[#1F2937]">
                School Transformation Stories
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                school: "Delhi Public School, Gurgaon",
                before: "Limited sports activity, 15% participation",
                after: "85% participation, district-level champions",
                detail: "From neglecting sports to becoming a multi-sport powerhouse in just one academic year.",
              },
              {
                school: "The Heritage School, Noida",
                before: "No structured PE, teacher-led games only",
                after: "Full multi-sport programme, NEP compliant",
                detail: "Complete transformation of their sports education with certified coaching and curriculum.",
              },
            ].map((caseStudy, i) => (
              <Reveal key={caseStudy.school} delay={i * 100}>
                <div className="bg-[#F7FAFC] rounded-2xl p-6 border border-[#E5E7EB] h-full">
                  <h3 className="font-heading font-semibold text-[#1F2937] mb-4">
                    {caseStudy.school}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-red-500 font-semibold uppercase mb-1">Before</p>
                      <p className="text-sm text-[#6B7280]">{caseStudy.before}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#32B768] font-semibold uppercase mb-1">After</p>
                      <p className="text-sm text-[#6B7280]">{caseStudy.after}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {caseStudy.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ DOWNLOADS ═══════ */}
      <section className="section-padding bg-[#F7FAFC]">
        <div className="container">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[#1E5AA8] font-semibold text-sm uppercase tracking-widest mb-3">
                Resources
              </p>
              <h2 className="heading-2 text-[#1F2937]">
                Download Our Materials
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { title: "School Brochure", desc: "Complete programme overview for schools" },
              { title: "Impact Report 2024", desc: "Annual results and transformation data" },
              { title: "NEP 2020 Alignment Guide", desc: "How our programme meets NEP requirements" },
            ].map((doc, i) => (
              <Reveal key={doc.title} delay={i * 80}>
                <div className="bg-white rounded-xl p-5 border border-[#E5E7EB] flex items-center gap-4 card-hover">
                  <Download className="w-6 h-6 text-[#1E5AA8] shrink-0" />
                  <div>
                    <p className="font-heading font-semibold text-sm text-[#1F2937]">
                      {doc.title}
                    </p>
                    <p className="text-[#6B7280] text-xs">{doc.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FAQs ═══════ */}
      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[#32B768] font-semibold text-sm uppercase tracking-widest mb-3">
                FAQs
              </p>
              <h2 className="heading-2 text-[#1F2937]">
                Frequently Asked Questions
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-b border-[#E5E7EB]">
                  <AccordionTrigger className="text-left font-heading font-medium text-[#1F2937] text-base hover:text-[#1E5AA8]">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6B7280] text-sm leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="py-20 bg-[#1E5AA8]">
        <div className="container text-center">
          <Reveal>
            <h2 className="heading-2 text-white mb-6">
              Ready to Transform Your School?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Book a free consultation to discuss how structured sports education
              can elevate your school's programme.
            </p>
            <Button
              className="bg-white text-[#1E5AA8] hover:bg-white/90 rounded-full px-8 py-6 font-semibold text-base"
              onClick={() => (window.location.href = "/contact")}
            >
              Book Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
