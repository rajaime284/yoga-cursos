import Link from "next/link";
import type { Course } from "@/lib/courses";
import { AddToCartButton } from "@/components/add-to-cart-button";

type Props = { course: Course; showBuy?: boolean };

export function CourseCard({ course, showBuy = true }: Props) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition hover:shadow-md">
      <Link href={`/cursos/${course.slug}`} className="relative aspect-[4/3] bg-neutral-100">
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
      <div className="flex flex-1 flex-col p-5">
        <Link href={`/cursos/${course.slug}`}>
          <h3 className="text-lg font-semibold text-neutral-900 hover:text-[var(--color-primary)]">
            {course.title}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-neutral-600">{course.tagline}</p>
        <p className="mt-3 text-sm font-medium text-[var(--color-primary)]">
          {course.priceEUR} €
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href={`/cursos/${course.slug}`}
            className="inline-flex flex-1 items-center justify-center rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-800 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
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
