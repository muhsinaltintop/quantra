export const mainNavigation = [
  { name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Programmes", href: "/programmes" }, { name: "Pricing", href: "/pricing" }, { name: "Subjects", href: "/subjects" }, { name: "Resources", href: "/resources" }, { name: "Contact", href: "/contact" },
] as const;
export const footerLinks = mainNavigation.filter((item) => item.href !== "/");
