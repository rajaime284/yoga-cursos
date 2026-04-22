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
      <section className="bg-[var(--color-muted)] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
              Cursos destacados
            </h2>
            <p className="mt-2 text-neutral-600">
              Elige tu estilo y empieza cuando quieras.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/cursos"
              className="inline-flex rounded-lg border border-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-white"
            >
              Ver todos los cursos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
