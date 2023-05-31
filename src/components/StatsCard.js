import React from "react";
import { national, roboto } from "../../utils/font";

function StatsCard({ title, statistic, units, para,id }) {
  return (
    <div id={id} className="text-canvasblue flex flex-col gap-4 w-[330px]">
      <h1
        className={`${national.variable} font-national text-[32px] tracking-wide font-medium`}
      >
        {title}
      </h1>
      <div className="flex flex-row">
        <h1
          className={`${national.variable} w-auto font-national text-[60px] font-bold`}
        >
          {statistic}
        </h1>
        <span
          className={`${roboto.variable} font-robo text-[18px] self-end leading-6 inline-block`}
        >
          {units}
        </span>
      </div>

      <hr className="h-[2px] w-full bg-canvasblue" />

      <p className={`${roboto.variable} font-robo text-[18px]leading`}>
        {para}
      </p>
    </div>
  );
}

export default StatsCard;
