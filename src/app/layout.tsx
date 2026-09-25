import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "KASDAD Studio — Belajar Kecerdasan Artifisial",
    template: "%s | KASDAD Studio",
  },
  description:
    "Ruang belajar interaktif untuk materi Kecerdasan Artifisial dan Sains Data Dasar.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
