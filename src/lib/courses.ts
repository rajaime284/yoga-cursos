export type Course = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  priceEUR: number;
  duration: string;
  level: string;
  image: string;
};

export const courses: Course[] = [
  {
    id: "c1",
    slug: "hatha-yoga",
    title: "Hatha Yoga",
    tagline: "Encuentra equilibrio y flexibilidad.",
    description:
      "Curso en vídeo para aprender posturas clásicas, alineación y respiración. Ideal para empezar con bases sólidas y progresar con calma.",
    priceEUR: 49,
    duration: "6 h",
    level: "Principiante",
    image: "/images/cursos/hatha.png",
  },
  {
    id: "c2",
    slug: "vinyasa-flow",
    title: "Vinyasa Flow",
    tagline: "Movimiento consciente y fluido.",
    description:
      "Secuencias dinámicas coordinadas con la respiración. Fortalece el cuerpo y mejora la concentración con transiciones suaves entre asanas.",
    priceEUR: 59,
    duration: "8 h",
    level: "Intermedio",
    image: "/images/cursos/vinyasa.png",
  },
  {
    id: "c3",
    slug: "yoga-restaurativo",
    title: "Yoga restaurativo",
    tagline: "Relaja profundo cuerpo y mente.",
    description:
      "Apoyo con props, posturas pasivas y tiempo en cada forma para activar el sistema nervioso parasimpático y reducir el estrés.",
    priceEUR: 39,
    duration: "4 h",
    level: "Todos los niveles",
    image: "/images/cursos/restaurativo.png",
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
