import Link from "next/link";
import { Container } from "./Container";
import { footerLinks } from "@/constants/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="font-serif text-2xl font-semibold tracking-[0.12em] text-white">QUANTRA</p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
              Premium online GCSE and IGCSE preparation in English for ambitious students and families.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-300">Explore</p>
              <div className="mt-4 grid gap-3">
                {footerLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-white/75 transition hover:text-gold-300">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-300">Focus</p>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Mathematics, Physics, mock exam preparation, intensive revision, and small group classes.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} QUANTRA Education. All rights reserved.</p>
          <p>UK-based online education for international GCSE families.</p>
        </div>
      </Container>
    </footer>
  );
}
