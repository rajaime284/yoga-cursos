import Link from "next/link";
import { IconLotus } from "@/components/icons";
import { NavLinks } from "@/components/nav-links";
import { CartLink } from "@/components/cart-link";

export function SiteHeader() {
  return (
    <header className="bg-[var(--color-primary)] text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] grid-rows-[auto_auto] items-center gap-x-3 gap-y-2 px-3 py-2.5 sm:grid-cols-[auto_1fr_auto] sm:grid-rows-1 sm:gap-x-8 sm:px-6 sm:py-3.5">
        <Link
          href="/"
          className="col-start-1 row-start-1 flex min-w-0 items-center gap-2 sm:gap-2.5"
        >
          <IconLotus className="size-8 shrink-0 text-white sm:size-9" />
          <span className="truncate font-semibold tracking-wide sm:max-w-none">
            Harmony
            <span className="hidden font-normal uppercase tracking-[0.2em] text-white/90 sm:inline sm:text-sm">
              {" "}
              Yoga Studio
            </span>
          </span>
        </Link>
        <div className="col-start-2 row-start-1 justify-self-end sm:col-start-3 sm:justify-self-auto">
          <CartLink />
        </div>
        <div className="col-span-2 row-start-2 -mx-3 border-t border-white/10 px-3 pt-2 sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:-mx-0 sm:flex sm:justify-center sm:border-0 sm:px-0 sm:pt-0">
          <div className="overflow-x-auto [-webkit-overflow-scrolling:touch] sm:overflow-visible">
            <NavLinks />
          </div>
        </div>
      </div>
    </header>
  );
}
