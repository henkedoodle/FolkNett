import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="bg-slate-900 text-white px-10 py-10 lg:py-10">
      <div className="mx-auto max-w-4xl text-center py-0">
        <h2 className="mt-10 text-xl font-semibold text-cyan-200 sm:text-2xl">
          Fiberoptisk kommunikasjon i ekstraordinære tilfeller
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
          Vår løsning fokuserer på å utnytte eksisterende infrastruktur, som fiberkabelnettverk, for å etablere et robust og skalerbart system for kommunikasjon mellom myndigheter, nødetater og husholdninger, og kombinerer pålitelighet med innovasjon for å styrke samfunnets motstandsdyktighet.
        </p>
      </div>
    </section>
  );
}
