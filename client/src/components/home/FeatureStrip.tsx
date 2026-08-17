import { motion } from "framer-motion";
import {
  BookOpen,
  UserCheck,
  Volleyball,
  HeartPulse,
  BarChart3,
  Trophy,
  ShieldCheck,
  Network,
} from "lucide-react";

const FEATURES = [
  {
    icon: BookOpen,
    title: "Structured PE Curriculum",
    desc: "Age-appropriate, progressive NEP 2020-aligned curriculum designed to build strong sporting foundations.",
    style: "default",
    cardBg: "#EBF1FF",
    iconBg: "bg-[#D6E4FF]",
    iconColor: "text-[#0A1E4F]",
    accentColor: "#3F7CFF",
    num: "01",
    image: "/images/Card 01.png",
  },
  {
    icon: UserCheck,
    title: "Certified Coaches",
    desc: "Trained professionals with deep multi-sport expertise, delivering engaging and structured coaching that inspires confidence and skill progression.",
    style: "wide",
    cardBg: "#E8F8F0",
    iconBg: "bg-[#CFF3E2]",
    iconColor: "text-[#1B6B4A]",
    accentColor: "#2E9E5F",
    num: "02",
    image: "/images/Card 02.png",
  },
  {
    icon: Volleyball,
    title: "Multi-Sport Programs",
    desc: "Comprehensive exposure to football, basketball, cricket, athletics, and more.",
    style: "accent",
    cardBg: "#FFF7E6",
    iconBg: "bg-white/20",
    iconColor: "text-[#B58800]",
    accentColor: "#F5C96B",
    num: "03",
  },
  {
    icon: HeartPulse,
    title: "Student Fitness",
    desc: "Regular fitness assessments and health tracking to monitor every child's physical development.",
    style: "default",
    cardBg: "#FFF0EB",
    iconBg: "bg-[#FFD8CC]",
    iconColor: "text-[#B5442A]",
    accentColor: "#FF8A6B",
    num: "04",
    image: "/images/Card 04.png",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    desc: "Data-driven insights to track student progress, identify development areas, and measure growth.",
    style: "default",
    cardBg: "#F1ECFF",
    iconBg: "bg-[#DDD4FF]",
    iconColor: "text-[#5B3FBF]",
    accentColor: "#BBA4F2",
    num: "05",
    image: "/images/Card 05.png",
  },
  {
    icon: Trophy,
    title: "Events & Tournaments",
    desc: "Opportunities to participate in inter-school competitions, tournaments, and championship events designed to foster competitive spirit and sportsmanship.",
    style: "hero",
    cardBg: "#E6F9F6",
    iconBg: "bg-[#C8F2EC]",
    iconColor: "text-[#1B6B4A]",
    accentColor: "#2DD4BF",
    num: "06",
    image: "/images/Card 06.png",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Well-being",
    desc: "Industry-standard safety protocols and child protection practices throughout every programme.",
    style: "default",
    cardBg: "#FFF0F3",
    iconBg: "bg-[#FFDAE0]",
    iconColor: "text-[#A83248]",
    accentColor: "#F297A8",
    num: "07",
    image: "/images/Card 07.png",
  },
  {
    icon: Network,
    title: "End-to-End Management",
    desc: "We manage the complete sports programme, allowing schools to focus on education.",
    style: "default",
    cardBg: "#E8F6FF",
    iconBg: "bg-[#CCE9FF]",
    iconColor: "text-[#0A5E8A]",
    accentColor: "#7CC8F0",
    num: "08",
    image: "/images/Card 08.png",
  },
];

const fade = (delay: number) => ({
  initial: { y: 28 },
  animate: { y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function FeatureStrip() {
  return (
    <section className="relative bg-[#F8F9FC] overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #0A1E4F 0.8px, transparent 0.8px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
        }}
      />

      {/* Connecting lines between cards */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 900"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Horizontal flowing lines */}
        <path
          d="M0 180 C 200 120, 400 240, 600 160 S 1000 200, 1200 140"
          stroke="#0A1E4F"
          strokeWidth="1"
          strokeDasharray="4 12"
          opacity="0.08"
        />
        <path
          d="M0 480 C 300 420, 500 540, 700 460 S 1100 500, 1200 440"
          stroke="#0A1E4F"
          strokeWidth="1"
          strokeDasharray="3 14"
          opacity="0.06"
        />
        <path
          d="M0 760 C 250 700, 450 820, 650 740 S 950 780, 1200 720"
          stroke="#3F7CFF"
          strokeWidth="0.8"
          strokeDasharray="2 16"
          opacity="0.07"
        />
        {/* Diagonal connecting lines */}
        <path
          d="M100 0 C 200 200, 400 300, 500 500 S 700 700, 800 900"
          stroke="#0A1E4F"
          strokeWidth="0.7"
          strokeDasharray="3 18"
          opacity="0.05"
        />
        <path
          d="M1100 0 C 1000 200, 800 400, 700 500 S 500 700, 400 900"
          stroke="#3F7CFF"
          strokeWidth="0.7"
          strokeDasharray="2 20"
          opacity="0.05"
        />
        {/* Small circle nodes at intersections */}
        <circle cx="600" cy="160" r="3" fill="#0A1E4F" opacity="0.1" />
        <circle cx="700" cy="460" r="3" fill="#3F7CFF" opacity="0.08" />
        <circle cx="500" cy="500" r="2.5" fill="#0A1E4F" opacity="0.07" />
        <circle cx="700" cy="500" r="2.5" fill="#3F7CFF" opacity="0.06" />
      </svg>

      <div className="container relative z-10">
        <div className="py-16 md:py-24">
          {/* Header */}
          <motion.div {...fade(0)} className="text-center max-w-3xl mx-auto mb-16 md:mb-24 relative">
            {/* Gradient circle border behind header */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[37%] w-[400px] h-[400px] md:w-[520px] md:h-[520px] rounded-full pointer-events-none"
              style={{
                background: "conic-gradient(from 0deg, #3F7CFF40, #BBA4F240, #F297A840, #F5C96B40, #86D9B040, #3F7CFF40)",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 6px), black calc(100% - 6px))",
                WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 6px), black calc(100% - 6px))",
              }}
            />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[35%] w-[460px] h-[460px] md:w-[460px] md:h-[460px] rounded-full pointer-events-none"
              style={{
                background: "conic-gradient(from 180deg, #93B4F535, #FF8A6B35, #2DD4BF35, #BBA4F235, #F5C96B35, #93B4F535)",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))",
                WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))",
              }}
            />

            <h1 className="font-heading font-extrabold text-[2rem] md:text-[2.6rem] text-[#0A1E4F] mb-4 leading-tight relative z-10">
              Why Marcos Quay
            </h1>
            <h2 className="font-heading font-bold text-[1.4rem] md:text-[1.8rem] text-[#3F7CFF] mb-6 leading-snug">
              A Complete Sports Ecosystem for Your School
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed max-w-2xl mx-auto">
              Everything your school needs to build a world-class sports programme —
              delivered and managed end-to-end by our team.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f, i) => {
              const isWide = f.style === "wide";
              const isAccent = f.style === "accent";
              const isHero = f.style === "hero";

              const hasImage = "image" in f && f.image;
              const isWideImage = isWide && hasImage;
              const isDefaultImage = !isWide && !isAccent && !isHero && hasImage;
              const isHeroImage = isHero && hasImage;

              const cardClasses = [
                "relative rounded-lg p-6 flex flex-col h-full overflow-hidden group transition-all duration-300 hover:-translate-y-1",
                isWide && "lg:col-span-2",
                isHero && "lg:col-span-2 lg:row-span-2",
                isAccent
                  ? "bg-[#0A1E4F] text-white border border-[#165DFF]"
                  : isWideImage || isDefaultImage || isHeroImage
                    ? "border border-transparent p-0"
                    : "text-[#0A1E4F] border border-transparent hover:shadow-[0_20px_50px_-16px_rgba(10,30,79,0.12)]",
              ]
                .filter(Boolean)
                .join(" ");

              const cardStyle = isAccent
                ? {}
                : isWideImage || isDefaultImage || isHeroImage
                  ? {}
                  : { backgroundColor: f.cardBg };

              return (
                <motion.article
                  key={f.title}
                  {...fade(i * 0.06)}
                  className={cardClasses}
                  style={cardStyle}
                >
                  {/* Big number watermark */}
                  <div
                    className={`absolute top-0 right-0 p-4 pointer-events-none group-hover:scale-110 transition-transform duration-500 font-extrabold leading-none ${
                      isHero
                        ? "text-[80px] sm:text-[100px] opacity-[0.06]"
                        : "text-[50px] opacity-[0.08]"
                    } ${isAccent ? "text-white" : ""} ${
                      "image" in f && f.image ? "hidden" : ""
                    }`}
                    style={isAccent ? {} : { color: f.accentColor }}
                  >
                    {f.num}
                  </div>

                  {/* Wide card: horizontal layout */}
                  {isWide ? (
                    hasImage ? (
                      <div className="relative -mx-6 -my-6 overflow-hidden rounded-lg flex-1 min-h-[200px]">
                        <img
                          src={f.image}
                          alt={f.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                        <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                          <h3 className="font-heading font-bold text-[1.2rem] mb-2 text-white">
                            {f.title}
                          </h3>
                          <p className="text-[0.9rem] text-white/85 leading-relaxed max-w-md">
                            {f.desc}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center h-full">
                        <div className="flex-shrink-0">
                          <div
                            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-sm ${f.iconBg}`}
                          >
                            <f.icon className={`w-7 h-7 ${f.iconColor}`} strokeWidth={2} />
                          </div>
                        </div>
                        <div className="flex-grow mt-auto relative z-10">
                          <h3 className="font-heading font-bold text-[1.1rem] mb-3" style={{ color: f.accentColor }}>
                            {f.title}
                          </h3>
                          <p className="text-[0.95rem] text-[#6B7280] leading-relaxed">
                            {f.desc}
                          </p>
                        </div>
                      </div>
                    )
                  ) : (
                    <>
                      {"image" in f && f.image ? (
                        <>
                          {/* Image filling card */}
                          <div className="relative -mx-6 -my-6 overflow-hidden rounded-b-lg flex-1 min-h-[200px]">
                            <img
                              src={f.image}
                              alt={f.title}
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Gradient overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            {/* Content on top of image */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                              <h3 className={`font-heading font-bold mb-2 text-white ${
                                isHero ? "text-[1.2rem] sm:text-[1.35rem]" : "text-[1.05rem]"
                              }`}>
                                {f.title}
                              </h3>
                              <p className={`text-white/85 leading-relaxed ${
                                isHero ? "text-[0.9rem] max-w-lg" : "text-[0.85rem]"
                              }`}>
                                {f.desc}
                              </p>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Icon */}
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                              isAccent ? "bg-white/20 backdrop-blur-sm" : f.iconBg
                            }`}
                          >
                            <f.icon
                              className={`w-6 h-6 ${isAccent ? "text-white" : f.iconColor}`}
                              strokeWidth={2}
                            />
                          </div>

                          {/* Content pushed to bottom */}
                          <div className="mt-auto relative z-10">
                            <h3
                              className={`font-heading font-bold mb-3 ${
                                isHero
                                  ? "text-[1.2rem] sm:text-[1.35rem]"
                                  : "text-[1.05rem]"
                              } ${isAccent ? "text-white" : ""}`}
                              style={isAccent ? {} : { color: f.accentColor }}
                            >
                              {f.title}
                            </h3>
                            <p
                              className={`leading-relaxed ${
                                isHero ? "text-[0.95rem] mb-6 max-w-lg" : "text-[0.9rem]"
                              } ${isAccent ? "text-white/80" : "text-[#6B7280]"}`}
                            >
                              {f.desc}
                            </p>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
