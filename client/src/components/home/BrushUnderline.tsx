import { motion } from "framer-motion";

type BrushUnderlineProps = {
  small?: boolean;
};

export default function BrushUnderline({ small = false }: BrushUnderlineProps) {
  if (small) {
    return (
      <>
        <motion.img
          src="/images/realistic-paintbrush.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute z-20 w-[30px] h-[30px] object-contain"
          style={{
            bottom: "-12px",
            transform: "rotate(-25deg)",
            transformOrigin: "80% 80%",
          }}
          initial={{
            left: "-10%",
            opacity: 0,
          }}
          whileInView={{
            left: "92%",
            opacity: [0, 1, 1, 0],
          }}
          viewport={{
            once: true,
            margin: "-60px",
          }}
          transition={{
            left: {
              duration: 0.9,
              ease: "easeInOut",
            },
            opacity: {
              duration: 1.4,
              times: [0, 0.1, 0.72, 1],
            },
          }}
        />

        <motion.div
          className="pointer-events-none absolute -bottom-2.5 left-0 w-full h-[18px] -rotate-1 z-0"
          initial={{
            clipPath: "inset(0 100% 0 0)",
          }}
          whileInView={{
            clipPath: "inset(0 0% 0 0)",
          }}
          viewport={{
            once: true,
            margin: "-60px",
          }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
        >
          <img
            src="/images/blue-dry-brush.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-fill"
          />
        </motion.div>
      </>
    );
  }

  return (
    <>
      <motion.img
        src="/images/realistic-paintbrush.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute z-20 w-[58px] h-[58px] object-contain"
        style={{
          bottom: "-22px",
          transform: "rotate(-25deg)",
          transformOrigin: "80% 80%",
        }}
        initial={{
          left: "-10%",
          opacity: 0,
        }}
        whileInView={{
          left: "92%",
          opacity: [0, 1, 1, 0],
        }}
        viewport={{
          once: true,
          margin: "-60px",
        }}
        transition={{
          left: {
            duration: 0.9,
            ease: "easeInOut",
          },
          opacity: {
            duration: 1.4,
            times: [0, 0.1, 0.72, 1],
          },
        }}
      />

      <motion.div
        className="pointer-events-none absolute -bottom-5 left-0 w-full h-[32px] -rotate-1 z-0"
        initial={{
          clipPath: "inset(0 100% 0 0)",
        }}
        whileInView={{
          clipPath: "inset(0 0% 0 0)",
        }}
        viewport={{
          once: true,
          margin: "-60px",
        }}
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
      >
        <img
          src="/images/blue-dry-brush.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-fill"
        />
      </motion.div>
    </>
  );
}