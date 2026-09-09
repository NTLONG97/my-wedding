"use client";
import { useEffect, useRef, useState } from "react";
import config from "@/data/config";

// Tự động "trình chiếu" cả trang. Cuộn ĐỀU TỪNG BƯỚC theo thời gian thực,
// tốc độ tự điều chỉnh theo tổng chiều cao -> không bị kẹt khi ảnh đang tải.
export default function AutoScroll({ started }) {
  const cfg = config.autoScroll || {};
  const enabled = cfg.enabled !== false;
  const duration = cfg.durationMs || 90000; // mili giây đi hết trang
  const loop = !!cfg.loop;
  const [playing, setPlaying] = useState(false);

  const posRef = useRef(0);
  const lastRef = useRef(0);

  useEffect(() => {
    if (!started || !enabled) return;
    const t = setTimeout(
      () => setPlaying(true),
      cfg.startDelayMs != null ? cfg.startDelayMs : 1300
    );
    return () => clearTimeout(t);
  }, [started, enabled, cfg.startDelayMs]);

  useEffect(() => {
    if (!playing) return;
    posRef.current = window.scrollY;      // đồng bộ vị trí đang đứng
    lastRef.current = performance.now();

    const id = setInterval(() => {
      const now = performance.now();
      const dt = now - lastRef.current;
      lastRef.current = now;

      const doc = document.documentElement;
      const maxY = doc.scrollHeight - window.innerHeight;

      // Tới đáy?
      if (window.scrollY + window.innerHeight >= doc.scrollHeight - 2) {
        if (loop) {
          window.scrollTo({ top: 0, behavior: "instant" });
          posRef.current = 0;
          lastRef.current = performance.now();
          return;
        }
        setPlaying(false);
        return;
      }

      // Tốc độ px/ms tính theo tổng chiều cao (đủ đi hết trong 'duration')
      const speed = maxY > 0 ? maxY / duration : 0.05;
      posRef.current += speed * dt;           // cộng dồn quãng đường
      window.scrollTo({ top: posRef.current, behavior: "instant" });
    }, 16);

    return () => clearInterval(id);
  }, [playing, duration, loop]);

  // Khách tự vuốt/lăn/bấm phím -> tạm dừng
  useEffect(() => {
    if (!started || !enabled) return;
    const pause = () => setPlaying(false);
    const onKey = (e) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", " ", "Home", "End"].includes(e.key)) {
        setPlaying(false);
      }
    };
    window.addEventListener("wheel", pause, { passive: true });
    window.addEventListener("touchmove", pause, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", pause);
      window.removeEventListener("touchmove", pause);
      window.removeEventListener("keydown", onKey);
    };
  }, [started, enabled]);

  if (!started || !enabled) return null;

  return (
    <button
      onClick={() => setPlaying((p) => !p)}
      aria-label={playing ? "Dừng trình chiếu" : "Tự cuộn trình chiếu"}
      title={playing ? "Dừng trình chiếu" : "Tự cuộn trình chiếu"}
      className="fab fixed bottom-20 right-5 sm:right-[calc(50%-242px)] z-[45] w-12 h-12 rounded-full bg-white/85 text-gold-700 border border-gold-400/50 backdrop-blur flex items-center justify-center hover:scale-110 transition-transform"
    >
      <span className="text-lg leading-none">{playing ? "❚❚" : "▶"}</span>
    </button>
  );
}
