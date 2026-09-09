import config from "@/data/config";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

function Family({ p, label, delay }) {
  return (
    <Reveal delay={delay} className="flex-1">
      <div className="text-center">
        <h3 className="font-serif uppercase tracking-[0.15em] whitespace-nowrap text-lg md:text-2xl text-wine-700">
          {label}
        </h3>
        <div className="divider my-4"><span className="text-wine-500">♥</span></div>
        <div className="text-xs md:text-sm text-ink/75 leading-relaxed whitespace-nowrap">
          <p>{p.family.father}</p>
          <p>{p.family.mother}</p>
          {p.family.place && <p className="text-gold-600 mt-2">{p.family.place}</p>}
        </div>
      </div>
    </Reveal>
  );
}

export default function Couple() {
  const groomFirst = config.nameOrder !== "brideFirst";
  const left = groomFirst ? config.groom : config.bride;
  const right = groomFirst ? config.bride : config.groom;
  const leftLabel = groomFirst ? "Nhà Trai" : "Nhà Gái";
  const rightLabel = groomFirst ? "Nhà Gái" : "Nhà Trai";

  return (
    <section className="py-20 md:py-24 px-6 bg-cream-50">
      <div className="max-w-3xl mx-auto">
        <SectionTitle script="Our families" title="Gia Đình Hai Bên" />
        <div className="flex flex-row items-start justify-center gap-2 md:gap-8">
          <Family p={left} label={leftLabel} delay={0} />
          <div className="self-center pt-6 text-4xl md:text-5xl font-name text-wine-500">&amp;</div>
          <Family p={right} label={rightLabel} delay={150} />
        </div>
      </div>
    </section>
  );
}
