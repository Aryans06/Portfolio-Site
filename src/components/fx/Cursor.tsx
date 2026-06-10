"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import useMediaQuery from "./useMediaQuery";

type Variant = "default" | "hover" | "view";

export default function Cursor() {
  const finePointer = useMediaQuery("(pointer: fine)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const enabled = finePointer && !reducedMotion;

  const [variant, setVariant] = useState<Variant>("default");
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("custom-cursor");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button, [data-cursor]");
      if (!target) {
        setVariant("default");
      } else if ((target as HTMLElement).dataset.cursor === "view") {
        setVariant("view");
      } else {
        setVariant("hover");
      }
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      document.body.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const ringSize = variant === "view" ? 84 : variant === "hover" ? 44 : 28;

  return (
    <>
      {/* Centre dot — tracks instantly */}
      <motion.div
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x,
          y,
          zIndex: 10000,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            backgroundColor: "var(--accent)",
            transform: "translate(-50%, -50%)",
            opacity: variant === "view" ? 0 : 1,
            transition: "opacity 0.2s",
          }}
        />
      </motion.div>

      {/* Trailing ring — morphs over targets */}
      <motion.div
        aria-hidden
        animate={{ scale: pressed ? 0.85 : 1 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: ringX,
          y: ringY,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        <motion.div
          animate={{
            width: ringSize,
            height: ringSize,
            marginLeft: -ringSize / 2,
            marginTop: -ringSize / 2,
            backgroundColor:
              variant === "view" ? "var(--accent)" : "rgba(201, 78, 42, 0)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          style={{
            borderRadius: "50%",
            border: "1px solid var(--accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <motion.span
            animate={{
              opacity: variant === "view" ? 1 : 0,
              scale: variant === "view" ? 1 : 0.5,
            }}
            transition={{ duration: 0.2 }}
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.55rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--cream)",
              whiteSpace: "nowrap",
            }}
          >
            View ↗
          </motion.span>
        </motion.div>
      </motion.div>
    </>
  );
}
