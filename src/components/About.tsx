"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stats = [
  { value: "9.59", label: "CGPA" },
  { value: "250+", label: "DSA Problems" },
  { value: "100+", label: "NPM Downloads" },
  { value: "2027", label: "Graduating" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "120px 40px",
        borderTop: "1px solid var(--border)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "320px 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left col — photo + stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          >
            <span className="section-label">01 — About</span>

            {/* Portrait */}
            <div
              style={{
                position: "relative",
                marginTop: "24px",
                marginBottom: "48px",
              }}
            >
              {/* Offset accent frame */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  right: "-12px",
                  bottom: "-12px",
                  border: "1px solid var(--accent)",
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  overflow: "hidden",
                  aspectRatio: "3 / 4",
                  backgroundColor: "var(--cream-dark)",
                  border: "1px solid var(--border)",
                }}
              >
                <Image
                  src="/aryan.jpg"
                  alt="Aryan Jha"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="320px"
                  priority
                />
              </div>

              {/* Caption chip */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-12px",
                  right: "-12px",
                  zIndex: 2,
                  backgroundColor: "var(--accent)",
                  padding: "6px 14px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--cream)",
                  }}
                >
                  Chennai, India
                </span>
              </div>
            </div>

            {/* Stats grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1px",
                marginTop: "16px",
                border: "1px solid var(--border)",
                backgroundColor: "var(--border)",
              }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  style={{
                    padding: "20px 18px",
                    backgroundColor: "var(--cream)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display), serif",
                      fontSize: "2rem",
                      fontWeight: 600,
                      color: "var(--accent)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "0.58rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginTop: "6px",
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right col — bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            style={{ paddingTop: "36px" }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(42px, 6vw, 72px)",
                fontWeight: 600,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                margin: "0 0 40px",
              }}
            >
              Who I{" "}
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
                am
              </span>
            </h2>

            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.85,
                color: "var(--text-secondary)",
                fontWeight: 300,
                marginBottom: "28px",
              }}
            >
              I'm a final year Computer Science student at{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                SRM Institute of Science and Technology, Chennai
              </span>
              , with a strong foundation in Data Structures & Algorithms and
              full-stack web development.
            </p>
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.85,
                color: "var(--text-secondary)",
                fontWeight: 300,
                marginBottom: "28px",
              }}
            >
              My work sits at the intersection of performance-first engineering
              and AI integration — from building a codebase search engine that
              handles 1,000 files per minute, to publishing an open-source CLI
              tool adopted by developers within its first week.
            </p>
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.85,
                color: "var(--text-secondary)",
                fontWeight: 300,
              }}
            >
              Outside of projects, I sharpen my problem-solving through
              competitive programming (250+ LeetCode problems) and have been
              recognised at{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                Smart India Hackathon
              </span>{" "}
              as a top 100 team.
            </p>

            {/* Social links */}
            <div
              style={{
                display: "flex",
                gap: "24px",
                marginTop: "48px",
                paddingTop: "32px",
                borderTop: "1px solid var(--border)",
                flexWrap: "wrap",
              }}
            >
              {[
                { label: "LinkedIn", href: "https://linkedin.com/in/aryanj06" },
                { label: "GitHub", href: "https://github.com/Aryans06" },
                { label: "LeetCode", href: "https://leetcode.com/bravo_delta" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
                  }
                >
                  {link.label}
                  <span style={{ fontSize: "0.8em" }}>↗</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </section>
  );
}
