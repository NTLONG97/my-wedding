import config from "@/data/config";

export default function Footer() {
  const g = config.groom.short, b = config.bride.short;
  const names = config.nameOrder === "brideFirst" ? `${b} & ${g}` : `${g} & ${b}`;
  return (
    <footer className="relative py-16 px-6 text-center bg-gradient-to-b from-cream-100 to-cream-200">
      <p className="font-name text-5xl md:text-6xl text-wine-600">{names}</p>
      <div className="divider mt-6"><span>❦</span></div>
      <p className="text-ink/60 text-sm mt-6">{config.wedding.weekday} · {config.wedding.solar}</p>
      <p className="text-ink/40 text-xs mt-2">Made with love · {config.wedding.hashtag}</p>
    </footer>
  );
}
