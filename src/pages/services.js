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
      <div className="flex h-screen w-screen bg-[url('/images/services-hero.png')] bg-cover ">
        <div className="m-auto xl:w-[1280px] ">
          <div className="ml-5 flex flex-col gap-4">
            <h1
              className={`${national.variable} font-national text-[26px] font-medium uppercase leading-[28px] sm:text-[32px] sm:font-bold`}
            >
              {t("services:services_hero_h2")}
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
        </div>
      </div>

      <div className={`${national.variable} flex w-screen font-national`}>
        <div className="h-full w-full bg-canvasblue px-[28px] py-[30px] xl:h-[938px] ">
          <Swiper namespace='services' slides={servicesSliderData} />
        </div>
      </div>
    </div>
  );
}

export default Services;
