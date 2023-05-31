import React from "react";
import { national, roboto } from "../../utils/font";
import Swiper from "@/components/Swiper";

// import "/swiper/css";

let servicesSliderData = [
  {
    title: "Transloading Services",
    url: "/images/sector-banner.png",
    para: "We provide multiple modes of transits, transferring your goods between different modes of transportation",
  },
  {
    title: "Transloading Services 2",
    url: "/images/sector-banner.png",
    para: "Para 2",
  },
  {
    title: "Transloading Services 3",
    url: "/images/sector-banner.png",
    para: "Para 3",
  },
  {
    title: "Transloading Services 4",
    url: "/images/sector-banner.png",
    para: "Para 4",
  },
];

function Services() {
  return (
    <div className="text-white">
      <div className=" w-screen h-screen bg-[url('/images/partnerships-hero-img.png')] bg-cover grid grid-cols-3 gap-6">
        <div className="flex flex-col h-[430px] self-center gap-6 ml-5">
          <h1
            className={`${national.variable} font-national text-[32px] font-bold uppercase`}
          >
            Canvas Global Logistics
          </h1>
          <h2
            className={`${national.variable} font-national text-[60px] font-bold uppercase`}
          >
            Make it Possible, Together
          </h2>
          <h3
            className={`${roboto.variable} font-robo uppercase max-w-[350px]`}
          >
            We partnered with leading companies to expand what is possible for
            our clients
          </h3>
        </div>
      </div>

      <div
        className={`${national.variable} font-national h-screen w-screen flex`}
      >
        <div className="w-1/2 bg-canvasblue h-full px-[28px] py-10">
          <Swiper slides={servicesSliderData} />
        </div>

        <div className="w-1/2 bg-[url('/images/services-banner.png')] bg-cover h-full"></div>
      </div>
    </div>
  );
}

export default Services;
