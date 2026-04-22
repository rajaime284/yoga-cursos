import Link from "next/link";
import type { Course } from "@/lib/courses";
import { AddToCartButton } from "@/components/add-to-cart-button";

type Props = { course: Course; showBuy?: boolean };

export function CourseCard({ course, showBuy = true }: Props) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-neutral-100 bg-white shadow-none transition sm:border-neutral-200 sm:shadow-sm sm:hover:shadow-md">
      <Link href={`/cursos/${course.slug}`} className="relative aspect-[16/10] bg-neutral-100 sm:aspect-[4/3]">
        <img
          src={course.image}
          alt={course.title}
          width={800}
          height={600}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <Link href={`/cursos/${course.slug}`}>
          <h3 className="text-base font-semibold text-neutral-900 hover:text-[var(--color-primary)] sm:text-lg">
            {course.title}
          </h3>
        </Link>
        <p className="mt-0.5 text-xs text-neutral-600 sm:mt-1 sm:text-sm">{course.tagline}</p>
        <p className="mt-2 text-sm font-medium text-[var(--color-primary)] sm:mt-3">
          {course.priceEUR} €
        </p>
        <div className="mt-3 flex flex-col gap-2 sm:mt-4 sm:flex-row sm:flex-wrap">
          <Link
            href={`/cursos/${course.slug}`}
            className="inline-flex w-full flex-1 items-center justify-center rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-800 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] sm:w-auto"
          >
            Detalle
          </Link>
          {showBuy ? (
            <AddToCartButton courseId={course.id} className="flex-1" />
          ) : null}
        </div>
      </div>
    </article>
  );
}
