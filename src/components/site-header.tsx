import Link from "next/link";
import { IconLotus } from "@/components/icons";
import { NavLinks } from "@/components/nav-links";
import { CartLink } from "@/components/cart-link";

export function SiteHeader() {
  return (
    <header className="bg-[var(--color-primary)] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <IconLotus className="size-9 shrink-0 text-white" />
          <span className="font-semibold tracking-wide">
            Harmony{" "}
            <span className="text-sm font-normal uppercase tracking-[0.2em]">
              Yoga Studio
            </span>
          </span>
        </Link>
        <div className="flex flex-wrap items-center justify-between gap-4 sm:justify-end">
          <div className="overflow-x-auto pb-1 sm:pb-0">
            <NavLinks />
          </div>
          <CartLink />
        </div>
      </div>
    </header>
  );
}
