import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[clamp(280px,52vh,380px)] w-full overflow-hidden sm:min-h-[480px]">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Práctica de yoga en un entorno tranquilo"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/45 via-black/35 to-black/25 sm:bg-gradient-to-r sm:from-black/55 sm:via-black/35 sm:to-black/10"
        aria-hidden
      />
      <div className="relative z-[2] mx-auto flex max-w-6xl flex-col justify-end px-4 pb-10 pt-16 sm:min-h-[480px] sm:justify-center sm:px-6 sm:py-24 sm:pb-24 sm:pt-24">
        <h1 className="max-w-[16ch] text-3xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-sm sm:max-w-xl sm:text-5xl sm:leading-tight sm:drop-shadow-md">
          Encuentra tu paz interior
        </h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90 drop-shadow sm:mt-4 sm:max-w-lg sm:text-lg sm:text-white/95">
          Equilibra mente, cuerpo y espíritu con nuestros cursos online de
          Harmony Yoga Studio.
        </p>
        <div className="mt-6 sm:mt-8">
          <Link
            href="/cursos"
            className="inline-flex w-full items-center justify-center rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 sm:w-auto sm:px-6 sm:py-3"
          >
            Ver cursos
          </Link>
        </div>
      </div>
    </section>
  );
}
