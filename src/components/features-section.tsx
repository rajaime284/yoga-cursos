import { IconLotus, IconYogaPose, IconZenStones } from "@/components/icons";

const features = [
  {
    title: "Instructoras experimentadas",
    text: "Aprende con profes certificados y apasionados por el yoga.",
    Icon: IconYogaPose,
  },
  {
    title: "Entorno sereno",
    text: "Contenidos pensados para practicar con calma, donde tú quieras.",
    Icon: IconLotus,
  },
  {
    title: "Variedad de estilos",
    text: "Cursos para todos los niveles, de iniciación a avanzado.",
    Icon: IconZenStones,
  },
] as const;

export function FeaturesSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-[var(--color-primary)] sm:text-3xl">
            Bienvenida a Harmony Yoga Studio
          </h2>
          <p className="mt-3 text-neutral-600">
            Cursos en vídeo para profundizar en tu práctica sin prisas. El
            catálogo es estático (sin base de datos) y el carrito se guarda en
            tu navegador.
          </p>
        </div>
        <ul className="mt-14 grid gap-10 sm:grid-cols-3">
          {features.map(({ title, text, Icon }) => (
            <li key={title} className="text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <Icon className="size-8" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--color-primary)]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
