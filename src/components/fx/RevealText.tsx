"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export type RevealWord = {
  text: string;
  accent?: boolean;
  italic?: boolean;
};

/**
 * Masked word-by-word reveal for display headings.
 * Each word rises out of an overflow-hidden wrapper with a stagger.
 */
export default function RevealText({
  words,
  show,
  delay = 0,
}: {
  words: RevealWord[];
  show: boolean;
  delay?: number;
}) {
  return (
    <>
      {words.map((word, i) => (
        <span
          key={`${word.text}-${i}`}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom",
            paddingBottom: "0.12em",
            marginBottom: "-0.12em",
          }}
        >
          <motion.span
            initial={{ y: "115%" }}
            animate={show ? { y: 0 } : {}}
            transition={{ duration: 0.9, delay: delay + i * 0.09, ease: EASE }}
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              ...(word.accent ? { color: "var(--accent)" } : {}),
              ...(word.italic ? { fontStyle: "italic" } : {}),
            }}
          >
            {word.text}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </>
  );
}
