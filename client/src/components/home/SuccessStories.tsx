import { motion } from "framer-motion";
import { MapPin, Play, Quote } from "lucide-react";

/* ─── Before / After comparison bar ─── */
function CompareBar({
  label,
  before,
  after,
  color,
}: {
  label: string;
  before: number;
  after: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-[11.5px] font-bold mb-1.5">
        <span className="text-[#9AA5B8] uppercase tracking-[0.08em]">{label}</span>
        <span className="text-[#B0B7C6]">{before}% → <span style={{ color }} className="font-extrabold">{after}%</span></span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="flex-1 h-2 rounded-full bg-[#EEF2F7] overflow-hidden">
          <div className="h-full rounded-full bg-[#C9D2E0] transition-all duration-700" style={{ width: `${before}%` }} />
        </div>
        <div className="flex-1 h-2 rounded-full bg-[#EEF2F7] overflow-hidden">
          <div className="h-full rounded-full transition-all duration-700" style={{ width: `${after}%`, background: color }} />
        </div>
      </div>
    </div>
  );
}

/* ─── Featured school story ─── */
function FeaturedStory() {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-white border border-[#EAF1FD] shadow-[0_40px_90px_-45px_rgba(10,30,79,0.45)]">
      <div className="grid lg:grid-cols-[1.05fr_1fr]">
        {/* Photo side */}
        <div className="relative min-h-[280px] sm:min-h-[340px]">
          <img
            src="/images/hero-sports.jpg"
            alt="Students at St. Xavier's School, Pune"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E4F]/70 via-transparent to-transparent" />

          {/* Video play button */}
          <button
            type="button"
            aria-label="Play St. Xavier's story"
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/20 backdrop-blur border border-white/40 flex items-center justify-center text-white transition-transform duration-300 hover:scale-110"
          >
            <span className="relative flex items-center justify-center w-12 h-12">
              <span className="absolute inset-0 rounded-full border border-white/40 animate-pulse-ring" />
              <Play className="w-5 h-5 ml-0.5" fill="white" strokeWidth={1.5} />
            </span>
          </button>

          {/* Location badge */}
          <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3.5 py-2 text-[12px] font-bold text-[#1A2333]">
            <MapPin className="w-3.5 h-3.5 text-[#FF6B35]" />
            Pune, Maharashtra
          </div>
        </div>

        {/* Content side */}
        <div className="relative p-7 sm:p-9 lg:p-10">
          <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FF6B35]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
            Featured Story
          </div>
          <h3 className="mt-3 font-heading font-extrabold text-[24px] sm:text-[28px] text-[#0A1E4F] leading-tight">
            St. Xavier&apos;s High School
          </h3>

          <div className="mt-5 grid grid-cols-2 gap-5">
            <div>
              <p className="font-heading font-extrabold text-[26px] sm:text-[30px] text-[#27AE60] leading-none">
                450+
              </p>
              <p className="mt-1 text-[12px] font-bold text-[#6B7280]">
                students now play daily
              </p>
            </div>
            <div>
              <p className="font-heading font-extrabold text-[26px] sm:text-[30px] text-[#165DFF] leading-none">
                3.2×
              </p>
              <p className="mt-1 text-[12px] font-bold text-[#6B7280]">
                growth in sports admissions
              </p>
            </div>
          </div>

          {/* Before / After */}
          <div className="mt-6 space-y-3.5 rounded-2xl bg-[#F8FBFF] border border-[#EAF1FD] p-4">
            <CompareBar label="Participation" before={22} after={91} color="#27AE60" />
            <CompareBar label="Fitness Score" before={38} after={84} color="#165DFF" />
            <CompareBar label="PE Time / Week" before={40} after={100} color="#E89200" />
          </div>

          {/* Principal quote */}
          <div className="relative mt-6 pl-5 border-l-[3px] border-[#F4B400]">
            <Quote className="absolute -top-2 left-3 w-5 h-5 text-[#F4B400]/70" strokeWidth={2.2} />
            <p className="text-[14.5px] leading-relaxed font-medium text-[#4B5563] italic">
              &ldquo;We&apos;ve never seen children this excited about coming to school.
              The discipline and confidence is visible in the classroom too.&rdquo;
            </p>
            <p className="mt-2.5 text-[12.5px] font-bold text-[#1A2333]">
              Mrs. Meera Kulkarni <span className="font-semibold text-[#9AA5B8]">— Principal</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Smaller surrounding story ─── */
function MiniStory({
  school,
  location,
  metric,
  metricLabel,
  accent,
  quote,
  initials,
}: {
  school: string;
  location: string;
  metric: string;
  metricLabel: string;
  accent: string;
  quote: string;
  initials: string;
}) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[26px] bg-white border border-[#EAF1FD] shadow-[0_24px_55px_-38px_rgba(10,30,79,0.45)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_34px_70px_-40px_rgba(10,30,79,0.55)]">
      {/* Illustrated cover */}
      <div className="relative h-32 sm:h-36 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${accent}22 0%, ${accent}0D 55%, #FFFFFF 100%)`,
          }}
        />
        {/* sports line-art watermark */}
        <svg viewBox="0 0 96 96" fill="none" stroke={accent} strokeWidth="1.6" className="absolute -right-5 -top-4 w-28 h-28 opacity-[0.18] rotate-12 transition-transform duration-700 group-hover:rotate-6" aria-hidden="true">
          <circle cx="48" cy="48" r="40" />
          <path d="M48 8C36 30 36 66 48 88" />
          <path d="M8 48c26-8 54-8 80 0" />
          <path d="M8 48c20 18 60 18 80 0" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="w-16 h-16 rounded-2xl flex items-center justify-center font-heading font-extrabold text-[22px] text-white shadow-lg"
            style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)`, boxShadow: `0 14px 30px -12px ${accent}99` }}
          >
            {initials}
          </span>
        </div>
        {/* play button */}
        <button
          type="button"
          aria-label={`Play ${school} story`}
          className="absolute bottom-2.5 right-2.5 w-9 h-9 rounded-full bg-white/85 backdrop-blur border border-white/70 flex items-center justify-center text-[#1A2333] shadow-md transition-transform duration-300 hover:scale-110"
        >
          <Play className="w-4 h-4 ml-0.5" fill="currentColor" strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h4 className="font-heading font-bold text-[16.5px] text-[#0A1E4F] leading-snug">
          {school}
        </h4>
        <p className="mt-1 flex items-center gap-1.5 text-[11.5px] font-bold text-[#9AA5B8]">
          <MapPin className="w-3 h-3" />
          {location}
        </p>

        <div className="mt-3.5 flex items-baseline gap-2">
          <span className="font-heading font-extrabold text-[22px] leading-none" style={{ color: accent }}>
            {metric}
          </span>
          <span className="text-[11.5px] font-bold text-[#6B7280]">{metricLabel}</span>
        </div>

        <p className="mt-3 text-[13px] leading-relaxed font-medium text-[#6B7280] italic">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
    </div>
  );
}

const fade = (delay: number) => ({
  initial: { y: 30 },
  animate: { y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function SuccessStories() {
  return (
    <section className="relative overflow-hidden bg-white pt-14 sm:pt-16 lg:pt-1 pb-20 sm:pb-28 lg:pb-36">
      {/* Soft warm glow behind header */}
      <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[720px] h-[360px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(244,180,0,0.1) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-32 -right-28 w-[440px] h-[440px] bg-[#27AE60]/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="container relative">
        {/* ── Header ── */}
        <motion.div {...fade(0)} className="max-w-2xl mx-auto text-center">
          <p className="eyebrow justify-center text-[#27AE60] mb-4">School Success Stories</p>
          <h2 className="heading-2 text-[#0A1E4F]">
            A Wall of Transformation
          </h2>
          <p className="body-lg mt-5">
            Real schools. Real children. Real change. These are the stories of
            campuses where sports became a way of life.
          </p>
        </motion.div>

        {/* ── Wall layout: featured centre + surrounding stories ── */}
        <div className="mt-16 sm:mt-20">
          {/* Top row — two smaller stories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 max-w-5xl mx-auto">
            <motion.div {...fade(0.05)}>
              <MiniStory
                school="Green Valley Public School"
                location="Jaipur, Rajasthan"
                metric="380+"
                metricLabel="students active daily"
                accent="#165DFF"
                initials="GV"
                quote="The morning assemblies feel different now — our kids stand taller."
              />
            </motion.div>
            <motion.div {...fade(0.12)}>
              <MiniStory
                school="Kendriya Vidyalaya, Bengaluru"
                location="Bengaluru, Karnataka"
                metric="96%"
                metricLabel="PE attendance rate"
                accent="#E89200"
                initials="KV"
                quote="Sports used to be a free period. Now it's the highlight of the day."
              />
            </motion.div>
          </div>

          {/* Featured story */}
          <motion.div {...fade(0.18)} className="mt-5 sm:mt-6 lg:mt-7 max-w-5xl mx-auto">
            <FeaturedStory />
          </motion.div>

          {/* Bottom row — three smaller stories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 max-w-5xl mx-auto mt-5 sm:mt-6 lg:mt-7">
            <motion.div {...fade(0.1)}>
              <MiniStory
                school="DPS Indirapuram"
                location="Ghaziabad, Uttar Pradesh"
                metric="2.5×"
                metricLabel="more girls in sport"
                accent="#8B5CF6"
                initials="DP"
                quote="Our girls' cricket team now competes at state level."
              />
            </motion.div>
            <motion.div {...fade(0.16)}>
              <MiniStory
                school="Bishop Cotton School"
                location="Shimla, Himachal Pradesh"
                metric="−31%"
                metricLabel="sedentary screen time"
                accent="#0D9488"
                initials="BC"
                quote="Parents tell us their children sleep better and eat better now."
              />
            </motion.div>
            <motion.div {...fade(0.22)}>
              <MiniStory
                school="Ryan International"
                location="Mumbai, Maharashtra"
                metric="14"
                metricLabel="new sport teams formed"
                accent="#FF6B35"
                initials="RI"
                quote="We finally have a real structure behind our sports programme."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
