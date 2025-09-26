"use client";

import React from "react";
import { Globe, Landmark, Handshake } from "lucide-react";

export default function International() {
  return (
    <div className="space-y-6">
      <p className="text-lg text-slate-700">
        Ved å kombinere internasjonalt samarbeid, politisk koordinering,
        lokalsamfunnets innsats og effektiv ressursdeling, samt utnyttelse av
        fiberinfrastruktur som strekker seg over landegrensene, kan man sikre
        robust og målrettet krisehåndtering selv under omfattende og
        tverrnasjonale strøm- og kommunikasjonssvikt.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Kort 1 */}
        <div className="p-6 rounded-2xl bg-white/70 border shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="h-5 w-5 text-slate-600" />
            <h3 className="font-semibold text-lg">Internasjonalt fibernettverk</h3>
          </div>
          <p className="text-slate-700">
            Det internasjonale fibernettverket gjør det mulig for den norske
            regjeringen å sende viktig informasjon fra andre land hvor strøm og
            digitale tjenester fortsatt fungerer. Dette sikrer at befolkningen
            kan motta kritiske beskjeder selv om infrastrukturen i Norge er lammet.
          </p>
        </div>

        {/* Kort 2 */}
        <div className="p-6 rounded-2xl bg-white/70 border shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Landmark className="h-5 w-5 text-slate-600" />
            <h3 className="font-semibold text-lg">Politisk koordinering</h3>
          </div>
          <p className="text-slate-700">
            Tydelig politisk koordinering er avgjørende for raske beslutninger
            om prioritering av ressurser og innsatsområder, både internasjonalt
            og regionalt. Dette sikrer målrettede og samkjørte tiltak.
          </p>
        </div>

        {/* Kort 3 */}
        <div className="p-6 rounded-2xl bg-white/70 border shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Handshake className="h-5 w-5 text-slate-600" />
            <h3 className="font-semibold text-lg">Ressursdeling</h3>
          </div>
          <p className="text-slate-700">
            Effektiv ressursdeling – både av materiell og personell – gjør det
            mulig å dekke kritiske behov selv når nasjonale forsyningslinjer er
            lammet. Lokalsamfunnene blir viktige aktører for å distribuere hjelp
            og informasjon på en strukturert måte.
          </p>
        </div>
      </div>
    </div>
  );
}
