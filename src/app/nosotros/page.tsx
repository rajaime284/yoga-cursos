import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce Harmony Yoga Studio.",
};

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-20">
      <h1 className="text-2xl font-semibold tracking-tight text-[var(--color-primary)] sm:text-4xl">
        Nosotros
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-neutral-700 sm:mt-6 sm:text-base">
        Esta página es un marcador de posición para tu entrega: sustituye este
        texto por la historia del estudio, el equipo y los valores cuando lo
        tengas listo.
      </p>
    </div>
  );
}
