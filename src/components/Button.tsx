import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-navy-900 text-white shadow-academic hover:-translate-y-0.5 hover:bg-navy-800 focus-visible:outline-gold-400",
  secondary:
    "border border-gold-400/70 bg-white/60 text-navy-900 hover:-translate-y-0.5 hover:border-gold-500 hover:bg-white focus-visible:outline-navy-800",
};

export function Button({ children, href, variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
