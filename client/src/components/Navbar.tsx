import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/schools", label: "Schools" },
  { href: "/impact", label: "Impact" },
  { href: "/csr", label: "CSR" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled
          ? "bg-white border-b border-[#E7EBF3] shadow-[0_10px_40px_-18px_rgba(10,30,79,0.18)]"
          : "bg-white border-b border-transparent",
      )}
    >
      <div className="container flex items-center justify-between h-[76px] lg:h-20">
        {/* Logo */}
        <Link href="/" className="shrink-0" aria-label="Marcos Quay Foundation — Home">
          <Logo size={68} />
        </Link>

        {/* Desktop nav — center */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative font-heading font-semibold text-[14px] transition-colors duration-300 py-2",
                isActive(link.href)
                  ? "text-[#FF6B35]"
                  : "text-[#0A1E4F] hover:text-[#FF6B35]",
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 -bottom-0.5 h-[2.5px] w-full rounded-full bg-gradient-to-r from-[#FF6B35] to-[#F4B400]"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/schools"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-heading font-bold text-[13.5px] px-6 py-3 shadow-[0_14px_30px_-12px_rgba(255,107,53,0.55)] transition-all duration-300 hover:shadow-[0_18px_40px_-12px_rgba(255,107,53,0.65)] hover:-translate-y-0.5"
          >
            Book a Free School Assessment
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-xl text-[#0A1E4F] hover:bg-[#FFF9E9] transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-[#E7EBF3] shadow-2xl"
          >
            <nav className="container py-5 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-xl px-4 py-3 font-heading font-semibold text-[15px] transition-colors",
                    isActive(link.href)
                      ? "bg-[#FFF9E9] text-[#FF6B35]"
                      : "text-[#0A1E4F] hover:bg-[#FFF9E9]/50",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4 px-1">
                <Link
                  href="/schools"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-heading font-bold text-sm px-5 py-3 shadow-lg"
                >
                  Book a Free School Assessment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
