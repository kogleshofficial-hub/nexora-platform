import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veyntro — Clarity before commitment",
  description: "A more reliable way to move service enquiries into complete, reviewable quotes.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}