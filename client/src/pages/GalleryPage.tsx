import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Building2,
  Users,
  Trophy,
  Zap,
  ArrowRight,
  ImageIcon,
  Calendar,
  GraduationCap,
  Dumbbell,
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { y: 30 },
  whileInView: { y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ─── Gallery Data ─── */

type Category = "All" | "Events" | "Schools" | "Infrastructure" | "Coaches";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: Exclude<Category, "All">;
  span?: "wide" | "tall";
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: "/images/hero-sports.jpg",
    alt: "Students playing football during structured PE session",
    title: "Football Training Session",
    category: "Events",
  },
  {
    id: 2,
    src: "/images/solutions/multisport.jpg",
    alt: "Multi-sport activities in school playground",
    title: "Multi-Sport Day",
    category: "Events",
    span: "wide",
  },
  {
    id: 3,
    src: "/images/Ground img.png",
    alt: "School sports ground with modern infrastructure",
    title: "DPS Sports Ground",
    category: "Infrastructure",
  },
  {
    id: 4,
    src: "/images/solutions/curriculum.jpg",
    alt: "Coach teaching structured curriculum to students",
    title: "Curriculum Delivery",
    category: "Coaches",
  },
  {
    id: 5,
    src: "/images/solutions/fitness.jpg",
    alt: "Students during fitness and conditioning training",
    title: "Fitness Training",
    category: "Events",
    span: "tall",
  },
  {
    id: 6,
    src: "/images/sports-insights-infrastructure.jpg",
    alt: "Modern sports infrastructure at partner school",
    title: "Upgraded Facilities",
    category: "Infrastructure",
    span: "wide",
  },
  {
    id: 7,
    src: "/images/problems/low-participation.jpg",
    alt: "Students enjoying organised team sports",
    title: "Team Sports Festival",
    category: "Events",
  },
  {
    id: 8,
    src: "/images/solutions/transformation.jpg",
    alt: "School transformation through sports programme",
    title: "School Transformation",
    category: "Schools",
  },
  {
    id: 9,
    src: "/images/hero-sports.jpg",
    alt: "Coach mentoring young athletes on the field",
    title: "Coach Mentorship",
    category: "Coaches",
    span: "wide",
  },
  {
    id: 10,
    src: "/images/Ground img.png",
    alt: "Newly constructed basketball court at school",
    title: "Basketball Court Setup",
    category: "Infrastructure",
  },
  {
    id: 11,
    src: "/images/solutions/multisport.jpg",
    alt: "Inter-school cricket championship",
    title: "Cricket Championship",
    category: "Events",
    span: "tall",
  },
  {
    id: 12,
    src: "/images/solutions/fitness.jpg",
    alt: "Students during morning assembly fitness drill",
    title: "Morning Fitness Drill",
    category: "Schools",
  },
  {
    id: 13,
    src: "/images/hero-sports.jpg",
    alt: "Annual sports day celebration at partner school",
    title: "Annual Sports Day",
    category: "Events",
    span: "wide",
  },
  {
    id: 14,
    src: "/images/solutions/curriculum.jpg",
    alt: "Certified coach conducting training workshop",
    title: "Coach Training Workshop",
    category: "Coaches",
  },
  {
    id: 15,
    src: "/images/sports-insights-infrastructure.jpg",
    alt: "Athletics track installed at school campus",
    title: "Athletics Track",
    category: "Infrastructure",
  },
  {
    id: 16,
    src: "/images/solutions/transformation.jpg",
    alt: "Students celebrating after winning competition",
    title: "Victory Celebration",
    category: "Schools",
  },
];

const CATEGORIES: Category[] = ["All", "Events", "Schools", "Infrastructure", "Coaches"];

const CATEGORY_ICONS: Record<Category, React.ComponentType<{ className?: string }>> = {
  All: ImageIcon,
  Events: Calendar,
  Schools: GraduationCap,
  Infrastructure: Building2,
  Coaches: Users,
};

const STATS = [
  { icon: Building2, value: "250+", label: "Schools Featured", color: "#165DFF" },
  { icon: Camera, value: "1,200+", label: "Photos Captured", color: "#0A1E4F" },
  { icon: Users, value: "75,000+", label: "Students Featured", color: "#3F7CFF" },
  { icon: Trophy, value: "80+", label: "Events Covered", color: "#165DFF" },
];

const FEATURED_ALBUMS = [
  {
    title: "Annual Sports Day",
    count: 24,
    image: "/images/hero-sports.jpg",
    color: "#165DFF",
  },
  {
    title: "Inter-School Championships",
    count: 18,
    image: "/images/solutions/multisport.jpg",
    color: "#0A1E4F",
  },
  {
    title: "Coach Training Programme",
    count: 12,
    image: "/images/solutions/curriculum.jpg",
    color: "#3F7CFF",
  },
];

/* ─── MAIN PAGE ─── */
export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredItems.length
    );
  }, [filteredItems.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* ═══════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-[#F0F4FF] via-white to-[#F8FAFF] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-28 left-[8%] w-40 h-40 opacity-[0.08]"
            style={{
              backgroundImage: "radial-gradient(#165DFF 1.2px, transparent 1.2px)",
              backgroundSize: "16px 16px",
            }}
          />
          <svg className="absolute top-1/3 right-[5%] w-56 h-56 text-[#165DFF]/[0.04] -rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
            <circle cx="50" cy="50" r="44" />
            <path d="M50 6 L50 20 M50 80 L50 94 M6 50 L20 50 M80 50 L94 50" />
            <path d="M50 6 C 64 20, 64 36, 50 50 C 36 64, 36 80, 50 94" />
            <path d="M6 50 C 20 36, 36 36, 50 50 C 64 64, 80 64, 94 50" />
          </svg>
          <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-[#165DFF]/[0.04] rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-28 w-[320px] h-[320px] bg-[#3F7CFF]/[0.03] rounded-full blur-3xl" />
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
                Our Gallery
              </h1>
              <h1
                className="absolute inset-0 text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold uppercase tracking-[0.1em] select-none pointer-events-none leading-none"
                style={{
                  WebkitTextStroke: "1.5px #165DFF",
                  color: "transparent",
                }}
              >
                Our Gallery
              </h1>
            </div>

            <h2 className="font-heading font-bold text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] text-[#0A1E4F] leading-snug mb-4">
              A Visual Journey Through Our Impact
            </h2>

            <p className="text-[0.85rem] sm:text-[0.95rem] text-[#6B7280] leading-relaxed max-w-2xl mx-auto">
              From grassroots training sessions to championship victories, explore the moments
              that define our mission to transform sports education across India.
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
                    <s.icon className="w-5 h-5 mb-3" style={{ color: s.color }} />
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
          CATEGORY FILTER + MASONRY GRID
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden">
        <div className="container py-16 md:py-24">
          {/* Filter pills */}
          <motion.div {...fade(0)} className="flex flex-wrap items-center justify-center gap-3 mb-12 md:mb-16">
            {CATEGORIES.map((cat) => {
              const Icon = CATEGORY_ICONS[cat];
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-semibold text-[13px] transition-all duration-300 ${
                    isActive
                      ? "bg-[#165DFF] text-white shadow-[0_8px_24px_-8px_rgba(22,93,255,0.45)]"
                      : "bg-[#F0F4FF] text-[#0A1E4F] hover:bg-[#165DFF]/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat}
                </button>
              );
            })}
          </motion.div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                  className={`break-inside-avoid ${
                    item.span === "tall" ? "" : ""
                  }`}
                >
                  <div
                    className="group relative overflow-hidden rounded-[16px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-16px_rgba(10,30,79,0.25)]"
                    onClick={() => openLightbox(i)}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        item.span === "tall"
                          ? "h-[360px] sm:h-[420px]"
                          : item.span === "wide"
                          ? "h-[220px] sm:h-[260px]"
                          : "h-[280px] sm:h-[320px]"
                      }`}
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E4F]/70 via-[#0A1E4F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5">
                      <span className="inline-block w-fit px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                        {item.category}
                      </span>
                      <p className="font-heading font-bold text-white text-[0.95rem] leading-snug">
                        {item.title}
                      </p>
                    </div>

                    {/* Corner camera icon */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Camera className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <ImageIcon className="w-12 h-12 text-[#165DFF]/20 mx-auto mb-4" />
              <p className="font-heading font-semibold text-[#6B7280]">
                No images in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FEATURED ALBUMS
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-[#F0F4FF] overflow-hidden">
        <div className="container py-16 md:py-24">
          <motion.div {...fade(0)} className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
            <span className="inline-block font-heading font-bold text-xs tracking-widest uppercase text-[#165DFF] mb-4">
              Featured Albums
            </span>
            <h2 className="font-heading font-extrabold text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] text-[#0A1E4F]">
              Explore Our Collections
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {FEATURED_ALBUMS.map((album, i) => (
              <motion.div key={album.title} {...fade(i * 0.08)}>
                <div className="group relative overflow-hidden rounded-[18px] cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-16px_rgba(10,30,79,0.2)]">
                  <img
                    src={album.image}
                    alt={album.title}
                    className="w-full h-[260px] sm:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E4F]/80 via-[#0A1E4F]/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-heading font-bold text-white text-[1.1rem] mb-1">
                          {album.title}
                        </p>
                        <p className="text-white/60 text-[0.8rem]">
                          {album.count} photos
                        </p>
                      </div>
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
                        style={{ background: `${album.color}40` }}
                      >
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
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
              Share Your School&apos;s
              <br />
              <span className="text-[#3F7CFF]">Proudest Moments.</span>
            </h2>

            <p className="text-white/70 text-[0.95rem] sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
              Have photos from your school&apos;s sports events, training sessions, or
              transformation stories? We&apos;d love to feature them in our gallery.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#3F7CFF] text-white font-heading font-bold text-[14px] px-8 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(63,124,255,0.5)]"
              >
                Submit Your Photos
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

      {/* ═══════════════════════════════════════════════════
          LIGHTBOX
      ═══════════════════════════════════════════════════ */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#0A1E4F]/95 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-[110] w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 sm:left-8 z-[110] w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 sm:right-8 z-[110] w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-[90vw] max-h-[80vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].alt}
                className="max-w-full max-h-[70vh] object-contain rounded-[8px] shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)]"
              />

              {/* Caption */}
              <div className="mt-4 text-center">
                <span className="inline-block px-2.5 py-1 rounded-full bg-white/10 text-white/60 text-[10px] font-bold uppercase tracking-wider mb-2">
                  {filteredItems[lightboxIndex].category}
                </span>
                <p className="font-heading font-bold text-white text-[1rem]">
                  {filteredItems[lightboxIndex].title}
                </p>
                <p className="text-white/40 text-[0.8rem] mt-1">
                  {lightboxIndex + 1} / {filteredItems.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
