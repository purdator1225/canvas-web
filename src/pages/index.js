import Image from "next/image";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { national, roboto } from "../../utils/font";
import StatsCard from "../components/StatsCard";

import Marquee from "react-fast-marquee";
import HeroCard from "@/components/HeroCard";

import PageLinks from "@/components/PageLinks";
import CountryImg from "@/components/country-img";
import MapDots from "@/components/map-dots";
import SvgMap from "@/components/map-svg";
import ServicesCard from "../components/ServicesCard";

import GsapSplitTextWord from "@/components/animations/GsapSplitTextWord";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

//on page load, prepare these props statically which takes in the locale file
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
  };
}

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export default function Home(props) {
  //translation
  const { t } = useTranslation();

  const scrollTo = props.scrollTo;

  //hero line variants
  const lineParentVariants = {
    hidden: { opacity: 1 },
    show: { opacity: 1 },
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  };

  const lineVariants = {
    hidden: { scaleY: 1 },
    show: { scaleY: 3000 },
    transition: { duration: 3 },
  };

  // animate banner
  const index = useRef();

  //mobile horizontal scroll values section
  const horizontalRef = useRef(null);

  const { scrollXProgress } = useScroll({
    container: horizontalRef,
  });

  let shipMovement = useTransform(scrollXProgress, [0, 1], ["35%", "100%"]);

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.fromTo(
        "#wm-us-path",
        { drawSVG: "100% 100%" },
        {
          drawSVG: "0% 100%",
          duration: 5,
          repeat: -1,
        }
      );

      gsap.fromTo(
        "#map-svg",
        { drawSVG: "0%" },
        {
          drawSVG: "100%",
          transformOrigin: "center",
          strokeDasharray: "4",
          duration: 10,
          scrollTrigger: {
            trigger: "#strengths-large",
            // markers: true,
            scrub: 2,
            start: "100% 50%",
            end: "200% 50%",
          },
        }
      );

      gsap.to(".map-dots", {
        autoAlpha: 1,
        scale: 1.2,
        stagger: 0.2,
        ease: "back(5)",
        scrollTrigger: {
          trigger: "#strengths-large",
          // markers: true,
          scrub: 2,
          start: "105% 50%",
          end: "150% 50%",
        },
        delay: 1.5,
      });

      gsap.to(".country-img", {
        autoAlpha: 1,
        scale: 1.01,
        stagger: 0.2,
        ease: "back(4)",
        scrollTrigger: {
          trigger: "#strengths-large",
          // markers: true,
          scrub: 2,
          start: "105% 50%",
          end: "150% 50%",
        },
        delay: 3.5,
      });

      gsap.fromTo(
        "#ship-large",
        { y: "50%" },
        {
          x: 0,
          y: 0,
          duration: 2,
          ease: "easeIn",
          scrollTrigger: {
            trigger: "#hero",
            // markers: true,
            scrub: 4,
            start: "50% 10%",
            end: "150% 50%",
          },
        }
      );

      gsap.from("#achievement-card", {
        y: 100,
        duration: 10,
        stagger: 2,
        scrollTrigger: {
          trigger: "#strengths-large",
          // markers: true,
          scrub: 1,
        },
      });

      gsap.from("#services-card", {
        y: 100,
        duration: 10,
        stagger: 2,
        scrollTrigger: {
          trigger: "#services-card",
          // markers: true,
          scrub: 1,
        },
      });
    });

    let context = gsap.context(() => {
      gsap.from(
        "#client-card",

        {
          y: 100,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.2,

          scrollTrigger: {
            trigger: "#sectors",
            // markers: true,

            start: "50% 50%",
            end: "100% 50%",
          },
        }
      );
    }, index);

    return () => {
      context.revert();
      mm.revert();
    };
  }, []);

  return (
    <main ref={index} className={`${national.variable} font-nation bg-white`}>
      <div className="">
        <div
          id="hero-mobile"
          className="relative h-[800px] w-screen items-center justify-center sm:hidden"
        >
          <div
            id="video-wrapper"
            className="absolute h-[75%] w-screen bg-[url('/images/home-hero-pattern.png')] bg-cover lg:h-full"
          ></div>

          <div
            id="hero-text-wrapper"
            className="absolute bottom-0 z-[10] m-auto flex h-[60%] w-full flex-col items-start bg-gradient-to-t  from-canvasblue via-canvasblue to-[#83b0e800] pl-[30px]"
          >
            <div className="flex flex-col justify-center gap-6 text-white">
              <h1
                className={`${national.variable} font-national text-[28px] font-medium uppercase`}
              >
                {t("home:home_hero_h2")}
              </h1>

              <h2
                className={`${national.variable} headings overflow-hidden font-national text-[48px] font-medium uppercase leading-[54px] tracking-wide`}
              >
                {t("home:home_hero_h1")}
              </h2>
              <h3
                className={`${roboto.variable} hidden max-w-[350px] font-robo uppercase`}
              >
                {t("home:home_hero_para")}
              </h3>
            </div>

            <div
              id="hero-flex-mobile"
              className="mt-10 flex w-full gap-5 overflow-x-scroll whitespace-nowrap pr-5 text-white"
            >
              <HeroCard
                text={t("home:home_hero_strength")}
                logo="/images/icons/strength.png"
                url="#strengths-mobile"
                scrollTo={scrollTo}
              />
              <HeroCard
                text={t("home:home_hero_service")}
                logo="/images/icons/services.png"
                url="#services"
                scrollTo={scrollTo}
              />
              <HeroCard
                text={t("home:home_hero_sector")}
                logo="/images/icons/sector.png"
                url="#sectors"
                scrollTo={scrollTo}
              />
              <HeroCard
                text={t("home:home_hero_strength")}
                logo="/images/icons/client-icon.png"
                url="#clients"
                scrollTo={scrollTo}
              />
            </div>
          </div>
        </div>

        <div
          id="hero"
          className="relative hidden h-screen max-h-[1200px] w-screen justify-center bg-[url('/images/home-hero-pattern.png')] bg-cover sm:flex"
        >
          <div className="absolute hidden h-full w-[1280px] justify-end xl:flex">
            <motion.div
              variants={lineParentVariants}
              initial="hidden"
              animate="show"
              className="absolute flex h-full w-[full-400px] gap-[180px] self-end"
            >
              <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 3000 }}
                transition={{ duration: 3, delay: 1 }}
                className="h-[1px] w-[1px] bg-white"
              ></motion.div>

              <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 3000 }}
                transition={{ duration: 3, delay: 1.5 }}
                className="h-[1px] w-[1px] bg-white"
              ></motion.div>
              <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 3000 }}
                transition={{ duration: 3, delay: 2 }}
                className="h-[1px] w-[1px] bg-white"
              ></motion.div>
              <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 3000 }}
                transition={{ duration: 3, delay: 2.5 }}
                className="h-[1px] w-[1px] bg-white"
              ></motion.div>
              <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 3000 }}
                transition={{ duration: 3, delay: 3.0 }}
                className="h-[1px] w-[1px] bg-white"
              ></motion.div>
            </motion.div>
          </div>

          <div
            id="hero-text-wrapper"
            className="z-[10] mb-[5vh] flex w-full flex-col gap-[50px] self-end pl-[30px] lg:w-[1280px] lg:bg-none xl:pl-0"
          >
            <div className="flex w-[400px] flex-col justify-center gap-4 text-white">
              <h1
                className={`${national.variable} font-national text-[28px] font-medium uppercase leading-[32px] lg:text-[32px] lg:font-bold`}
              >
                {t("home:home_hero_h2")}
              </h1>

              <GsapSplitTextWord>
                <h2
                  className={`${national.variable} font-national text-[48px] font-medium uppercase leading-[54px] tracking-wide lg:text-[60px] lg:font-bold lg:leading-[60px]`}
                >
                  {t("home:home_hero_h1")}
                </h2>
              </GsapSplitTextWord>

              <h3
                className={`${roboto.variable} hidden max-w-[350px] font-robo uppercase lg:block`}
              >
                {t("home:home_hero_para")}
              </h3>
            </div>

            <div
              id="hero-flex-tab-above"
              className=" hidden flex-wrap  self-end text-white sm:flex"
            >
              <HeroCard
                text={t("home:home_hero_strength")}
                logo="/images/icons/strength.png"
                url="#strengths-large"
                scrollTo={scrollTo}
              />
              <HeroCard
                text={t("home:home_hero_service")}
                logo="/images/icons/services.png"
                url="#services"
                scrollTo={scrollTo}
              />
              <HeroCard
                text={t("home:home_hero_sector")}
                logo="/images/icons/sector.png"
                url="#sectors"
                scrollTo={scrollTo}
              />
              <HeroCard
                text={t("home:home_hero_clients")}
                logo="/images/icons/client-icon.png"
                url="#clients"
                scrollTo={scrollTo}
              />
            </div>
          </div>
        </div>

        {/* //Achievement Section */}
        <div
          id="strengths-large"
          className="strengths relative hidden justify-center pb-[60px] pt-[200px] sm:flex"
        >
          <div className="absolute z-[-1] h-[1214px] w-[400px] xl:z-0">
            <div
              id="ship-large"
              className="relative hidden h-[1214px] w-[400px] sm:block"
            >
              <Image
                fill
                src={"/images/ship-large.png"}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          <div
            id="achievement-section"
            className="grid w-full grid-cols-[330px_330px] justify-between gap-y-[120px] px-[30px] py-[30px] text-canvasblue xl:max-w-[1280px]"
          >
            <StatsCard
              id="achievement-card"
              title={t("home:home_ach_1")}
              statistic="1000+"
              units={t("home:home_ach_units_1")}
              para={t("home:home_ach_para_1")}
            />
            <StatsCard
              id="achievement-card"
              title={t("home:home_ach_2")}
              statistic="10000+"
              units={t("home:home_ach_units_2")}
              para={t("home:home_ach_para_2")}
            />
            <StatsCard
              id="achievement-card"
              title={t("home:home_ach_3")}
              statistic="19+"
              units={t("home:home_ach_units_3")}
              para={t("home:home_ach_para_3")}
            />
            <StatsCard
              id="achievement-card"
              title={t("home:home_ach_4")}
              statistic="15+"
              units={t("home:home_ach_units_4")}
              para={t("home:home_ach_para_4")}
            />
            <StatsCard
              id="achievement-card"
              title={t("home:home_ach_5")}
              statistic="5+"
              units={t("home:home_ach_units_5")}
              para={t("home:home_ach_para_5")}
            />
            <StatsCard
              id="achievement-card"
              title={t("home:home_ach_6")}
              statistic="18+"
              units={t("home:home_ach_units_6")}
              para={t("home:home_ach_para_6")}
            />
          </div>
        </div>
        <div id="values-button-large" className="hidden w-[400px] sm:flex ">
          <PageLinks
            mask_id={"values-large-mask"}
            id="values-large"
            color={"canvasblue"}
            route={"/services"}
            text={t("common:button_values")}
            width={"w-[300px]"}
            hoverWidth={"350px"}
            logo={"/images/icons/our-values.png"}
          />
        </div>

        <div
          id="strengths-mobile"
          ref={horizontalRef}
          className="strengths achievement-section-mobile flex flex-col overflow-x-scroll scroll-smooth bg-white sm:hidden"
        >
          <div className="ship-wrapper">
            <motion.div
              style={{ translateX: shipMovement }}
              id="ship-small"
              className="relative my-[70px] h-[100px] w-[600px] sm:hidden"
            >
              <Image
                fill
                src={"/images/ship-small.png"}
                style={{ objectFit: "cover", width: "100%" }}
              />
            </motion.div>
          </div>

          <div
            id="map-section"
            className="flex gap-6 px-[30px] py-[30px] text-canvasblue"
          >
            <StatsCard
              id="achievement-card"
              title={t("home:home_ach_1")}
              statistic="1000+"
              units={t("home:home_ach_units_1")}
              para={t("home:home_ach_para_1")}
            />
            <StatsCard
              id="achievement-card"
              title={t("home:home_ach_2")}
              statistic="10000+"
              units={t("home:home_ach_units_2")}
              para={t("home:home_ach_para_2")}
            />
            <StatsCard
              id="achievement-card"
              title={t("home:home_ach_3")}
              statistic="19+"
              units={t("home:home_ach_units_3")}
              para={t("home:home_ach_para_3")}
            />
            <StatsCard
              id="achievement-card"
              title={t("home:home_ach_4")}
              statistic="15+"
              units={t("home:home_ach_units_4")}
              para={t("home:home_ach_para_4")}
            />
            <StatsCard
              id="achievement-card"
              title={t("home:home_ach_5")}
              statistic="5+"
              units={t("home:home_ach_units_5")}
              para={t("home:home_ach_para_5")}
            />
            <StatsCard
              id="achievement-card"
              title={t("home:home_ach_6")}
              statistic="18+"
              units={t("home:home_ach_units_6")}
              para={t("home:home_ach_para_6")}
            />
          </div>
        </div>

        <div
          id="mobile-values-button"
          className="flex justify-center sm:hidden "
        >
          <PageLinks
            mask_id={"values-button-mobile-mask"}
            id="values-button-mobile"
            color={"canvasblue"}
            route={"/services"}
            width={"w-[300px]"}
            hoverWidth={"400px"}
            text={t("common:button_values")}
            logo={"/images/icons/our-values.png"}
          />
        </div>

        <div className="relative aspect-[9/16] w-full bg-white sm:hidden">
          <Image
            fill
            style={{ objectFit: "contain" }}
            src="/images/mobile-map.png"
          />
        </div>

        <div className="relative top-[-40px] m-auto w-[90vw] bg-none sm:hidden">
          <StatsCard
            title={t("home:home_map_h1")}
            statistic={"7+"}
            units={t("home:home_map_h3")}
            para={t("home:home_map_h2")}
          />
        </div>

        <div
          id="country-section-mobile"
          className="flex flex-shrink-0 gap-6 overflow-x-scroll bg-white py-[40px] pl-[30px] lg:hidden"
        >
          <Image
            className="aspect-square bg-cover"
            width={240}
            height={1}
            src="/images/country-pics/us-mobile.png"
          />

          <Image
            className="aspect-square w-[240px] bg-cover"
            width={240}
            height={1}
            src="/images/country-pics/me-mobile.png"
          />

          <Image
            className="aspect-square w-[240px] bg-cover"
            width={240}
            height={1}
            src="/images/country-pics/cn-mobile.png"
          />

          <Image
            className="aspect-square w-[240px] bg-cover"
            width={240}
            height={1}
            src="/images/country-pics/em-mobile.png"
          />

          <Image
            className="aspect-square w-[240px] bg-cover"
            width={240}
            height={1}
            src="/images/country-pics/th-mobile.png"
          />
        </div>

        <div
          id="big-map-section"
          className="routes-section relative hidden overflow-hidden bg-white py-16 lg:block"
        >
          <div className="relative m-auto py-16 xl:w-[1280px]">
            {/* These are for route lines */}

            {/* <svg
              className="w-full absolute h-[700px] z-20"
              viewBox="0 0 600 720"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <mask id="mask-0">
                  <path
                    id="wm-us-path"
                    d="M 19.264 60 C 52.615 396.698 420.492 648.393 580.862 695.226"
                    
                  />
                </mask>
              </defs>
              <path
                className="mask-path-class"
                d="M 19.019 60 C 52.37 396.698 420.247 648.393 580.617 695.226"
                // style={{
                //   fill: "none",
                //   mask: "url(#mask-0)",
                //   strokeDasharray: "5.33, 5.33",
                //   strokeWidth: "1.46498",
                // }}
              />
            </svg> */}

            <SvgMap id="map-svg" />

            {/* These are for dots */}
            <MapDots id="us-dot" position="top-[20%] left-[30%]" />
            <MapDots id="me-dot" position="top-[60%] left-[33%] " />
            <MapDots id="cn-dot" position="top-[50%] right-[18%]" />
            <MapDots id="em-dot" position="bottom-[10%] right-[10%]" />
            <MapDots id="wm-dot" position="bottom-[10%] right-[23%]" />
            <MapDots id="th-dot" position="bottom-[20%] right-[23%]" />

            {/* these are for pics */}

            <CountryImg
              url={"/images/country-pics/us.png"}
              width={"w-[30%]"}
              height={"aspect-[3/2]"}
              position={"top-[9%] left-[32%]"}
            />

            <CountryImg
              url={"/images/country-pics/me.png"}
              width={"w-[30%]"}
              height={"aspect-[3/2]"}
              position={"bottom-[38%] left-[4%]"}
            />

            <CountryImg
              url={"/images/country-pics/cn.png"}
              width={"w-[20%]"}
              height={"aspect-[2/3]"}
              position={"left-[71%] bottom-[47%]"}
            />
            <CountryImg
              url={"/images/country-pics/th.png"}
              width={"w-[30%]"}
              height={"aspect-[3/2]"}
              position={"left-[45%] bottom-[21%]"}
            />

            <CountryImg
              url={"/images/country-pics/em.png"}
              width={"w-[20%]"}
              height={"aspect-[2/3]"}
              position={"right-[-78%] bottom-[11%]"}
            />

            <div className="absolute bottom-[20px] left-[4%] w-[360px] items-center">
              <StatsCard
                title={t("home:home_map_h1")}
                statistic={"7+"}
                units={t("home:home_map_h3")}
                para={t("home:home_map_h2")}
              />
            </div>
          </div>
        </div>

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
                  width={"w-[450px]"}
                  hoverWidth={"500px"}
                  mask_id={"values-button-services-large-mask"}
                  id="values-button-services-large"
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
                id="values-button-services-mobile"
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

        <div
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
                width={125}
                height={100}
                style={{ objectFit: "contain" }}
                src={"/images/clients/federal-oats.png"}
              />
            </div>
          </div>
        </div>

        <div className="client-testimonials w-screen bg-white ">
          <div className="m-auto flex justify-center xl:w-[1280px]">
            <h1
              className={`${national.variable} headings overflow-hidden font-national text-[60px] text-canvasblue`}
            >
              {t("home:home_testimonials_h1")}
            </h1>
          </div>

          <div className="flex aspect-square w-full items-start justify-between bg-[url('/images/client-testimonial.png')] bg-cover lg:hidden"></div>

          <div className="relative top-[-200px] w-full items-start justify-between bg-cover lg:top-0 lg:flex lg:bg-[url('/images/client-testimonial.png')] lg:py-[100px]">
            <div className="m-auto flex flex-col-reverse items-stretch gap-8 lg:flex-row xl:w-[1280px]">
              <div
                id="mobile-link"
                className="flex justify-center sm:self-center lg:hidden"
              >
                <PageLinks
                  mask_id={'"contact-button-mobile-mask"'}
                  width={"w-[300px]"}
                  hoverWidth={"400px"}
                  id="contact-button-mobile"
                  color="canvasblue"
                  route={"/contact"}
                  text={t("common:button_contact")}
                  logo="/images/icons/contact-logo.png"
                />
              </div>

              <div className="hidden w-[330px] max-w-[400px] sm:self-center lg:block">
                <PageLinks
                  width={"w-[300px]"}
                  hoverWidth={"400px"}
                  mask_id={"contact-button-large-mask"}
                  id="contact-button-large"
                  color="white"
                  route={"/contact"}
                  text={t("common:button_contact")}
                  logo="/images/icons/contact-logo.png"
                />
              </div>

              <div className="testimonial-box m-auto flex w-[90vw] max-w-[520px] flex-col gap-5 bg-canvasblue p-5">
                <h1
                  className={`${national.variable} font-national text-[32px] text-white`}
                >
                  {t("home:home_testimonial_1_h1")}
                </h1>
                <p
                  className={`${roboto.variable} font-robo leading-6 text-[18x] text-white`}
                >
                  {t("home:home_testimonial_1_para")}
                </p>

                <div className="flex flex-col gap-[20px] text-white lg:flex-row ">
                  <div className="w-1/2 flex-col">
                    <h3 className="text-[24px] leading-[28px]">Mr. John</h3>
                    <h3 className="text-[14px] leading-5">
                      {t("home:home_testimonial_1_occupation")}
                    </h3>
                  </div>

                  <div className="lg:w-1/2">
                    <h1
                      className={`${national.variable} font-national text-[38px] leading-[48px]`}
                    >
                      NTPM SDN BHD
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
