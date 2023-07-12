import Image from "next/image";
import React from "react";
import { national, roboto } from "../../utils/font";


// style={{gridArea:`area-${order}`}}
function ServicesCard({ title, logo, number, order }) {
  return (
    <div id="services-card" className={`p-6 bg-canvasblue flex flex-col justify-between flex-wrap min-w-[300px] max-w-[500px]`}>
      <h1
        className={`${national.variable} font-national break-words uppercase text-white text-[38px]`}
      >
        {title}
      </h1>
      <div className="flex justify-between items-center">
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
