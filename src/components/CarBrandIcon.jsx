import React from 'react';

/**
 * High-Precision Vector Emblem Logos for All Major Automotive Car Brands
 */
export default function CarBrandIcon({ brandId, className = "w-8 h-8" }) {
  switch (brandId) {
    case 'maruti-suzuki':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#DC2626" />
          <path
            d="M26 30L68 30L34 50L74 50L40 70L80 70"
            stroke="white"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'hyundai':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="50" rx="46" ry="32" stroke="#0284C7" strokeWidth="8" />
          <path
            d="M36 30C36 30 38 68 38 70M64 30C64 30 62 68 62 70M37 50C45 46 55 46 63 50"
            stroke="#0284C7"
            strokeWidth="9"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'tata':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="50" rx="46" ry="34" fill="#1E3A8A" />
          <path
            d="M26 38H74M50 38V68M40 44C44 54 56 54 60 44"
            stroke="white"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'mahindra':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#E11D48" />
          <path
            d="M30 68V34L50 56L70 34V68"
            stroke="white"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'toyota':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="50" rx="46" ry="32" stroke="#DC2626" strokeWidth="7" />
          <ellipse cx="50" cy="38" rx="24" ry="12" stroke="#DC2626" strokeWidth="6" />
          <ellipse cx="50" cy="52" rx="13" ry="26" stroke="#DC2626" strokeWidth="6" />
        </svg>
      );

    case 'honda':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="14" width="80" height="72" rx="14" stroke="#0F172A" strokeWidth="7" />
          <path
            d="M28 26L34 74M72 26L66 74M31 46H69"
            stroke="#0F172A"
            strokeWidth="9"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'kia':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="50" rx="46" ry="28" fill="#09090B" />
          <text
            x="50"
            y="59"
            fill="white"
            fontSize="26"
            fontWeight="900"
            fontFamily="Arial, sans-serif"
            textAnchor="middle"
            letterSpacing="2"
          >
            KIA
          </text>
        </svg>
      );

    case 'volkswagen':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" stroke="#1D4ED8" strokeWidth="7" />
          <circle cx="50" cy="50" r="38" stroke="#1D4ED8" strokeWidth="4" />
          <path
            d="M32 30L44 60M68 30L56 60M44 60L50 44L56 60M36 68L50 44L64 68"
            stroke="#1D4ED8"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'skoda':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#047857" />
          <path
            d="M32 50C32 40 40 32 50 32C60 32 68 40 68 50L54 44L44 64L38 48Z"
            fill="white"
          />
        </svg>
      );

    case 'renault':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 14L78 50L50 86L22 50Z"
            stroke="#D97706"
            strokeWidth="9"
            strokeLinejoin="round"
          />
          <path
            d="M50 32L64 50L50 68L36 50Z"
            fill="#D97706"
          />
        </svg>
      );

    case 'mg':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,12 85,28 85,72 50,88 15,72 15,28" stroke="#B91C1C" strokeWidth="7" fill="#09090B" />
          <text
            x="50"
            y="61"
            fill="#B91C1C"
            fontSize="32"
            fontWeight="900"
            fontFamily="serif"
            textAnchor="middle"
          >
            MG
          </text>
        </svg>
      );

    case 'nissan':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="44" stroke="#334155" strokeWidth="7" />
          <rect x="14" y="40" width="72" height="20" rx="4" fill="#334155" />
          <text
            x="50"
            y="55"
            fill="white"
            fontSize="12"
            fontWeight="900"
            fontFamily="Arial, sans-serif"
            textAnchor="middle"
            letterSpacing="2"
          >
            NISSAN
          </text>
        </svg>
      );

    case 'ford':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="50" rx="46" ry="28" fill="#1D4ED8" stroke="#DBEAFE" strokeWidth="4" />
          <text
            x="50"
            y="58"
            fill="white"
            fontSize="24"
            fontStyle="italic"
            fontWeight="bold"
            fontFamily="Brush Script MT, cursive, serif"
            textAnchor="middle"
          >
            Ford
          </text>
        </svg>
      );

    case 'jeep':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="24" width="84" height="52" rx="10" fill="#065F46" />
          <text
            x="50"
            y="59"
            fill="white"
            fontSize="26"
            fontWeight="900"
            fontFamily="Arial, sans-serif"
            textAnchor="middle"
            letterSpacing="2"
          >
            Jeep
          </text>
        </svg>
      );

    case 'bmw':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" stroke="#0F172A" strokeWidth="8" fill="#0F172A" />
          <circle cx="50" cy="50" r="32" fill="white" />
          <path d="M50 18A32 32 0 0 1 82 50H50Z" fill="#0284C7" />
          <path d="M50 82A32 32 0 0 1 18 50H50Z" fill="#0284C7" />
          <text x="50" y="16" fill="white" fontSize="10" fontWeight="900" textAnchor="middle">M</text>
          <text x="24" y="28" fill="white" fontSize="10" fontWeight="900" textAnchor="middle">B</text>
          <text x="76" y="28" fill="white" fontSize="10" fontWeight="900" textAnchor="middle">W</text>
        </svg>
      );

    case 'mercedes':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" stroke="#475569" strokeWidth="7" />
          <path
            d="M50 6L50 50M50 50L14 74M50 50L86 74"
            stroke="#475569"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'audi':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="50" r="16" stroke="#0F172A" strokeWidth="5" />
          <circle cx="42" cy="50" r="16" stroke="#0F172A" strokeWidth="5" />
          <circle cx="58" cy="50" r="16" stroke="#0F172A" strokeWidth="5" />
          <circle cx="72" cy="50" r="16" stroke="#0F172A" strokeWidth="5" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#F97316" />
          <path d="M25 60L35 40H65L75 60H25Z" fill="white" />
        </svg>
      );
  }
}
