"use client";

import React from "react";

type VideoProps = {
  src?: string;
  poster?: string;
  className?: string;
  controls?: boolean;
  loop?: boolean;
};

export default function Video({
  src = "/video.mp4",
  poster,
  className = "w-full rounded-2xl shadow-lg",
  controls = true,
  loop = true,
}: VideoProps) {
  return (
    <video
      className={className}
      poster={poster}
      src={src}
      autoPlay   // alltid autoplay
      muted      // alltid muted (ellers stopper browseren)
      playsInline
      loop={loop}
      controls={controls}
    >
      <source src={src} type="video/mp4" />
      Din nettleser støtter ikke video.
    </video>
  );
}
