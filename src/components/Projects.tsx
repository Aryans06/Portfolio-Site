"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import RevealText from "@/components/fx/RevealText";

const projects = [
  {
    number: "01",
    name: "CodeAtlas",
    tagline: "AI-powered codebase search engine",
    description:
      "Built an AI-powered codebase search engine using Next.js and Supabase (pgvector), delivering Llama-3 70B responses via Groq API at 800+ tokens/sec. Engineered an AST-based context chunker processing 1,000 files per minute, plus a Privacy Mode routing to local Ollama for 100% data privacy.",
    tech: ["Next.js", "TypeScript", "Llama-3", "Supabase", "TailwindCSS", "Clerk"],
    href: "https://github.com/Aryans06/CodeAtlas",
    highlight: "800 tokens/sec",
  },
  {
    number: "02",
    name: "Beacon",
    tagline: "AI-powered crisis management platform",
    description:
      "Built a real-time emergency coordination platform with bidirectional Socket.io syncing data across 4 dedicated interfaces at <100ms latency. Integrated Google Gemini 2.5 Flash to process unstructured SOS signals in under 2 seconds, generating structured emergency response protocols automatically.",
    tech: ["TypeScript", "Node.js", "Next.js", "Socket.io", "Gemini API"],
    href: "https://github.com/Aryans06/Beacon",
    highlight: "<100ms latency",
  },
  {
    number: "03",
    name: "git-pulse",
    tagline: "Open-source AI commit CLI · NPM package",
    description:
      "Developed and published an AI-powered CLI using the Google Gemini API that generates conventional commits from staged changes. Reached 100+ organic downloads in its first week. Uses contextual prompt engineering to reliably categorise file changes (feat:, fix:, chore:) without sacrificing speed.",
    tech: ["Node.js", "Gemini API", "CLI Architecture", "NPM"],
    href: "https://github.com/Aryans06/Git-Pulse",
    highlight: "100+ downloads wk 1",
    isOpenSource: true,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: "120px 40px",
        borderTop: "1px solid var(--border)",
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
          <span className="section-label">03 — Projects</span>
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
            <RevealText
              words={[
                { text: "Selected" },
                { text: "Work", italic: true, accent: true },
              ]}
              show={inView}
              delay={0.15}
            />
          </h2>
        </motion.div>

        {/* Project list */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1] as [number,number,number,number],
      }}
      style={{
        borderTop: "1px solid var(--border)",
        padding: "48px 0",
        cursor: "pointer",
        position: "relative",
      }}
      className="project-card"
      data-cursor="view"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.open(project.href, "_blank", "noopener,noreferrer")}
    >
      {/* Hover wash — expands from the left edge */}
      <motion.div
        aria-hidden
        initial={false}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "-40px",
          right: "-40px",
          backgroundColor: "var(--cream-dark)",
          transformOrigin: "left",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "80px 1fr auto",
          gap: "32px",
          alignItems: "start",
          position: "relative",
        }}
        className="project-inner"
      >
        {/* Number */}
        <motion.div
          initial={false}
          animate={{ color: hovered ? "var(--accent)" : "var(--cream-darker)" }}
          transition={{ duration: 0.3 }}
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "3.5rem",
            fontWeight: 300,
            lineHeight: 1,
            paddingTop: "4px",
          }}
        >
          {project.number}
        </motion.div>

        {/* Content */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "12px",
            }}
          >
            <motion.h3
              initial={false}
              animate={{ x: hovered ? 14 : 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                margin: 0,
                position: "relative",
              }}
            >
              <motion.span
                aria-hidden
                initial={false}
                animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
                transition={{ duration: 0.3 }}
                style={{
                  color: "var(--accent)",
                  position: "absolute",
                  left: "-0.85em",
                  display: "inline-block",
                }}
              >
                —
              </motion.span>
              {project.name}
            </motion.h3>
            {project.isOpenSource && (
              <span
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.55rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  border: "1px solid var(--accent)",
                  padding: "3px 8px",
                }}
              >
                Open Source
              </span>
            )}
          </div>

          <p
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "16px",
            }}
          >
            {project.tagline}
          </p>

          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.75,
              color: "var(--text-secondary)",
              fontWeight: 300,
              maxWidth: "600px",
              marginBottom: "24px",
            }}
          >
            {project.description}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                  padding: "4px 10px",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right — highlight + link */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "20px",
            minWidth: "140px",
          }}
          className="project-right"
        >
          <div
            style={{
              textAlign: "right",
              padding: "12px 16px",
              backgroundColor: "var(--cream-dark)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "1.4rem",
                fontWeight: 600,
                color: "var(--accent)",
                lineHeight: 1,
              }}
            >
              {project.highlight.split(" ")[0]}
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginTop: "4px",
              }}
            >
              {project.highlight.split(" ").slice(1).join(" ")}
            </div>
          </div>

          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-secondary)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 16px",
              border: "1px solid var(--border)",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.color = "var(--accent)";
              el.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.color = "var(--text-secondary)";
              el.style.borderColor = "var(--border)";
            }}
          >
            View Project ↗
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-inner { grid-template-columns: 48px 1fr !important; }
          .project-right { display: none !important; }
        }
      `}</style>
    </motion.div>
  );
}
