"use client";
import { useEffect, useRef, useState } from "react";

// Hai ảnh thu nhỏ, ghép chồng so le; trượt từ trái & phải vào giữa khi cuộn tới.
export default function ChapterCollage({ images = [] }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [a, b] = images;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) setShow(true); }),
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative mx-auto max-w-md h-[380px] sm:h-[480px]">
      {/* Ảnh trái (thấp hơn) */}
      <div
        className={`absolute left-0 bottom-0 w-[58%] aspect-[3/4] rounded-lg overflow-hidden shadow-2xl ring-[6px] ring-white bg-cream-200 slide-left ${show ? "slide-in" : ""}`}
      >
        {a && <img src={a} alt="" loading="lazy" className="w-full h-full object-cover" />}
      </div>
      {/* Ảnh phải (cao hơn, đè lên) */}
      <div
        className={`absolute right-0 top-0 w-[56%] aspect-[3/4] rounded-lg overflow-hidden shadow-2xl ring-[6px] ring-white bg-cream-200 slide-right ${show ? "slide-in" : ""}`}
        style={{ transitionDelay: "0.15s" }}
      >
        {b && <img src={b} alt="" loading="lazy" className="w-full h-full object-cover" />}
      </div>
    </div>
  );
}
