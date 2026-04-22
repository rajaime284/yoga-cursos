"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";

export function CartPageClient() {
  const { items, totalEUR, setQty, removeCourse, clear } = useCart();

  if (items.length === 0) {
    return (
      <div className="mt-10 rounded-lg border border-dashed border-neutral-300 bg-white p-10 text-center">
        <p className="text-neutral-700">Tu carrito está vacío.</p>
        <Link
          href="/cursos"
          className="mt-4 inline-flex text-sm font-semibold text-[var(--color-primary)] hover:underline"
        >
          Ir a la tienda de cursos
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-4">
      <ul className="divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white">
        {items.map(({ course, qty }) => (
          <li
            key={course.id}
            className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center"
          >
            <div className="relative size-24 shrink-0 overflow-hidden rounded-md bg-neutral-100">
              <img
                src={course.image}
                alt={course.title}
                width={96}
                height={96}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <Link
                href={`/cursos/${course.slug}`}
                className="font-semibold text-neutral-900 hover:text-[var(--color-primary)]"
              >
                {course.title}
              </Link>
              <p className="text-sm text-neutral-600">{course.priceEUR} € / ud.</p>
            </div>
            <div className="flex items-center gap-3 sm:justify-end">
              <label className="flex items-center gap-2 text-sm text-neutral-700">
                <span className="sr-only">Cantidad</span>
                <input
                  type="number"
                  min={1}
                  max={99}
                  value={qty}
                  onChange={(e) =>
                    setQty(course.id, Number.parseInt(e.target.value, 10) || 1)
                  }
                  className="w-16 rounded border border-neutral-300 px-2 py-1 text-center text-sm"
                />
              </label>
              <button
                type="button"
                onClick={() => removeCourse(course.id)}
                className="text-sm font-medium text-red-700 hover:underline"
              >
                Quitar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-4 rounded-lg border border-neutral-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-neutral-600">Total estimado</p>
          <p className="text-2xl font-semibold text-neutral-900">
            {totalEUR} €
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => clear()}
            className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
          >
            Vaciar carrito
          </button>
          <button
            type="button"
            className="rounded-md bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white hover:brightness-110"
            onClick={() =>
              alert(
                "Demo académica: aquí iría el flujo de pago (Stripe, PayPal, etc.) sin base de datos propia.",
              )
            }
          >
            Finalizar compra (demo)
          </button>
        </div>
      </div>
    </div>
  );
}
