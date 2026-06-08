"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "16px 40px" : "28px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: scrolled ? "rgba(247,243,236,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "all 0.4s ease",
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "var(--text-primary)",
            textDecoration: "none",
            letterSpacing: "0.02em",
          }}
        >
          AJ<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "2.5rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-secondary)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                backgroundColor: "var(--text-primary)",
                transition: "all 0.3s ease",
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(4px, 4px)"
                    : menuOpen && i === 2
                    ? "rotate(-45deg) translate(4px, -4px)"
                    : menuOpen && i === 1
                    ? "opacity: 0; scaleX(0)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: "70px",
              left: 0,
              right: 0,
              zIndex: 99,
              backgroundColor: "var(--cream)",
              borderBottom: "1px solid var(--border)",
              padding: "24px 40px",
            }}
          >
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "0.7rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
