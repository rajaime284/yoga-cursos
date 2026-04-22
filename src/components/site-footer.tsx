import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-neutral-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-10 sm:text-sm">
        <p>© {new Date().getFullYear()} Harmony Yoga Studio</p>
        <div className="flex gap-5 sm:gap-6">
          <Link href="/cursos" className="hover:text-[var(--color-primary)]">
            Tienda de cursos
          </Link>
          <Link href="/contacto" className="hover:text-[var(--color-primary)]">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
