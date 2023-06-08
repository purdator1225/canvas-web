import React from "react";

import { national, roboto } from "../../utils/font";
import Image from "next/image";
import ValuesGrid from "@/components/ValuesGrid";
import ValuesGridMobile from "@/components/ValuesGridMobile";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { UseTranslation, useTranslation } from "next-i18next";

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

  let asiaLogFeatures = [
    {
      logo: "/images/icons/asia-log-feature-icons/asia-log-1.png",
      valueText: "asia_log_val_1",
      index: 1,
    },
    {
      logo: "/images/icons/asia-log-feature-icons/asia-log-2.png",
      valueText: "asia_log_val_2",
      index: 2,
    },
    {
      logo: "/images/icons/asia-log-feature-icons/asia-log-3.png",
      valueText: "asia_log_val_3",
      index: 3,
    },
    {
      logo: "/images/icons/asia-log-feature-icons/asia-log-4.png",
      valueText: "asia_log_val_4",
      index: 4,
    },
    {
      logo: "/images/icons/asia-log-feature-icons/asia-log-5.png",
      valueText: "asia_log_val_5",
      index: 5,
    },
    {
      logo: "/images/icons/asia-log-feature-icons/asia-log-6.png",
      valueText: "asia_log_val_6",
      index: 6,
    },
    {
      logo: "/images/icons/asia-log-feature-icons/asia-log-7.png",
      valueText: "asia_log_val_7",
      index: 7,
    },
    {
      logo: "/images/icons/asia-log-feature-icons/asia-log-8.png",
      valueText: "asia_log_val_8",
      index: 8,
    },
  ];

  let asiaLogFeaturesImg = [
    { url: "/images/partners-images/asia-log-img-1.png" },
    { url: "/images/partners-images/asia-log-img-2.png" },
    { url: "/images/partners-images/asia-log-img-3.png" },
  ];

  let pssFeaturesImg = [
    { url: "/images/partners-images/pss-img-1.png" },
    { url: "/images/partners-images/pss-img-2.png" },
    { url: "/images/partners-images/pss-img-3.png" },
  ];

  let pssContainerFeatures = [
    {
      logo: "/images/icons/pss-container-values-icons/pss-1.png",
      valueText: "pss_val_1",
      index: 1,
    },
    {
      logo: "/images/icons/pss-container-values-icons/pss-2.png",
      valueText: "pss_val_2",
      index: 2,
    },
    {
      logo: "/images/icons/pss-container-values-icons/pss-3.png",
      valueText: "pss_val_3",
      index: 3,
    },
    {
      logo: "/images/icons/pss-container-values-icons/pss-4.png",
      valueText: "pss_val_4",
      index: 4,
    },
    {
      logo: "/images/icons/pss-container-values-icons/pss-5.png",
      valueText: "pss_val_5",
      index: 5,
    },
    {
      logo: "/images/icons/pss-container-values-icons/pss-6.png",
      valueText: "pss_val_6",
      index: 6,
    },
    {
      logo: "/images/icons/pss-container-values-icons/pss-7.png",
      valueText: "pss_val_7",
      index: 7,
    },
    {
      logo: "/images/icons/pss-container-values-icons/pss-8.png",
      valueText: "pss_val_8",
      index: 8,
    },
  ];

  return (
    <div>
      <main className={`${national.variable} font-nation bg-white text-white`}>
        {/* <div>{props.locale}</div> */}
        <div className=" flex h-screen w-screen bg-[url('/images/partnerships.png')] bg-cover ">
          <div className="m-auto grid gap-6 lg:grid-cols-3 xl:w-[1280px]">
            <div className="ml-5 flex h-[430px] flex-col gap-6 self-center">
              <h1
                className={`${national.variable} font-national text-[32px] font-bold uppercase`}
              >
                {t("common:canvas_global")}
              </h1>
              <h2
                className={`${national.variable} font-national text-[60px] 
                font-bold uppercase leading-[60px]`}
              >
                {t("partnership:partner_hero_h1")}
              </h2>
              <h3
                className={`${roboto.variable} max-w-[350px] font-robo uppercase`}
              >
                {t("partnership:partner_hero_h2")}
              </h3>
            </div>

            <div className="hidden max-w-[400px] flex-col gap-4 self-end lg:flex">
              <hr className="h-[4px]"></hr>
              <h1
                className={`${roboto.variable} font-robo text-[24px] uppercase`}
              >
                Need better routes?
              </h1>
              <p
                className={`${roboto.variable} font-robo text-[14px] leading-[20px] `}
              >
                Talk to us about your current challenges, we are happy to
                explore more possibilities that are better suited for your
                business.
              </p>
            </div>

            <div className="hidden max-w-[400px] flex-col gap-4 self-end lg:flex">
              <hr className="h-[4px]"></hr>
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
          </div>
        </div>

        <div id="asia-log" className="min-h-screen">
          <div className="m-auto flex-col justify-between  py-[60px] lg:py-[160px] xl:w-[1280px]">
            <div className="flex flex-col items-center justify-between lg:flex-row">
              <div className="px-[30px] py-10">
                <h1
                  className={`${national.variable} font-national text-[26px] font-medium uppercase leading-[28px] text-canvasblue lg:text-[32px] lg:font-bold lg:leading-[32px]`}
                >
                  {t("partnership:asia_log_h1")}
                </h1>

                <h2
                  className={`${national.variable} max-w-[500px] font-national text-[38px] font-medium uppercase leading-[42px] text-canvasblue lg:text-[48px] lg:leading-[58px]`}
                >
                  {t("partnership:asia_log_h2")}
                </h2>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative aspect-square w-[160px]">
                  <Image
                    fill
                    style={{ objectFit: "cover" }}
                    src={"/images/clients/asia-log.png"}
                  />
                </div>

                <div className="icons-wrapper my-8 flex w-[290px] justify-evenly">
                  <div className="flex flex-col items-center justify-center">
                    <Image
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
                    <Image src="/images/icons/sea-ship-round.png" width={50} height={50} />
                    <p
                      className={`${roboto.variable} font-robo text-canvasblue`}
                    >
                      {t("partnership:asia_log_sea")}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
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
              valuesList={asiaLogFeatures}
              namespace={"partnership"}
            />
            <ValuesGrid
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
                  className={`${national.variable} font-national text-[26px] font-medium uppercase leading-[28px] text-canvasblue sm:text-[32px] sm:font-bold`}
                >
                  {t("partnership:pss_h1")}
                </h1>

                <h2
                  className={`${national.variable} max-w-[500px] font-national text-[38px] font-medium uppercase leading-[42px] text-canvasblue lg:text-[48px] lg:leading-[58px]`}
                >
                  {t("partnership:pss_h2")}
                </h2>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative aspect-square w-[212px]">
                  <Image
                    fill
                    style={{ objectFit: "contain" }}
                    src={"/images/icons/pss_logo.png"}
                  />
                </div>

                <div className="icons-wrapper my-8 text-canvasgreen">
                  <div className="m-auto flex w-[288px] flex-wrap justify-center gap-8 sm:w-auto">
                    <div className="flex flex-col  items-center">
                      <Image
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
                        src="/images/icons/pss-feature-icons/repair.png"
                        width={50}
                        height={50}
                      />
                      <p className={`${roboto.variable} font-robo`}>
                        {" "}
                        {t("partnership:pss_repair")}
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image
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
              namespace="partnership"
              valuesList={pssContainerFeatures}
            />
            <ValuesGrid
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
