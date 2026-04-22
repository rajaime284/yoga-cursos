"use client";

import Link from "next/link";
import { IconCart } from "@/components/icons";
import { useCart } from "@/context/cart-context";

export function CartLink() {
  const { count } = useCart();

  return (
    <Link
      href="/carrito"
      className="relative inline-flex size-10 items-center justify-center rounded-md border border-white/25 text-white transition hover:bg-white/10"
      aria-label={count > 0 ? `Carrito, ${count} artículos` : "Carrito"}
    >
      <IconCart className="size-5" />
      {count > 0 ? (
        <span className="absolute -right-1 -top-1 flex min-w-5 items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold leading-none text-[var(--color-primary)]">
          {count > 9 ? "9+" : count}
        </span>
      ) : null}
    </Link>
  );
}
