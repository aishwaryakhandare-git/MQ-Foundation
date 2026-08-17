import { Link } from "wouter";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Logo from "./Logo";

const SOCIALS = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container">
        <div className="overflow-hidden rounded-t-[32px] sm:rounded-t-[44px] bg-gradient-to-br from-[#0A1E4F] via-[#0D3BB8] to-[#165DFF] relative">
          {/* Decorative */}
          <div className="absolute -top-24 -right-16 w-80 h-80 bg-[#3F7CFF]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-16 w-80 h-80 bg-[#F4B400]/12 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 px-6 py-14 sm:px-10 lg:px-14 lg:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
              {/* Brand */}
              <div className="lg:col-span-4">
                <Logo size={48} />
                <p className="text-white/65 text-sm leading-relaxed mt-5 max-w-xs">
                  Transforming grassroots sports education across schools in
                  India. Structured. Certified. Impactful.
                </p>
                <div className="flex gap-2.5 mt-6">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <s.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="lg:col-span-3">
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white/90 mb-5">
                  Explore
                </h4>
                <ul className="space-y-3">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/about", label: "About Foundation" },
                    { href: "/schools", label: "For Schools" },
                    { href: "/contact", label: "Contact Us" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-white/65 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="lg:col-span-3">
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white/90 mb-5">
                  Contact
                </h4>
                <ul className="space-y-3.5 text-white/65 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail size={16} className="mt-0.5 shrink-0 text-[#FFC94D]" />
                    <span>info@marcosquay.org</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone size={16} className="mt-0.5 shrink-0 text-[#4CD07F]" />
                    <span>+91 98765 43210</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-[#3F7CFF]" />
                    <span>New Delhi, India</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="lg:col-span-2">
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white/90 mb-5">
                  Get Started
                </h4>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#0D3BB8] font-heading font-bold text-sm px-5 py-3 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Book a Consult
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
              <p className="text-white/45 text-xs">
                &copy; {new Date().getFullYear()} Marcos Quay Foundation. All
                rights reserved.
              </p>
              <div className="flex gap-6">
                {["Privacy Policy", "Terms of Service", "CSR Information"].map(
                  (label) => (
                    <a
                      key={label}
                      href="#"
                      className="text-white/45 hover:text-white/70 text-xs transition-colors"
                    >
                      {label}
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
