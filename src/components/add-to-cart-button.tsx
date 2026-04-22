"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useCart } from "@/context/cart-context";

type Props = { courseId: string; className?: string };

const FEEDBACK_MS = 900;

export function AddToCartButton({ courseId, className }: Props) {
  const { addCourse } = useCart();
  const [added, setAdded] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleClick = useCallback(() => {
    addCourse(courseId);
    setAdded(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setAdded(false);
      timerRef.current = null;
    }, FEEDBACK_MS);
  }, [addCourse, courseId]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex min-h-[40px] items-center justify-center rounded-md bg-[var(--color-primary)] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-[transform,box-shadow,filter] duration-200 hover:brightness-110 active:scale-[0.96] sm:min-h-[42px] ${added ? "scale-105 shadow-md ring-2 ring-white/70 ring-offset-2 ring-offset-[var(--color-primary)]" : "scale-100"} ${className ?? ""}`}
    >
      {added ? (
        "¡Añadido!"
      ) : (
        <>
          <span className="sm:hidden">Añadir</span>
          <span className="hidden sm:inline">Añadir al carrito</span>
        </>
      )}
    </button>
  );
}
