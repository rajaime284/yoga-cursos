"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/cursos", label: "Cursos" },
  { href: "/contacto", label: "Contacto" },
] as const;

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-nowrap items-center gap-5 text-xs font-medium text-white/90 sm:flex-wrap sm:gap-6 sm:text-sm sm:text-white/95">
      {links.map(({ href, label }) => {
        const active =
          href === "/"
            ? pathname === "/"
            : pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            className={`shrink-0 border-b-2 pb-0.5 transition-colors ${
              active
                ? "border-white"
                : "border-transparent hover:border-white/40"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
