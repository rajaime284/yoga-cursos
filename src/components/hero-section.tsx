import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[420px] w-full overflow-hidden sm:min-h-[480px]">
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
        className="absolute inset-0 z-[1] bg-gradient-to-r from-black/55 via-black/35 to-black/10"
        aria-hidden
      />
      <div className="relative z-[2] mx-auto flex max-w-6xl flex-col justify-center px-4 py-20 sm:min-h-[480px] sm:px-6 sm:py-24">
        <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-md sm:text-5xl">
          Encuentra tu paz interior
        </h1>
        <p className="mt-4 max-w-lg text-lg text-white/95 drop-shadow">
          Equilibra mente, cuerpo y espíritu con nuestros cursos online de
          Harmony Yoga Studio.
        </p>
        <div className="mt-8">
          <Link
            href="/cursos"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
          >
            Ver cursos
          </Link>
        </div>
      </div>
    </section>
  );
}
