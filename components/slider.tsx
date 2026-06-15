"use client";

import React from "react";

const logos = [
  { src: "/partners/acca.png", alt: "ACCA" },
  { src: "/partners/acra_logo.png", alt: "ACRA" },
  { src: "/partners/aia.png", alt: "AIA" },
  { src: "/partners/CA-ireland.png", alt: "CA Ireland" },
  { src: "/partners/charted_accountants.png", alt: "Chartered Accountants" },
  { src: "/partners/cima.png", alt: "CIMA" },
  { src: "/partners/images.png", alt: "Partner" },
  { src: "/partners/icalogo.png", alt: "ICA" },
];

// Duplicate logos once for seamless looping
const extendedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

const CompanyLogoSlider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white py-8">
      <div className="flex animate-scroll min-w-max">
        {extendedLogos.map((logo, i) => (
          <div
            key={i}
            className="flex h-16 min-w-[150px] sm:min-w-[200px] md:min-w-[250px] items-center justify-center px-4"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              draggable={false}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogoSlider;
