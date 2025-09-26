"use client";

import React from "react";

export default function Ethics() {
  return (
    <div className=" shadow-sm p-6">
      <p className="text-slate-700 mb-3">
        Bruken av kunstig intelligens i beredskapsplanlegging åpner store
        muligheter, men krever nøye etiske avveiinger. For å etablere et
        triage-system må det behandles sensitive personopplysninger som helse-
        og demografidata. Dette gir utfordringer knyttet til personvern,
        datasikkerhet og tillit.
      </p>
      <p className="text-slate-700 mb-3">
        All databehandling må følge strenge rammer for innhenting, lagring og
        tilgang, og kun det nødvendige skal samles inn. Samtidig må systemet
        utformes rettferdig, slik at ingen grupper systematisk nedprioriteres.
        Åpenhet og tydelig kommunikasjon fra myndighetene er avgjørende for å
        skape tillit.
      </p>
      <p className="text-slate-700 mb-3">
        For å ivareta sikkerheten i kommunikasjonen mellom befolkningen og nødetatene, vil frivillige i HUB’ene motta krypterte nødsignaler i form av en enkel kode. Denne koden kan raskt og sikkert dekrypteres hos nødetatene ved hjelp av papirløsninger, uten behov for avansert teknologi. På denne måten sikres både robusthet og personvern, samtidig som nødsignalene forblir tilgjengelige og forståelige i en krisesituasjon.
      </p>
      <p className="text-slate-700">
        Slik kan vi utnytte teknologiens styrker uten å gå på bekostning av
        personvern, rettferdighet og menneskeverd.
      </p>
    </div>
  );
}
