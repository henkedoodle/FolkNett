"use client";

import React from "react";
import { Cable, Brain, BookOpen, Drill } from "lucide-react";

export default function Technology() {
  return (
    <section className="space-y-10">
      <div className="flex items-center gap-3">
            <Drill className="h-7 w-7 text-yellow-600" />
            <h3 className="text-2xl font-bold">Teknologi</h3>
          </div>
      <div className="grid gap-8 md:grid-cols-3">
        {/* Fiberoptikk */}
        <div className="p-6 rounded-2xl bg-white/70 border shadow-sm flex flex-col items-center text-center">
          <Cable className="h-10 w-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fiberoptikk</h3>
          <p className="text-slate-700 mb-3">
            Fiberoptikk er små glassledninger som overfører lysimpulser, over lange rekkevidder. I dag brukes disse i hovedsak til tv og internett. I nyere tid har fiberoptikk også blitt brukt i krigssammenheng, der pålitelighet og sikker kommunikasjon er avgjørende. 
          </p>
          <p className="text-slate-700 mb-3">
            Fiberkabler består i praksis av to kabler i én, noe som muliggjør toveis kommunikasjon.
            Hovedsakelig brukes enveiskommunikasjon fra staten til privatpersoner, men systemet
            kan også sende nødbeskjeder til helsevesenet. [<a href="#ref8" className="text-blue-600 hover:underline">8</a>] 
          </p>
          <a
            href="https://snl.no/fiberoptikk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Les mer på Store norske leksikon
          </a>
        </div>

        {/* Kunstig intelligens */}
        <div className="p-6 rounded-2xl bg-white/70 border shadow-sm flex flex-col items-center text-center">
          <Brain className="h-10 w-10 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Kunstig intelligens</h3>
          <p className="text-slate-700 mb-3">
            Kunstig intelligens (KI) er et felt innen datateknologi som utvikler systemer og programmer som kan utføre oppgaver som normalt krever menneskelig intelligens. Dette kan inkludere læring, problemløsning, mønstergjenkjenning, språkforståelse, beslutningstaking og tilpasning til nye situasjoner. I den tiden vi er nå, akselerer bruken og omfanget av KI enormt. Dette åpner opp for et nytt landskap av løsninger og tilnærminger vi før ikke trodde var mulig. [<a href="#ref9" className="text-blue-600 hover:underline">9</a>]
          </p>
          <a
            href="https://snl.no/kunstig_intelligens"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Les mer på Store norske leksikon
          </a>
        </div>

        {/* Elektronisk blekk */}
        <div className="p-6 rounded-2xl bg-white/70 border shadow-sm flex flex-col items-center text-center">
          <BookOpen className="h-10 w-10 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Elektronisk blekk (E-ink)</h3>
          <p className="text-slate-700 mb-3">
            Elektronisk blekk, eller e-blekk, er en skjermteknologi som etterligner utseendet til papir.
            Den bruker nesten ikke strøm – kun når innholdet endres – og gir god lesbarhet i sterkt sollys.
          </p>
          <p className="text-slate-700 mb-3">
            Teknologien brukes i dag på lesebrett og kalkulatorer, men kan også brukes i beredskapsenheter
            som må være energieffektive og alltid lesbare.
          </p>
          <a
            href="https://teksiden.no/teknologi/ny-type-elektronisk-blekk-kan-forvandle-fremtidens-elektronikk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Les mer på Teksiden
          </a>
        </div>
      </div>
    </section>
  );
}
