"use client";

import React from "react";

type TeamMember = {
  name: string;
  year: string;
  img: string;
  study: string;
};

const team: TeamMember[] = [
  { 
    name: "Eivin Burmester",
    year: "4. Klasse",
    img: "/team/eivin.png",
    study: "Marin Kybernetikk" 
  },
  { 
    name: "Eirik Hekkli",
    year: "3. Klasse",
    img: "/team/eirik.png",
    study: "Marin Teknikk" 
  },
  { 
    name: "Camilla Gloppen",
    year: "5. Klasse",
    img: "/team/camilla.png",
    study: "Organisasjon, Digitalisering, Administrasjon og Arbeid" 
  },
  { 
    name: "Henrik Sehm-Hansen",
    year: "3. Klasse",
    img: "/team/henrik.png",
    study: "Industriell Økonomi og Teknologiledelse" 
  },
  { 
    name: "Syver Strand",
    year: "2. Klasse",
    img: "/team/syver.png",
    study: "Maskiningeniør" 
  },
];

type CardProps = {
  m: TeamMember;
};

function Card({ m }: CardProps) {
  return (
    <div className="about-card relative !static bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center w-56 shrink-0">
      <img
        src={m.img}
        alt={m.name}
        className="!w-32 !h-32 !rounded-full !object-cover !mb-4 !block"
      />
      <h2 className="text-lg font-semibold">{m.name}</h2>
      <p className="text-sm text-slate-500">{m.year}</p>
      <p className="mt-2 text-sm">{m.study}</p>
    </div>
  );
}

export default function AboutUs() {
  return (
    <section className="about-wrapper isolate mx-auto max-w-6xl px-1 py-12">
      {/* Mobil/Tablet: horisontal scroller */}
      <div className="lg:hidden overflow-x-auto no-scrollbar">
        <div className="flex flex-nowrap items-stretch gap-1 pr-4">
          {team.map((m, i) => (
            <Card key={i} m={m} />
          ))}
        </div>
      </div>

      {/* Desktop: grid med 5 kolonner */}
      <div className="hidden lg:grid lg:grid-cols-5 lg:gap-8">
        {team.map((m, i) => (
          <Card key={i} m={m} />
        ))}
      </div>
    </section>
  );
}
