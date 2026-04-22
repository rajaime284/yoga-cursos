import type { Metadata } from "next";
import { CourseCard } from "@/components/course-card";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Cursos",
  description: "Tienda de cursos online de yoga — Harmony Yoga Studio.",
};

export default function CursosPage() {
  return (
    <div className="bg-[var(--color-muted)] py-8 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-left sm:text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Tienda de cursos
          </h1>
          <p className="mt-2 text-sm text-neutral-600 sm:mt-3 sm:text-base">
            Acceso a cursos en vídeo.{" "}
            <span className="hidden sm:inline">
              Precios y textos en código; imágenes en{" "}
              <code className="rounded bg-neutral-200 px-1 py-0.5 text-xs">
                public/images
              </code>
              .
            </span>
          </p>
        </header>
        <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
