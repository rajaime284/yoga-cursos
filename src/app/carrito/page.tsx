import type { Metadata } from "next";
import { CartPageClient } from "@/components/cart-page-client";

export const metadata: Metadata = {
  title: "Carrito",
  description: "Revisa los cursos seleccionados antes de finalizar la compra.",
};

export default function CarritoPage() {
  return (
    <div className="bg-[var(--color-muted)] py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-semibold text-neutral-900">Carrito</h1>
        <p className="mt-2 text-sm text-neutral-600">
          Los datos se guardan solo en tu navegador (localStorage). No hay pago
          real en esta demo académica.
        </p>
        <CartPageClient />
      </div>
    </div>
  );
}
