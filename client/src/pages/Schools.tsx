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

const SERIF = "'DM Serif Display', serif";

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
  },
  {
    icon: HeartPulse,
    title: "Health & Fitness",
    desc: "Creates healthier, stronger and more active children.",
    stat: "40%",
    statLabel: "Better fitness improvement",
    color: "#3F7CFF",
  },
  {
    icon: Users,
    title: "Behaviour & Discipline",
    desc: "Builds respect, teamwork and confidence.",
    stat: "60%",
    statLabel: "Reduction in disciplinary issues",
    color: "#0D3BB8",
  },
  {
    icon: Trophy,
    title: "Leadership",
    desc: "Develops leadership through sport.",
    stat: "70%",
    statLabel: "Improvement in leadership skills",
    color: "#165DFF",
  },
  {
    icon: CalendarCheck,
    title: "Better Attendance",
    desc: "Keeps students engaged in school.",
    stat: "35%",
    statLabel: "Increase in attendance",
    color: "#3F7CFF",
  },
  {
    icon: Award,
    title: "School Reputation",
    desc: "Strengthens school branding and parent trust.",
    stat: "3×",
    statLabel: "Higher school visibility",
    color: "#0D3BB8",
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
        {/* background decor — blue/indigo/cyan palette */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Radial glows */}
          <div className="absolute -top-40 -right-44 w-[34rem] h-[34rem] rounded-full bg-[#165DFF]/[0.08] blur-[100px]" />
          <div className="absolute top-[30%] -left-52 w-[32rem] h-[32rem] rounded-full bg-[#3F7CFF]/[0.07] blur-[90px]" />
          <div className="absolute bottom-0 left-[40%] w-[28rem] h-[28rem] rounded-full bg-[#0EA5E9]/[0.06] blur-[80px]" />

          {/* Oversized circular arcs — left */}
          <svg className="absolute top-[5%] left-[-3%] w-72 h-72 text-[#165DFF]/[0.12]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.8">
            <circle cx="100" cy="100" r="92" />
            <circle cx="100" cy="100" r="70" />
            <circle cx="100" cy="100" r="48" />
          </svg>

          {/* Oversized circular arcs — right */}
          <svg className="absolute bottom-[8%] right-[-2%] w-56 h-56 text-[#3F7CFF]/[0.1]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.7">
            <circle cx="100" cy="100" r="90" />
            <circle cx="100" cy="100" r="62" />
          </svg>

          {/* Flowing curved line from left edge */}
          <svg className="absolute top-[18%] -left-6 w-[500px] h-[300px] text-[#165DFF]/[0.14]" viewBox="0 0 500 300" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <defs>
              <linearGradient id="flowLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#165DFF" stopOpacity="0" />
                <stop offset="30%" stopColor="#165DFF" stopOpacity="1" />
                <stop offset="60%" stopColor="#6366F1" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 120 C 80 60, 180 180, 300 100 S 460 140, 500 90" stroke="url(#flowLeft)" />
          </svg>

          {/* Flowing curved line from right edge */}
          <svg className="absolute bottom-[22%] -right-8 w-[500px] h-[300px] text-[#3F7CFF]/[0.14]" viewBox="0 0 500 300" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <defs>
              <linearGradient id="flowRight" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
                <stop offset="30%" stopColor="#3F7CFF" stopOpacity="0.8" />
                <stop offset="65%" stopColor="#6366F1" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#165DFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M500 180 C 420 100, 300 220, 180 140 S 40 180, 0 130" stroke="url(#flowRight)" />
          </svg>

          {/* Second flowing line — top right */}
          <svg className="absolute top-[8%] right-[-2%] w-[400px] h-[250px] text-[#0EA5E9]/[0.1]" viewBox="0 0 400 250" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
            <path d="M400 40 C 320 100, 200 20, 80 80 S -20 120, 0 160" />
          </svg>

          {/* Dotted grid — top right corner */}
          <div className="absolute top-[6%] right-[4%] w-36 h-36 opacity-[0.14]" style={{ backgroundImage: "radial-gradient(#165DFF 1.2px, transparent 1.2px)", backgroundSize: "14px 14px" }} />

          {/* Dotted grid — bottom left corner */}
          <div className="absolute bottom-[8%] left-[3%] w-28 h-28 opacity-[0.12]" style={{ backgroundImage: "radial-gradient(#3F7CFF 1px, transparent 1px)", backgroundSize: "12px 12px" }} />

          {/* Dotted grid — top left small */}
          <div className="absolute top-[35%] left-[1%] w-16 h-16 opacity-[0.1]" style={{ backgroundImage: "radial-gradient(#0EA5E9 0.8px, transparent 0.8px)", backgroundSize: "10px 10px" }} />

          {/* Translucent geometric shapes — near edges */}
          <div className="absolute top-[12%] right-[8%] w-20 h-20 border border-[#165DFF]/[0.12] rotate-12 rounded-lg" />
          <div className="absolute bottom-[15%] left-[6%] w-14 h-14 border border-[#3F7CFF]/[0.1] -rotate-6 rounded-md" />
          <div className="absolute top-[55%] right-[2%] w-10 h-10 border border-[#0EA5E9]/[0.1] rotate-45 rounded-sm" />

          {/* Faint cross marks */}
          <svg className="absolute top-[40%] left-[2%] w-5 h-5 text-[#165DFF]/[0.16]" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <line x1="10" y1="2" x2="10" y2="18" />
            <line x1="2" y1="10" x2="18" y2="10" />
          </svg>
          <svg className="absolute bottom-[20%] right-[5%] w-4 h-4 text-[#3F7CFF]/[0.14]" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <line x1="10" y1="3" x2="10" y2="17" />
            <line x1="3" y1="10" x2="17" y2="10" />
          </svg>
        </div>

        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-10 xl:gap-14 items-start">
            {/* ═══ Left — Editorial photo collage (60%) ═══ */}
            <div className="lg:col-span-3">
              <div className="relative mx-auto max-w-[620px] h-[560px] sm:h-[600px] lg:h-[620px] lg:max-w-none">
                {/* organic gradient shapes */}
                <div className="absolute -top-8 -left-6 w-72 h-72 rounded-full bg-gradient-to-br from-[#165DFF]/[0.14] to-[#6366F1]/[0.12] blur-3xl pointer-events-none" />
                <div className="absolute top-[42%] -right-10 w-80 h-80 rounded-full bg-[#3F7CFF]/[0.14] blur-3xl pointer-events-none" />
                <div className="absolute bottom-4 left-8 w-44 h-44 rounded-[62%_38%_55%_45%/45%_56%_44%_55%] bg-[#0EA5E9]/[0.14] blur-xl animate-blob pointer-events-none" />
                <div className="absolute -top-10 right-[4%] w-56 h-56 rounded-full border-[1.5px] border-[#165DFF]/[0.15] pointer-events-none" />
                <div className="absolute -top-6 right-[7%] w-40 h-40 rounded-full border-[1.5px] border-[#3F7CFF]/[0.14] pointer-events-none" />
                <Dots className="absolute left-[2%] top-[2%] w-24 opacity-[0.12] pointer-events-none" />
                <CurvedLines className="absolute right-[0%] bottom-[2%] w-40 opacity-[0.14] pointer-events-none" />

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

            {/* ═══ Right — Headline + 2×3 benefit grid (40%) ═══ */}
            <div className="lg:col-span-2 relative">
              {/* Background decorations */}
              <div className="absolute -top-6 -right-6 w-32 h-32 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(#165DFF 1.2px, transparent 1.2px)", backgroundSize: "14px 14px" }} />
              <svg className="absolute top-[20%] -right-4 w-28 h-48 text-[#165DFF]/[0.06] pointer-events-none" viewBox="0 0 100 200" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M80 0 C 20 60, 20 140, 80 200" />
              </svg>

              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#165DFF] mb-1.5 flex items-center gap-2">
                  <span className="inline-block h-[2px] w-6 bg-[#165DFF] rounded-full" />
                  Why Sport Matters
                </p>
                <h1 className="font-extrabold text-[#0A1E4F] text-[1.4rem] leading-[1.1] tracking-[-0.02em] sm:text-[1.65rem] lg:text-[1.8rem] xl:text-[2rem] mb-4" style={{ fontFamily: SERIF }}>
                  Sport Builds Better Students, Better Schools, and{" "}
                  <span className="text-[#165DFF]">Better Futures.</span>
                </h1>
              </Reveal>

              {/* 2×3 Benefit Grid */}
              <div className="grid grid-cols-2 gap-2">
                {WHY_BENEFITS.map((b, i) => (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] as const }}
                  >
                    <div className="group relative h-full rounded-[14px] bg-white border border-[#E6EEF9] shadow-[0_4px_16px_-6px_rgba(20,33,61,0.1)] p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_rgba(22,93,255,0.18)]">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: `${b.color}12`,
                          border: `1.5px solid ${b.color}25`,
                        }}
                      >
                        <b.icon className="w-3.5 h-3.5" style={{ color: b.color }} strokeWidth={2.2} />
                      </div>
                      <h3 className="font-heading font-bold text-[14px] text-[#0A1E4F] leading-snug mb-0.5">
                        {b.title}
                      </h3>
                      <p className="text-[12px] leading-snug text-[#6B7280] mb-1.5">
                        {b.desc}
                      </p>
                      <p className="text-[12px] font-bold" style={{ color: b.color }}>
                        {b.stat}{" "}
                        <span className="font-normal text-[#9CA3AF]">{b.statLabel}</span>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <Reveal delay={300}>
                <div className="mt-3.5 flex items-center gap-4">
                  <Button
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#165DFF] to-[#3F7CFF] text-white font-heading font-bold text-[14px] px-6 py-3 shadow-[0_14px_32px_-12px_rgba(22,93,255,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-14px_rgba(22,93,255,0.6)]"
                    onClick={() => (window.location.href = "/contact")}
                  >
                    Book a Consultation
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                  <a
                    href="/impact"
                    className="inline-flex items-center gap-1.5 text-[14px] font-heading font-semibold text-[#165DFF] hover:text-[#0D3BB8] transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </Reveal>
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
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#165DFF]/[0.1] blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-[#3F7CFF]/[0.08] blur-3xl pointer-events-none" />
              <div className="absolute left-[45%] top-[6%] w-28 h-28 rounded-[60%_40%_55%_45%/45%_58%_42%_55%] bg-[#0EA5E9]/[0.12] blur-sm animate-blob pointer-events-none" />
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
                    <p className="mt-2 font-heading font-extrabold text-[22px] sm:text-[26px] lg:text-[28px] text-[#0A1E4F] leading-none">
                      <Counter to={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-1.5 text-[11px] font-semibold text-[#5B6B8C]">{s.label}</p>
                    <span className="mt-2 h-[2px] w-8 rounded-full" style={{ background: s.color }} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ OUR PROCESS ═══════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F4F8FF] to-[#EEF5FF] py-20 md:py-28">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#165DFF]/[0.05] rounded-full blur-[90px]" />
          <div className="absolute -bottom-28 -right-28 w-[350px] h-[350px] bg-[#3F7CFF]/[0.04] rounded-full blur-[80px]" />
          <svg className="absolute top-[10%] left-[-4%] w-64 h-64 text-[#165DFF]/[0.06]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.8">
            <circle cx="100" cy="100" r="90" />
            <circle cx="100" cy="100" r="68" />
            <circle cx="100" cy="100" r="46" />
          </svg>
          <svg className="absolute bottom-[8%] right-[-2%] w-48 h-48 text-[#3F7CFF]/[0.05]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.7">
            <circle cx="100" cy="100" r="90" />
            <circle cx="100" cy="100" r="60" />
          </svg>
          <div className="absolute top-[15%] right-[5%] w-28 h-28 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(#165DFF 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
          <div className="absolute bottom-[12%] left-[3%] w-24 h-24 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(#3F7CFF 0.8px, transparent 0.8px)", backgroundSize: "14px 14px" }} />
          <svg className="absolute top-0 left-0 w-full h-full text-[#165DFF]/[0.025]" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
            <path d="M0 200 C 400 120, 800 280, 1440 180" stroke="currentColor" strokeWidth="0.8" />
            <path d="M0 400 C 500 340, 960 460, 1440 380" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 14" />
          </svg>

          {/* Flowing gradient line from left */}
          <svg className="absolute top-[25%] -left-8 w-[550px] h-[280px] opacity-[0.58] pointer-events-none" viewBox="0 0 550 280" fill="none" strokeLinecap="round">
            <defs>
              <linearGradient id="processFlowLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#165DFF" stopOpacity="0" />
                <stop offset="25%" stopColor="#165DFF" stopOpacity="0.9" />
                <stop offset="55%" stopColor="#6366F1" stopOpacity="0.7" />
                <stop offset="85%" stopColor="#06B6D4" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 140 C 90 70, 200 200, 340 110 S 480 160, 550 100" stroke="url(#processFlowLeft)" strokeWidth="1.5" />
          </svg>

          {/* Flowing gradient line from right */}
          <svg className="absolute bottom-[18%] -right-10 w-[500px] h-[260px] opacity-[0.78] pointer-events-none" viewBox="0 0 500 260" fill="none" strokeLinecap="round">
            <defs>
              <linearGradient id="processFlowRight" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
                <stop offset="20%" stopColor="#3F7CFF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#6366F1" stopOpacity="0.6" />
                <stop offset="80%" stopColor="#165DFF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#165DFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M500 120 C 410 190, 280 60, 150 140 S 20 100, 0 150" stroke="url(#processFlowRight)" strokeWidth="1.2" />
          </svg>
        </div>

        <div className="container relative z-10">
          {/* Heading */}
          <Reveal>
            <div className="text-center mb-16 md:mb-20">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#165DFF] mb-3">
                Our Process
              </p>
              <h2
                className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] text-[#0A1E4F] mb-4"
                style={{ fontFamily: SERIF }}
              >
                How We Partner With Your School
              </h2>
              <p className="text-[#6B7280] text-[0.95rem] leading-relaxed max-w-xl mx-auto">
                A proven five-step process that ensures seamless integration and
                measurable results.
              </p>
            </div>
          </Reveal>

          {/* Desktop — horizontal flowing journey */}
          <div className="hidden lg:block max-w-5xl mx-auto relative">
            {/* Curved connecting line */}
            <svg className="absolute top-[36px] left-[6%] right-[6%] h-[2px] w-[88%]" viewBox="0 0 1000 4" preserveAspectRatio="none">
              <defs>
                <linearGradient id="processLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#165DFF" stopOpacity="0.15" />
                  <stop offset="30%" stopColor="#3F7CFF" stopOpacity="0.35" />
                  <stop offset="70%" stopColor="#6366F1" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#165DFF" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              <path d="M0 2 Q 250 0, 500 2 T 1000 2" stroke="url(#processLine)" strokeWidth="1.5" fill="none" />
            </svg>

            <div className="grid grid-cols-5 gap-6">
              {processSteps.map((step, i) => (
                <Reveal key={step.title} delay={i * 80}>
                  <div className="flex flex-col items-center text-center">
                    {/* Number circle */}
                    <div className="relative mb-5">
                      <div className="w-[72px] h-[72px] rounded-full bg-white border-2 border-[#165DFF]/15 flex items-center justify-center relative z-10 shadow-[0_4px_20px_-6px_rgba(22,93,255,0.15)] transition-all duration-300 hover:border-[#165DFF]/30 hover:shadow-[0_8px_28px_-8px_rgba(22,93,255,0.25)]">
                        <step.icon className="w-6 h-6 text-[#165DFF]" strokeWidth={1.8} />
                      </div>
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#165DFF] text-white text-[10px] font-bold flex items-center justify-center z-20">
                        {i + 1}
                      </div>
                    </div>

                    {/* Arrow between steps */}
                    {i < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-[34px] -right-3 z-20">
                        <ArrowRight className="w-3.5 h-3.5 text-[#165DFF]/25" />
                      </div>
                    )}

                    <h3
                      className="text-[1rem] text-[#0A1E4F] mb-1.5"
                      style={{ fontFamily: SERIF }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[0.8rem] text-[#6B7280] leading-relaxed max-w-[160px]">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Mobile — vertical timeline */}
          <div className="lg:hidden max-w-md mx-auto">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <div className="flex gap-5 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-[#165DFF]/15 flex items-center justify-center shrink-0 shadow-[0_4px_16px_-4px_rgba(22,93,255,0.12)]">
                        <step.icon className="w-5 h-5 text-[#165DFF]" strokeWidth={1.8} />
                      </div>
                      <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#165DFF] text-white text-[9px] font-bold flex items-center justify-center">
                        {i + 1}
                      </div>
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="w-[1px] h-8 bg-gradient-to-b from-[#165DFF]/20 to-[#165DFF]/5" />
                    )}
                  </div>
                  <div className="pt-1">
                    <h3
                      className="text-[1.05rem] text-[#0A1E4F] mb-1"
                      style={{ fontFamily: SERIF }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[0.82rem] text-[#6B7280] leading-relaxed">
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
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-28 -right-28 w-[350px] h-[350px] bg-[#165DFF]/[0.04] rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -left-20 w-[300px] h-[300px] bg-[#3F7CFF]/[0.035] rounded-full blur-[70px]" />
          <svg className="absolute top-[8%] right-[-2%] w-52 h-52 text-[#165DFF]/[0.06]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.7">
            <circle cx="100" cy="100" r="90" />
            <circle cx="100" cy="100" r="62" />
          </svg>
          <div className="absolute top-[12%] left-[4%] w-24 h-24 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(#165DFF 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
          <div className="absolute bottom-[10%] right-[6%] w-20 h-20 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(#3F7CFF 0.8px, transparent 0.8px)", backgroundSize: "14px 14px" }} />

          {/* Flowing gradient line */}
          <svg className="absolute top-[30%] -left-8 w-[480px] h-[220px] opacity-[0.12] pointer-events-none" viewBox="0 0 480 220" fill="none" strokeLinecap="round">
            <defs>
              <linearGradient id="caseFlowLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#165DFF" stopOpacity="0" />
                <stop offset="30%" stopColor="#165DFF" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#6366F1" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 110 C 80 50, 180 170, 300 90 S 420 130, 480 80" stroke="url(#caseFlowLeft)" strokeWidth="1.2" />
          </svg>
        </div>

        <div className="container relative z-10">
          <Reveal>
            <div className="text-center mb-16 md:mb-20">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#165DFF] mb-3">
                Case Studies
              </p>
              <h2
                className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] text-[#0A1E4F] mb-4"
                style={{ fontFamily: SERIF }}
              >
                School Transformation Stories
              </h2>
              <p className="text-[#6B7280] text-[0.95rem] leading-relaxed max-w-xl mx-auto">
                Real results from schools that partnered with us to transform their
                sports programmes.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                school: "Delhi Public School, Gurgaon",
                before: "Limited sports activity, 15% student participation",
                after: "85% participation, district-level champions",
                detail: "From neglecting sports to becoming a multi-sport powerhouse in just one academic year.",
                metrics: [
                  { label: "Participation", value: "15% → 85%" },
                  { label: "Programme", value: "Multi-Sport" },
                  { label: "Timeline", value: "1 Year" },
                ],
              },
              {
                school: "The Heritage School, Noida",
                before: "No structured PE, teacher-led games only",
                after: "Full multi-sport programme, NEP 2020 compliant",
                detail: "Complete transformation of their sports education with certified coaching and structured curriculum.",
                metrics: [
                  { label: "NEP Status", value: "Compliant" },
                  { label: "Coaches", value: "8 Certified" },
                  { label: "Sports", value: "6 Disciplines" },
                ],
              },
              {
                school: "Ryan International, Mumbai",
                before: "Outdated facilities, no sports tracking",
                after: "Modern infrastructure, data-driven coaching",
                detail: "Upgraded entire sports infrastructure and introduced performance tracking for 2,000+ students.",
                metrics: [
                  { label: "Students", value: "2,000+" },
                  { label: "Infrastructure", value: "Upgraded" },
                  { label: "Tracking", value: "Data-Driven" },
                ],
              },
            ].map((caseStudy, i) => (
              <Reveal key={caseStudy.school} delay={i * 100}>
                <div className="group relative h-full rounded-[22px] bg-white border border-[#D6E4F7] shadow-[0_8px_30px_-10px_rgba(22,93,255,0.12),0_2px_8px_-2px_rgba(20,33,61,0.06)] p-5 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-14px_rgba(22,93,255,0.25),0_8px_20px_-6px_rgba(20,33,61,0.1)]">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-8 right-8 h-[3px] rounded-full bg-gradient-to-r from-[#165DFF]/0 via-[#165DFF]/50 to-[#165DFF]/0 group-hover:via-[#165DFF]/70 transition-all duration-500" />

                  {/* Corner glow on hover */}
                  <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#165DFF]/[0.08] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* School name */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-[#165DFF] to-[#3F7CFF] flex items-center justify-center shadow-[0_4px_12px_-2px_rgba(22,93,255,0.35)] shrink-0">
                      <Building2 className="w-4.5 h-4.5 text-white" strokeWidth={2} />
                    </div>
                    <h3
                      className="text-[1.05rem] text-[#0A1E4F] leading-snug"
                      style={{ fontFamily: SERIF }}
                    >
                      {caseStudy.school}
                    </h3>
                  </div>

                  {/* Before → After flow */}
                  <div className="flex items-stretch gap-2.5 mb-3">
                    <div className="flex-1 rounded-[12px] bg-gradient-to-br from-[#FEF2F2] to-[#FFF5F5] border border-[#FECACA]/60 p-2.5 shadow-[inset_0_1px_2px_rgba(220,38,38,0.06)]">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-[#DC2626]/80 mb-1 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]/50" />
                        Before
                      </p>
                      <p className="text-[11px] text-[#6B7280] leading-snug font-medium">{caseStudy.before}</p>
                    </div>
                    <div className="flex items-center shrink-0">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#165DFF] to-[#3F7CFF] flex items-center justify-center shadow-[0_4px_12px_-2px_rgba(22,93,255,0.3)] group-hover:scale-110 transition-transform duration-300">
                        <ArrowRight className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 rounded-[12px] bg-gradient-to-br from-[#EFF6FF] to-[#F0F7FF] border border-[#BFDBFE]/60 p-2.5 shadow-[inset_0_1px_2px_rgba(22,93,255,0.06)]">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-[#165DFF]/80 mb-1 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#165DFF]/50" />
                        After
                      </p>
                      <p className="text-[11px] text-[#6B7280] leading-snug font-medium">{caseStudy.after}</p>
                    </div>
                  </div>

                  {/* Detail */}
                  <p className="text-[0.8rem] text-[#6B7280] leading-relaxed mb-3">
                    {caseStudy.detail}
                  </p>

                  {/* Metrics strip */}
                  <div className="flex gap-2 pt-3 border-t border-[#E6EEF9]">
                    {caseStudy.metrics.map((m, mi) => (
                      <div key={m.label} className="flex-1 text-center py-1.5 rounded-[8px] bg-[#F4F8FF]/80 border border-[#E6EEF9]/60">
                        <p className="text-[8px] font-bold text-[#9CA3AF] uppercase tracking-wider mb-0">
                          {m.label}
                        </p>
                        <p className="text-[11px] font-extrabold text-[#0A1E4F]">
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ DOWNLOADS ═══════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F8FF] via-[#F8FAFF] to-white py-20 md:py-28">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-28 -left-24 w-[320px] h-[320px] bg-[#165DFF]/[0.04] rounded-full blur-[80px]" />
          <div className="absolute -bottom-20 -right-20 w-[280px] h-[280px] bg-[#3F7CFF]/[0.035] rounded-full blur-[70px]" />
          <svg className="absolute bottom-[10%] left-[-2%] w-48 h-48 text-[#165DFF]/[0.06]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.7">
            <circle cx="100" cy="100" r="90" />
            <circle cx="100" cy="100" r="62" />
          </svg>
          <div className="absolute top-[10%] right-[4%] w-24 h-24 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(#165DFF 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
        </div>

        <div className="container relative z-10">
          <Reveal>
            <div className="text-center mb-14 md:mb-18">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#165DFF] mb-3">
                Resources
              </p>
              <h2
                className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] text-[#0A1E4F] mb-4"
                style={{ fontFamily: SERIF }}
              >
                Download Our Materials
              </h2>
              <p className="text-[#6B7280] text-[0.92rem] leading-relaxed max-w-lg mx-auto">
                Everything you need to understand and share our programme with your school community.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { title: "School Brochure", desc: "Complete programme overview for schools", tag: "PDF · 2.4 MB", color: "#165DFF", from: "#EBF2FF", to: "#F0F7FF", borderColor: "#BFDBFE" },
              { title: "Impact Report 2024", desc: "Annual results and transformation data", tag: "PDF · 3.1 MB", color: "#3F7CFF", from: "#EEF4FF", to: "#F4F8FF", borderColor: "#C7D9F7" },
              { title: "NEP 2020 Alignment Guide", desc: "How our programme meets NEP requirements", tag: "PDF · 1.8 MB", color: "#6366F1", from: "#EEF0FF", to: "#F5F5FF", borderColor: "#D4D4F7" },
            ].map((doc, i) => (
              <Reveal key={doc.title} delay={i * 80}>
                <div className="group relative rounded-[18px] border shadow-[0_4px_16px_-6px_rgba(20,33,61,0.08)] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-10px_rgba(22,93,255,0.15)] cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, ${doc.from} 0%, ${doc.to} 100%)`,
                    borderColor: `${doc.borderColor}80`,
                  }}
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-6 right-6 h-[2.5px] rounded-full group-hover:opacity-100 opacity-60 transition-all duration-500"
                    style={{ background: `linear-gradient(to right, transparent, ${doc.color}60, transparent)` }}
                  />

                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${doc.color}18, ${doc.color}10)`,
                        border: `1.5px solid ${doc.color}25`,
                        boxShadow: `0 4px 12px -2px ${doc.color}20`,
                      }}
                    >
                      <Download className="w-5 h-5" style={{ color: doc.color }} strokeWidth={2} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3
                        className="text-[1rem] text-[#0A1E4F] mb-1"
                        style={{ fontFamily: SERIF }}
                      >
                        {doc.title}
                      </h3>
                      <p className="text-[0.8rem] text-[#6B7280] leading-snug mb-2">
                        {doc.desc}
                      </p>
                      <div className="flex items-center gap-1.5">
                        <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: `${doc.color}60` }} />
                        <span className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-wider">
                          {doc.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FAQs ═══════ */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-[300px] h-[300px] bg-[#165DFF]/[0.04] rounded-full blur-[80px]" />
          <div className="absolute -bottom-20 -left-16 w-[260px] h-[260px] bg-[#3F7CFF]/[0.03] rounded-full blur-[70px]" />
          <svg className="absolute top-[8%] right-[-1%] w-44 h-44 text-[#165DFF]/[0.05]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.7">
            <circle cx="100" cy="100" r="90" />
            <circle cx="100" cy="100" r="60" />
          </svg>
          <div className="absolute bottom-[12%] left-[3%] w-20 h-20 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(#3F7CFF 0.8px, transparent 0.8px)", backgroundSize: "12px 12px" }} />

          {/* Flowing gradient line */}
          <svg className="absolute top-[35%] -left-6 w-[400px] h-[200px] opacity-[0.1] pointer-events-none" viewBox="0 0 400 200" fill="none" strokeLinecap="round">
            <defs>
              <linearGradient id="faqFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#165DFF" stopOpacity="0" />
                <stop offset="30%" stopColor="#165DFF" stopOpacity="0.7" />
                <stop offset="70%" stopColor="#6366F1" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 100 C 80 40, 180 160, 300 80 S 380 120, 400 70" stroke="url(#faqFlow)" strokeWidth="1.2" />
          </svg>
        </div>

        <div className="container relative z-10 max-w-3xl">
          <Reveal>
            <div className="text-center mb-14 md:mb-18">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#165DFF] mb-3">
                FAQs
              </p>
              <h2
                className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] text-[#0A1E4F] mb-4"
                style={{ fontFamily: SERIF }}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-[#6B7280] text-[0.92rem] leading-relaxed max-w-lg mx-auto">
                Everything you need to know about partnering with us.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Accordion type="single" collapsible className="w-full space-y-2.5">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-[14px] border border-[#E6EEF9] bg-gradient-to-b from-[#F8FAFF] to-white px-5 py-0 shadow-[0_2px_8px_-4px_rgba(20,33,61,0.06)] data-[state=open]:border-[#165DFF]/20 data-[state=open]:shadow-[0_4px_16px_-6px_rgba(22,93,255,0.1)] transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-[#0A1E4F] text-[0.95rem] hover:text-[#165DFF] py-4 gap-3">
                    <span className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#165DFF]/[0.08] flex items-center justify-center shrink-0 text-[11px] font-bold text-[#165DFF]/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6B7280] text-[0.88rem] leading-relaxed pl-10 pb-4">
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
