import Link from "next/link";
import { CourseCard } from "@/components/course-card";
import { FeaturesSection } from "@/components/features-section";
import { HeroSection } from "@/components/hero-section";
import { courses } from "@/lib/courses";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <section className="bg-[var(--color-muted)] py-10 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-left sm:text-center">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              Cursos destacados
            </h2>
            <p className="mt-1 text-sm text-neutral-600 sm:mt-2 sm:text-base">
              Elige tu estilo y empieza cuando quieras.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="mt-8 text-center sm:mt-10">
            <Link
              href="/cursos"
              className="inline-flex w-full items-center justify-center rounded-lg border border-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-white sm:w-auto"
            >
              Ver todos los cursos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
