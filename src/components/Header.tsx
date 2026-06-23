import Link from "next/link";
import { Container } from "./Container";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programmes", href: "/programmes" },
  { name: "Subjects", href: "/subjects" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/10 bg-ivory/90 backdrop-blur-md">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-6 py-4">
          <Link href="/" className="group flex items-center gap-3" aria-label="QUANTRA Education home">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400 bg-navy-950 font-serif text-lg font-semibold text-gold-300 shadow-sm transition group-hover:bg-navy-900">
              Q
            </span>
            <span>
              <span className="block font-serif text-xl font-semibold tracking-[0.14em] text-navy-950">
                QUANTRA
              </span>
              <span className="block text-[0.65rem] font-bold uppercase tracking-[0.32em] text-navy-700">
                Education
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-navy-800 transition hover:text-gold-500"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/free-assessment"
            className="hidden rounded-full border border-gold-400/80 px-5 py-2.5 text-sm font-semibold text-navy-900 transition hover:bg-gold-400 hover:text-navy-950 sm:inline-flex"
          >
            Free Assessment
          </Link>
        </div>
        <nav className="flex gap-5 overflow-x-auto border-t border-navy-900/10 py-3 text-sm font-semibold text-navy-800 lg:hidden" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 hover:text-gold-500">
              {item.name}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
