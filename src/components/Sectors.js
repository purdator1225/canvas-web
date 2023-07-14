import React from "react";
import { national,roboto } from "../../utils/font";
import GsapSplitTextWord from "./animations/GsapSplitTextWord";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { forwardRef, useRef } from "react";



function Sectors({ t },ref) {
  return (
    <div
    ref={ref}
      id="sectors"
      className="sector-section overflow-x-hidden bg-white  py-[79px]"
    >
      <div className="m-auto xl:w-[1280px] ">
        <div className="mb-[90px] flex flex-col justify-between gap-4 px-10 lg:flex-row">
          <div className="flex flex-col gap-4">
            <h1
              className={`${national.variable} font-national text-[26px] font-medium uppercase leading-[28px] text-canvasblue lg:text-[32px] lg:font-bold`}
            >
              {t("home:home_sector_h1")}
            </h1>

            <GsapSplitTextWord>
              <h2
                className={`${national.variable} headings max-w-[500px]  font-national text-[38px] font-medium uppercase leading-[42px] text-canvasblue lg:text-[48px] lg:font-bold lg:leading-[58px]`}
              >
                {t("home:home_sector_h2")}
              </h2>
            </GsapSplitTextWord>
          </div>
          <p
            className={`${roboto.variable} max-w-[400px] font-robo text-canvasblue`}
          >
            {t("home:home_sector_h3")}
          </p>
        </div>
      </div>

      <div className="h-[400px] w-full bg-[url('/images/sector-banner.png')] bg-cover"></div>

      <div id="sector-banner" className="py-10">
        <Marquee>
          <h1
            className={`${national.variable} ml-20 font-national text-[48px] leading-[58px] text-canvasblue `}
          ></h1>

          <h1
            className={`${national.variable} ml-20 font-national text-[48px] leading-[58px] text-canvasblue`}
          >
            {t("home:home_sector_1")}
          </h1>
          <h1
            className={`${national.variable} ml-20 font-national text-[48px] leading-[58px] text-canvasblue`}
          >
            {t("home:home_sector_2")}
          </h1>
          <h1
            className={`${national.variable} ml-20 font-national text-[48px] leading-[58px] text-canvasblue`}
          >
            {t("home:home_sector_3")}
          </h1>
          <h1
            className={`${national.variable} ml-20 font-national text-[48px] leading-[58px] text-canvasblue`}
          >
            {t("home:home_sector_4")}
          </h1>
          <h1
            className={`${national.variable} ml-20 font-national text-[48px] leading-[58px] text-canvasblue`}
          >
            {t("home:home_sector_5")}
          </h1>
        </Marquee>
      </div>

      {/* Testimonials */}

      <div
        id="clients"
        className="client-testimonials m-auto grid grid-cols-2 gap-3 overflow-hidden px-[30px] py-10 lg:grid-cols-4 xl:w-[1280px]"
      >
        <div
          id="client-card"
          className="flex justify-center bg-canvaslightgrey py-9"
        >
          <Image
          alt="aji-no-kiri"
            width={125}
            height={100}
            style={{ objectFit: "contain" }}
            src={"/images/clients/aji_no_kiri.png"}
          />
        </div>
        <div
          id="client-card"
          className="flex justify-center bg-canvaslightgrey py-9"
        >
          <Image
          alt="ntpm"
            width={125}
            height={100}
            style={{ objectFit: "contain" }}
            src={"/images/clients/ntpm.png"}
          />
        </div>
        <div
          id="client-card"
          className="flex justify-center bg-canvaslightgrey py-9"
        >
          <Image
          alt="premier"
            width={125}
            height={100}
            style={{ objectFit: "contain" }}
            src={"/images/clients/premier.png"}
          />
        </div>
        <div
          id="client-card"
          className="flex justify-center bg-canvaslightgrey py-9"
        >
          <Image
          alt="cap-oats"
            width={125}
            height={100}
            style={{ objectFit: "contain" }}
            src={"/images/clients/captain_oats.png"}
          />
        </div>
        <div
          id="client-card"
          className="flex justify-center bg-canvaslightgrey py-9"
        >
          <Image
          alt="hzpg"
            width={125}
            height={100}
            style={{ objectFit: "contain" }}
            src={"/images/clients/hzpg.png"}
          />
        </div>
        <div
          id="client-card"
          className="flex justify-center bg-canvaslightgrey py-9"
        >
          <Image
          alt="intimate"
            width={125}
            height={100}
            style={{ objectFit: "contain" }}
            src={"/images/clients/intimate.png"}
          />
        </div>
        <div
          id="client-card"
          className="flex justify-center bg-canvaslightgrey py-9"
        >
          <Image
          alt="royalgold"
            width={125}
            height={100}
            style={{ objectFit: "contain" }}
            src={"/images/clients/royalgold.png"}
          />
        </div>
        <div
          id="client-card"
          className="flex justify-center bg-canvaslightgrey py-9"
        >
          <Image
          alt='fed-oats'
            width={125}
            height={100}
            style={{ objectFit: "contain" }}
            src={"/images/clients/federal-oats.png"}
          />
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Sectors);
