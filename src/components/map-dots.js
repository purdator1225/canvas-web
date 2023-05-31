import React from "react";

function MapDots({id, position}) {
  return (
    <svg
    className={`absolute ${position} map-dots opacity-0`}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        id={id}
        cx="13.5507"
        cy="13.5546"
        rx="9.15614"
        ry="9.15615"
        fill="#0057C1"
      />
      <rect 
        id={id}
        x="0.366246"
        y="0.366246"
        width="26.3697"
        height="26.3697"
        rx="13.1848"
        stroke="url(#paint0_linear_1604_27584)"
        stroke-width="0.732492"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1604_27584"
          x1="-4.45359"
          y1="31.3905"
          x2="34.0596"
          y2="4.4097"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1463C4" />
          <stop offset="1" stop-color="#5DD18B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default MapDots;
