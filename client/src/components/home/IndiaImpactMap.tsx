import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import indiaStates from "@/data/india-states.json";

/**
 * India state map — path geometry source: @svg-maps/india (CC-BY-4.0, based on MapSVG).
 * https://github.com/VictorCazanave/svg-maps/tree/master/packages/india
 */
type State = {
  id: string;
  name: string;
  path: string;
};

const STATES = indiaStates as State[];

/* ── Deep royal blue — states where the organisation has an active presence ── */
const ACTIVE_IDS = new Set([
  "gj", "mh", "mp", "ka", "hp",
]);

const PRESENCE = "#0066B3";
const UPCOMING = "#D9E2EC";
const SELECTED = "#E31B23";
const PIN = "#165DFF";

const VB_W = 612;
const VB_H = 696;

const SHORT_NAMES: Record<string, string> = {
  "Andaman and Nicobar Islands": "Andaman & Nicobar",
  "Dadra and Nagar Haveli": "Dadra & Nagar Haveli",
  "Jammu and Kashmir": "Jammu & Kashmir",
};

function getShortName(name: string) {
  return SHORT_NAMES[name] ?? name;
}

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

const fade = (delay: number, from: "left" | "right") => ({
  initial: { opacity: 0, x: from === "left" ? -32 : 32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function IndiaImpactMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [centroids, setCentroids] = useState<Record<string, { x: number; y: number }>>({});
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  /* Compute state centroids from rendered geometry (viewBox units). */
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const next: Record<string, { x: number; y: number }> = {};
    svg.querySelectorAll("path[data-id]").forEach((node) => {
      const id = node.getAttribute("data-id");
      if (!id) return;
      const bbox = (node as SVGGraphicsElement).getBBox();
      next[id] = { x: bbox.x + bbox.width / 2, y: bbox.y + bbox.height / 2 };
    });
    setCentroids(next);
  }, []);

  const highlighted = hovered ?? selected;
  const centroid = highlighted ? centroids[highlighted] : undefined;

  /* Marker anchor in container percentages. */
  const px = centroid ? (centroid.x / VB_W) * 100 : 55;
  const py = centroid ? (centroid.y / VB_H) * 100 : 14;

  /* Floating card — anchored so its bottom-center sits just above the marker. */
  const CARD_W = 34;
  const CARD_H = 21;
  const cardLeft = clamp(px, 3 + CARD_W / 2, 97 - CARD_W / 2);
  const cardTop = clamp(py - 5, 3, 100 - CARD_H - 3);

  /* Connector line from card bottom-center to the marker, in viewBox units. */
  const x0 = (cardLeft / 100) * VB_W;
  const y0 = (cardTop / 100) * VB_H;
  const x1 = centroid?.x ?? (px / 100) * VB_W;
  const y1 = centroid?.y ?? (py / 100) * VB_H;
  const dx = x1 - x0;
  const dy = y1 - y0;
  const dist = Math.hypot(dx, dy) || 1;
  const sx = x1 - (dx / dist) * 14;
  const sy = y1 - (dy / dist) * 14;

  const highlightedName = STATES.find((s) => s.id === highlighted)?.name ?? "";
  const isActive = highlighted ? ACTIVE_IDS.has(highlighted) : false;

  return (
    <div className="relative">
      {/* ── Soft grey glow underneath the map ── */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-3 w-[82%] h-[26px] rounded-[50%] bg-[#94A3B8]/25 blur-2xl pointer-events-none" aria-hidden="true" />

      <div className="relative">
        {/* ── The map ── */}
        <svg ref={svgRef} viewBox={`0 0 ${VB_W} ${VB_H}`} className="w-full h-auto relative z-10" role="img" aria-label="Map of India with states">
          {STATES.map((s) => {
            const isHighlight = (hovered ?? selected) === s.id;
            const isActive = ACTIVE_IDS.has(s.id) && !isHighlight;
            return (
              <path
                key={s.id}
                data-id={s.id}
                d={s.path}
                onMouseEnter={() => setHovered(s.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(s.id === selected ? null : s.id)}
                className="cursor-pointer transition-[fill] duration-200"
                style={{
                  fill: isHighlight ? SELECTED : isActive ? PRESENCE : UPCOMING,
                  stroke: "#FFFFFF",
                  strokeWidth: 1,
                  strokeLinejoin: "round",
                }}
              />
            );
          })}
        </svg>

        {/* ── Overlay: pins + state names, and highlighted indicator ── */}
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="absolute inset-0 w-full h-full pointer-events-none z-20" aria-hidden="true">
{/* ── Pins + state names for states where we are present ── */}
          {STATES.map((s) => {
            if (!ACTIVE_IDS.has(s.id)) return null;
            const c = centroids[s.id];
            if (!c || s.id === highlighted) return null;
            const flip = c.x > 460;
            const labelX = flip ? c.x - 14 : c.x + 14;
            return (
              <g key={s.id}>
                {/* Pin */}
                <path
                  d="M 0 0 C 0 -6 -8 -10 -8 -16 A 8 8 0 1 1 8 -16 C 8 -10 0 -6 0 0 Z"
                  transform={`translate(${c.x}, ${c.y})`}
                  fill={PIN}
                  stroke="#FFFFFF"
                  strokeWidth={1.5}
                />
                <circle cx={c.x} cy={c.y - 16} r={3} fill="#FFFFFF" />

                {/* State name */}
                <text
                  x={labelX}
                  y={c.y - 16}
                  textAnchor={flip ? "end" : "start"}
                  dominantBaseline="middle"
                  className="font-heading"
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    fill: "#0A1E4F",
                    paintOrder: "stroke",
                    stroke: "#FFFFFF",
                    strokeWidth: 3,
                    strokeLinejoin: "round",
                  }}
                >
                  {getShortName(s.name)}
                </text>
              </g>
            );
          })}

            {/* ── Connector + circular location indicator for hovered/selected state ── */}
          {centroid && (
            <>
              <line
                x1={x0}
                y1={y0}
                x2={sx}
                y2={sy}
                stroke={SELECTED}
                strokeWidth={2}
                strokeLinecap="round"
              />
              <circle cx={x1} cy={y1} r={7} fill={SELECTED} stroke="#FFFFFF" strokeWidth={3} />
              <circle cx={x1} cy={y1} r={13} fill="none" stroke={SELECTED} strokeOpacity={0.25} strokeWidth={2} />
            </>
          )}
        </svg>

        {/* ── Floating white information card ── */}
        {highlighted && (
          <div
            className="absolute z-30 w-[190px] bg-white rounded-xl px-4 py-3 border border-[#E7EBF3] shadow-[0_18px_40px_-18px_rgba(15,40,80,0.35)]"
            style={{
              left: `${cardLeft}%`,
              top: `${cardTop}%`,
              transform: "translate(-50%, -100%)",
            }}
          >
            <p className="font-heading font-extrabold text-[15px] leading-tight text-[#0A1E4F]">
              {getShortName(highlightedName)}
            </p>
            <p className="mt-1.5 text-[11.5px] leading-[1.5] text-[#6B7280] font-medium">
              {isActive
                ? "Our programme is active here — certified coaches, NEP-aligned curricula and growing schools."
                : "Our program is launching here soon — check back to watch the impact grow."}
            </p>
          </div>
        )}
      </div>

      {/* ── Minimal horizontal legend ── */}
      <div className="relative z-10 mt-4 flex items-center gap-5 sm:gap-6 justify-center lg:justify-end lg:absolute lg:top-[86%] lg:right-0 lg:mt-0 text-[11px] font-bold text-[#0A1E4F]">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: PRESENCE }} />
          Our Presence
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: UPCOMING }} />
          Upcoming
        </span>
      </div>
    </div>
  );
}