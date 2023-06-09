import Image from "next/image";
import Link from "next/link";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { UseTranslation, useTranslation } from "next-i18next";
import { national, roboto } from "../../utils/font";
import StatsCard from "../components/StatsCard";

import Marquee from "react-fast-marquee";

import ServicesCard from "../components/ServicesCard";
import PageLinks from "@/components/PageLinks";
import SvgMap from "@/components/map-svg";
import MapDots from "@/components/map-dots";
import CountryImg from "@/components/country-img";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { SplitText } from "gsap/dist/SplitText";
import { motion, useScroll, useTransform } from "framer-motion";



import { useEffect, useRef } from "react";
import MapRoutes from "@/components/maproutes";

//on page load, prepare these props statically which takes in the locale file
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
  };
}

const HeroCard = ({ text, logo, url, scrollTo }) => {
  return (
    <div
      onClick={() => scrollTo(url)}
      className="flex aspect-square min-h-[180px] min-w-[160px] flex-col  gap-[28px] p-4 transition-colors hover:cursor-pointer hover:bg-[rgba(44,182,108,0.7)]"
    >
      <hr className="h-[4px] w-full bg-white"></hr>
      <h3
        className={`${national.variable} font-national text-[32px] font-medium uppercase`}
      >
        {text}
      </h3>
      <div className="relative aspect-square w-[48px]">
        <Image fill style={{ objectFit: "cover" }} src={logo} />
      </div>
    </div>
  );
};

gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);

export default function Home(props) {
  //translation

  const scrollTo = props.scrollTo;

  // console.log(scrollTo);

  // console.log(props.locale);

  const { t } = useTranslation();

  // animate banner
  const index = useRef();

  //mobile horizontal scroll values section
  const horizontalRef = useRef(null);

  const { scrollXProgress } = useScroll({
    container: horizontalRef,
  });

  let shipMovement = useTransform(scrollXProgress, [0,1], ['35%', '100%']);

  useEffect(() => {
    let context = gsap.context(() => {
      gsap.fromTo(
        "#wm-us-path",
        { drawSVG: "100% 100%" },
        { drawSVG: "0% 100%", duration: 5, repeat: -1 }
      );
    }, index);

    return context.revert();
  }, []);

  useEffect(() => {
    let context = gsap.context(() => {
      let headingSplit = new SplitText(".headings", { type: "words" });

      let words = headingSplit.words;
      console.log(words);

      gsap.fromTo(
        "#wm-us-path",
        { drawSVG: "100% 100%" },
        {
          drawSVG: "0% 100%",
          duration: 5,
          repeat: -1,
        }
      );

      gsap.from(words, {
        y: 1000,
        ease: "easeOut",
        stagger: 0.08,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".headings",
        },
      });

      let tl = gsap.timeline();

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
            markers: true,
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
          markers: true,
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
          markers: true,
          scrub: 2,
          start: "105% 50%",
          end: "150% 50%",
        },
        delay: 3.5,
      });

      tl.fromTo(
        "#ship-large",
        { y: "50%" },
        {
          x: 0,
          y: 0,
          duration: 2,
          ease: "easeIn",
          scrollTrigger: {
            trigger: "#hero",
            markers: true,
            scrub: 4,
            start: "50% 10%",
            end: "150% 50%",
          },
        }
      );
      // ).from("#achievement-card", {
      //   y: 100,
      //   duration: 2,
      //   stagger: 0.2,
      //   scrollTrigger: {
      //     trigger: "#hero",
      //     markers: true,
      //     scrub: 4,
      //     start: "50% 10%",
      //     end: "150% 50%",
      //   },
      // });
    }, index);
    return () => {
      context.revert();
    };
  }, []);

  return (
    <main ref={index} className={`${national.variable} font-nation bg-white`}>
      <div>
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
            <div className="flex w-[400px] flex-col justify-center gap-6 text-white">
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
                url="#strengths"
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
          className="relative hidden h-screen w-screen justify-center bg-[url('/images/home-hero-pattern.png')] bg-cover sm:flex"
        >
          <div
            id="hero-text-wrapper"
            className="z-[10] self-end mb-[5vh] flex w-full flex-col gap-[50px] pl-[30px] lg:pl-0 lg:w-[1280px] lg:bg-none"
          >
            <div className="flex w-[400px] flex-col justify-center gap-6 text-white">
              <h1
                className={`${national.variable} font-national text-[28px] font-medium uppercase lg:text-[32px] lg:font-bold`}
              >
                {t("home:home_hero_h2")}
              </h1>

              <h2
                className={`${national.variable} headings overflow-hidden font-national text-[48px] font-medium uppercase leading-[54px] tracking-wide lg:text-[60px] lg:font-bold lg:leading-[60px]`}
              >
                {t("home:home_hero_h1")}
              </h2>
              <h3
                className={`${roboto.variable} hidden max-w-[350px] font-robo uppercase lg:block`}
              >
                {t("home:home_hero_para")}
              </h3>
            </div>

            <div
              id="hero-flex-tab-above"
              className=" hidden flex-wrap gap-5  self-end text-white sm:flex"
            >
              <HeroCard
                text={t("home:home_hero_strength")}
                logo="/images/icons/strength.png"
                url="#strengths"
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
          className="relative hidden justify-center pb-[60px] pt-[200px] sm:flex"
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
            className="grid w-full grid-cols-[330px_330px] justify-between gap-6 px-[30px] py-[30px] text-canvasblue xl:max-w-[1280px]"
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
        <div className="hidden w-[400px] lg:block">
          <PageLinks
            color={"canvasblue"}
            route={"/services"}
            text="Our Values"
            logo={"/images/icons/our-values.png"}
          />
        </div>

        <div
          id="strengths-mobile"
          ref={horizontalRef}
          className="achievement-section-mobile flex flex-col overflow-x-scroll scroll-smooth bg-white sm:hidden"
        >
          <div
      
            className="ship-wrapper"
          >
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

        <div className="hidden">
          <PageLinks
            color={"canvasblue"}
            route={"/services"}
            text="Our Values"
            logo={"/images/icons/our-values.png"}
          />
        </div>

        <div className="relative h-[600px] w-full bg-white sm:hidden">
          <Image
            fill
            style={{ objectFit: "cover" }}
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

                <h2
                  className={`${national.variable} headings overflow-hidden font-national text-[38px]
                  leading-[42px] text-white lg:text-[48px] lg:font-bold lg:leading-[58px]`}
                >
                  {t("home:home_services_h2")}
                </h2>
              </div>
              <p
                className={`${roboto.variable} max-w-[400px] font-robo text-[18px] leading-6 text-white`}
              >
                {t("home:home_services_para")}
              </p>
            </div>

            {/* services card */}

            <div className=" flex gap-x-10 gap-y-10 overflow-x-auto whitespace-nowrap px-10 lg:grid lg:grid-cols-2">
              <ServicesCard
                order={1}
                title={t("home:home_services_card_1")}
                logo={"/images/icons/airplane.png"}
                number={"01"}
              />
              <ServicesCard
                order={2}
                title={t("home:home_services_card_2")}
                logo={"/images/icons/airplane.png"}
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
                  color={"white"}
                  route={"/services"}
                  text="Services from our partner"
                  logo={"/images/icons/core-logistics.png"}
                />
              </div>
            </div>
            <div className="mt-10 w-[400px] lg:hidden">
              <PageLinks
                color={"white"}
                route={"/services"}
                text="Our Values"
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

                <h2
                  className={`${national.variable} headings max-w-[500px] overflow-hidden font-national text-[38px] font-medium uppercase leading-[42px] text-canvasblue lg:text-[48px] lg:font-bold lg:leading-[58px]`}
                >
                  {t("home:home_sector_h2")}
                </h2>
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
            className="client-testimonials m-auto grid grid-cols-2 gap-3 px-[30px] py-10 lg:grid-cols-4 xl:w-[1280px]"
          >
            <div className="flex justify-center bg-canvaslightgrey py-9">
              <Image
                width={125}
                height={100}
                style={{ objectFit: "cover" }}
                src={"/images/clients/aji_no_kiri.png"}
              />
            </div>
            <div className="flex justify-center bg-canvaslightgrey py-9">
              <Image
                width={125}
                height={100}
                style={{ objectFit: "cover" }}
                src={"/images/clients/ntpm.png"}
              />
            </div>
            <div className="flex justify-center bg-canvaslightgrey py-9">
              <Image
                width={125}
                height={100}
                style={{ objectFit: "cover" }}
                src={"/images/clients/premier.png"}
              />
            </div>
            <div className="flex justify-center bg-canvaslightgrey py-9">
              <Image
                width={125}
                height={100}
                style={{ objectFit: "cover" }}
                src={"/images/clients/captain_oats.png"}
              />
            </div>
            <div className="flex justify-center bg-canvaslightgrey py-9">
              <Image
                width={125}
                height={100}
                style={{ objectFit: "cover" }}
                src={"/images/clients/hzpg.png"}
              />
            </div>
            <div className="flex justify-center bg-canvaslightgrey py-9">
              <Image
                width={125}
                height={100}
                style={{ objectFit: "cover" }}
                src={"/images/clients/intimate.png"}
              />
            </div>
            <div className="flex justify-center bg-canvaslightgrey py-9">
              <Image
                width={125}
                height={100}
                style={{ objectFit: "cover" }}
                src={"/images/clients/royalgold.png"}
              />
            </div>
            <div className="flex justify-center bg-canvaslightgrey py-9">
              <Image
                width={125}
                height={100}
                style={{ objectFit: "cover" }}
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
                className="min-w-[330px] max-w-[400px] flex-grow sm:self-center lg:hidden"
              >
                <PageLinks
                  color="canvasblue"
                  route={"/contact"}
                  text="Contact Us"
                  logo="/images/icons/contact-logo.png"
                />
              </div>

              <div className="hidden min-w-[330px] max-w-[400px] sm:self-center lg:block">
                <PageLinks
                  color="white"
                  route={"/contact"}
                  text="Contact Us"
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
