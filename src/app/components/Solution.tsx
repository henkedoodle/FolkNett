"use client";

import React from "react";
import { Lightbulb } from "lucide-react";

export default function Solution({
  imageSrc = "litenting.png",
  imageAlt = "Illustrasjon av fiberbasert løsning",
}: {
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section
      id="solution"
      className="relative mx-auto w-full max-w-6xl px-4 py-0"
    >
      {/* Background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white to-slate-50"
      />

      <div className="grid items-start gap-10 md:grid-cols-2">
        {/* Venstre kolonne: tekst */}
        <div className="space-y-6 text-slate-700">
          <div className="flex items-center gap-3">
            <Lightbulb className="h-7 w-7 text-yellow-600" />
            <h3 className="text-2xl font-bold">... men vi er forberedt</h3>
          </div>

          <p>
            Vi mener at løsningen ligger rett under oss – i bakken. Norge er
            allerede dekket av kilometer på kilometer med fiberkabler, en
            infrastruktur som til daglig brukes til internett og TV. Men den
            samme fiberen kan også bli vår redning i en ekstrem krisesituasjon.
          </p>

          <p>
            Ved å koble enkle, batteridrevne enheter i hjemmene direkte til
            fibernettet, kan befolkningen både motta kritisk informasjon og
            sende nødsignaler selv når strøm, mobilnett og internett er
            utilgjengelig. Enhetene oversetter lyssignaler i fiberkablene til
            tekstmeldinger, krever minimalt med strøm og kan derfor drives på
            batteri i lang tid.
          </p>

          <p>
            Dette gjør det mulig å etablere toveis kommunikasjon gjennom et
            lavteknologisk og menneskedrevet beredskapssystem – bygget på en
            infrastruktur som allerede finnes.
          </p>
        </div>

        {/* Høyre kolonne: bilde */}
        <figure className="mx-auto w-full max-w-md">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              width={1024}
              height={1024}
              className="w-full aspect-square rounded-2xl object-cover shadow-sm ring-1 ring-slate-900/10"
              loading="lazy"
            />
          ) : (
            <div className="flex aspect-square w-full items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white text-sm text-slate-500">
              BILDE 1024×1024
            </div>
          )}
          <figcaption className="mt-2 text-center text-xs text-slate-500">
            Ideskisse av en tenkt enhet som kobles til fiberkabelen i hjemmet.
          </figcaption>
        </figure>
        </div>
    </section>
  );
}
