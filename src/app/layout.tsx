import { JsonLd, createMetadata, organizationJsonLd } from "@/lib/seo";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = createMetadata({
  title: "Premium GCSE & IGCSE Preparation",
  description:
    "UK-based online GCSE and IGCSE tuition, small group classes, and exam preparation for families in the UAE, Dubai, and worldwide.",
  path: "/",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <JsonLd data={organizationJsonLd} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
