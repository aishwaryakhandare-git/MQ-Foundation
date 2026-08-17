import { Link } from "wouter";
import { ArrowRight, Download } from "lucide-react";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <section className="bg-white pb-16 sm:pb-24">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] bg-gradient-to-br from-[#0A1E4F] via-[#0D3BB8] to-[#165DFF] px-6 py-14 sm:px-12 sm:py-20 text-center shadow-soft">
            {/* Decorative */}
            <div className="absolute -top-28 -left-20 w-96 h-96 bg-[#3F7CFF]/35 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-16 w-96 h-96 bg-[#F4B400]/18 rounded-full blur-3xl pointer-events-none" />
            <svg
              className="absolute bottom-8 left-10 w-32 h-32 text-white/10 pointer-events-none animate-spin-slow"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2" strokeDasharray="5 12" />
            </svg>

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-[#FFC94D] font-heading font-bold text-[12px] sm:text-[13px] uppercase tracking-wider">
                Take the first step
              </span>
              <h2 className="heading-2 text-white mt-6">
                Let&apos;s Build a Sporting School Together
              </h2>
              <p className="mt-5 text-white/75 text-base sm:text-lg leading-relaxed">
                Join 450+ schools across India already delivering structured,
                impactful sports education with Marcos Quay Foundation.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white text-[#0D3BB8] font-heading font-bold px-8 py-4 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  Book Consultation
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/schools"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 text-white font-heading font-bold px-8 py-4 transition-all duration-300 hover:bg-white/10 hover:border-white"
                >
                  <Download className="w-5 h-5" />
                  Download Brochure
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
