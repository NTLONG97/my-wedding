"use client";
import { useEffect, useRef, useState } from "react";
import config from "@/data/config";

// Nút nhạc nền nổi ở góc màn hình. `started` = đã mở thiệp.
export default function MusicPlayer({ started }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!started) return;
    if (!config.music.autoPlayAfterOpen) return;
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.6;
    a.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false)); // trình duyệt chặn tự phát -> chờ người bấm
  }, [started]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  if (!started) return null;

  return (
    <>
      <audio ref={audioRef} src={config.music.src} loop preload="auto" />
      <button
        onClick={toggle}
        aria-label={playing ? "Tắt nhạc" : "Bật nhạc"}
        className="fab fixed bottom-5 right-5 sm:right-[calc(50%-242px)] z-[45] w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-white flex items-center justify-center hover:scale-110 transition-transform"
      >
        <span className={playing ? "animate-spin-slow" : ""} style={{ animationDuration: "3s" }}>
          {playing ? "♪" : "♫"}
        </span>
      </button>
    </>
  );
}
