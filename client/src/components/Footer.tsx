import { Link } from "wouter";
import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  ArrowUpRight,
} from "lucide-react";
import Logo from "./Logo";

const SOCIALS = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "X / Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container">
        <div
          className="
            relative
            overflow-hidden
            rounded-t-[28px] sm:rounded-t-[36px]
            bg-[#0A1E4F]
          "
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/footer-bg.png')",
            }}
          />

          {/* Readability overlay */}
          <div className="absolute inset-0 bg-[#071A35]/50" />

          {/* Subtle glow */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#165DFF]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 px-6 py-4 sm:px-10 sm:py-5 lg:px-14 lg:py-6">
            {/* Tagline + Socials */}
            <div className="max-w-3xl">
              <p className="text-[16px] sm:text-[18px] leading-[1.7] text-white/85 font-medium">
                Join us in building a more inclusive, healthy and
                opportunity-rich world through sport.
              </p>

              <div className="flex gap-3 mt-6">
                {SOCIALS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href="#"
                      aria-label={social.label}
                      className="
                        w-10 h-10
                        rounded-full
                        bg-white/10 hover:bg-[#E31B23]
                        flex items-center justify-center
                        text-white/80 hover:text-white
                        transition-all duration-300
                        hover:-translate-y-1
                      "
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mt-4">
              {/* Quick Links */}
              <div className="lg:col-span-2">
                <h4 className="font-heading font-bold text-[17px] text-white mb-5">
                  Quick Links
                </h4>

                <ul className="space-y-3">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/about", label: "About Us" },
                    { href: "/schools", label: "Our Partners" },
                    { href: "/contact", label: "Contact" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="
                          text-[14px] font-medium
                          text-white/75 hover:text-white
                          transition-colors
                        "
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="lg:col-span-5">
                <h4 className="font-heading font-bold text-[17px] text-white mb-5">
                  Contact
                </h4>

                <div className="space-y-3 text-[14px] text-white/75">
                  <p className="leading-[1.6]">
                    +91 75068 43435
                  </p>

                  <p className="leading-[1.6]">
                    www.marcosquay.org
                  </p>

                  <p className="leading-[1.7]">
                    Head Office &amp; Registered Office
                    <br />
                    3rd Floor, 24, N S Rd No. 9, 
                    <br />
                    Nutan Laxmi Society, JVPD Scheme, 
                    <br />
                    Vile Parle West, Mumbai 400049
                    
                  </p>
                </div>
              </div>

              {/* Get in Touch */}
<div className="lg:col-span-5">
  <div
    className="
      rounded-[20px]
      bg-white
      px-6 py-6
      sm:px-7 sm:py-7
      shadow-[0_20px_50px_-25px_rgba(0,0,0,0.35)]
    "
  >
    {/* Heading */}
    <h4 className="font-heading font-extrabold text-[20px] text-[#0A1E4F]">
      Get in Touch
    </h4>

    <p className="mt-2 max-w-sm text-[13.5px] leading-[1.55] text-[#6B7280]">
      Fill out the form below and our team will reach out to you shortly.
    </p>

    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-5"
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Full Name"
          className="
            h-[46px]
            w-full
            rounded-full
            border border-[#D9DFEA]
            bg-white
            px-5
            text-[14px]
            text-[#0A1E4F]
            placeholder:text-[#9CA3AF]
            outline-none
            transition-all duration-200
            focus:border-[#165DFF]
            focus:ring-4 focus:ring-[#165DFF]/10
          "
        />

        <input
          type="email"
          placeholder="Email"
          className="
            h-[46px]
            w-full
            rounded-full
            border border-[#D9DFEA]
            bg-white
            px-5
            text-[14px]
            text-[#0A1E4F]
            placeholder:text-[#9CA3AF]
            outline-none
            transition-all duration-200
            focus:border-[#165DFF]
            focus:ring-4 focus:ring-[#165DFF]/10
          "
        />
      </div>

      {/* Message */}
      <textarea
        placeholder="Message"
        rows={4}
        className="
          mt-3
          w-full
          rounded-[16px]
          border border-[#D9DFEA]
          bg-white
          px-5 py-3.5
          text-[14px]
          leading-relaxed
          text-[#0A1E4F]
          placeholder:text-[#9CA3AF]
          outline-none
          resize-none
          transition-all duration-200
          focus:border-[#165DFF]
          focus:ring-4 focus:ring-[#165DFF]/10
        "
      />

      {/* Submit */}
      <div className="mt-4 flex items-center justify-between gap-4">
        <span className="hidden sm:block text-[11px] text-[#9CA3AF]">
          We respect your privacy.
        </span>

        <Link
          href="/contact"
          className="
            inline-flex
            items-center
            justify-center
            rounded-full
            bg-[#E31B23]
            px-7
            py-2.5
            text-[13px]
            font-heading
            font-bold
            text-white
            shadow-[0_8px_20px_-8px_rgba(227,27,35,0.5)]
            transition-all duration-300
            hover:bg-[#c8171f]
            hover:-translate-y-0.5
            hover:shadow-[0_12px_24px_-8px_rgba(227,27,35,0.6)]
          "
        >
          Send Message
        </Link>
      </div>
    </form>
  </div>
</div>
            </div>

            {/* Bottom bar */}
            <div
              className="
                mt-5 pt-3
                border-t border-white/15
                flex flex-col
                md:flex-row
                items-center
                justify-between
                gap-3
              "
            >
              <p className="text-[11px] text-white/55 text-center md:text-left">
                © 2026 Marcos Quay . All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
