import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  Users,
  TrendingUp,
  Target,
  Dumbbell,
  LineChart,
  Heart,
  Trophy,
  Shield,
  ChevronRight,
  Quote,
  Zap,
  Check,
  ArrowRight,
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { y: 30 },
  whileInView: { y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <span ref={ref}>
      {inView ? (
        <CountUp target={to} />
      ) : (
        "0"
      )}
      {suffix}
    </span>
  );
}

function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  if (typeof window !== "undefined" && ref.current && !started.current) {
    started.current = true;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      if (ref.current) ref.current.textContent = String(start);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  return <span ref={ref}>0</span>;
}

const IMPACT_SCHOOLS_STATS = [
  { value: 250, suffix: "+", label: "Schools Partnered", icon: Building2, color: "#165DFF" },
  { value: 500, suffix: "+", label: "Infrastructure Upgrades", icon: Zap, color: "#0A1E4F" },
  { value: 92, suffix: "%", label: "Improved Participation", icon: TrendingUp, color: "#3F7CFF" },
  { value: 85, suffix: "%", label: "Long-Term Continuation", icon: Shield, color: "#165DFF" },
];

const IMPACT_FLOW = [
  {
    icon: Building2,
    title: "Infrastructure",
    desc: "Modern playing surfaces, equipment, and facilities",
    color: "#0A1E4F",
  },
  {
    icon: Users,
    title: "Skilled Coaches",
    desc: "Certified professionals with multi-sport expertise",
    color: "#165DFF",
  },
  {
    icon: Target,
    title: "Consistent Practice",
    desc: "Structured sessions that build skill over time",
    color: "#3F7CFF",
  },
  {
    icon: LineChart,
    title: "Performance Tracking",
    desc: "Data-driven insights to measure growth",
    color: "#165DFF",
  },
  {
    icon: Trophy,
    title: "Student Growth",
    desc: "Confident, fit, and skilled young athletes",
    color: "#0A1E4F",
  },
];

const STUDENT_OUTCOMES = [
  { value: 94, suffix: "%", label: "Improved Fitness & Stamina" },
  { value: 88, suffix: "%", label: "Increased Confidence" },
  { value: 91, suffix: "%", label: "Better Sporting Skills" },
  { value: 96, suffix: "%", label: "Teamwork & Discipline" },
];

const BEFORE_AFTER = [
  {
    before: "Limited infrastructure",
    after: "Better sports facilities",
  },
  {
    before: "Irregular practice",
    after: "Structured regular practice",
  },
  {
    before: "Limited coaching support",
    after: "Certified coaches on-site",
  },
  {
    before: "Low participation",
    after: "Measurable student development",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Marcos Quay transformed our sports programme entirely. Our students now have access to world-class coaching and infrastructure they never had before.",
    initials: "RK",
    name: "Rajesh Kumar",
    role: "PE Coordinator, Delhi Public School",
    color: "#165DFF",
  },
  {
    quote:
      "I've seen students who had never touched a football become passionate athletes. The structured curriculum makes all the difference.",
    initials: "AS",
    name: "Anil Sharma",
    role: "Sports Coach, Ryan International",
    color: "#0A1E4F",
  },
  {
    quote:
      "Before Marcos Quay, I didn't enjoy sports. Now I play football every day and want to represent my school in competitions.",
    initials: "PJ",
    name: "Priya Joshi",
    role: "Student, Age 12 — Football Program",
    color: "#3F7CFF",
  },
];

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ═══════════════════════════════════════════════════
          HERO + IMPACTING SCHOOLS — Combined
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-[#F4F7FF] via-white to-[#F8FAFF] overflow-hidden">
        {/* ── Background decorations ── */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large faint football outline — right */}
          <svg className="absolute top-16 right-[4%] w-[340px] h-[340px] text-[#165DFF]/[0.04] rotate-[15deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
            <circle cx="50" cy="50" r="46" />
            <path d="M50 4 L50 18 M50 82 L50 96 M4 50 L18 50 M82 50 L96 50" />
            <path d="M50 4 C 64 18, 64 36, 50 50 C 36 64, 36 82, 50 96" />
            <path d="M4 50 C 18 36, 36 36, 50 50 C 64 64, 82 64, 96 50" />
          </svg>
          {/* Dotted pattern — top left */}
          <div
            className="absolute top-24 left-[6%] w-40 h-40 opacity-[0.10]"
            style={{
              backgroundImage: "radial-gradient(#165DFF 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />
          {/* Curved field lines */}
          <svg className="absolute bottom-0 left-0 w-full h-48 text-[#165DFF]/[0.04]" viewBox="0 0 1440 192" fill="none" preserveAspectRatio="none">
            <path d="M0 96 C 360 30, 720 162, 1080 72 S 1440 120, 1440 96" stroke="currentColor" strokeWidth="1.2" />
            <path d="M0 140 C 400 70, 800 190, 1200 96 S 1440 144, 1440 120" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 10" />
          </svg>
          {/* Blue gradient blobs */}
          <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-[#165DFF]/[0.04] rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-32 w-[360px] h-[360px] bg-[#3F7CFF]/[0.03] rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 pt-20 sm:pt-28 pb-16 md:pb-24">
          {/* ── Hero heading block ── */}
          <motion.div {...fade(0)} className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
            <div className="relative mb-8">
              <h1
                className="text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold uppercase tracking-[0.1em] select-none leading-none"
                style={{
                  WebkitTextStroke: "2px transparent",
                  backgroundImage: "linear-gradient(180deg, #0A1E4F 0%, #165DFF 50%, #3F7CFF 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Our Impact
              </h1>
              <h1
                className="absolute inset-0 text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold uppercase tracking-[0.1em] select-none pointer-events-none leading-none"
                style={{
                  WebkitTextStroke: "1.5px #165DFF",
                  color: "transparent",
                }}
              >
                Our Impact
              </h1>
            </div>

            <h2 className="font-heading font-bold text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] text-[#0A1E4F] leading-snug mb-4">
              Stronger Schools. Confident Students. Thriving Communities.
            </h2>

          </motion.div>

          {/* ── Two-column: Impacting Schools content + Image ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-8">
            {/* Left: Content */}
            <motion.div {...fade(0.1)} className="-mt-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-[10px] bg-[#165DFF]/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#165DFF]" />
                </div>
                <span className="font-heading font-bold text-xs tracking-widest uppercase text-[#165DFF]">
                  Impacting Schools
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-[4rem] sm:text-[4.5rem] lg:text-[3.4rem] text-[#0A1E4F] leading-tight mb-5">
                Transforming Sports
                <br />
                <span className="text-[#165DFF]">Infrastructure</span> Across India
              </h3>

              <p className="text-[#6B7280] text-[1.05rem] sm:text-[1.1rem] leading-relaxed mb-6 max-w-md">
                Marcos Quay Foundation partners with schools to create world-class sports
                environments — combining modern infrastructure, certified coaching, and
                structured programmes that deliver lasting results.
              </p>

              
            </motion.div>

            {/* Right: Image with organic curved left edge */}
            <motion.div {...fade(0.15)} className="relative">
              <div className="relative overflow-hidden rounded-[20px] rounded-bl-[60px] sm:rounded-bl-[80px]">
                <img
                  src="/images/Ground img.png"
                  alt="School sports ground with students practicing"
                  className="w-full h-[280px] sm:h-[360px] lg:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E4F]/20 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* ── Overlapping Statistics Panel ── */}
          <motion.div
            {...fade(0.25)}
            className="relative max-w-5xl mx-auto -mt-8 sm:-mt-12 lg:-mt-16 z-20"
          >
            <div className="bg-white rounded-[16px] border border-[#E5E9F2] shadow-[0_8px_40px_-12px_rgba(10,30,79,0.10),0_2px_12px_-4px_rgba(10,30,79,0.06)]">
              <div className="grid grid-cols-2 md:grid-cols-4">
                {IMPACT_SCHOOLS_STATS.map((s, i) => (
                  <div
                    key={s.label}
                    className={`flex flex-col items-center text-center py-7 sm:py-8 px-4 ${
                      i < IMPACT_SCHOOLS_STATS.length - 1
                        ? "md:border-r border-[#E5E9F2]"
                        : ""
                    } ${i === 0 ? "rounded-tl-[16px] rounded-bl-[16px]" : ""} ${
                      i === IMPACT_SCHOOLS_STATS.length - 1 ? "rounded-tr-[16px] rounded-br-[16px]" : ""
                    }`}
                  >
                    <s.icon className="w-5 h-5 text-[#165DFF] mb-3" />
                    <p className="font-heading font-extrabold text-[1.6rem] sm:text-[1.9rem] text-[#0A1E4F] leading-none">
                      <Counter to={s.value} suffix={s.suffix} />
                    </p>
                    <p className="text-[11px] sm:text-xs text-[#6B7280] mt-2 leading-tight max-w-[140px]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — HOW WE CREATE IMPACT (Flow)
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-[#F0F4FF] overflow-hidden">
        <div className="container py-16 md:py-24">
          <motion.div {...fade(0)} className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <span className="inline-block font-heading font-bold text-xs tracking-widest uppercase text-[#165DFF] mb-4">
              Our Process
            </span>
            <h2 className="heading-2 text-[#0A1E4F] text-[1.6rem] sm:text-[1.9rem] lg:text-[2.2rem]">
              How We Create Impact
            </h2>
          </motion.div>

          {/* Connected flow */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[42px] left-[10%] right-[10%] h-[2px]">
              <div className="w-full h-full bg-gradient-to-r from-[#0A1E4F] via-[#165DFF] to-[#3F7CFF] opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E4F] via-[#165DFF] to-[#3F7CFF] opacity-20" style={{ backgroundSize: "8px 2px", backgroundImage: "repeating-linear-gradient(90deg, #165DFF 0px, #165DFF 4px, transparent 4px, transparent 8px)" }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0">
              {IMPACT_FLOW.map((step, i) => (
                <motion.div
                  key={step.title}
                  {...fade(i * 0.08)}
                  className="relative flex flex-col items-center text-center lg:px-4"
                >
                  {/* Icon circle */}
                  <div
                    className="w-[72px] h-[72px] rounded-full flex items-center justify-center mb-4 relative z-10 transition-transform duration-300 hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}15, ${step.color}08)`,
                      border: `2px solid ${step.color}25`,
                    }}
                  >
                    <step.icon className="w-7 h-7" style={{ color: step.color }} />
                  </div>

                  {/* Arrow (mobile only) */}
                  {i < IMPACT_FLOW.length - 1 && (
                    <div className="lg:hidden flex justify-center my-2">
                      <ChevronRight className="w-5 h-5 text-[#165DFF]/30 rotate-90" />
                    </div>
                  )}

                  {/* Arrow (desktop) */}
                  {i < IMPACT_FLOW.length - 1 && (
                    <div className="hidden lg:block absolute top-[42px] -right-2 z-20">
                      <ChevronRight className="w-4 h-4 text-[#165DFF]/40" />
                    </div>
                  )}

                  <h3 className="font-heading font-bold text-[0.95rem] text-[#0A1E4F] mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-[0.8rem] text-[#6B7280] leading-relaxed max-w-[180px]">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — IMPACTING STUDENTS
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden">
        <div className="container py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image grid */}
            <motion.div {...fade(0)} className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-[16px] overflow-hidden h-[200px] sm:h-[240px]">
                  <img src="/images/solutions/curriculum.jpg" alt="Students playing" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-[16px] overflow-hidden h-[160px] sm:h-[200px]">
                  <img src="/images/solutions/multisport.jpg" alt="Multi-sport activity" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-[16px] overflow-hidden h-[160px] sm:h-[200px]">
                  <img src="/images/solutions/fitness.jpg" alt="Fitness training" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-[16px] overflow-hidden h-[200px] sm:h-[240px]">
                  <img src="/images/hero-sports.jpg" alt="Students in action" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Right: Content + Stats */}
            <motion.div {...fade(0.1)}>
              <span className="inline-block font-heading font-bold text-xs tracking-widest uppercase text-[#165DFF] mb-4">
                Impacting Students
              </span>
              <h2 className="heading-2 text-[#0A1E4F] text-[1.6rem] sm:text-[1.9rem] lg:text-[2.2rem] leading-tight mb-6">
                Every Child Deserves a
                <br />
                <span className="text-[#165DFF]">Chance to Play</span>
              </h2>
              <p className="text-[#6B7280] text-base leading-relaxed mb-8 max-w-lg">
                Our programmes don&apos;t just teach sports — they build confidence, discipline,
                and life skills that stay with students long after they leave the field.
              </p>

              {/* Outcome stats */}
              <div className="grid grid-cols-2 gap-5">
                {STUDENT_OUTCOMES.map((s) => (
                  <div key={s.label} className="bg-[#F0F4FF] rounded-[14px] p-4 sm:p-5">
                    <p className="font-heading font-extrabold text-2xl sm:text-3xl text-[#165DFF]">
                      <Counter to={s.value} suffix={s.suffix} />
                    </p>
                    <p className="text-xs sm:text-sm text-[#6B7280] mt-1.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — BEFORE → AFTER
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-[#F0F4FF] overflow-hidden">
        <div className="container py-16 md:py-24">
          <motion.div {...fade(0)} className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
            <span className="inline-block font-heading font-bold text-xs tracking-widest uppercase text-[#165DFF] mb-4">
              The Transformation
            </span>
            <h2 className="heading-2 text-[#0A1E4F] text-[1.6rem] sm:text-[1.9rem] lg:text-[2.2rem]">
              Before &amp; After Marcos Quay
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {BEFORE_AFTER.map((item, i) => (
              <motion.div
                key={item.before}
                {...fade(i * 0.08)}
                className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-center mb-6 last:mb-0"
              >
                {/* Before */}
                <div className="bg-white rounded-[14px] p-5 sm:p-6 border border-[#E5E7EB] flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <span className="text-[#DC2626] text-lg font-bold">×</span>
                  </div>
                  <p className="text-[#6B7280] text-[0.95rem] line-through decoration-[#DC2626]/30">
                    {item.before}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#165DFF] flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="md:hidden flex justify-center">
                  <ArrowRight className="w-5 h-5 text-[#165DFF] rotate-90" />
                </div>

                {/* After */}
                <div className="bg-[#165DFF] rounded-[14px] p-5 sm:p-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-white text-[0.95rem] font-medium">
                    {item.after}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 5 — REAL VOICES
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden">
        {/* Background sports illustration */}
        <svg className="absolute top-10 right-[5%] w-48 h-48 text-[#165DFF]/[0.04] rotate-6 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="50" cy="50" r="40" />
          <path d="M50 10 L50 30 M50 70 L50 90 M10 50 L30 50 M70 50 L90 50" />
          <path d="M50 10 C 62 25, 62 38, 50 50 C 38 62, 38 75, 50 90" />
          <path d="M10 50 C 25 38, 38 38, 50 50 C 62 62, 75 62, 90 50" />
        </svg>

        <div className="container py-16 md:py-24">
          <motion.div {...fade(0)} className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <span className="inline-block font-heading font-bold text-xs tracking-widest uppercase text-[#165DFF] mb-4">
              Real Voices
            </span>
            <h2 className="heading-2 text-[#0A1E4F] text-[1.6rem] sm:text-[1.9rem] lg:text-[2.2rem]">
              What People Are Saying
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={t.name} {...fade(i * 0.1)}>
                <div className="relative bg-[#F8FBFF] rounded-[16px] p-7 sm:p-8 h-full border border-[#E8EEF7]">
                  {/* Large quote mark */}
                  <Quote className="w-8 h-8 mb-4" style={{ color: `${t.color}30` }} />

                  <p className="text-[0.95rem] leading-relaxed text-[#374151] mb-6 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-5 border-t border-[#E8EEF7]">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-heading font-bold text-xs"
                      style={{ background: t.color }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-heading font-bold text-[0.85rem] text-[#0A1E4F]">
                        {t.name}
                      </p>
                      <p className="text-[0.7rem] text-[#6B7280] mt-0.5">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-[#0A1E4F] overflow-hidden">
        {/* Sports silhouettes background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
          <svg className="absolute bottom-0 left-[5%] w-32 h-40 text-white" viewBox="0 0 80 100" fill="currentColor">
            <circle cx="40" cy="15" r="8" />
            <path d="M40 25 L30 55 L20 85 M40 25 L50 55 L60 85 M30 40 L15 35 M50 40 L65 35" stroke="currentColor" strokeWidth="3" fill="none" />
          </svg>
          <svg className="absolute bottom-0 left-[25%] w-28 h-36 text-white" viewBox="0 0 80 100" fill="currentColor">
            <circle cx="40" cy="15" r="8" />
            <path d="M40 25 L25 50 L15 85 M40 25 L55 50 L65 85 M25 38 L10 45 M55 38 L70 30" stroke="currentColor" strokeWidth="3" fill="none" />
          </svg>
          <svg className="absolute bottom-0 right-[20%] w-32 h-40 text-white" viewBox="0 0 80 100" fill="currentColor">
            <circle cx="40" cy="15" r="8" />
            <path d="M40 25 L35 55 L25 85 M40 25 L45 55 L55 85 M35 42 L20 38 M45 42 L60 38" stroke="currentColor" strokeWidth="3" fill="none" />
          </svg>
          <svg className="absolute bottom-0 right-[5%] w-28 h-36 text-white" viewBox="0 0 80 100" fill="currentColor">
            <circle cx="40" cy="15" r="8" />
            <path d="M40 25 L30 50 L20 80 M40 25 L50 50 L60 80 M30 38 L15 30 M50 38 L65 45" stroke="currentColor" strokeWidth="3" fill="none" />
          </svg>
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E4F] via-[#0D2B6B] to-[#0A1E4F]" />

        <div className="container relative z-10 py-16 md:py-24">
          <motion.div {...fade(0)} className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-extrabold text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] text-white leading-tight mb-6">
              Stronger Today.
              <br />
              <span className="text-[#3F7CFF]">Champions Tomorrow.</span>
            </h2>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Together with schools, coaches, and communities, we are building a healthier,
              more confident and more active future for every child.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#3F7CFF] text-white font-heading font-bold text-[14px] sm:text-[15px] px-8 sm:px-10 py-3.5 sm:py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(63,124,255,0.5)]"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
