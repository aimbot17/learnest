import React from "react";
import Image from "next/image";

const trustBadges = [
  { src: "/logos/harvard.png", alt: "Harvard University" },
  { src: "/logos/mit.png", alt: "Massachusetts Institute of Technology" },
  { src: "/logos/stanford.png", alt: "Stanford University" },
];

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
      {trustBadges.map((badge, index) => (
        <div
          key={index}
          className="w-24 sm:w-32 h-12 sm:h-16 relative grayscale hover:grayscale-0 transition-all duration-300"
        >
          <Image
            src={badge.src}
            alt={badge.alt}
            layout="fill"
            objectFit="contain"
          />
        </div>
      ))}
    </div>
  );
}
