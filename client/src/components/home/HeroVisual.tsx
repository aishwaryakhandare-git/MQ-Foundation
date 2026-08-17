import { Check, Trophy, Volleyball } from "lucide-react";
import Counter from "./Counter";

const AVATARS = [
  { initials: "AK", bg: "linear-gradient(135deg,#165DFF,#3F7CFF)" },
  { initials: "RS", bg: "linear-gradient(135deg,#27AE60,#4CD07F)" },
  { initials: "PM", bg: "linear-gradient(135deg,#F4B400,#FFC94D)" },
  { initials: "SD", bg: "linear-gradient(135deg,#8B5CF6,#A78BFA)" },
];

/**
 * HeroVisual — illustrated playground scene of Indian school children
 * playing football, basketball and cricket, with floating stat cards.
 */
export default function HeroVisual() {
  return (
    <div className="relative">
      {/* Soft glow behind the visual */}
      <div className="absolute -inset-6 z-0 bg-gradient-to-br from-[#165DFF]/15 via-[#F4B400]/10 to-transparent blur-2xl rounded-[40px]" />

      {/* Main illustration card */}
      <div className="relative z-10 overflow-hidden rounded-[24px] sm:rounded-[32px] shadow-soft bg-[#EEF5FF]">
        {/* Curved clipping hint — organic top-right corner */}
        <div className="absolute top-0 right-0 h-28 w-28 rounded-bl-[64px] bg-[#165DFF]/[0.06] pointer-events-none" />

        <svg
          viewBox="0 0 640 560"
          className="w-full h-auto block"
          role="img"
          aria-label="Illustration of Indian school children playing football, basketball and cricket"
        >
          <defs>
            <linearGradient id="mqf-scene-bg" x1="0" y1="0" x2="640" y2="560" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#D9E8FF" />
              <stop offset="0.5" stopColor="#F3F8FF" />
              <stop offset="1" stopColor="#FFF6DA" />
            </linearGradient>
            <linearGradient id="mqf-ground" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#DDF3E6" />
              <stop offset="1" stopColor="#C6E9D4" />
            </linearGradient>
            <linearGradient id="mqf-sun" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#FFDF7A" />
              <stop offset="1" stopColor="#F4B400" />
            </linearGradient>
            <filter id="mqf-blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="34" />
            </filter>
            <filter id="mqf-shadow" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#0A1E4F" floodOpacity="0.14" />
            </filter>
          </defs>

          {/* Background */}
          <rect width="640" height="560" fill="url(#mqf-scene-bg)" />
          <circle cx="512" cy="150" r="230" fill="#BBD4FF" opacity="0.4" filter="url(#mqf-blur)" />

          {/* Sun + rays */}
          <g stroke="#F4B400" strokeWidth="5" strokeLinecap="round" opacity="0.45">
            <line x1="520" y1="34" x2="520" y2="58" />
            <line x1="458" y1="96" x2="476" y2="108" />
            <line x1="582" y1="96" x2="564" y2="108" />
            <line x1="438" y1="150" x2="458" y2="158" />
            <line x1="602" y1="150" x2="582" y2="158" />
          </g>
          <circle cx="520" cy="128" r="76" fill="#F4B400" opacity="0.18" />
          <circle cx="520" cy="128" r="50" fill="url(#mqf-sun)" />

          {/* Clouds */}
          <g transform="translate(56,64)" opacity="0.9">
            <circle cx="22" cy="24" r="17" fill="#fff" />
            <circle cx="48" cy="15" r="25" fill="#fff" />
            <circle cx="76" cy="24" r="17" fill="#fff" />
            <rect x="12" y="24" width="74" height="20" rx="10" fill="#fff" />
          </g>
          <g transform="translate(148,118)" opacity="0.55">
            <circle cx="20" cy="20" r="13" fill="#fff" />
            <circle cx="40" cy="13" r="19" fill="#fff" />
            <circle cx="62" cy="20" r="13" fill="#fff" />
            <rect x="10" y="20" width="62" height="16" rx="8" fill="#fff" />
          </g>

          {/* Ground */}
          <ellipse cx="330" cy="575" rx="520" ry="210" fill="url(#mqf-ground)" />
          <ellipse cx="330" cy="575" rx="520" ry="210" fill="none" stroke="#B4E0C7" strokeWidth="3" opacity="0.6" />

          {/* Grass tufts */}
          <g stroke="#9FDBB6" strokeWidth="3.4" strokeLinecap="round" fill="none">
            <path d="M118 442 q0 -11 4 -15 M118 442 q7 -7 11 -9" />
            <path d="M336 446 q0 -10 4 -14 M336 446 q7 -7 10 -9" />
            <path d="M470 448 q0 -10 4 -14 M470 448 q7 -7 10 -9" />
            <path d="M588 444 q0 -9 4 -12 M588 444 q6 -6 9 -8" />
          </g>

          {/* Football goal (left) */}
          <g transform="translate(70,0)">
            <path
              d="M40 430 V248 M80 430 V248 M120 430 V248 M160 430 V248 M40 248 H160 M40 290 H160 M40 332 H160 M40 374 H160 M40 416 H160"
              stroke="#E7EFFD"
              strokeWidth="4"
              opacity="0.9"
            />
            <rect x="37" y="238" width="8" height="192" rx="4" fill="#fff" filter="url(#mqf-shadow)" />
            <rect x="155" y="238" width="8" height="192" rx="4" fill="#fff" filter="url(#mqf-shadow)" />
            <rect x="34" y="230" width="132" height="10" rx="5" fill="#fff" filter="url(#mqf-shadow)" />
          </g>

          {/* Cricket wicket (back centre) */}
          <g transform="translate(368,416)">
            <rect x="-17" y="-26" width="3.4" height="26" rx="1.7" fill="#D9B48C" />
            <rect x="-3.4" y="-24" width="3.4" height="24" rx="1.7" fill="#D9B48C" />
            <rect x="10" y="-22" width="3.4" height="22" rx="1.7" fill="#D9B48C" />
            <rect x="-18" y="-30" width="33" height="5.4" rx="2.7" fill="#C7A070" />
          </g>

          {/* Basketball hoop (right) */}
          <g transform="translate(500,0)">
            <rect x="5" y="252" width="10" height="180" rx="5" fill="#fff" filter="url(#mqf-shadow)" />
            <rect x="-13" y="216" width="104" height="68" rx="9" fill="#fff" stroke="#D7E3F9" strokeWidth="3" />
            <rect x="16" y="284" width="60" height="8" rx="4" fill="#FF6B35" />
            <path
              d="M22 291 L13 336 M36 293 L29 337 M50 293 L50 339 M64 293 L71 337 M78 291 L87 336"
              stroke="#D7E3F9"
              strokeWidth="3.4"
              fill="none"
            />
          </g>

          {/* Flying basketball */}
          <g transform="translate(452,240)">
            <circle r="16" fill="#FF8A3D" />
            <path d="M-11 -12 Q0 2 11 -12 M-11 12 Q0 -2 11 12" stroke="#C65B1C" strokeWidth="2.4" fill="none" />
            <circle cy="0" r="2.6" fill="#C65B1C" />
          </g>

          {/* Kicker — football (blue jersey) */}
          <g transform="translate(196,436)">
            <ellipse cx="8" cy="3" rx="62" ry="14" fill="#0A1E4F" opacity="0.1" />
            <line x1="-4" y1="-62" x2="-15" y2="-8" stroke="#E8A87C" strokeWidth="13" strokeLinecap="round" />
            <line x1="10" y1="-62" x2="56" y2="-24" stroke="#E8A87C" strokeWidth="13" strokeLinecap="round" />
            <line x1="-15" y1="-8" x2="-27" y2="-3" stroke="#0A1E4F" strokeWidth="17" strokeLinecap="round" />
            <line x1="56" y1="-24" x2="73" y2="-17" stroke="#FFFFFF" strokeWidth="17" strokeLinecap="round" />
            <path d="M-16 -80 Q6 -92 28 -78 L24 -58 Q6 -52 -12 -58 Z" fill="#0D3BB8" />
            <path d="M-20 -128 Q4 -144 26 -128 L22 -76 Q2 -66 -16 -76 Z" fill="#165DFF" filter="url(#mqf-shadow)" />
            <line x1="-17" y1="-118" x2="-32" y2="-84" stroke="#D2915C" strokeWidth="11" strokeLinecap="round" />
            <line x1="23" y1="-120" x2="40" y2="-82" stroke="#E8A87C" strokeWidth="11" strokeLinecap="round" />
            <circle cx="3" cy="-152" r="27" fill="#E8A87C" />
            <path d="M-25 -158 Q-20 -180 4 -183 Q31 -178 32 -154 Q8 -166 -8 -160 Z" fill="#33293B" />
            <circle cx="-5" cy="-154" r="2.4" fill="#1F2733" />
            <circle cx="13" cy="-154" r="2.4" fill="#1F2733" />
            <path d="M-2 -145 Q5 -141 12 -145" stroke="#1F2733" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          </g>

          {/* Football on the ground */}
          <g transform="translate(282,414)">
            <circle r="15" fill="#FFFFFF" stroke="#1F2733" strokeWidth="1.6" />
            <circle r="5.2" fill="#1F2733" />
            <path
              d="M-11 -11 Q-4 -15 4 -13 M-11 11 Q-4 15 4 13 M-11 -11 Q-15 0 -11 11 M4 -13 Q15 0 4 13"
              stroke="#1F2733"
              strokeWidth="1.4"
              fill="none"
            />
          </g>

          {/* Shooter — basketball (green jersey, jumping) */}
          <g transform="translate(408,398)">
            <ellipse cx="6" cy="10" rx="46" ry="12" fill="#0A1E4F" opacity="0.1" />
            <line x1="4" y1="-60" x2="-14" y2="-14" stroke="#D2915C" strokeWidth="13" strokeLinecap="round" />
            <line x1="7" y1="-60" x2="21" y2="-16" stroke="#E8A87C" strokeWidth="13" strokeLinecap="round" />
            <line x1="-14" y1="-14" x2="-26" y2="-8" stroke="#FFFFFF" strokeWidth="17" strokeLinecap="round" />
            <line x1="21" y1="-16" x2="33" y2="-10" stroke="#FFFFFF" strokeWidth="17" strokeLinecap="round" />
            <path d="M-10 -78 Q6 -88 22 -76 L18 -58 Q6 -52 -6 -58 Z" fill="#1B7F44" />
            <path d="M-18 -126 Q4 -142 24 -126 L20 -76 Q4 -66 -14 -76 Z" fill="#27AE60" filter="url(#mqf-shadow)" />
            <line x1="-15" y1="-114" x2="-29" y2="-144" stroke="#E8A87C" strokeWidth="11" strokeLinecap="round" />
            <line x1="23" y1="-116" x2="35" y2="-150" stroke="#E8A87C" strokeWidth="11" strokeLinecap="round" />
            <circle cx="-29" cy="-144" r="6.5" fill="#E8A87C" />
            <circle cx="35" cy="-150" r="6.5" fill="#E8A87C" />
            <circle cx="3" cy="-152" r="26" fill="#E8A87C" />
            <path d="M-24 -158 Q-20 -178 3 -181 Q28 -176 29 -154 Q8 -164 -6 -160 Z" fill="#4A3428" />
            <circle cx="-5" cy="-154" r="2.4" fill="#1F2733" />
            <circle cx="13" cy="-154" r="2.4" fill="#1F2733" />
            <path d="M-2 -145 Q5 -141 12 -145" stroke="#1F2733" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          </g>

          {/* Cricketer — running with bat (yellow jersey, back) */}
          <g transform="translate(322,372) scale(0.8)">
            <ellipse cx="6" cy="6" rx="48" ry="12" fill="#0A1E4F" opacity="0.08" />
            <line x1="2" y1="-58" x2="24" y2="-10" stroke="#C98A5E" strokeWidth="12" strokeLinecap="round" />
            <line x1="4" y1="-58" x2="-16" y2="-12" stroke="#C98A5E" strokeWidth="12" strokeLinecap="round" />
            <line x1="24" y1="-10" x2="34" y2="-4" stroke="#FFFFFF" strokeWidth="15" strokeLinecap="round" />
            <line x1="-16" y1="-12" x2="-26" y2="-6" stroke="#FFFFFF" strokeWidth="15" strokeLinecap="round" />
            <path d="M-8 -76 Q4 -86 18 -74 L16 -56 Q4 -50 -6 -56 Z" fill="#B89000" />
            <path d="M-16 -122 Q4 -136 22 -122 L18 -74 Q4 -66 -12 -74 Z" fill="#F4B400" filter="url(#mqf-shadow)" />
            {/* Cricket bat held down beside the kid */}
            <line x1="-13" y1="-112" x2="-32" y2="-96" stroke="#C98A5E" strokeWidth="10" strokeLinecap="round" />
            <line x1="-32" y1="-96" x2="-32" y2="-44" stroke="#8A5A2B" strokeWidth="7" strokeLinecap="round" />
            <rect x="-41" y="-44" width="18" height="32" rx="8.5" fill="#E7B87E" />
            <line x1="20" y1="-114" x2="30" y2="-80" stroke="#C98A5E" strokeWidth="10" strokeLinecap="round" />
            <circle cx="3" cy="-150" r="25" fill="#C98A5E" />
            <path d="M-23 -155 Q-18 -175 3 -178 Q26 -173 27 -152 Q8 -162 -6 -157 Z" fill="#1F2733" />
            <circle cx="-5" cy="-152" r="2.2" fill="#1F2733" />
            <circle cx="12" cy="-152" r="2.2" fill="#1F2733" />
          </g>
        </svg>

        {/* ── Floating: Active Students stat card ── */}
        <div className="absolute left-3 bottom-3 sm:left-6 sm:bottom-6 z-20 glass rounded-2xl sm:rounded-[20px] px-4 py-3.5 sm:px-5 sm:py-4 shadow-card animate-float w-max max-w-[250px]">
          <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B7280]">
            Creating Real Impact
          </p>
          <p className="heading-3 text-[#165DFF] mt-1 font-extrabold">
            <Counter to={125000} suffix="+" />
          </p>
          <p className="text-[11px] sm:text-xs text-[#6B7280] font-semibold">Active Students</p>
          <div className="mt-2.5 flex items-center gap-2.5">
            <div className="flex -space-x-2">
              {AVATARS.map((a) => (
                <span
                  key={a.initials}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full ring-2 ring-white flex items-center justify-center text-[8px] sm:text-[9px] font-bold text-white"
                  style={{ background: a.bg }}
                >
                  {a.initials}
                </span>
              ))}
            </div>
            <span className="text-[10px] sm:text-[11px] text-[#6B7280] font-semibold">
              From 450+ schools
            </span>
          </div>
        </div>

        {/* ── Floating: Partner schools badge ── */}
        <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 glass rounded-full pl-2 pr-3.5 sm:pr-4 py-2 shadow-card animate-float-delayed flex items-center gap-2.5">
          <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#FFF9E9] to-[#FFEFC2] flex items-center justify-center">
            <Trophy className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#E89200]" strokeWidth={2.2} />
          </span>
          <span className="leading-tight">
            <span className="block text-sm sm:text-[15px] font-extrabold text-[#0A1E4F] leading-none">450+</span>
            <span className="block text-[10px] sm:text-[11px] text-[#6B7280] font-semibold">Partner Schools</span>
          </span>
        </div>

        {/* ── Floating: verified chip ── */}
        <div className="absolute top-24 right-3 sm:top-28 sm:right-8 z-20 hidden sm:flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-3.5 py-2 shadow-card animate-float-slow">
          <span className="w-5 h-5 rounded-full bg-[#F5FBF7] flex items-center justify-center">
            <Check className="w-3 h-3 text-[#27AE60]" strokeWidth={3} />
          </span>
          <span className="text-xs font-bold text-[#1A2333]">100% Verified Coaches</span>
        </div>

        {/* ── Floating sports icons ── */}
        <div className="absolute bottom-16 right-4 sm:bottom-20 sm:right-10 z-10 hidden md:flex w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/80 backdrop-blur items-center justify-center shadow-card animate-bounce-soft">
          <Volleyball className="w-5 h-5 text-[#165DFF]" />
        </div>
      </div>
    </div>
  );
}
