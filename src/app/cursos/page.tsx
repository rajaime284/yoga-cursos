import type { Metadata } from "next";
import { CourseCard } from "@/components/course-card";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Cursos",
  description: "Tienda de cursos online de yoga — Harmony Yoga Studio.",
};

export default function CursosPage() {
  return (
    <div className="bg-[var(--color-muted)] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
            Tienda de cursos
          </h1>
          <p className="mt-3 text-neutral-600">
            Compra acceso a cursos en vídeo. Los precios y textos están definidos
            en código; puedes sustituir las imágenes en{" "}
            <code className="rounded bg-neutral-200 px-1 py-0.5 text-xs">
              public/images
            </code>
            .
          </p>
        </header>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
