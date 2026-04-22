import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta con Harmony Yoga Studio.",
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-20">
      <h1 className="text-2xl font-semibold tracking-tight text-[var(--color-primary)] sm:text-4xl">
        Contacto
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-neutral-700 sm:mt-6 sm:text-base">
        Aquí puedes añadir después un formulario estático, enlaces a redes o un
        correo de contacto. Por ahora no enviamos datos a ningún servidor.
      </p>
    </div>
  );
}
