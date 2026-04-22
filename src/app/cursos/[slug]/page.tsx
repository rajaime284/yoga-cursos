import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { courses, getCourseBySlug } from "@/lib/courses";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: course.title,
    description: course.tagline,
  };
}

export default async function CursoDetallePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return (
    <article className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:gap-10 sm:py-12 lg:grid-cols-2 lg:items-start lg:px-6 lg:py-16">
        <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-neutral-100 sm:aspect-[4/3] sm:rounded-lg lg:sticky lg:top-24">
          <img
            src={course.image}
            alt={course.title}
            width={1200}
            height={900}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-medium text-[var(--color-primary)] sm:text-sm">
            {course.level} · {course.duration}
          </p>
          <h1 className="mt-1.5 text-2xl font-semibold tracking-tight text-neutral-900 sm:mt-2 sm:text-4xl">
            {course.title}
          </h1>
          <p className="mt-2 text-base text-neutral-600 sm:text-lg">{course.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-neutral-700 sm:mt-6 sm:text-base">
            {course.description}
          </p>
          <p className="mt-6 text-xl font-semibold text-neutral-900 sm:mt-8 sm:text-2xl">
            {course.priceEUR} €
          </p>
          <div className="mt-4 sm:mt-6">
            <AddToCartButton courseId={course.id} className="w-full min-w-0 sm:w-auto sm:min-w-[200px]" />
          </div>
        </div>
      </div>
    </article>
  );
}
