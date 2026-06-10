"use client";

type MarqueeProps = {
  items: string[];
  reverse?: boolean;
  duration?: number;
};

export default function Marquee({ items, reverse = false, duration = 28 }: MarqueeProps) {
  const sequence = (keyPrefix: string) =>
    items.map((item, i) => (
      <span
        key={`${keyPrefix}-${i}`}
        style={{ display: "inline-flex", alignItems: "center", gap: "40px" }}
      >
        <span
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(26px, 3.5vw, 48px)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            whiteSpace: "nowrap",
            ...(i % 2 === 0
              ? { color: "var(--text-primary)" }
              : {
                  fontStyle: "italic",
                  color: "transparent",
                  WebkitTextStroke: "1px var(--accent)",
                }),
          }}
        >
          {item}
        </span>
        <span aria-hidden style={{ color: "var(--accent)", fontSize: "0.9rem" }}>
          ✦
        </span>
      </span>
    ));

  return (
    <div
      aria-hidden
      style={{
        overflow: "hidden",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "22px 0",
        backgroundColor: "var(--cream)",
        display: "flex",
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          paddingRight: "40px",
          flexShrink: 0,
          animation: `marquee ${duration}s linear infinite ${reverse ? "reverse" : "normal"}`,
        }}
      >
        {sequence("a")}
        {sequence("b")}
      </div>
      <div
        className="marquee-track"
        aria-hidden
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          paddingRight: "40px",
          flexShrink: 0,
          animation: `marquee ${duration}s linear infinite ${reverse ? "reverse" : "normal"}`,
        }}
      >
        {sequence("c")}
        {sequence("d")}
      </div>
    </div>
  );
}
