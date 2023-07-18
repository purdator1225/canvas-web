import Image from "next/image";
import React from "react";
import { national, roboto } from "../../utils/font";

function ValueCard({ logo, valueText, index, bg }) {
  return (
    <div
      className={` h-full lg:min-h-[360px] flex flex-col gap-10 justify-start bg-${bg} text-${
        bg === "canvasblue" ? "white" : "canvasblue"
      } px-[24px] py-[32px] border-solid border-[1px]`}
    >
      <div className="flex justify-between">
        <Image alt='value-logos' src={logo} width={40} height={40} />
        <h3
          className={`${roboto.variable} font-robo text-[15px] leading-[19px] lg:text-[24px] lg:leading-[30px] uppercase`}
        >
          0{index}
        </h3>
      </div>
      <h1
        className={`${roboto.variable} font-robo text-[15px] leading-[19px] lg:text-[24px] lg:leading-[30px] uppercase`}
      >
        {valueText}
      </h1>
    </div>
  );
}

export default ValueCard;
