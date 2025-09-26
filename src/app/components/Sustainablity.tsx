import React from "react";

// Bærekraft / Sustainability section
// Drop this file into your components folder and import <Sustainability /> where needed.
// Place the SDG icons under /public/sdg/ as goal3.png, goal9.png, goal11.png, goal16.png (or adjust paths below).

type Item = {
  id: number;
  sdg: number;
  title: string;
  body: string;
  image: string;
};

const items: Item[] = [
  {
    id: 1,
    sdg: 3,
    title: "GOD HELSE OG LIVSKVALITET",
    body:
      "Løsningen sikrer at befolkningen kan varsle nødetater og få hjelp raskt selv under kriser, noe som redder liv. KI-basert prioritering gjør at de mest sårbare får hjelp først, og dedikerte kommunikasjonskanaler sørger for rask respons ved medisinske nødstilfeller.",
    image: "/sdg/goal3.png",
  },
  {
    id: 2,
    sdg: 9,
    title: "INDUSTRI, INNOVASJON OG INFRASTRUKTUR",
    body:
      "Løsningen utnytter eksisterende fiberinfrastruktur på nye måter, og kombinerer den med KI og lavteknologiske løsninger. Ved å bygge videre på robust fiberdekning og innføre batteridrevne enheter, skapes det en innovativ og bærekraftig kommunikasjonsløsning.",
    image: "/sdg/goal9.png",
  },
  {
    id: 3,
    sdg: 11,
    title: "BÆREKRAFTIGE LOKALSAMFUNN",
    body:
      "Krisetid krever samarbeid mellom innbyggere, myndigheter og nødetater. FolkNett gir lokalsamfunn verktøy for å dele og motta informasjon, og husholdninger kan sende nødsignaler selv uten strøm eller moderne nettverk.",
    image: "/sdg/goal11.png",
  },
  {
    id: 4,
    sdg: 16,
    title: "FRED, RETTFERDIGHET OG VELFUNGERENDE INSTITUSJONER",
    body:
      "Tillit og stabilhet i samfunnet styrkes når folk vet at kommunikasjonen ikke streiker, selv ved en krise.",
    image: "/sdg/goal16.png",
  },
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="mx-auto max-w-6xl px-4 py-0">

      <div className="space-y-6">
        {items.map((item, idx) => (
          <article
            key={item.id}
            className="rounded-2xl border bg-white/70 backdrop-blur p-6 md:p-8 shadow-sm"
          >
            {/* Stable layout using grid so image always sits neatly to the right */}
            <div
              className={`grid items-center md:items-start gap-6 md:gap-8 md:grid-cols-12 ${
                idx % 2 === 0 ? "" : "md:[direction:rtl] md:text-left"
              }`}
            >
              {/* Text */}
              <div className="md:col-span-10 [direction:ltr] pr-2">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-700 ">{item.body}</p>
              </div>

              {/* SDG Image */}
              <div className="md:col-span-2 [direction:ltr] justify-self-end">
                <figure className="flex items-center md:justify-end">
                  <img
                    src={item.image}
                    alt={`FN bærekraftsmål ${item.sdg}`}
                    className="w-28 h-28 md:w-36 md:h-36 object-contain rounded-xl border"
                    loading="lazy"
                  />
                </figure>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
