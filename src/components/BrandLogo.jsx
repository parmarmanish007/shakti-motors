import React from 'react';

export default function BrandLogo({ className = "", size = "md", light = false }) {
  // Proportional sizing calibrated for 380x96 SVG aspect ratio (~3.95:1)
  const dimensions = {
    sm: { height: "36px", width: "142px" },
    md: { height: "50px", width: "198px" },
    lg: { height: "64px", width: "253px" },
    xl: { height: "80px", width: "316px" }
  };

  const dim = dimensions[size] || dimensions.md;
  const logoSrc = light ? "/logo-dark.svg" : "/logo.svg";

  return (
    <div className={`inline-flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-[1.02] ${className}`}>
      <img
        src={logoSrc}
        alt="Shakti Motors & Service Centre"
        style={{ height: dim.height, width: dim.width, objectFit: 'contain' }}
        className="block select-none filter drop-shadow-[0_2px_8px_rgba(249,115,22,0.15)]"
        loading="eager"
      />
    </div>
  );
}
