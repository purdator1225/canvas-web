import React from "react";
import { national, roboto } from "../../utils/font";
import Swiper from "@/components/Swiper";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { UseTranslation, useTranslation } from "next-i18next";

// import "/swiper/css";

let servicesSliderData = [
  {
    title: "service_1_title",
    url: "/images/services-imgs/services-sea-freight.png",
    para: "service_1_para",
  },
  {
    title: "service_2_title",
    url: "/images/services-imgs/services-trucking.png",
    para: "service_2_para",
  },
  {
    title: "service_3_title",
    url: "/images/services-imgs/services-warehousing.png",
    para: "service_3_para",
  },
  {
    title: "service_4_title",
    url: "/images/services-imgs/services-transloading.png",
    para: "service_4_para",
  },
  {
    title: "service_5_title",
    url: "/images/services-imgs/services-fumigation.png",
    para: "service_5_para",
  },
];

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
      <div className="flex h-screen w-screen items-center bg-[url('/images/services-hero.png')] bg-cover ">
        <div className="flex m-auto mb-[40px] lg:grid h-[60vh] w-full max-w-[1280px] grid-cols-3 gap-6 self-end">
          <div className="flex flex-col gap-4 px-[30px]">
            <h1
              className={`${national.variable} font-national text-[26px] font-medium uppercase leading-[28px] sm:text-[32px] sm:font-bold`}
            >
              {t("common:canvas_global")}
            </h1>
            <h2
              className={`${national.variable} font-national text-[48px] font-medium uppercase leading-[54px] lg:text-[60px] lg:font-bold`}
            >
              {t("services:services_hero_h1")}
            </h2>
            <h3
              className={`${roboto.variable} max-w-[350px] font-robo uppercase`}
            >
              {t("services:services_hero_para")}
            </h3>
          </div>

          {/* first-card */}
          

          <div className="hidden min-h-[220px] max-w-[400px] gap-4 self-end lg:flex lg:flex-col ">
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
          </div>

          <div className="hidden min-h-[220px]  max-w-[400px] flex-col gap-4 self-end lg:flex">
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
          </div>
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
