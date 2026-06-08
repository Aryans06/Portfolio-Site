"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C++", "C", "HTML"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL", "Supabase"],
  },
  {
    category: "AI & APIs",
    skills: ["OpenAI API", "Claude", "Gemini", "Hugging Face", "RESTful API"],
  },
  {
    category: "Tools & Infra",
    skills: ["Git", "Docker", "Vercel", "Prisma", "Postman", "Linux CLI"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "72px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          >
            <span className="section-label">02 — Skills</span>
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
              Technical{" "}
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
                Stack
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontSize: "0.9rem",
              color: "var(--text-muted)",
              maxWidth: "280px",
              lineHeight: 1.6,
              fontWeight: 300,
            }}
          >
            Technologies I use to design, build, and ship production-grade software.
          </motion.p>
        </div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            backgroundColor: "var(--border)",
            border: "1px solid var(--border)",
          }}
          className="skills-grid"
        >
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + gi * 0.08,
                ease: [0.22, 1, 0.36, 1] as [number,number,number,number],
              }}
              style={{
                backgroundColor: "var(--cream-dark)",
                padding: "32px 28px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "20px",
                }}
              >
                {group.category}
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      display: "inline-block",
                      padding: "5px 12px",
                      border: "1px solid var(--cream-darker)",
                      backgroundColor: "var(--cream)",
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 400,
                      color: "var(--text-secondary)",
                      letterSpacing: "0.01em",
                      transition: "all 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "var(--accent)";
                      el.style.color = "var(--accent)";
                      el.style.backgroundColor = "var(--accent-light)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "var(--cream-darker)";
                      el.style.color = "var(--text-secondary)";
                      el.style.backgroundColor = "var(--cream)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
