/**
 * WaveDivider — a flowing curve that visually connects two sections.
 * Place between sections to create smooth editorial transitions.
 */
export default function WaveDivider({
  className = "",
  fill = "#ffffff",
  flip = false,
}: {
  className?: string;
  fill?: string;
  flip?: boolean;
}) {
  return (
    <div className={`relative -mt-1 -mb-1 w-full overflow-hidden leading-[0] ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className={`block w-full h-8 sm:h-10 lg:h-12 ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0 64 C 240 20, 480 84, 720 56 C 960 28, 1200 76, 1440 40 L 1440 90 L 0 90 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
