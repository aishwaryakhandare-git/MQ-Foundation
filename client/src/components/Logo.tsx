import { cn } from "@/lib/utils";

/**
 * Marcos Quay Foundation — brand lockup.
 */
export default function Logo({
  className,
  dark = false,
  size = 40,
}: {
  className?: string;
  dark?: boolean;
  size?: number;
}) {
  return (
    <img
      src="/images/logo.png"
      alt="Marcos Quay Foundation"
      width={size * 1.78}
      height={size}
      className={cn("shrink-0 object-contain", className)}
      style={{ height: size, filter: dark ? "brightness(0) invert(1)" : undefined }}
    />
  );
}
