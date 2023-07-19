import React from "react";
import { national, roboto } from "../../utils/font";
import Swiper from "@/components/Swiper";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { UseTranslation, useTranslation } from "next-i18next";
import GsapSplitTextWord from "@/components/animations/GsapSplitTextWord";
import { servicesSliderData } from "../../utils/data";

// import "/swiper/css";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["services", "common"])),
    },
  };
}

function Services(props) {
  const { t } = useTranslation();

  return (
    <div className="text-white">
      <div className="flex min-h-[800px] w-screen bg-[url('/images/services-hero.webp')] bg-cover bg-center py-[150px] px-4">
        <div className=" w-full max-w-[1280px] mx-auto h-[430px] ">
          <div className="flex max-w-[400px] flex-col gap-4">
            <h1
              className={`${national.variable} font-national text-[26px] font-medium uppercase leading-[28px] sm:text-[32px] sm:font-bold`}
            >
              {t("common:canvas_global")}
            </h1>
            <GsapSplitTextWord>
              {" "}
              <h2
                className={`${national.variable} font-national text-[48px] font-medium uppercase leading-[54px] lg:text-[60px] lg:font-bold`}
              >
                {t("services:services_hero_h1")}
              </h2>
            </GsapSplitTextWord>

            <h3
              className={`${roboto.variable} max-w-[350px] font-robo uppercase`}
            >
              {t("services:services_hero_para")}
            </h3>
          </div>

          {/* first-card */}

          {/* <div className="hidden min-h-[220px] max-w-[400px] gap-4 self-end lg:flex lg:flex-col ">
            <div className="h-[4px] w-full bg-white"></div>
            <h1
              className={`${roboto.variable} font-robo text-[24px] uppercase`}
            >
              looking for supply chain?
            </h1>
            <p
              className={`${roboto.variable} font-robo text-[14px] leading-[20px] `}
            >
              We are open to discuss new ventures looking for supply chain
              management, our extensive network will speed up the process of
              finding the right partner.
            </p>
          </div> */}

          {/* <div className="hidden min-h-[220px]  max-w-[400px] flex-col gap-4 self-end lg:flex">
            <div className="h-[4px] w-full bg-white"></div>
            <h1
              className={`${roboto.variable} font-robo text-[24px] uppercase`}
            >
              Need better routes?
            </h1>
            <p
              className={`${roboto.variable} font-robo text-[14px] leading-[20px] `}
            >
              Talk to us about your current challenges, we are happy to explore
              more possibilities that are better suited for your business.
            </p>
          </div> */}
        </div>
      </div>

      <div className={`${national.variable} flex w-screen font-national`}>
        <div className="h-full w-full bg-canvasblue px-[28px] py-[30px] xl:h-[938px] ">
          <Swiper namespace="services" slides={servicesSliderData} />
        </div>
      </div>
    </div>
  );
}

export default Services;
