"use client";

import React from "react";

const awards = [
  { src: "/awards/1.webp", name: "Best Service 2024" },
  { src: "/awards/2.webp", name: "Top Compliance Firm" },
  { src: "/awards/3.webp", name: "Excellence in Privacy" },
  { src: "/awards/4.webp", name: "Founder's Choice Award" },
  { src: "/awards/5.webp", name: "Global Business Partner" },
  { src: "/awards/6.webp", name: "UK Enterprise Award" },
  { src: "/awards/7.webp", name: "Financial Services Leader" },
];

// Duplicate once for seamless infinite loop
const extendedAwards = [...awards, ...awards, ...awards, ...awards, ...awards];


export default function AwardsSection() {
  return (
    <section
      className="bg-gray-50 dark:bg-black py-12"
      aria-label="Awards and Accreditations"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Excellence. Appreciation. Brilliance.
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Awards & Accreditations
          </h2>
        </div>

        {/* Infinite scroll awards slider */}
        <div className="relative w-full overflow-hidden bg-white mt-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex animate-scroll min-w-max">
              {extendedAwards.map((award, i) => (
                <div
                  key={i}
                  className="flex h-24 min-w-[150px] sm:min-w-[200px] md:min-w-[250px] items-center justify-center px-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <img
                    src={award.src}
                    alt={award.name}
                    draggable={false}
                    className="max-h-24 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
