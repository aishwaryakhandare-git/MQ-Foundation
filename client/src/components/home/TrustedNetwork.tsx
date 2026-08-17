import { type ReactElement } from "react";
import {
  GraduationCap,
  Handshake,
  Landmark,
  MapPin,
  School,
  Trophy,
} from "lucide-react";
import Reveal from "./Reveal";
import Counter from "./Counter";
import SectionHeading from "./SectionHeading";

/* ────────────────────────────────────────────────────────────────
   Decorative helpers
   ──────────────────────────────────────────────────────────────── */

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
      <circle cx="120" cy="40" r="11" />
      <path d="M112 52l-6 34 12 4 4-26 6 22 12 3 2-12-10-14v-8l-20 7z" />
      <circle cx="290" cy="42" r="11" />
      <path d="M282 54l-4 34 13 3 3-24 10 22 12 2-4-18-10-10v-8l-20 9z" />
      <circle cx="470" cy="40" r="11" />
      <path d="M462 54l-6 36 13 3 4-28 4 26 13 2 3-12-8-16-8-7z" />
      <path d="M560 60c0 34-16 54-40 60M560 60h16v-6h-16M520 120h40M540 120v8h20v-8" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────
   Partner logo emblems (stylized wordmark lockups)
   ──────────────────────────────────────────────────────────────── */

function DpsMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" aria-hidden="true">
      <path d="M24 3.5 39 8.5V22c0 10.5-7 18.5-15 22.5C16 40.5 9 32.5 9 22V8.5Z" stroke="#003057" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M15 14.5h18V24c0 5.6-4 9.8-9 11.8-5-2-9-6.2-9-11.8Z" fill="#003057" />
      <path d="M18.5 18.5h11M18.5 23.5h11M20.5 28.5h7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function RyanMark() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
      <circle cx="24" cy="24" r="19.5" fill="#00843D" />
      <path d="M17 13h8.2a7.6 7.6 0 0 1 0 15.2H17M17 13v21" stroke="#fff" strokeWidth="3.4" fill="none" strokeLinecap="round" />
      <path d="m26 28 5.4 6" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
    </svg>
  );
}

function HeritageMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" aria-hidden="true">
      <path d="M8 40V19L24 5l16 14v21" stroke="#0F6E62" strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M16.5 40V30a7.5 7.5 0 0 1 15 0v10" fill="#0F6E62" />
      <path d="M12 40h24" stroke="#0F6E62" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

function VibgyorMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" aria-hidden="true">
      <path d="M10 33a16 16 0 0 1 28 0" stroke="#E53935" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M15 33a11 11 0 0 1 18 0" stroke="#FB8C00" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M20 33a6 6 0 0 1 8 0" stroke="#43A047" strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="24" cy="33" r="1.7" fill="#165DFF" />
    </svg>
  );
}

function GoenkaMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" aria-hidden="true">
      <path d="M9 14c-3.6 7-3.6 15 2.4 21.6 4.4-3.2 5.4-10.4 2.2-15.6M39 14c3.6 7 3.6 15-2.4 21.6-4.4-3.2-5.4-10.4-2.2-15.6" stroke="#A61C1C" strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="24" r="10" fill="#A61C1C" />
      <path d="M24 19.5 27.6 21v6l-3.6 3.6L20.4 27v-6Z" fill="#fff" />
    </svg>
  );
}

function AmityMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" aria-hidden="true">
      <circle cx="24" cy="24" r="17.5" stroke="#003087" strokeWidth="2.6" />
      <path d="M24 14l3 7 7.5.7-5.6 5 1.6 7.3L24 30.7l-6.5 4.3 1.6-7.3-5.6-5 7.5-.7Z" fill="#E53935" />
    </svg>
  );
}

function RelianceMark() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
      <circle cx="24" cy="24" r="19" fill="#0072CE" />
      <path d="M24 9.5c5.4 6.4 9 10.4 9 15.5a9 9 0 0 1-18 0c0-5.1 3.6-9.1 9-15.5Z" fill="#fff" />
    </svg>
  );
}

function TataMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" aria-hidden="true">
      <circle cx="24" cy="24" r="18" stroke="#1D4E9C" strokeWidth="2.6" />
      <path d="M15 24h18M24 6v36" stroke="#1D4E9C" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="24" cy="24" r="2.6" fill="#1D4E9C" />
    </svg>
  );
}

function InfosysMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" aria-hidden="true">
      <path d="M14 26a9 9 0 0 1 18 0 9 9 0 0 1-18 0 9 9 0 0 1 18 0 9 9 0 0 1-18 0" stroke="#008CC8" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}

function IoaMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" aria-hidden="true">
      <circle cx="16.5" cy="23" r="7" stroke="#1D4E9C" strokeWidth="2.2" />
      <circle cx="31.5" cy="23" r="7" stroke="#E53935" strokeWidth="2.2" />
      <circle cx="24" cy="32.5" r="7" stroke="#F4B400" strokeWidth="2.2" />
    </svg>
  );
}

function SaiMark() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
      <circle cx="24" cy="24" r="19.5" fill="#E53935" />
      <circle cx="24" cy="16" r="3.6" fill="#fff" />
      <path d="M21 22l-4.6 13 5.2 1 2.8-7.5 4.4 7 5.2-.8-7.4-11.8 5.4-2.6-2.6-4.2-6.2 1.8Z" fill="#fff" />
    </svg>
  );
}

function SportsForAllMark() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
      <circle cx="25.5" cy="12.5" r="4" fill="#FF6B35" />
      <path d="M22 19l-4.5 14 5 1.2 2.6-8 4.6 11 5.4-.9-7-13.6 5-2.4-3-4.4-6.4 1.9Z" fill="#FF6B35" />
    </svg>
  );
}

function KheloIndiaMark() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
      <path d="M24 5c4.4 5.2 6.6 8.8 6.6 12.2a6.6 6.6 0 0 1-13.2 0C17.4 13.8 19.6 10.2 24 5Z" fill="#F4B400" />
      <path d="M20.8 24.4h6.4v4.6h-6.4Z" fill="#165DFF" />
      <path d="M14 43.5c4.2-4 6.4-8 6.4-13.4h7.2c0 5.4 2.2 9.4 6.4 13.4Z" fill="#27AE60" />
    </svg>
  );
}

function FitIndiaMark() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
      <circle cx="25" cy="13" r="4" fill="#FB8C00" />
      <path d="M21.5 20 17 35l5.2 1.2 3-8.4 4.8 10.4 5.2-1-7-12.4 5-2.6-2.8-4.6-6.2 2Z" fill="#FB8C00" />
    </svg>
  );
}

function MysMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" aria-hidden="true">
      <circle cx="24" cy="24" r="17.5" stroke="#1D4E9C" strokeWidth="2.4" />
      <path d="M24 12c3.4 4 5 6.8 5 9.4a5 5 0 0 1-10 0c0-2.6 1.6-5.4 5-9.4Z" fill="#F4B400" />
      <path d="M20 26.5h8v3.5h-8Z" fill="#1D4E9C" />
      <path d="M15 39.5c3-2.6 4.6-5.2 4.6-8.2h8.8c0 3 1.6 5.6 4.6 8.2Z" fill="#E53935" />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────
   Data
   ──────────────────────────────────────────────────────────────── */

type PartnerLogo = {
  name: string;
  sub?: string;
  mark: ReactElement;
  color: string;
};

const STATS = [
  {
    icon: School,
    value: 450,
    suffix: "+",
    label: "Partner Schools",
    color: "#165DFF",
    from: "#7FA8FF",
    to: "#0D3BB8",
  },
  {
    icon: GraduationCap,
    value: 120,
    suffix: "+",
    label: "Education Institutions",
    color: "#0EA5A3",
    from: "#6FD6D2",
    to: "#0B7F7D",
  },
  {
    icon: Handshake,
    value: 35,
    suffix: "+",
    label: "Strategic Partners",
    color: "#27AE60",
    from: "#6FD69B",
    to: "#1E8A4C",
  },
  {
    icon: MapPin,
    value: 18,
    suffix: "",
    label: "States Reached",
    color: "#F4B400",
    from: "#FFC94D",
    to: "#C98200",
  },
] as const;

const CATEGORIES = [
  {
    icon: School,
    title: "Schools",
    desc: "Partner schools delivering structured sports education.",
    color: "#165DFF",
    from: "#7FA8FF",
    to: "#0D3BB8",
    logos: [
      { name: "Delhi Public School", sub: "DPS Society", mark: <DpsMark />, color: "#003057" },
      { name: "Ryan International", sub: "Schools Network", mark: <RyanMark />, color: "#00843D" },
      { name: "The Heritage School", sub: "K-12 Schools", mark: <HeritageMark />, color: "#0F6E62" },
    ],
  },
  {
    icon: GraduationCap,
    title: "Education Groups",
    desc: "Leading education networks implementing sports programmes.",
    color: "#0EA5A3",
    from: "#6FD6D2",
    to: "#0B7F7D",
    logos: [
      { name: "VIBGYOR Group", sub: "of Schools", mark: <VibgyorMark />, color: "#2B2B2B" },
      { name: "GD Goenka Group", sub: "Education", mark: <GoenkaMark />, color: "#A61C1C" },
      { name: "Amity International", sub: "Schools", mark: <AmityMark />, color: "#003087" },
    ],
  },
  {
    icon: Handshake,
    title: "CSR Partners",
    desc: "Corporate partners investing in healthier school communities.",
    color: "#27AE60",
    from: "#6FD69B",
    to: "#1E8A4C",
    logos: [
      { name: "Reliance Foundation", sub: "CSR Partner", mark: <RelianceMark />, color: "#0072CE" },
      { name: "Tata Trusts", sub: "Philanthropy", mark: <TataMark />, color: "#1D4E9C" },
      { name: "Infosys Foundation", sub: "Community", mark: <InfosysMark />, color: "#008CC8" },
    ],
  },
  {
    icon: Trophy,
    title: "Sports Organisations",
    desc: "National and regional sports bodies supporting grassroots development.",
    color: "#F4B400",
    from: "#FFC94D",
    to: "#C98200",
    logos: [
      { name: "Indian Olympic Association", sub: "IOA", mark: <IoaMark />, color: "#1D4E9C" },
      { name: "Sports Authority of India", sub: "SAI", mark: <SaiMark />, color: "#C62828" },
      { name: "Sports For All", sub: "India Movement", mark: <SportsForAllMark />, color: "#FF6B35" },
    ],
  },
  {
    icon: Landmark,
    title: "Government Bodies",
    desc: "Public institutions enabling sports education across India.",
    color: "#FF6B35",
    from: "#FF9C74",
    to: "#E24A1E",
    logos: [
      { name: "Khelo India", sub: "Govt. of India", mark: <KheloIndiaMark />, color: "#165DFF" },
      { name: "Fit India Movement", sub: "Govt. of India", mark: <FitIndiaMark />, color: "#0A1E4F" },
      { name: "Ministry of Youth Affairs", sub: "& Sports", mark: <MysMark />, color: "#1D4E9C" },
    ],
  },
];

/* ────────────────────────────────────────────────────────────────
   Logo card
   ──────────────────────────────────────────────────────────────── */

function LogoCard({ logo }: { logo: PartnerLogo }) {
  return (
    <div className="group/logo flex min-h-[92px] items-center justify-center gap-3 rounded-[22px] bg-white border border-[#EDF1F9] px-4 py-4 shadow-[0_10px_28px_-16px_rgba(20,33,61,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#DCE6F4] hover:shadow-[0_20px_44px_-20px_rgba(20,33,61,0.28)]">
      <div className="w-9 h-9 shrink-0 transition-transform duration-300 group-hover/logo:scale-110">
        {logo.mark}
      </div>
      <div className="min-w-0">
        <p className="font-heading font-bold text-[13.5px] sm:text-[15px] leading-snug" style={{ color: logo.color }}>
          {logo.name}
        </p>
        {logo.sub && (
          <p className="mt-1 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]">
            {logo.sub}
          </p>
        )}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   Category section
   ──────────────────────────────────────────────────────────────── */

function CategoryCard({
  category,
}: {
  category: (typeof CATEGORIES)[number];
}) {
  return (
    <div className="group relative overflow-hidden rounded-[26px] border border-[#EDF1F9] bg-white/85 backdrop-blur-sm p-6 sm:p-8 shadow-[0_16px_44px_-30px_rgba(20,33,61,0.22)] transition-shadow duration-300 hover:shadow-[0_28px_64px_-34px_rgba(20,33,61,0.32)]">
      <div className="absolute -top-16 -right-10 w-48 h-48 rounded-full opacity-[0.07] blur-2xl pointer-events-none" style={{ background: category.color }} />
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full hidden sm:block"
        style={{ background: `linear-gradient(180deg, ${category.color}, ${category.color}33)` }}
        aria-hidden="true"
      />

      <div className="relative flex items-center gap-4 sm:gap-5">
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
          style={{
            background: `radial-gradient(circle at 30% 25%, ${category.from} 0%, ${category.color} 60%, ${category.to} 100%)`,
            boxShadow: `0 12px 24px -10px ${category.color}aa`,
          }}
        >
          <category.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2} />
        </div>
        <div>
          <h3 className="font-heading font-bold text-[19px] sm:text-[22px] text-[#0A1E4F]">{category.title}</h3>
          <p className="text-[13px] sm:text-[14px] font-medium text-[#6B7280] mt-0.5">{category.desc}</p>
        </div>
      </div>

      <div className="relative mt-6 sm:mt-7 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:pb-0 lg:grid-cols-3">
        {category.logos.map((logo) => (
          <div key={logo.name} className="snap-start flex-none w-60 md:w-auto">
            <LogoCard logo={logo} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   Section — Our Trusted Network
   ──────────────────────────────────────────────────────────────── */

export default function TrustedNetwork() {
  return (
    <section
      id="trusted-network"
      className="relative overflow-hidden bg-[#F2F7FF] pt-8 lg:pt-12 pb-20 lg:pb-28 scroll-mt-24"
    >
      <div className="container relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] sm:rounded-[44px] border border-[#E3EEFB] bg-gradient-to-b from-white via-[#F5F9FF] to-[#EAF3FF] px-5 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 shadow-[0_50px_110px_-55px_rgba(20,33,61,0.35)]">
            {/* soft organic decorations */}
            <div className="absolute -top-24 -left-24 w-[26rem] h-[26rem] rounded-full bg-[#165DFF]/[0.07] blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-24 w-[30rem] h-[30rem] rounded-full bg-[#27AE60]/[0.08] blur-3xl pointer-events-none" />
            <div className="absolute right-[7%] top-[44%] w-40 h-40 rounded-[60%_40%_55%_45%/45%_58%_42%_55%] bg-[#F4B400]/20 blur-2xl pointer-events-none" />
            <Dots className="absolute left-[3%] top-[10%] w-24 opacity-[0.05] pointer-events-none" />
            <Dots className="absolute right-[5%] bottom-[16%] w-20 opacity-[0.04] pointer-events-none" />
            <CurvedLines className="absolute right-[3%] bottom-[8%] w-40 opacity-[0.07] pointer-events-none" />
            <SportsSilhouettes className="absolute left-0 right-0 bottom-0 h-36 text-[#165DFF]/[0.04] pointer-events-none" />

            <div className="relative">
              <SectionHeading
                eyebrow="Trusted Across India's Education Ecosystem"
                eyebrowClass="text-[#165DFF]"
                title="Organisations That Believe In Our Mission"
              >
                We work alongside schools, education groups, CSR partners, sports
                organisations, and government institutions to build stronger
                sports ecosystems across India.
              </SectionHeading>

              {/* trust statistics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-12 lg:mt-14">
                {STATS.map((stat, i) => (
                  <Reveal key={stat.label} delay={i * 80}>
                    <div className="group/stat relative overflow-hidden rounded-[22px] bg-white/90 border border-[#EDF1F9] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-22px_rgba(20,33,61,0.25)]">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover/stat:scale-110"
                        style={{
                          background: `radial-gradient(circle at 30% 25%, ${stat.from} 0%, ${stat.color} 60%, ${stat.to} 100%)`,
                          boxShadow: `0 10px 20px -8px ${stat.color}88`,
                        }}
                      >
                        <stat.icon className="w-5.5 h-5.5 text-white" strokeWidth={2.2} />
                      </div>
                      <p className="mt-4 font-heading font-extrabold text-[26px] sm:text-[32px] text-[#0A1E4F] leading-none">
                        <Counter to={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="mt-1.5 text-[12px] sm:text-[13px] font-semibold text-[#6B7280]">{stat.label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* partnership categories */}
              <div className="mt-12 lg:mt-14 space-y-5 lg:space-y-6">
                {CATEGORIES.map((category, i) => (
                  <Reveal key={category.title} delay={i * 70}>
                    <CategoryCard category={category} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
