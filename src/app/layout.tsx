import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "QUANTRA Education | Premium GCSE & IGCSE Preparation",
  description:
    "UK-based online GCSE and IGCSE preparation in English for families in the UAE, Qatar, Saudi Arabia, and beyond.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
