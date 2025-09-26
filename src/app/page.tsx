"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Zap, PlugZap, SignalHigh, Download, Heading3 } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import NorwayMapOverlay from "../app/components/NorwayMapOverlay";
import AboutUs from "../app/components/AboutUs";
import Challenge from "../app/components/Challenge";
import Sustainability from "../app/components/Sustainablity";
import Organization from "../app/components/Organization";
import Preparedness from "../app/components/Preparedness";
import Solution from "../app/components/Solution";
import Ethics from "../app/components/Ethics";
import International from "./components/International";
import Technology from "../app/components/Technology";
import IntroSection from "../app/components/IntroSection";
import Source from "../app/components/Source";




// -------------------- DATA --------------------
const advantages = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Robust fysisk infrastruktur",
    body: "Fiber er passive glasskabler uten aktiv radiosender. Riktig segmentert kan det fungere som et lukket nødnett uavhengig av kommersielt internett.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Høy kapasitet og lav forsinkelse",
    body: "Lysbåren kommunikasjon gir ekstrem båndbredde og stabil forsinkelse. Det muliggjør kriseledelse, kart, tale og video i kritiske noder.",
  },
  {
    icon: <PlugZap className="h-6 w-6" />,
    title: "Lavt strømbehov i endenoder",
    body: "Selve fiberen trenger ikke strøm. Kun endepunkter/svitsjer/optiske noder må nødstrømmes – mulig med små batterier/aggregat.",
  },
  {
    icon: <SignalHigh className="h-6 w-6" />,
    title: "Skalerer fra lokalt til nasjonalt",
    body: "Kan koble kommunale provisoriske krisesentre, politi/helse og lokalradio i ring- og mesh-topologier med automatisk omruting.",
  },
];

// -------------------- SECTION SPY --------------------
function useSectionSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(id);
          });
        },
        { threshold: 0.6 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);
  return active;
}

// -------------------- NAV --------------------
function StickyNav({ active }: { active: string }) {
  const items = [
    { id: "challenge", label: "Utfordringer" },
    { id: "fiber", label: "Fiberdekning" },
    { id: "solution", label: "Løsningen" },
    { id: "preparedness", label: "Beredskap" },
    { id: "organization", label: "Organisering" },
    { id: "sustainability", label: "Bærekraft" },
    { id: "ethics", label: "Etikk" },
    { id: "aboutus", label: "Team" },
    { id: "faq", label: "FAQ" },
  ];
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 flex items-center h-14">
        <div className="font-semibold">FolkNett.no</div>
        <div className="ml-auto flex items-center gap-2 overflow-x-auto">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className={`px-3 py-1.5 rounded-full text-sm transition ${
                active === it.id ? "bg-slate-900 text-white" : "hover:bg-slate-200"
              }`}
            >
              {it.label}
            </a>
          ))}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="ml-2">
                Last ned én-side <Download className="ml-2 h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Én-side (PDF)</DialogTitle>
              </DialogHeader>
              <p className="text-sm text-slate-600">
                Bruk nettleserens "Skriv ut" → "Lagre som PDF". Sidene er optimerte for A4.
              </p>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400 animate-[pulse_4s_ease-in-out_infinite]" />
    </div>
  );
}
// -------------------- PAGE --------------------

export default function Page() {
  const sections = [
  "intro-section",
  "hero",
  "map",
  "faq",
  "aboutus",
  "challenge",
  "sustainability",
  "preparedness",
  "ethics",     
  "organization",
  "safety",
  "international",
  "technology",
  "solution",
  "introduction",
];

  const active = useSectionSpy(sections);
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.92]);

  const [simulateHours, setSimulateHours] = useState(168);
  const impactData = useMemo(() => {
    const out: { name: string; fiber: number; radio: number }[] = [];
    for (let h = 0; h <= simulateHours; h += 12) {
      const fiberUptime = 90 + 8 * Math.exp(-h / 72);
      const radioUptime = 70 + 10 * Math.exp(-h / 36);
      out.push({
        name: `t+${h}t`,
        fiber: Math.round(fiberUptime),
        radio: Math.round(radioUptime),
      });
    }
    return out;
  }, [simulateHours]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <StickyNav active={active} />

      {/* HERO */}
      <section id="hero" className="relative h-[90vh] w-full">
        {/* Selve bakgrunnsbildet */}
        <img
          src="hero_bg2.png" // legg bildet i public/images/
          alt="Bakgrunnsillustrasjon av krisekommunikasjon"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay for å gjøre teksten lesbar */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Innhold oppå bildet */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="text-4xl font-bold sm:text-6xl">FolkNett</h1>
          <h2 className="mt-4 text-2xl font-semibold sm:text-4xl">
            Kommunikasjon gjort mulig, også i krisesituasjoner
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-gray-200">
            Hva gjør vi når alt blir svart? Når strøm, internett og mobilnett
            forsvinner, settes samfunnet på prøve. Kaos kan bare unngås dersom vi har
            et system som sikrer at livsviktig informasjon fortsatt flyter.
          </p>
        </div>
      </section>


      <section id="intro-section" className="pt-10">
        <IntroSection />
      </section>

     

      {/* Utfordringen */}
      <section id="challenge" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Utfordringer</h2>
        <Challenge />
      </section>

      {/* NORGEKART */}
      <section id="fiber" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Fiberdekning i Norge
        </h2>
          {/* Kart */}
          <div>
            <NorwayMapOverlay />
          </div>
      </section>

      {/* Løsningen */}
      <section id="solution" className="mx-auto max-w-6xl px-4 py-0">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Løsningen</h2>
        <Solution />
      </section>

      {/* Teknologi */}
      <section id="technology" className="mx-auto max-w-6xl px-4 py-6">
        <Technology />
      </section>
      
      {/* Beredskap og planlegging */}
      <section id="preparedness" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Beredskap og planlegging</h2>
        <Preparedness />
      </section>

      {/* Organisering */}
      <section id="organization" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Organisering</h2>
        <Organization />
      </section>

      {/* Internasjonalt samarbeid */}
      <section id="international" className="mx-auto max-w-6xl px-4 py-0">
        <h3 className="text-3xl md:text-3xl font-bold mb-8">
          Internasjonalt og regionalt samarbeid
        </h3>
        <International />
      </section>

      {/* Bærekraft */}
      <section id="sustainability" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Bærekraft</h2>
        <Sustainability />
      </section>

      {/* Etikk og personvern */}
      <section id="ethics" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Etikk og personvern</h2>
        <Ethics />
      </section>

      {/* About us */}
      <section id="aboutus" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Om oss</h2>
        {/* IKKE legg grid her hvis AboutUs har egen layout */}
        <AboutUs />
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold">FAQ</h2>
        <div className="mt-6 divide-y rounded-2xl border bg-white/70">
          <details className="group">
            <summary className="cursor-pointer p-5 font-medium">
              Hvorfor er ikke radio tilstrekkelig under en slik krise? 
            </summary>
            <div className="px-5 pb-5 text-slate-700">
              Radio er nyttig for rask, enveis kommunikasjon fra myndighetene til befolkningen, men den har klare begrensninger. Den er avhengig av strøm i sendere og mellomstasjoner, sårbar for jamming og sabotasje, og gir ingen mulighet for at innbyggerne kan sende nødsignaler tilbake. I tillegg kan radiosignaler forstyrres av elektromagnetiske felt – for eksempel fra solstormer, lyn eller til og med menneskeskapte kilder. Fiber derimot er gravd ned under bakken, skjermet mot slike forstyrrelser, og signalene sendes som lys fremfor elektrisitet. Dermed muliggjør fiber sikker, toveis kommunikasjon mellom husholdninger og nødetater. Den beste beredskapen oppnås ved å kombinere radios brede rekkevidde med fibers robuste tilbakemeldingssystem – en redundans som styrker samfunnets motstandskraft i kriser. 
            </div>
          </details>
          <details className="group">
            <summary className="cursor-pointer p-5 font-medium">
            Hvordan kan enhetene gjøres tilgjengelige for alle? 
            </summary>
            <div className="px-5 pb-5 text-slate-700">
              Vi mener at teknologien er så enkel at den kan implementeres i husholdninger uten store kostnader. Enhetene kan produseres til en bærekraftig pris, men for at Folknett skal fungere, er det avgjørende at alle husholdninger får tilgang. 

              Det finnes flere mulige modeller for finansiering og distribusjon: 
              <ul className="list-disc list-inside space-y-3">

                <li>
                  <strong>Statlig finansiering:</strong> Myndighetene dekker kostnaden og distribuerer enhetene, på samme måte som røykvarslere tidligere. 
                </li>

                <li>
                  <strong>Lovpålagt ordning:</strong>  Alle hjem må ha en enhet, tilsvarende krav til brannvarslere eller nødstrømsløsninger i visse bygg. 
                </li>

                <li>
                  <strong>Spleiseløsninger:</strong>  Staten dekker deler av kostnaden, mens husholdningene betaler en egenandel. 
                </li>
                
                <li>
                  <strong>Integrert i eksisterende infrastruktur:</strong>  Enhetene kan distribueres sammen med nye fiberinstallasjoner eller oppgraderinger, slik at utbyggere og netteiere bidrar i utrullingen. 
                </li>

              </ul>

            </div>
          </details>
          <details className="group">
            <summary className="cursor-pointer p-5 font-medium">
            Trenger fiber strøm eller internett for å fungere? 
            </summary>
            <div className="px-5 pb-5 text-slate-700">
            Fiberkabelen i seg selv er passiv og trenger verken strøm eller internett – den leder bare lyssignaler gjennom glass. Det som krever strøm er utstyret i endene, altså senderne og mottakerne som konverterer lyset til signaler du kan lese på en skjerm. Derfor kan fiber fortsatt brukes i en krise dersom det finnes batteridrevne enheter eller nødstrøm. 
            </div>
          </details>
          <details className="group">
            <summary className="cursor-pointer p-5 font-medium">
            Hva med folk som ikke har fiber?
            </summary>
            <div className="px-5 pb-5 text-slate-700">
            I en krisesituasjon vil personer uten fiber kunne oppsøke en lokal HUB eller en nabo med tilkobling. Der kan de både sende SOS-varsler og motta kritisk informasjon fra myndighetene.            </div>
          </details>
          <details className="group">
            <summary className="cursor-pointer p-5 font-medium">
            Hva er forskjellen mellom FolkNett og nødnett?
            </summary>
            <div className="px-5 pb-5 text-slate-700">
            Nødnett er det nasjonale kommunikasjonsnettet for politi, brann og helse. Det er robust, med redundans og reservestrøm, men er kun laget for samarbeid mellom nødetater, ikke for direkte kontakt med befolkningen. FolkNett utfyller dette ved å gi innbyggerne en enkel kanal til å sende SOS-varsler og motta livsviktig informasjon selv når strøm, internett og mobilnett er nede.
            </div>
          </details>
        </div>
      </section>    

<section className="mx-auto max-w-6xl px-4 py-20">
      <Source />
</section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 text-sm text-slate-600">
          © 2025 FolkNett
        </div>
      </footer>
    </div>
  );
}
