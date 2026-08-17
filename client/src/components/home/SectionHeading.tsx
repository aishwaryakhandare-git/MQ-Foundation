import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

/**
 * SectionHeading — centered eyebrow + title + supporting copy.
 */
export default function SectionHeading({
  eyebrow,
  eyebrowClass,
  title,
  children,
  align = "center",
  className,
}: {
  eyebrow?: string;
  eyebrowClass?: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow mb-4",
            align === "center" && "justify-center",
            eyebrowClass,
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="heading-2 text-[#0A1E4F]">{title}</h2>
      {children && <p className="body-lg mt-5">{children}</p>}
    </Reveal>
  );
}
