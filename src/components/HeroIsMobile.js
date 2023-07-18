import React from 'react'
import { national, roboto } from '../../utils/font'
import HeroCard from './HeroCard'
import GsapSplitTextWord from './animations/GsapSplitTextWord'

function HeroIsMobile({t}) {
  return (
    <div
    id="hero-mobile"
    className="relative min-h-[800px] w-screen items-center justify-center md:hidden"
  >
    <div
      id="video-wrapper"
      className="absolute h-[75%] w-screen bg-[url('/images/hero_pattern_home-min.webp')] bg-cover bg-center lg:h-full"
    ></div>

    <div
      id="hero-text-wrapper"
      className="absolute bottom-0 z-[10] m-auto flex h-content w-full flex-col items-start bg-gradient-to-t  from-canvasblue via-canvasblue to-[#83b0e800] px-[30px]"
    >
      <div className="flex flex-col justify-center gap-6 text-white">
        <h1
          className={`${national.variable} font-national text-[28px] font-medium uppercase`}
        >
          {t("home:home_hero_h2")}
        </h1>

        <GsapSplitTextWord>

        <h2
          className={`${national.variable} headings overflow-hidden font-national text-[48px] font-medium uppercase leading-[54px] tracking-wide`}
        >
          {t("home:home_hero_h1")}
        </h2>
        </GsapSplitTextWord>
        <h3
          className={`${roboto.variable}  max-w-[350px] font-robo uppercase`}
        >
          {t("home:home_hero_para")}
        </h3>
      </div>

      <div
        id="hero-flex-mobile"
        className="my-10 flex w-full gap-5 overflow-x-scroll snap-x  text-white"
      >
        <HeroCard
          text={t("home:home_hero_strength")}
          logo="/images/icons/strength.png"
          url="#strengths-mobile"
          scrollSection="#strengths-mobile"
        />
        <HeroCard
          text={t("home:home_hero_service")}
          logo="/images/icons/services.png"
          url="#services"
          scrollSection={"#services-section"}
        />
        <HeroCard
          text={t("home:home_hero_sector")}
          logo="/images/icons/sector.png"
          url="#sectors"
          scrollSection={"#sectors"}
        />
        <HeroCard
          text={t("home:home_hero_clients")}
          logo="/images/icons/client-icon.png"
          url="#clients"
          scrollSection={"#clients"}

        />
      </div>
    </div>
  </div>

  )
}

export default HeroIsMobile