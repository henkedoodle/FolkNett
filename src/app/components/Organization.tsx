"use client";

import React from "react";
import { Building2, Users, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Organization() {
  return (
    <section id="organization" className="mx-auto max-w-6xl px-4 py-0">
      <p className="text-lg text-slate-700 py-6">
      I en krisesituasjon er det ikke nok å ha teknologi og infrastruktur 
      – det må også være klart hvem som gjør hva, og hvordan informasjonsflyten styres. 
      God organisering sikrer at ressurser brukes effektivt, 
      at ansvar er tydelig fordelt, og at både nødetater, myndigheter, lokalsamfunn og 
      frivillige trekker i samme retning. Uten dette risikerer man at verdifull tid går 
      tapt, og at kritiske behov ikke møtes i tide.
      </p>
      <div className="grid gap-8 md:grid-cols-3">
        <Card className="rounded-2xl shadow-md bg-white/70">
          <CardContent className="p-6 space-y-4">
            <ShieldCheck className="h-10 w-10 text-blue-600" />
            <h3 className="text-xl font-semibold">Nødetater & myndigheter</h3>
            <p className="text-slate-700">
              Nødetatene har det overordnede ansvaret for aksjoner og
              ressursdisponering. På nasjonalt nivå fastsetter politiske
              myndigheter prioriteringer og fordeler ressurser mellom regioner.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md bg-white/70">
          <CardContent className="p-6 space-y-4">
            <Building2 className="h-10 w-10 text-green-600" />
            <h3 className="text-xl font-semibold">Lokale HUB’er</h3>
            <p className="text-slate-700">
              Når Folknett aktiveres, kan innbyggere manuelt sende ut SOS-signaler ved behov. 
              Disse signalene fanges opp av bemannede HUB’er, der de sorteres og prioriteres slik 
              at nødetatene ikke overbelastes, og hjelpen kan rettes dit behovet er størst.  
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md bg-white/70">
          <CardContent className="p-6 space-y-4">
            <Users className="h-10 w-10 text-orange-600" />
            <h3 className="text-xl font-semibold">Frivillige & lokalsamfunn</h3>
            <p className="text-slate-700">
              Lokalsamfunn og frivillige fungerer som fleksibel
              støttekapasitet. Organiseringen gir tydelige roller og balansert
              ansvar mellom nasjonale myndigheter, nødetater og innbyggere.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
