import { motion } from "framer-motion";
import {
  Building2,
  Heart,
  Users,
  Target,
  TrendingUp,
  Award,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Dumbbell,
  Trophy,
  GraduationCap,
  Handshake,
  BarChart3,
  Shield,
  Lightbulb,
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { y: 30 },
  whileInView: { y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const CSR_PILLARS = [
  {
    icon: Heart,
    title: "Health & Fitness",
    desc: "Addressing childhood obesity and sedentary lifestyles through structured sports programmes that build lifelong fitness habits.",
    color: "#165DFF",
  },
  {
    icon: GraduationCap,
    title: "Education Enhancement",
    desc: "Complementing academic learning with sports education that develops discipline, leadership, and cognitive skills.",
    color: "#0A1E4F",
  },
  {
    icon: Users,
    title: "Inclusive Access",
    desc: "Ensuring every child — regardless of background, gender, or ability — has access to quality sports coaching and facilities.",
    color: "#3F7CFF",
  },
  {
    icon: Trophy,
    title: "Talent Development",
    desc: "Identifying and nurturing sporting talent at the grassroots level, creating pathways for future athletes.",
    color: "#165DFF",
  },
];

const CSR_BENEFITS = [
  {
    icon: Shield,
    title: "Section 135 Compliance",
    desc: "Our programmes qualify under CSR expenditure for education and livelihood enhancement, fully compliant with Companies Act provisions.",
  },
  {
    icon: BarChart3,
    title: "Measurable Impact",
    desc: "Detailed quarterly reports with participation data, fitness improvements, and programme outcomes for your CSR documentation.",
  },
  {
    icon: Award,
    title: "Brand Value",
    desc: "Visible community impact that strengthens your brand reputation and stakeholder trust through authentic grassroots development.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    desc: "Multi-year engagement models that ensure sustained impact and continuous improvement in student outcomes.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Needs Assessment",
    desc: "We evaluate your partner schools' current sports infrastructure, student demographics, and specific requirements.",
    icon: Target,
  },
  {
    step: "02",
    title: "Programme Design",
    desc: "Custom sports curriculum and coaching plan tailored to school needs, aligned with NEP 2020 and CSR objectives.",
    icon: Lightbulb,
  },
  {
    step: "03",
    title: "Infrastructure Setup",
    desc: "Equipment procurement, facility upgrades, and playing surface improvements across partner schools.",
    icon: Building2,
  },
  {
    step: "04",
    title: "Coach Deployment",
    desc: "Certified, trained coaches placed in schools with regular monitoring and performance reviews.",
    icon: Users,
  },
  {
    step: "05",
    title: "Impact Reporting",
    desc: "Comprehensive dashboards with fitness metrics, participation rates, and student development data.",
    icon: BarChart3,
  },
];

const STATS = [
  { value: "₹50Cr+", label: "CSR Funds Deployed", icon: TrendingUp },
  { value: "250+", label: "Schools Benefited", icon: Building2 },
  { value: "75,000+", label: "Students Impacted", icon: Users },
  { value: "120+", label: "CSR Partners", icon: Handshake },
];

const FAQS = [
  {
    q: "Which CSR head does this fall under?",
    a: "Our programmes qualify under Schedule VII of the Companies Act — specifically 'education' and 'livelihood enhancement' categories. Sports education directly contributes to holistic child development and community welfare.",
  },
  {
    q: "What reports do you provide for CSR compliance?",
    a: "We provide quarterly impact dashboards, annual impact assessments, photographs, participation data, fitness improvement metrics, and testimonials — all structured for CSR filing and board reporting.",
  },
  {
    q: "Can we choose specific schools or regions?",
    a: "Absolutely. We work with your team to identify partner schools in your preferred geographies — whether near your offices, factories, or underserved communities you want to support.",
  },
  {
    q: "What is the minimum commitment?",
    a: "We recommend a minimum 1-year programme for meaningful impact, but we offer flexible engagement models from single-school pilots to multi-year, multi-school partnerships.",
  },
  {
    q: "How do you ensure accountability?",
    a: "Every school gets a dedicated programme manager. We provide real-time dashboards, monthly check-ins, and third-party impact audits to ensure complete transparency.",
  },
];

export default function CSRPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      {/* ═══════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-[#F0F4FF] via-white to-[#F8FAFF] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-28 right-[8%] w-40 h-40 opacity-[0.08]"
            style={{
              backgroundImage: "radial-gradient(#165DFF 1.2px, transparent 1.2px)",
              backgroundSize: "16px 16px",
            }}
          />
          <svg className="absolute top-1/3 right-[5%] w-56 h-56 text-[#165DFF]/[0.04] rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
            <circle cx="50" cy="50" r="44" />
            <path d="M50 6 L50 20 M50 80 L50 94 M6 50 L20 50 M80 50 L94 50" />
            <path d="M50 6 C 64 20, 64 36, 50 50 C 36 64, 36 80, 50 94" />
            <path d="M6 50 C 20 36, 36 36, 50 50 C 64 64, 80 64, 94 50" />
          </svg>
          <div className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-[#165DFF]/[0.04] rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-28 w-[320px] h-[320px] bg-[#3F7CFF]/[0.03] rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 pt-28 sm:pt-36 pb-16 md:pb-20">
          <motion.div {...fade(0)} className="max-w-4xl mx-auto text-center">
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
                CSR Partnership
              </h1>
              <h1
                className="absolute inset-0 text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold uppercase tracking-[0.1em] select-none pointer-events-none leading-none"
                style={{
                  WebkitTextStroke: "1.5px #165DFF",
                  color: "transparent",
                }}
              >
                CSR Partnership
              </h1>
            </div>

            <h2 className="font-heading font-bold text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] text-[#0A1E4F] leading-snug mb-4">
              Invest in Sports. Transform Lives. Fulfil Your CSR Mandate.
            </h2>

            <p className="text-[0.85rem] sm:text-[0.95rem] text-[#6B7280] leading-relaxed max-w-2xl mx-auto">
              Partner with Marcos Quay Foundation to channel your CSR funds into high-impact
              sports education programmes that create measurable, lasting change in children's lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-white -mt-4">
        <div className="container">
          <motion.div {...fade(0.1)} className="max-w-5xl mx-auto">
            <div className="bg-white rounded-[16px] border border-[#E5E9F2] shadow-[0_8px_40px_-12px_rgba(10,30,79,0.10),0_2px_12px_-4px_rgba(10,30,79,0.06)]">
              <div className="grid grid-cols-2 md:grid-cols-4">
                {STATS.map((s, i) => (
                  <div
                    key={s.label}
                    className={`flex flex-col items-center text-center py-7 sm:py-8 px-4 ${
                      i < STATS.length - 1 ? "md:border-r border-[#E5E9F2]" : ""
                    }`}
                  >
                    <s.icon className="w-5 h-5 text-[#165DFF] mb-3" />
                    <p className="font-heading font-extrabold text-[1.5rem] sm:text-[1.8rem] text-[#0A1E4F] leading-none">
                      {s.value}
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
          WHY CSR IN SPORTS
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden">
        <div className="container py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fade(0)}>
              <span className="inline-block font-heading font-bold text-xs tracking-widest uppercase text-[#165DFF] mb-4">
                The Opportunity
              </span>
              <h2 className="font-heading font-extrabold text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] text-[#0A1E4F] leading-tight mb-6">
                Why Corporate India Should
                <br />
                <span className="text-[#165DFF]">Invest in Sports Education</span>
              </h2>
              <p className="text-[#6B7280] text-[0.95rem] leading-relaxed mb-5 max-w-lg">
                India's youth face a growing health crisis — rising obesity, declining fitness
                levels, and limited access to structured sports programmes. Corporate social
                responsibility offers a powerful lever to reverse this trend.
              </p>
              <p className="text-[#6B7280] text-[0.95rem] leading-relaxed mb-8 max-w-lg">
                When companies invest in sports education through CSR, they don't just
                fulfil a compliance requirement — they build healthier communities, develop
                future talent, and create measurable social impact that resonates with
                stakeholders.
              </p>

              <div className="flex flex-wrap gap-3">
                {["NEP 2020 Aligned", "Section 135 Compliant", "Tax Benefits U/S 80G"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#165DFF]/8 text-[#165DFF] text-xs font-semibold"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {tag}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            <motion.div {...fade(0.15)} className="relative">
              <div className="relative overflow-hidden rounded-[20px] rounded-br-[60px] sm:rounded-br-[80px]">
                <img
                  src="/images/hero-sports.jpg"
                  alt="Students participating in sports"
                  className="w-full h-[340px] sm:h-[400px] lg:h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E4F]/25 to-transparent" />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-5 -left-3 sm:left-4 bg-white rounded-[14px] shadow-[0_10px_40px_-10px_rgba(10,30,79,0.15)] p-4 sm:p-5">
                <p className="font-heading font-extrabold text-xl sm:text-2xl text-[#165DFF]">₹50Cr+</p>
                <p className="text-[11px] sm:text-xs text-[#6B7280] mt-1">CSR Funds Deployed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CSR PILLARS
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-[#F0F4FF] overflow-hidden">
        <div className="container py-16 md:py-24">
          <motion.div {...fade(0)} className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
            <span className="inline-block font-heading font-bold text-xs tracking-widest uppercase text-[#165DFF] mb-4">
              Our Focus Areas
            </span>
            <h2 className="font-heading font-extrabold text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] text-[#0A1E4F]">
              Where Your CSR Investment Creates Impact
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {CSR_PILLARS.map((p, i) => (
              <motion.div key={p.title} {...fade(i * 0.08)}>
                <div className="bg-white rounded-[16px] p-6 sm:p-7 h-full border border-[#E8EEF7] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_-12px_rgba(10,30,79,0.12)]">
                  <div
                    className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-5"
                    style={{ background: `${p.color}10` }}
                  >
                    <p.icon className="w-6 h-6" style={{ color: p.color }} />
                  </div>
                  <h3 className="font-heading font-bold text-[1rem] text-[#0A1E4F] mb-2.5">
                    {p.title}
                  </h3>
                  <p className="text-[0.85rem] text-[#6B7280] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOW IT WORKS — Process Flow
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden">
        <div className="container py-16 md:py-24">
          <motion.div {...fade(0)} className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
            <span className="inline-block font-heading font-bold text-xs tracking-widest uppercase text-[#165DFF] mb-4">
              How It Works
            </span>
            <h2 className="font-heading font-extrabold text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] text-[#0A1E4F]">
              From Investment to Impact
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {PROCESS_STEPS.map((s, i) => (
              <motion.div
                key={s.step}
                {...fade(i * 0.06)}
                className="grid grid-cols-1 md:grid-cols-[60px_1fr] gap-4 md:gap-6 mb-8 last:mb-0"
              >
                {/* Step number + line */}
                <div className="flex md:flex-col items-center md:items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#165DFF] flex items-center justify-center shrink-0">
                    <span className="font-heading font-extrabold text-sm text-white">{s.step}</span>
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="hidden md:block w-[2px] flex-1 bg-gradient-to-b from-[#165DFF]/30 to-transparent" />
                  )}
                </div>

                {/* Content */}
                <div className="bg-[#F8FBFF] rounded-[14px] p-5 sm:p-6 border border-[#E8EEF7] mb-0 md:mb-0">
                  <div className="flex items-center gap-3 mb-2.5">
                    <s.icon className="w-5 h-5 text-[#165DFF]" />
                    <h3 className="font-heading font-bold text-[1rem] text-[#0A1E4F]">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-[0.9rem] text-[#6B7280] leading-relaxed max-w-lg">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CSR BENEFITS
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-[#F0F4FF] overflow-hidden">
        <div className="container py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div {...fade(0)}>
              <span className="inline-block font-heading font-bold text-xs tracking-widest uppercase text-[#165DFF] mb-4">
                Why Partner With Us
              </span>
              <h2 className="font-heading font-extrabold text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] text-[#0A1E4F] leading-tight mb-6">
                Benefits of CSR Partnership
                <br />
                <span className="text-[#165DFF]">With Marcos Quay</span>
              </h2>
              <p className="text-[#6B7280] text-[0.95rem] leading-relaxed max-w-lg mb-8">
                We make it simple for corporates to deploy CSR funds effectively —
                handling programme design, execution, monitoring, and reporting end to end.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#165DFF] text-white font-heading font-bold text-[14px] px-7 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-12px_rgba(22,93,255,0.5)]"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {CSR_BENEFITS.map((b, i) => (
                <motion.div key={b.title} {...fade(i * 0.08)}>
                  <div className="bg-white rounded-[14px] p-5 sm:p-6 h-full border border-[#E8EEF7] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-10px_rgba(10,30,79,0.1)]">
                    <b.icon className="w-6 h-6 text-[#165DFF] mb-4" />
                    <h3 className="font-heading font-bold text-[0.95rem] text-[#0A1E4F] mb-2">
                      {b.title}
                    </h3>
                    <p className="text-[0.85rem] text-[#6B7280] leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PROGRAMMES OVERVIEW
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden">
        <div className="container py-16 md:py-24">
          <motion.div {...fade(0)} className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
            <span className="inline-block font-heading font-bold text-xs tracking-widest uppercase text-[#165DFF] mb-4">
              Programme Options
            </span>
            <h2 className="font-heading font-extrabold text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] text-[#0A1E4F]">
              Choose Your Impact Model
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: BookOpen,
                title: "School Adoption",
                desc: "Adopt 5-50 schools and transform their entire sports ecosystem. Includes infrastructure, coaching, curriculum, and monitoring.",
                tag: "Most Popular",
                color: "#165DFF",
              },
              {
                icon: Dumbbell,
                title: "Infrastructure Grant",
                desc: "Fund specific infrastructure upgrades — playing surfaces, equipment, indoor facilities — at schools in underserved areas.",
                tag: "Flexible",
                color: "#0A1E4F",
              },
              {
                icon: Award,
                title: "Tournament Sponsorship",
                desc: "Sponsor inter-school competitions, championships, and talent identification programmes that give students competitive exposure.",
                tag: "High Visibility",
                color: "#3F7CFF",
              },
            ].map((p, i) => (
              <motion.div key={p.title} {...fade(i * 0.08)}>
                <div className="bg-[#F8FBFF] rounded-[16px] p-6 sm:p-7 h-full border border-[#E8EEF7] relative transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_-12px_rgba(10,30,79,0.12)]">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mb-4"
                    style={{ background: `${p.color}12`, color: p.color }}
                  >
                    {p.tag}
                  </span>
                  <div
                    className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-4"
                    style={{ background: `${p.color}10` }}
                  >
                    <p.icon className="w-6 h-6" style={{ color: p.color }} />
                  </div>
                  <h3 className="font-heading font-bold text-[1.05rem] text-[#0A1E4F] mb-2.5">
                    {p.title}
                  </h3>
                  <p className="text-[0.85rem] text-[#6B7280] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-[#F0F4FF] overflow-hidden">
        <div className="container py-16 md:py-24">
          <motion.div {...fade(0)} className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block font-heading font-bold text-xs tracking-widest uppercase text-[#165DFF] mb-4">
              Frequently Asked Questions
            </span>
            <h2 className="font-heading font-extrabold text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] text-[#0A1E4F]">
              Common Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div key={faq.q} {...fade(i * 0.06)}>
                <details className="group bg-white rounded-[14px] border border-[#E8EEF7] overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none">
                    <h3 className="font-heading font-bold text-[0.95rem] text-[#0A1E4F]">
                      {faq.q}
                    </h3>
                    <span className="shrink-0 w-7 h-7 rounded-full bg-[#165DFF]/8 flex items-center justify-center text-[#165DFF] text-lg font-bold transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <p className="text-[0.9rem] text-[#6B7280] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-[#0A1E4F] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <svg className="absolute bottom-0 left-[10%] w-28 h-36 text-white" viewBox="0 0 80 100" fill="currentColor">
            <circle cx="40" cy="12" r="8" />
            <path d="M40 22 L28 52 L18 82 M40 22 L52 52 L62 82 M28 38 L14 32 M52 38 L66 32" stroke="currentColor" strokeWidth="3" fill="none" />
          </svg>
          <svg className="absolute bottom-0 right-[15%] w-32 h-40 text-white" viewBox="0 0 80 100" fill="currentColor">
            <circle cx="40" cy="12" r="8" />
            <path d="M40 22 L34 52 L24 82 M40 22 L46 52 L56 82 M34 40 L20 36 M46 40 L60 36" stroke="currentColor" strokeWidth="3" fill="none" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E4F] via-[#0D2B6B] to-[#0A1E4F]" />

        <div className="container relative z-10 py-16 md:py-24">
          <motion.div {...fade(0)} className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-extrabold text-[1.6rem] sm:text-[2rem] md:text-[2.5rem] text-white leading-tight mb-5">
              Let's Build a Healthier India
              <br />
              <span className="text-[#3F7CFF]">Together.</span>
            </h2>

            <p className="text-white/70 text-[0.95rem] sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
              Whether you're a corporation looking to fulfil your CSR mandate or a foundation
              seeking impactful sports education programmes, we're ready to partner.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#3F7CFF] text-white font-heading font-bold text-[14px] px-8 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(63,124,255,0.5)]"
              >
                Discuss CSR Partnership
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/impact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white font-heading font-bold text-[14px] px-8 py-3.5 transition-all duration-300 hover:bg-white/10"
              >
                View Our Impact
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
