import Image from "next/image";
import React from "react";
import { national, roboto } from "../../utils/font";

function ServicesCard({ title, logo, number, order }) {
  return (
    <div style={{gridArea:`area-${order}`}} className={`p-6 bg-canvasblue w-[550px]`}>
      <h1
        className={`${national.variable} font-national uppercase text-white text-[38px] h-[90px]`}
      >
        {title}
      </h1>
      <div className="flex justify-between">
        <div className="relative w-[38px] h-[38px]">
          <Image fill cover style={{ objectFit: "cover" }} src={logo} />
        </div>
        <h1
          className={`${national.variable} font-national text-[48px] text-stroke`}
        >
          {number}
        </h1>
      </div>
    </div>
  );
}

export default ServicesCard;
