"use client";

import React from "react";

export default function Sources() {
  const sources = [
    {
      title: "God helse og livskvalitet",
      url: "https://fn.no/om-fn/fns-baerekraftsmaal/god-helse-og-livskvalitet",
    },
    {
      title: "Industri, innovasjon og infrastruktur",
      url: "https://fn.no/om-fn/fns-baerekraftsmaal/industri-innovasjon-og-infrastruktur",
    },
    {
      title: "Bærekraftige byer og lokalsamfunn",
      url: "https://fn.no/om-fn/fns-baerekraftsmaal/baerekraftige-byer-og-lokalsamfunn",
    },
    {
      title: "Fred, rettferdighet og velfungerende institusjoner",
      url: "https://fn.no/om-fn/fns-baerekraftsmaal/fred-rettferdighet-og-velfungerende-institusjoner",
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
