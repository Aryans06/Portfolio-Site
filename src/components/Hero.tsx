"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

export default function Hero() {
  return (
    <section
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
      {/* Large background text */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--font-display), serif",
          fontSize: "clamp(80px, 18vw, 280px)",
          fontWeight: 700,
          color: "transparent",
          WebkitTextStroke: "2px #C8BFB2",
          letterSpacing: "-0.04em",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
        }}
      >
        ARYAN
      </div>

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
        <span
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
      <div style={{ position: "relative", maxWidth: "900px" }}>
        <motion.div
          {...fadeUp(0.1)}
          style={{ marginBottom: "20px" }}
        >
          <span className="section-label">Full Stack Developer</span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.25)}
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
          Aryan{" "}
          <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
            Jha
          </span>
          <span style={{ color: "var(--accent)" }}>.</span>
        </motion.h1>

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
            {...fadeUp(0.4)}
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              maxWidth: "480px",
              margin: 0,
              fontWeight: 300,
            }}
          >
            Pre-final year CS student at{" "}
            <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
              SRM IST, Chennai
            </span>
            . I build scalable web applications and integrate AI-powered features
            — from codebase search engines to real-time crisis management platforms.
          </motion.p>

          <motion.div
            {...fadeUp(0.5)}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
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
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
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
