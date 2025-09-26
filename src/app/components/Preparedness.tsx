"use client";

import { motion } from "framer-motion";
import { Network, Activity } from "lucide-react";

export default function Preparedness() {
  return (
    <section id="preparedness" className="mx-auto max-w-6xl px-4 py-0">
      <p className="text-slate-700 text-lg leading-relaxed">
        For å håndtere en ekstrem krisesituasjon er det avgjørende at samfunnet
        forbereder seg på forhånd. Dersom alle husholdninger sender meldinger
        direkte til nødetatene, risikerer vi et massivt trykk av ukritiske
        varsler som vil lamme systemet. Derfor må informasjon filtreres og
        prioriteres allerede i forkant – gjennom nøye planlegging og bruk av
        kunstig intelligens (KI).
      </p>

      {/* Grid med HUB og bildet */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {/* HUB’er med KI */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-2xl bg-white/70 border shadow-sm"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-50 text-blue-700">
              <Network className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-xl">
                Planlegging av HUB’er med KI
              </h3>
              <p className="text-slate-700 mt-2 leading-relaxed">
                Løsningen bygger på etablering av lokale HUB’er ved knutepunkter som skoler og samfunnshus. Disse fungerer som bindeledd mellom befolkningen og nødetatene, og samler inn SOS-varsler fra husholdningene. Varslene filtreres og vurderes manuelt opp mot forhåndsdefinerte prioriteringslister, slik at nødetatene kun mottar de mest kritiske tilfellene. På denne måten unngås overbelastning, og ressursene kan rettes dit behovet er størst.
                <br />
                <br />
                Plasseringen og oppkoblingen av HUB’ene må planlegges nøye. KI kan brukes i forberedelsesfasen til å simulere ulike krisescenarier og analysere faktorer som befolkningstetthet, sårbar infrastruktur, reisetid for nødetater og mulige flaskehalser i nettet. Basert på denne innsikten kan man identifisere optimale lokasjoner for HUB’ene, slik at systemet blir både robust og skalerbart.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Fullbredde-bilde (vises i grid som høyre kolonne) */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-sm"
        >
          <img
            src="nodnett2.jpg" // <-- Bytt til ditt bilde
            alt="Illustrasjon av beredskap"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Flyttet Triage-seksjon under */}
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="p-6 rounded-2xl bg-white/70 border shadow-sm mt-10"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-red-50 text-red-700">
            <Activity className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-xl">
              Triage og prioritering med KI
            </h3>
            <p className="text-slate-700 mt-2 leading-relaxed">
              I medisinen betyr triage å sortere pasienter etter alvorlighetsgrad slik at de som trenger hjelp raskest, får det først. Det samme prinsippet kan overføres til samfunnsberedskap. I en krisesituasjon er ikke alle behov like akutte, og ressursene er begrensede.
            </p>
            <p className="text-slate-700 mt-2 leading-relaxed">
              KI kan etablere et system der husholdninger kategoriseres i nivåer:
            </p>
            <p className="text-slate-700 mt-2 leading-relaxed">
              Når en krise oppstår, kan HUB’ene og nødetatene bruke denne forhåndsdefinerte strukturen, slik at personer med høyest risiko for å bli utsatt for kritiske skader prioriteres først.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
