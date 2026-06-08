"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const socials = [
  { label: "Email", value: "aryanjha.works@gmail.com", href: "mailto:aryanjha.works@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/aryanj06", href: "https://www.linkedin.com/in/aryanj06/" },
  { label: "GitHub", value: "github.com/Aryans06", href: "https://github.com/Aryans06" },
  { label: "LeetCode", value: "leetcode.com/bravo_delta", href: "https://leetcode.com/bravo_delta" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "120px 40px 80px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          style={{ marginBottom: "80px" }}
        >
          <span className="section-label">05 — Contact</span>
          <h2
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(52px, 9vw, 120px)",
              fontWeight: 600,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              margin: "20px 0 0",
              maxWidth: "900px",
            }}
          >
            Let's build something{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
              together
            </span>
            <span style={{ color: "var(--accent)" }}>.</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "var(--text-secondary)",
              maxWidth: "500px",
              marginTop: "32px",
              fontWeight: 300,
            }}
          >
            Currently open to internships, freelance projects, and interesting
            collaborations. If you have a problem worth solving, I'd like to hear about it.
          </motion.p>

          <motion.a
            href="mailto:aryanjha.works@gmail.com"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.45, duration: 0.6 }}
            style={{
              display: "inline-block",
              marginTop: "40px",
              padding: "16px 40px",
              backgroundColor: "var(--text-primary)",
              color: "var(--cream)",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "1px solid var(--text-primary)",
              transition: "all 0.25s ease",
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
            Say Hello ↗
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid var(--border)", marginBottom: "48px" }} />

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "2rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                letterSpacing: "0.02em",
                marginBottom: "12px",
              }}
            >
              AJ<span style={{ color: "var(--accent)" }}>.</span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              Aryan Jha · Chennai, India
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                marginTop: "6px",
              }}
            >
              +91 9958160640
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.55, duration: 0.6 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px 40px",
            }}
          >
            {socials.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: "4px",
                  }}
                >
                  {s.label}
                </div>
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.8rem",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")
                  }
                >
                  {s.value}
                </a>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "60px",
            paddingTop: "24px",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.58rem",
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
            }}
          >
            © 2026 Aryan Jha
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.58rem",
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
            }}
          >
            Built with Next.js + Framer Motion
          </span>
        </div>
      </div>
    </section>
  );
}
