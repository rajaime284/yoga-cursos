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
    <section className="bg-white py-10 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-left sm:text-center">
          <h2 className="text-xl font-semibold tracking-tight text-[var(--color-primary)] sm:text-3xl">
            Bienvenida a Harmony Yoga Studio
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:mt-3 sm:text-base">
            Cursos en vídeo para profundizar en tu práctica sin prisas.
            <span className="mt-1 block text-neutral-500 max-sm:text-xs sm:mt-0 sm:inline">
              {" "}
              El catálogo es estático y el carrito se guarda en tu navegador.
            </span>
          </p>
        </div>
        <ul className="mt-8 space-y-8 sm:mt-14 sm:grid sm:grid-cols-3 sm:gap-10 sm:space-y-0">
          {features.map(({ title, text, Icon }) => (
            <li
              key={title}
              className="flex gap-4 border-b border-neutral-100 pb-8 last:border-b-0 last:pb-0 sm:block sm:border-0 sm:pb-0 sm:text-center"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] sm:mx-auto sm:size-14">
                <Icon className="size-6 sm:size-8" />
              </div>
              <div className="min-w-0 flex-1 sm:flex-none">
                <h3 className="text-base font-semibold text-[var(--color-primary)] sm:mt-4 sm:text-lg">
                  {title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-neutral-600 sm:mt-2 sm:text-sm">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
