import React from "react";
import { TrendingDown } from "lucide-react";

export default function Challenge({
  imageSrc = "ambulanse.png",
  imageAlt = "Illustrasjon av beredskap/kommunikasjon i krise",
}: {
  imageSrc?: string
  imageAlt?: string
}) {
  return (
    <section id="challenge" className="relative mx-auto w-full max-w-6xl px-4 py-0">
      {/* Background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white"
      />
      <div className="flex items-center gap-3">
            <TrendingDown className="h-7 w-7 text-yellow-600" />
            <h3 className="text-2xl font-bold">Når alt går ned ...</h3>
          </div>
      <div className="grid items-start gap-10 md:grid-cols-2 px-6 pt-6">
        {/* Left column: text */}
        
        <div className="space-y-6 text-slate-700">
          <p>
        Forestill deg at hele Skandinavia mister strøm, internett, mobilnett og GPS i sju døgn. 
        Uten digitale kanaler lammes både myndighetene og innbyggerne, og samfunnet mister 
        evnen til å koordinere og reagere. Dette reiser to avgjørende spørsmål:
          </p>

          <p className="font-semibold text-slate-900">
            Hvordan kan befolkningen kontakte nødetater når livstruende hendelser inntreffer og
            tradisjonelle kanaler svikter?
          </p>

          <p>
            I et scenario der strøm, internett, mobilnett og GPS-systemer ikke fungerer, blir det
            avgjørende å ha systemer som gjør det mulig for innbyggerne å sende nødsignaler og
            motta hjelp raskt. Samtidig må nødetatene kunne prioritere og organisere innsatsen slik
            at de med størst behov får hjelp først, selv under kaotiske forhold.
          </p>
        </div>

        {/* Right column: image */}
        <figure className="mx-auto w-full max-w-xl">
          {imageSrc ? (
            // Use a plain <img> to avoid Next.js-specific requirements.
            <img
              src={imageSrc}
              alt={imageAlt}
              className="p-3 aspect-video w-full items-center rounded-2xl object-cover shadow-sm ring-1 ring-slate-900/10"
              loading="lazy"
            />
          ) : (
            // Placeholder when no image provided
            <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white text-sm text-slate-500">
              BILDE
            </div>
          )}
        </figure>
      </div>

      <div className="mt-10 space-y-6 text-slate-700 px-6">
        <p className="font-semibold text-slate-900">
          Hvordan kan regjeringen formidle kritisk informasjon til befolkningen når alle digitale
          kanaler er ute av drift?
        </p>
        <p>
          For å opprettholde trygghet og koordinering i samfunnet, er det nødvendig å utvikle
          løsninger som kan fungere uten strøm, mobilnett og internett, og som sikrer at alle får
          relevant og korrekt informasjon når det virkelig gjelder.
        </p>
      </div>
    </section>
  )
}
