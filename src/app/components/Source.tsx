"use client";

import React from "react";

export default function Sources() {
  const sources = [
    {
      title: "God helse og livskvalitet (FN-sambandet)",
      url: "https://fn.no/om-fn/fns-baerekraftsmaal/god-helse-og-livskvalitet",
    },
    {
      title: "Industri, innovasjon og infrastruktur (FN-sambandet)",
      url: "https://fn.no/om-fn/fns-baerekraftsmaal/industri-innovasjon-og-infrastruktur",
    },
    {
      title: "Bærekraftige byer og lokalsamfunn (FN-sambandet)",
      url: "https://fn.no/om-fn/fns-baerekraftsmaal/baerekraftige-byer-og-lokalsamfunn",
    },
    {
      title: "Fred, rettferdighet og velfungerende institusjoner (FN-sambandet)",
      url: "https://fn.no/om-fn/fns-baerekraftsmaal/fred-rettferdighet-og-velfungerende-institusjoner",
    },
    {
      title: "St. Meld. nr. 29 (2011–2012). Samfunnssikkerhet. Justis- og beredskapsdepartementet",
      url: "https://www.regjeringen.no/no/dokumenter/meld-st-29-20112012/id685578/?ch=5&utm",
    },
    {
      title: "Nasjonal kommunikasjonsmyndighet (2025). Husstandsdekning for fast bredbånd 2024",
      url: "https://www.nkom.no/aktuelt/husstandsdekning-for-fast-bredband-2024-regionale-og-nasjonale-tall",
    },
    {
      title: "Direktoratet for samfunnssikkerhet og beredskap. Hva er Nødnett?",
      url: "https://www.dsb.no/nodnett/om-nodnett/hva-er-nodnett/",
    },
    {
      title: "Johnsen, R., & Øverby, H. (2024). Fiberoptikk. I Store norske leksikon",
      url: "https://snl.no/fiberoptikk",
    },
    {
      title: "Tidemann, A., & Arnesen, L. (2025). Kunstig intelligens. I Store norske leksikon",
      url: "https://snl.no/kunstig_intelligens",
    },
    {
      title: "Vil fremtidens Nødnett fungere i ekstremvær? (Sikkerhet og beredskap)",
      url: "https://www.sikkerhetogberedskap.no/nodnett/vil-fremtidens-nodnett-fungere-i-ekstremvaer/101620?utm_source=chatgpt.com",
    },
    {
      title: "Hvordan radiosignal forstyrres (NDLA)",
      url: "https://ndla.no/nn/r/elektroniske-kretser-og-nettverk-el-ele-vg1/hvordan-radiosignal-forstyrres/c19206c001",
    },
  ];

  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">Kilder</h2>
      <ol className="list-decimal list-inside space-y-2 text-blue-700 underline">
        {sources.map((source, index) => (
          <li key={index}>
            <a href={source.url} target="_blank" rel="noopener noreferrer">
              {source.title}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
