// components/NorwayMapOverlay.tsx
import React from "react";
import { motion } from "framer-motion";

// const MAP_IMAGE = "Design-uten-navn-13-768x491.png";
const MAP_IMAGE = "Karta_Norge_Svart.jpg";

function NorwayMapOverlay() {
  const vw = 932;
  const vh = 1012;
  const nodes = [
    { x: 750, y: 120, name: "Nord"  },         // node 0
    { x: 600, y: 160, name: "Troms" },        // node 1
    { x: 460, y: 330, name: "Midt" },         // node 2 
    { x: 340, y: 560, name: "Trøndelag" },    // node 3
    { x: 130, y: 710, name: "Vest" },        // node 4
    { x: 290, y: 840, name: "Oslo/Viken" },  // node 5
    { x: 120, y: 900, name: "Sørvest" },     // node 6
    { x: 170, y: 940, name: "Agder" },       // node 7
    { x: 630, y: 260, name: "Sverige1" },     // node 8
    { x: 600, y: 360, name: "Sverige2" },     // node 9
    { x: 570, y: 510, name: "Sverige3" },     // node 10
    { x: 450, y: 660, name: "Sverige4" },    // node 11
    { x: 530, y: 925, name: "Sverige5" },    // node 12
  ];

  const links = [
    [nodes[0], { x: 600, y: 200 }, nodes[1]],
    [nodes[1], { x: 570, y: 200 }, nodes[2]],
    [nodes[2], { x: 400, y: 450 }, nodes[3]],
    [nodes[3], { x: 300, y: 750}, nodes[5]],
    [nodes[4], { x: 250, y: 700}, nodes[5]],
    [nodes[5], { x: 500, y: 880}, nodes[12]],
    [nodes[6], { x: 250, y: 880}, nodes[5]],
    [nodes[7],{ x: 290, y: 880}, nodes[5]],
    [nodes[8],{ x: 600, y: 200}, nodes[9]],
    [nodes[9],{ x: 290, y: 880}, nodes[10]],
    [nodes[10],{ x: 340, y: 600 }, nodes[11]],
    [nodes[11], { x: 340, y: 1000 }, nodes[12]],
    [nodes[12], { x: 340, y: 1000 }, nodes[5]],
  ];

  function roundedPath(points, radius = 22) {
    if (!points || points.length < 2) return "";
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length - 1; i++) {
      const p0 = points[i - 1];
      const p1 = points[i];
      const p2 = points[i + 1];
      const v1 = [p1.x - p0.x, p1.y - p0.y];
      const v2 = [p2.x - p1.x, p2.y - p1.y];
      const len1 = Math.hypot(v1[0], v1[1]) || 1;
      const len2 = Math.hypot(v2[0], v2[1]) || 1;
      const n1 = [v1[0] / len1, v1[1] / len1];
      const n2 = [v2[0] / len2, v2[1] / len2];
      const p1a = { x: p1.x - n1[0] * radius, y: p1.y - n1[1] * radius };
      const p1b = { x: p1.x + n2[0] * radius, y: p1.y + n2[1] * radius };
      d += ` L ${p1a.x} ${p1a.y} Q ${p1.x} ${p1.y} ${p1b.x} ${p1b.y}`;
    }
    const last = points[points.length - 1];
    d += ` L ${last.x} ${last.y}`;
    return d;
  }

return (
<div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-8 items-start">
  <svg
  viewBox={`0 0 ${vw} ${vh}`}
  xmlns="http://www.w3.org/2000/svg"
  className="w-full h-auto block select-none"
  preserveAspectRatio="xMidYMid slice"
>
  {/* Definer clipPath med avrundede hjørner */}
  <defs>
    <clipPath id="rounded-clip" clipPathUnits="userSpaceOnUse">
      <rect
        x="0"
        y="0"
        width={vw}
        height={vh}
        rx="32"   // juster radius (eks. 24–48px)
        ry="32"
      />
    </clipPath>
  </defs>

  {/* Kartet med avrundede hjørner */}
  <image
    href={MAP_IMAGE}
    x="0"
    y="0"
    width={vw}
    height={vh}
    preserveAspectRatio="xMidYMid meet"
    clipPath="url(#rounded-clip)"
  />

  {/* Streker */}
  {links.map((pts, i) => (
    <motion.path
      key={i}
      d={roundedPath(pts, 22)}
      fill="none"
      stroke="#2563eb"
      strokeWidth={6}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 2,
        delay: i * 0.3,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      opacity="0.9"
    />
  ))}

  {/* Noder */}
  {nodes.map((n, i) => (
    <g key={i} className="group">
      <circle cx={n.x} cy={n.y} r={9} fill="#1e3a8a" />
      <circle
        cx={n.x}
        cy={n.y}
        r={16}
        fill="none"
        stroke="#93c5fd"
        strokeDasharray="3 5"
        opacity="0.7"
      />
      <title>{n.name}</title>
    </g>
  ))}
</svg>

    <div className="p-6 rounded-3xl border bg-white/70 shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Visste du at...</h3>
      <p className="mb-4">
        «Dekningsundersøkelsen for 2024 viste at fiberdekningen nasjonalt var på 91 prosent» (Nasjonal kommunikasjonsmyndighet, 2025). 
      </p>
      <p className="mb-4">
        Dette betyr at en stor del av den norske befolkningen allerede har tilgang til fibernett, og at infrastrukturen er godt utbygd over store deler av landet. 
      </p>
      <p className="mb-4">
        Men fiberens potensial strekker seg langt utover vanlig internettbruk. Hva om vi kunne utnyttet den eksisterende fiberinfrastrukturen også i krisesammenheng? 
      </p>
    </div>
  </div>
);
}

export default NorwayMapOverlay;
