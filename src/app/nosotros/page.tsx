import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce Harmony Yoga Studio.",
};

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <h1 className="text-3xl font-semibold text-[var(--color-primary)] sm:text-4xl">
        Nosotros
      </h1>
      <p className="mt-6 leading-relaxed text-neutral-700">
        Esta página es un marcador de posición para tu entrega: sustituye este
        texto por la historia del estudio, el equipo y los valores cuando lo
        tengas listo.
      </p>
    </div>
  );
}
