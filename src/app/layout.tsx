import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
