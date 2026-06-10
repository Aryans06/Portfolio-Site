import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Space_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aryan Jha — Full Stack Developer",
  description:
    "Pre-final year CS student at SRM IST. Full-stack developer specialising in React, Next.js, and AI-powered applications.",
  openGraph: {
    title: "Aryan Jha — Full Stack Developer",
    description: "Building scalable web apps and AI-powered tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} ${spaceMono.variable} h-full`}
    >
      <body
        className="min-h-full"
        style={{ fontFamily: "var(--font-body), sans-serif" }}
      >
        {children}
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
