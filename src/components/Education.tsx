"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const certifications = [
  "Coding Ninjas — Data Structures",
  "HackerRank — Problem Solving (Basic)",
  "IBM — Machine Learning with Python",
];

const achievements = [
  {
    title: "Smart India Hackathon",
    detail: "Top 100 teams nationwide",
    year: "2024",
  },
  {
    title: "LeetCode",
    detail: "250+ DSA problems solved",
    year: "Ongoing",
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="education"
      ref={ref}
      style={{
        padding: "120px 40px",
        backgroundColor: "var(--cream-dark)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          style={{ marginBottom: "72px" }}
        >
          <span className="section-label">04 — Education & Achievements</span>
          <h2
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(42px, 6vw, 72px)",
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              margin: "20px 0 0",
            }}
          >
            Background &{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
              Credentials
            </span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "60px",
          }}
          className="edu-grid"
        >
          {/* Left — Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "32px",
              }}
            >
              Education
            </div>

            {/* University */}
            <div
              style={{
                padding: "32px",
                backgroundColor: "var(--cream)",
                border: "1px solid var(--border)",
                marginBottom: "16px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "3px",
                  height: "100%",
                  backgroundColor: "var(--accent)",
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "1.6rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  lineHeight: 1.2,
                  marginBottom: "8px",
                }}
              >
                B.Tech Computer Science
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  fontWeight: 400,
                  marginBottom: "20px",
                }}
              >
                SRM Institute of Science and Technology, Chennai
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { label: "Graduation", value: "2027" },
                  { label: "CGPA", value: "9.59 / 10" },
                ].map((item) => (
                  <div key={item.label}>
                    <div
                      style={{
                        fontFamily: "var(--font-mono), monospace",
                        fontSize: "0.58rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                        marginBottom: "4px",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-display), serif",
                        fontSize: "1.4rem",
                        fontWeight: 600,
                        color: "var(--accent)",
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: "20px",
                  paddingTop: "20px",
                  borderTop: "1px solid var(--border)",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.08em",
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                }}
              >
                DSA · Operating Systems · DBMS · Computer Networks · OOP
              </div>
            </div>

            {/* Earlier education */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              {[
                { label: "Class XII", value: "75.5%" },
                { label: "Class X", value: "94%" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: "20px 24px",
                    backgroundColor: "var(--cream)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "0.58rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginBottom: "8px",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display), serif",
                      fontSize: "1.8rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Achievements + Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          >
            {/* Achievements */}
            <div
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "32px",
              }}
            >
              Achievements
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginBottom: "48px",
              }}
            >
              {achievements.map((a) => (
                <div
                  key={a.title}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 24px",
                    backgroundColor: "var(--cream)",
                    border: "1px solid var(--border)",
                    gap: "16px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-body), sans-serif",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        color: "var(--text-primary)",
                        marginBottom: "4px",
                      }}
                    >
                      {a.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body), sans-serif",
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        fontWeight: 300,
                      }}
                    >
                      {a.detail}
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      color: "var(--accent)",
                      whiteSpace: "nowrap",
                      border: "1px solid var(--accent-light)",
                      padding: "4px 8px",
                    }}
                  >
                    {a.year}
                  </span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "24px",
              }}
            >
              Certifications
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 20px",
                    backgroundColor: "var(--cream)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent)",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      fontWeight: 300,
                    }}
                  >
                    {cert}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
