"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Magnetic from "@/components/fx/Magnetic";

const EASE = [0.22, 1, 0.36, 1] as const;

// Delay the entrance until the preloader curtain starts lifting
const BASE = 1.15;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: BASE + delay, ease: EASE },
});

function SplitChars({
  text,
  delay,
  italic = false,
  accent = false,
}: {
  text: string;
  delay: number;
  italic?: boolean;
  accent?: boolean;
}) {
  return (
    <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom",
            paddingBottom: "0.1em",
            marginBottom: "-0.1em",
          }}
        >
          <motion.span
            initial={{ y: "115%", rotate: 6 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.045, ease: EASE }}
            style={{
              display: "inline-block",
              transformOrigin: "bottom left",
              ...(italic ? { fontStyle: "italic" } : {}),
              ...(accent ? { color: "var(--accent)" } : {}),
            }}
          >
            {char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll parallax — the giant ARYAN sinks and fades as you scroll past
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // Mouse parallax — the background text drifts gently toward the cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const driftX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-24, 24]), {
    stiffness: 50,
    damping: 20,
  });
  const driftY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-14, 14]), {
    stiffness: 50,
    damping: 20,
  });

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMouseMove}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 40px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Large background text — double parallax (scroll + mouse) */}
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          y: bgY,
          scale: bgScale,
          opacity: bgOpacity,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            transform: "translateY(-50%)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: BASE + 0.3 }}
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(80px, 18vw, 280px)",
              fontWeight: 700,
              color: "transparent",
              WebkitTextStroke: "2px #C8BFB2",
              letterSpacing: "-0.04em",
              whiteSpace: "nowrap",
              userSelect: "none",
              lineHeight: 1,
            }}
          >
            <motion.span
              style={{ x: driftX, y: driftY, display: "inline-block" }}
            >
              ARYAN
            </motion.span>
          </motion.div>
        </div>
      </motion.div>

      {/* Top-right status chip */}
      <motion.div
        {...fadeUp(0.2)}
        style={{
          position: "absolute",
          top: "120px",
          right: "40px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <motion.span
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#4CAF50",
            display: "inline-block",
            boxShadow: "0 0 0 3px rgba(76,175,80,0.2)",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          Open to opportunities
        </span>
      </motion.div>

      {/* Main content */}
      <motion.div style={{ position: "relative", maxWidth: "900px", y: contentY }}>
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: "20px" }}>
          <span className="section-label">Full Stack Developer</span>
        </motion.div>

        <h1
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(52px, 9vw, 130px)",
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
            margin: "0 0 32px",
          }}
        >
          <SplitChars text="Aryan" delay={BASE + 0.25} />{" "}
          <SplitChars text="Jha" delay={BASE + 0.5} italic accent />
          <SplitChars text="." delay={BASE + 0.68} accent />
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "32px",
          }}
        >
          <motion.p
            {...fadeUp(0.55)}
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              maxWidth: "480px",
              margin: 0,
              fontWeight: 300,
            }}
          >
            Final year CS student at{" "}
            <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
              SRM IST, Chennai
            </span>
            . I build scalable web applications and integrate AI-powered features
            — from codebase search engines to real-time crisis management platforms.
          </motion.p>

          <motion.div
            {...fadeUp(0.65)}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <Magnetic>
              <a
                href="#projects"
                style={{
                  display: "inline-block",
                  padding: "14px 32px",
                  backgroundColor: "var(--text-primary)",
                  color: "var(--cream)",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  border: "1px solid var(--text-primary)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "var(--accent)";
                  el.style.borderColor = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "var(--text-primary)";
                  el.style.borderColor = "var(--text-primary)";
                }}
              >
                View Work
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                style={{
                  display: "inline-block",
                  padding: "14px 32px",
                  backgroundColor: "transparent",
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  border: "1px solid var(--border)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--accent)";
                  el.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border)";
                  el.style.color = "var(--text-primary)";
                }}
              >
                Get in Touch
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: BASE + 1.2, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "36px",
          right: "40px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          style={{
            width: 1,
            height: 32,
            backgroundColor: "var(--border)",
            display: "inline-block",
          }}
        />
      </motion.div>
    </section>
  );
}
