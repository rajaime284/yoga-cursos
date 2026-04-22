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
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-2 lg:items-start lg:px-6 lg:py-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100 lg:sticky lg:top-24">
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
          <p className="text-sm font-medium text-[var(--color-primary)]">
            {course.level} · {course.duration}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            {course.title}
          </h1>
          <p className="mt-2 text-lg text-neutral-600">{course.tagline}</p>
          <p className="mt-6 leading-relaxed text-neutral-700">
            {course.description}
          </p>
          <p className="mt-8 text-2xl font-semibold text-neutral-900">
            {course.priceEUR} €
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <AddToCartButton courseId={course.id} className="min-w-[200px]" />
          </div>
        </div>
      </div>
    </article>
  );
}
