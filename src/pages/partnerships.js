import React from "react";

import { national, roboto } from "../../utils/font";
import Image from "next/image";
import ValuesGrid from "@/components/ValuesGrid";
import ValuesGridMobile from "@/components/ValuesGridMobile";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { UseTranslation, useTranslation } from "next-i18next";
import GsapSplitTextWord from "@/components/animations/GsapSplitTextWord";
import {
  pssContainerFeatures,
  pssFeaturesImg,
  asiaLogFeatures,
  asiaLogFeaturesImg,
} from "../../utils/data";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["partnership", "common"])),
    },
  };
}

// pss container

function Partner(props) {
  const { t } = useTranslation();

  return (
    <div>
      <main className={`${national.variable} font-nation bg-white text-white`}>
        {/* <div>{props.locale}</div> */}
        <div className="relative flex min-h-[800px] w-screen bg-[url('/images/partnership_hero_pattern-min.png')] bg-cover px-4 py-[150px]">
       
          <div className="max-w-[1280px] w-full m-auto">
            <div className="lg:px-0 flex max-w-[400px] h-[430px] flex-col gap-6 ">
              <h1
                className={`${national.variable} font-national text-[32px] font-bold uppercase`}
              >
                {t("common:canvas_global")}
              </h1>
              <GsapSplitTextWord>
                <h2
                  className={`${national.variable} font-national text-[60px] 
                font-bold uppercase leading-[60px]`}
                >
                  {t("partnership:partner_hero_h1")}
                </h2>
              </GsapSplitTextWord>

              <h3
                className={`${roboto.variable} max-w-[350px] font-robo uppercase`}
              >
                {t("partnership:partner_hero_h2")}
              </h3>
            </div>
          </div>
        </div>

        <div id="asia-log" className="min-h-screen">
          <div className="m-auto flex-col justify-between  py-[60px] lg:py-[160px] xl:w-[1280px]">
            <div className="flex flex-col items-center justify-between lg:flex-row">
              <div className="px-[30px] py-10">
                <h1
                  className={`${national.variable} mb-5 font-national text-[26px] font-medium uppercase leading-[28px] text-canvasblue lg:text-[32px] lg:font-bold lg:leading-[32px]`}
                >
                  {t("partnership:asia_log_h1")}
                </h1>
                <GsapSplitTextWord>
                  <h2
                    className={`${national.variable} max-w-[500px] font-national text-[38px] font-medium uppercase leading-[42px] text-canvasblue lg:text-[48px] lg:leading-[48px]`}
                  >
                    {t("partnership:asia_log_h2")}
                  </h2>
                </GsapSplitTextWord>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative aspect-square w-[160px]">
                  <Image
                  alt="asia-log-logo"
                    fill
                    style={{ objectFit: "cover" }}
                    src={"/images/clients/asia-log.png"}
                  />
                </div>

                <div className="icons-wrapper my-8 flex w-[290px] justify-evenly">
                  <div className="flex flex-col items-center justify-center">
                    <Image
                    alt="road"
                      src="/images/icons/road.png"
                      width={50}
                      height={50}
                    />
                    <p
                      className={`${roboto.variable} font-robo text-canvasblue`}
                    >
                      {t("partnership:asia_log_road")}
                    </p>
                  </div>
                  <div className="flex flex-col items-center ">
                    <Image
                    alt="ship-round"
                      src="/images/icons/sea-ship-round.png"
                      width={50}
                      height={50}
                    />
                    <p
                      className={`${roboto.variable} font-robo text-canvasblue`}
                    >
                      {t("partnership:asia_log_sea")}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                    alt="rail"
                      src="/images/icons/rail.png"
                      width={50}
                      height={50}
                    />
                    <p
                      className={`${roboto.variable} font-robo text-canvasblue`}
                    >
                      {t("partnership:asia_log_rail")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ValuesGridMobile
              bg="canvasblue"
              valuesList={asiaLogFeatures}
              imageList={asiaLogFeaturesImg}
              namespace={"partnership"}
            />
            <ValuesGrid
              bg="canvasblue"
              namespace="partnership"
              valuesList={asiaLogFeatures}
              imageList={asiaLogFeaturesImg}
            />
          </div>
        </div>

        <div id="pss-depot" className="min-h-screen pb-[160px]">
          <div className="m-auto flex-col justify-between py-[60px] lg:py-[160px] xl:w-[1280px]">
            <div className="flex flex-col justify-between lg:flex-row">
              <div className="px-[30px] py-10">
                <h1
                  className={`${national.variable} mb-5 font-national text-[26px] font-medium uppercase leading-[28px] text-canvasblue sm:text-[32px] sm:font-bold`}
                >
                  {t("partnership:pss_h1")}
                </h1>
                <GsapSplitTextWord>
                  <h2
                    className={`${national.variable} max-w-[500px] font-national text-[38px] font-medium uppercase leading-[42px] text-canvasblue lg:text-[48px] lg:leading-[48px]`}
                  >
                    {t("partnership:pss_h2")}
                  </h2>
                </GsapSplitTextWord>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative aspect-square w-[212px]">
                  <Image
                  alt="pss-logo"
                    fill
                    style={{ objectFit: "contain" }}
                    src={"/images/icons/pss_logo.png"}
                  />
                </div>

                <div className="icons-wrapper my-8 text-canvasgreen">
                  <div className="m-auto flex w-[288px] flex-wrap justify-center gap-8 sm:w-auto">
                    <div className="flex flex-col  items-center">
                      <Image
                      alt="storage"
                        src="/images/icons/pss-feature-icons/storage.png"
                        width={50}
                        height={50}
                      />
                      <p className={`${roboto.variable} font-robo`}>
                        {" "}
                        {t("partnership:pss_storage")}
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image
                      alt="repair"
                        src="/images/icons/pss-feature-icons/repair.png"
                        width={50}
                        height={50}
                      />
                      <p className={`${roboto.variable} font-robo`}>
                        {t("partnership:pss_repair")}
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image
                      alt="reefer"
                        src="/images/icons/pss-feature-icons/reefer.png"
                        width={50}
                        height={50}
                      />
                      <p className={`${roboto.variable} font-robo`}>
                        {t("partnership:pss_reefer")}
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image
                      alt="railing"
                        src="/images/icons/pss-feature-icons/railing.png"
                        width={50}
                        height={50}
                      />
                      <p className={`${roboto.variable} font-robo`}>
                        {" "}
                        {t("partnership:pss_railing")}
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image
                      alt="barging"
                        src="/images/icons/pss-feature-icons/barging.png"
                        width={50}
                        height={50}
                      />
                      <p className={`${roboto.variable} font-robo`}>
                        {" "}
                        {t("partnership:pss_barging")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ValuesGridMobile
              bg="canvasblue"
              namespace="partnership"
              valuesList={pssContainerFeatures}
              imageList={pssFeaturesImg}
            />
            <ValuesGrid
              bg="canvasblue"
              namespace="partnership"
              valuesList={pssContainerFeatures}
              imageList={pssFeaturesImg}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Partner;
