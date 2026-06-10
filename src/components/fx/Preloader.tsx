"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);
  const progress = useMotionValue(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    const controls = animate(progress, 100, {
      duration: 1,
      ease: "easeInOut",
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => setDone(true),
    });
    return () => {
      controls.stop();
      document.body.style.overflow = "";
    };
  }, [progress]);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10001,
            backgroundColor: "var(--cream)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(48px, 8vw, 96px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              lineHeight: 1,
            }}
          >
            AJ<span style={{ color: "var(--accent)" }}>.</span>
          </motion.div>

          {/* Progress line */}
          <div
            style={{
              width: "min(220px, 50vw)",
              height: 1,
              backgroundColor: "var(--border)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "var(--accent)",
                transformOrigin: "left",
                scaleX: count / 100,
              }}
            />
          </div>

          <span
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              color: "var(--text-muted)",
            }}
          >
            {String(count).padStart(3, "0")} %
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
