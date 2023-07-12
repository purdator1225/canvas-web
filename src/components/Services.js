import React from 'react'
import { national, roboto } from '../../utils/font'
import GsapSplitTextWord from './animations/GsapSplitTextWord'
import ServicesCard from './ServicesCard'
import PageLinks from './PageLinks'

function Services({t}) {
  return (
    <div
    id="services"
    className="our-services-section bg-[url('/images/home-our-services.png')] bg-cover bg-no-repeat  py-[79px]"
  >
    <div className="m-auto flex flex-col justify-between xl:w-[1280px]  ">
      <div className=" mb-[90px] px-10">
        <div>
          <h1
            className={`${national.variable} font-national text-[26px] font-medium uppercase leading-[28px] tracking-wide text-white lg:text-[32px] lg:font-bold`}
          >
            {t("home:home_services_h1")}
          </h1>

          <GsapSplitTextWord>
            <h2
              className={`${national.variable} headings overflow-hidden font-national text-[38px]
            leading-[42px] text-white lg:text-[48px] lg:font-bold lg:leading-[58px]`}
            >
              {t("home:home_services_h2")}
            </h2>
          </GsapSplitTextWord>
        </div>
        <p
          className={`${roboto.variable} max-w-[400px] font-robo text-[18px] leading-6 text-white`}
        >
          {t("home:home_services_para")}
        </p>
      </div>

      {/* services card */}

      <div className="flex gap-x-10 gap-y-10 overflow-x-auto overflow-y-hidden px-10 lg:grid lg:grid-cols-2">
        <ServicesCard
          order={1}
          title={t("home:home_services_card_1")}
          logo={"/images/icons/transport.png"}
          number={"01"}
        />
        <ServicesCard
          order={2}
          title={t("home:home_services_card_2")}
          logo={"/images/icons/transloading.png"}
          number={"02"}
        />
        <ServicesCard
          order={3}
          title={t("home:home_services_card_3")}
          logo={"/images/icons/truck.png"}
          number={"03"}
        />
        <ServicesCard
          order={4}
          title={t("home:home_services_card_4")}
          logo={"/images/icons/storage.png"}
          number={"04"}
        />
        <ServicesCard
          order={5}
          title={t("home:home_services_card_5")}
          logo={"/images/icons/cargo.png"}
          number={"05"}
        />

        <div className="hidden w-full self-end lg:block">
          <PageLinks
            width={"w-[320px]"}
            hoverWidth={"400px"}
            mask_id="#values-button-services-large-mask"
            parentId="values-button-services-large"
            color={"white"}
            route={"/services"}
            text={t("common:button_services")}
            logo={"/images/icons/core-logistics.png"}
          />
        </div>
      </div>
      <div className="mt-10 flex justify-center lg:hidden">
        <PageLinks
          mask_id={"values-button-services-mobile-mask"}
          parentId="values-button-services-mobile"
          color={"white"}
          width={"w-[350px]"}
          hoverWidth={"400px"}
          route={"/services"}
          text={t("common:button_services")}
          logo={"/images/icons/our-values.svg"}
        />
      </div>
    </div>
  </div>
  )
}

export default Services