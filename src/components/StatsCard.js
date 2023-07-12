import React from "react";
import { national, roboto } from "../../utils/font";

function StatsCard({ title, statistic, units, para, id }) {
  return (
    <div
      id={id}
      className="snap-center flex min-w-[280px] flex-col gap-4 text-canvasblue"
    >
    <div className="min-h-[133px] flex flex-col justify-between">
      <h1
        className={`${national.variable} font-national text-[26px] leading-7 xl:text-[32px] font-medium tracking-wide uppercase`}
      >
        {title}
      </h1>
      <div className="flex flex-row items-center gap-5">
        <h1
          className={`${national.variable} w-auto font-national text-[48px] leading-[54px] xl:text-[60px] font-medium xl:font-bold xl:leading-[60px]`}
        >
          {statistic}
        </h1>
        <span
          className={`${roboto.variable} inline-block self-end font-robo text-[14px] leading-[20px] lg:text-[18px] lg:leading-6`}
        >
          {units}
        </span>
      </div>

      </div>

      <hr className="h-[2px] w-full bg-canvasblue" />

      <p className={`${roboto.variable} text-[18px]leading font-robo`}>
        {para}
      </p>
    </div>
  );
}

export default StatsCard;
