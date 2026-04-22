"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Course } from "@/lib/courses";
import { courses } from "@/lib/courses";

const STORAGE_KEY = "harmony-yoga-cart";

export type CartLine = { courseId: string; qty: number };

type CartContextValue = {
  lines: CartLine[];
  addCourse: (courseId: string) => void;
  removeCourse: (courseId: string) => void;
  setQty: (courseId: string, qty: number) => void;
  clear: () => void;
  items: { course: Course; qty: number }[];
  totalEUR: number;
  count: number;
};

const CartContext = createContext<CartContextValue | null>(null);

function readStorage(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (x): x is CartLine =>
        typeof x === "object" &&
        x !== null &&
        "courseId" in x &&
        "qty" in x &&
        typeof (x as CartLine).courseId === "string" &&
        typeof (x as CartLine).qty === "number",
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  useEffect(() => {
    // Hidratación: el servidor no tiene localStorage; cargamos tras el montaje.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sincronización con almacenamiento del navegador
    setLines(readStorage());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines]);

  const addCourse = useCallback((courseId: string) => {
    setLines((prev) => {
      const i = prev.findIndex((l) => l.courseId === courseId);
      if (i === -1) return [...prev, { courseId, qty: 1 }];
      const next = [...prev];
      next[i] = { courseId, qty: next[i].qty + 1 };
      return next;
    });
  }, []);

  const removeCourse = useCallback((courseId: string) => {
    setLines((prev) => prev.filter((l) => l.courseId !== courseId));
  }, []);

  const setQty = useCallback((courseId: string, qty: number) => {
    const q = Math.max(0, Math.floor(qty));
    setLines((prev) => {
      if (q === 0) return prev.filter((l) => l.courseId !== courseId);
      const i = prev.findIndex((l) => l.courseId === courseId);
      if (i === -1) return [...prev, { courseId, qty: q }];
      const next = [...prev];
      next[i] = { courseId, qty: q };
      return next;
    });
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const items = useMemo(() => {
    return lines
      .map((line) => {
        const course = courses.find((c) => c.id === line.courseId);
        if (!course) return null;
        return { course, qty: line.qty };
      })
      .filter((x): x is { course: Course; qty: number } => x !== null);
  }, [lines]);

  const totalEUR = useMemo(
    () => items.reduce((sum, x) => sum + x.course.priceEUR * x.qty, 0),
    [items],
  );

  const count = useMemo(() => items.reduce((s, x) => s + x.qty, 0), [items]);

  const value = useMemo(
    () => ({
      lines,
      addCourse,
      removeCourse,
      setQty,
      clear,
      items,
      totalEUR,
      count,
    }),
    [
      lines,
      addCourse,
      removeCourse,
      setQty,
      clear,
      items,
      totalEUR,
      count,
    ],
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de CartProvider");
  return ctx;
}
