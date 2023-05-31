import React from "react";

import { Roboto } from "next/font/google";

import localFont from "next/font/local";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const national = localFont({
  src: [
    {
      path: "../../public/fonts/TestNational2Condensed-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/TestNational2Condensed-Bold.otf",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-nation",
});

function Hero() {
  return (
    <div className="absolute w-full h-full bg-hero-pattern bg-cover grid grid-cols-3 gap-6">
      <div className="flex flex-col h-[430px] self-center gap-6 ml-5">
        <h1
          className={`${national.variable} font-national text-[32px] font-bold uppercase`}
        >
          Canvas Global Logistics
        </h1>
        <h2
          className={`${national.variable} font-national text-[60px] font-bold uppercase`}
        >
          logistics services to get you there
        </h2>
        <h3 className={`${roboto.variable} font-robo uppercase max-w-[350px]`}>
          We offer a full suite oF CORE logistics services, we also offer
          tailored solutions to your logistics challenges. Talk to us today to
          find out more!
        </h3>
      </div>

      <div className="self-end h-[224px] flex  flex-col gap-4 max-w-[400px] ">
        <hr className="h-[4px]"></hr>
        <h1 className={`${roboto.variable} font-robo text-[24px] uppercase`}>
          Need better routes?
        </h1>
        <p
          className={`${roboto.variable} font-robo text-[14px] leading-[20px] `}
        >
          Talk to us about your current challenges, we are happy to explore more
          possibilities that are better suited for your business.
        </p>
      </div>

      <div className="self-end h-[224px] flex  flex-col gap-4 max-w-[400px]">
        <hr className="h-[4px]"></hr>
        <h1 className={`${roboto.variable} font-robo text-[24px] uppercase`}>
          looking for supply chain?
        </h1>
        <p
          className={`${roboto.variable} font-robo text-[14px] leading-[20px] `}
        >
          We are open to discuss new ventures looking for supply chain
          management, our extensive network will speed up the process of finding
          the right partner.
        </p>
      </div>
    </div>
  );
}

export default Hero;
