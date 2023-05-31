import Image from "next/image";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { UseTranslation, useTranslation } from "next-i18next";
import { national, roboto } from "../../utils/font";
import StatsCard from "../components/StatsCard";

import Marquee from "react-fast-marquee";

import Hero from "@/components/hero";
import ServicesCard from "../components/ServicesCard";
import PageLinks from "@/components/PageLinks";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { useEffect, useRef } from "react";
import SvgMap from "@/components/map-svg";
import MapDots from "@/components/map-dots";
import CountryImg from "@/components/country-img";

//on page load, prepare these props statically which takes in the locale file
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

const HeroCard = ({ text, logo }) => {
  return (
    <div className="flex flex-col self-end hover:bg-[#0057C180] w-[180px] aspect-square transition-colors p-6 hover:cursor-pointer">
      <hr className="bg-white h-[4px] w-full"></hr>
      <h3
        className={`${national.variable} font-national text-[32px] font-medium uppercase`}
      >
        {text}
      </h3>
      <div className="w-[48px] aspect-square relative">
        <Image fill style={{ objectFit: "cover" }} src={logo} />
      </div>
    </div>
  );
};

gsap.registerPlugin(ScrollTrigger);

export default function Home(props) {
  //translation

  const { t } = useTranslation();

  // animate banner

  let root = useRef();

  useEffect(() => {
    let context = gsap.context(() => {
      let tl = gsap.timeline();

      let mapTimeLine = gsap.timeline();

      gsap.fromTo(
        "#map-svg",
        { drawSVG: "0%" },
        {
          drawSVG: "100%",
          transformOrigin: "center",
          strokeDasharray: "4",
          duration: 10,
          scrollTrigger: {
            trigger: "#map-scroll",
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
          trigger: "#map-scroll",
          markers: true,
          scrub: 2,
          start: "100% 25%",
          end: "125% 50%",
        },
        delay: 1.5,
      });

      gsap.to(".country-img", {
        autoAlpha: 1,
        scale: 1.01,
        stagger: 0.2,
        ease: "back(4)",
        scrollTrigger: {
          trigger: "#map-scroll",
          markers: true,
          scrub: 2,
          start: "125% 50%",
          end: "150% 50%",
        },
        delay: 3.5,
      });

      tl.fromTo(
        "#ship",
        { y: "50%" },
        {
          x: 0,
          y: 0,
          duration: 2,
          ease: "easeIn",
          scrollTrigger: {
            trigger: "#ship-scroll",
            markers: true,
            scrub: 4,
            start: "50% 10%",
            end: "150% 50%",
          },
        }
      ).from("#achievement-card", {
        opacity: 0,
        y: 100,
        duration: 2,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#ship-scroll",
          markers: true,
          scrub: 4,
          start: "50% 10%",
          end: "150% 50%",
        },
      });
    }, root);
    return () => {
      context.revert();
    };
  }, []);

  return (
    <main ref={root} className={`${national.variable} font-nation`}>
      <div>{props.locale}</div>
      <div
        id="ship-scroll"
        className="w-full h-full bg-[url('/images/home-hero-pattern.png')] bg-cover text-white "
      >
        <div className="hero-el-wrapper h-screen max-w-screen-xl m-auto grid grid-cols-6 gap-6 pb-[76px]">
          <div className=" flex flex-col justify-center gap-6 ml-5 col-span-2">
            <h1
              className={`${national.variable} font-national text-[32px] font-bold uppercase`}
            >
              Canvas Global Logistics
            </h1>
            <h2
              className={`${national.variable} font-national text-[60px] leading-[60px] font-bold uppercase`}
            >
              A partnership that goes above and beyond
            </h2>
            <h3
              className={`${roboto.variable} font-robo uppercase max-w-[350px]`}
            >
              WE HELP OUR CLIENTS GO NEW DESTINATIONS, SAVE COST, AND START NEW
              VENTURES BY EXPLORING POSSIBILITIES TOGETHER
            </h3>
          </div>
          <HeroCard text="Our strength" logo="/images/icons/strength.png" />
          <HeroCard text="Our services" logo="/images/icons/services.png" />
          <HeroCard text={`Our Sectors `} logo="/images/icons/sector.png" />
          <HeroCard text="Our clients" logo="/images/icons/client-icon.png" />
        </div>
      </div>

      <div
        id="map-scroll"
        className="achivement-section bg-white py-[78px] relative flex flex-col justify-center items-center"
      >
        <div id="ship" className="absolute h-full w-[400px]">
          <Image fill src={"/ship.png"} style={{ objectFit: "cover" }} />
        </div>
        <div
          id="map-section"
          className="grid grid-cols-[330px_330px] grid-rows-[360px_360px_360px] text-canvasblue w-[1280px] m-auto content-between justify-between gap-y-[120px]"
        >
          <StatsCard
            id="achievement-card"
            title="Strong Core Competency & Reliability"
            statistic="1000+"
            units="TEUs monthly"
            para="We have grown our core services to a consistent output of at least 1000+ TEUs monthly."
          />
          <StatsCard
            id="achievement-card"
            title="Partner of Biggest depot in malaysia"
            statistic="10000+"
            units="TEUs capacity"
            para="Our partner is the biggest depot in Malaysia with high level security facilities, advanced surveillance system with remote monitoring. Strategic location, a short distance away from the Penang Port."
          />
          <StatsCard
            id="achievement-card"
            title="Meaningful collaboration"
            statistic="19+"
            units="logistics vendors"
            para="We love collaboration, forming new partnerships to expand our value for our customers."
          />
          <StatsCard
            id="achievement-card"
            title="Expertise in CUSTOMER SERVICE"
            statistic="15+"
            units="years of experience"
            para="Our customer service members are veterans of the industry, they have the necessary knowledge to quickly solve any technical issues."
          />
          <StatsCard
            id="achievement-card"
            title="Supply Chain Network"
            statistic="5+"
            units="countries"
            para="We are always expanding our connections across different industries and countries, exploring new opportunities."
          />
          <StatsCard
            id="achievement-card"
            title="Industries Served"
            statistic="18+"
            units="sectors covered"
            para="We have helped clients from more than 18 different industries to overcome logistical challenges, we will continue to explore different ways to effectively serve our customers."
          />
        </div>
        <div className="absolute bottom-10 left-10">
          <PageLinks
            color={"canvasblue"}
            route={"/services"}
            text="Our Values"
            logo={"/images/icons/values-icon.svg"}
          />
        </div>
      </div>

      <div className="routes-section py-16 bg-white relative overflow-hidden">
        <div className="w-[80vw] m-auto py-16 relative">
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
            url={"/images/country-pics/th.png"}
            width={"w-[30%]"}
            height={"aspect-[3/2]"}
            position={"left-[45%] bottom-[21%]"}
          />

          <CountryImg
            url={"/images/country-pics/cn.png"}
            width={"w-[20%]"}
            height={"aspect-[2/3]"}
            position={"left-[71%] bottom-[47%]"}
          />

          <CountryImg
            url={"/images/country-pics/em.png"}
            width={"w-[20%]"}
            height={"aspect-[2/3]"}
            position={"right-[-78%] bottom-[11%]"}
          />

          <div className="w-[360px] absolute bottom-[20px]">
            <StatsCard
              title={"Key Routes"}
              statistic={"7+"}
              units={"specialised routes"}
              para={
                "We are always expanding our specialised routes. Customers enjoy greater value when moving between Thailand <-> China, Thailand <-> Malaysia, East <-> West Malaysia, Malaysia <-> Middle East, and the USA."
              }
            />
          </div>
        </div>
      </div>

      <div className="our-services-section px-10 py-[79px] bg-cover bg-no-repeat bg-[url('/images/home-our-services.png')]">
        <div className="max-w-screen-xl m-auto ">
          <div className="flex justify-between mb-[90px]">
            <div>
              <h1
                className={`${national.variable} uppercase tracking-wide font-national text-[32px] font-bold text-white`}
              >
                Our services
              </h1>

              <h2
                className={`${national.variable} font-national text-[48px] leading-[58px] font-bold text-white`}
              >
                CORE LOGISTICS SERVICES
              </h2>
            </div>
            <p
              className={`${roboto.variable} font-robo text-white max-w-[400px]`}
            >
              Canvas Global Logistics offer a wide range of core logistics
              services to support the various needs of businesses from many
              different sectors.
            </p>
          </div>

          {/* services card */}

          <div className="grid services-grid gap-y-10 gap-x-10">
            <ServicesCard
              order={1}
              title="transportation"
              logo={"/images/icons/airplane.png"}
              number={"01"}
            />
            <ServicesCard
              order={2}
              title="transloading"
              logo={"/images/icons/airplane.png"}
              number={"02"}
            />
            <ServicesCard
              order={3}
              title="Trucking and Hauling"
              logo={"/images/icons/truck.png"}
              number={"03"}
            />
            <ServicesCard
              order={4}
              title="Storage Solution"
              logo={"/images/icons/storage.png"}
              number={"04"}
            />
            <ServicesCard
              order={5}
              title="Cargo Protection"
              logo={"/images/icons/cargo.png"}
              number={"05"}
            />
            <PageLinks
              order={6}
              color={"white"}
              route={"/services"}
              text="Services from our partner"
              logo={"/images/icons/core-logistics.png"}
            />
          </div>
        </div>
      </div>

      <div className="sector-section px-10 py-[79px] bg-cover bg-no-repeat bg-white overflow-x-hidden">
        <div className="max-w-screen-xl m-auto ">
          <div className="flex justify-between mb-[90px]">
            <div>
              <h1
                className={`${national.variable} font-national text-[32px] font-bold text-canvasblue uppercase`}
              >
                Our Sector
              </h1>

              <h2
                className={`${national.variable} max-w-[500px] font-national uppercase text-[48px] leading-[58px] font-bold text-canvasblue`}
              >
                We continue to explore and serve a wide range of industries
              </h2>
            </div>
            <p
              className={`${roboto.variable} font-robo text-canvasblue max-w-[400px]`}
            >
              Canvas Global Logistics offer a wide range of core logistics
              services to support the various needs of businesses from many
              different sectors.{" "}
            </p>
          </div>

          <div className="w-full h-[400px] bg-cover bg-[url('/images/sector-banner.png')]"></div>
        </div>

        <div id="sector-banner" className="py-10">
          <Marquee autoFill className="w-[200vw] flex gap-10">
            <h1
              className={`${national.variable} font-national text-[48px] leading-[58px] text-canvasblue `}
            >
              Steel
            </h1>

            <h1
              className={`${national.variable} font-national text-[48px] leading-[58px] text-canvasblue`}
            >
              Rubber
            </h1>
            <h1
              className={`${national.variable} font-national text-[48px] leading-[58px] text-canvasblue`}
            >
              Chemical & Mineral
            </h1>
            <h1
              className={`${national.variable} font-national text-[48px] leading-[58px] text-canvasblue`}
            >
              Automotive & Components
            </h1>
            <h1
              className={`${national.variable} font-national text-[48px] leading-[58px] text-canvasblue`}
            >
              Food & Beverage
            </h1>
          </Marquee>
        </div>

        {/* Testimonials */}

        <div className="client-testimonials grid grid-cols-4 gap-3 py-10">
          <div className="bg-canvaslightgrey flex justify-center py-9">
            <Image
              width={125}
              height={100}
              src={"/images/clients/honda-logo.png"}
            />
          </div>
          <div className="bg-canvaslightgrey flex justify-center py-9">
            <Image
              width={125}
              height={100}
              src={"/images/clients/honda-logo.png"}
            />
          </div>
          <div className="bg-canvaslightgrey flex justify-center py-9">
            <Image
              width={125}
              height={100}
              src={"/images/clients/honda-logo.png"}
            />
          </div>
          <div className="bg-canvaslightgrey flex justify-center py-9">
            <Image
              width={125}
              height={100}
              src={"/images/clients/honda-logo.png"}
            />
          </div>
          <div className="bg-canvaslightgrey flex justify-center py-9">
            <Image
              width={125}
              height={100}
              src={"/images/clients/honda-logo.png"}
            />
          </div>
          <div className="bg-canvaslightgrey flex justify-center py-9">
            <Image
              width={125}
              height={100}
              src={"/images/clients/honda-logo.png"}
            />
          </div>
          <div className="bg-canvaslightgrey flex justify-center py-9">
            <Image
              width={125}
              height={100}
              src={"/images/clients/honda-logo.png"}
            />
          </div>
          <div className="bg-canvaslightgrey flex justify-center py-9">
            <Image
              width={125}
              height={100}
              src={"/images/clients/honda-logo.png"}
            />
          </div>
        </div>
      </div>

      <div className="client-testimonials w-screen bg-white ">
        <div className="w-screen flex justify-center">
          <h1
            className={`${national.variable} font-national text-[60px] text-canvasblue`}
          >
            Client Testimonials
          </h1>
        </div>
        <div className="w-full h-[726px] flex items-start justify-between bg-cover bg-[url('/images/client-testimonial.png')] ">
          <PageLinks
            color="white"
            route={"/contact"}
            text="Contact Us"
            logo="/images/icons/contact-logo.png"
          />

          <div className=" flex flex-col gap-5 testimonial-box w-[520px] aspect-square bg-canvasblue p-[45px] mt-[100px] mr-[56px]">
            <h1
              className={`${national.variable} font-national text-[32px] text-white`}
            >
              They picked up my call and solved my problem on a sunday
            </h1>
            <p
              className={`${roboto.variable} font-robo text-[18x] leading-6 text-white`}
            >
              We were facing loading issues from a 3rd-party contractor, which
              would’ve greatly affected our deliveries. I contacted my logistics
              partner Canvas, and they picked up my call and solved my problem
              on a Sunday. Their expertise in logistics and customer service
              gave me a solid solution to my problem
            </p>

            <div className="flex flex-row gap-[20px] text-white ">
              <div className="flex-col w-1/2">
                <h3 className="text-[24px] leading-[28px]">Mr. John</h3>
                <h3 className="text-[14px] leading-5">Department Manager</h3>
              </div>

              <div className="w-1/2">
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
    </main>
  );
}
