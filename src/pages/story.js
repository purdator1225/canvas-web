import React, { useLayoutEffect, useRef, useContext } from "react";
import { national, roboto } from "../../utils/font";
import Image from "next/image";
import ValuesGrid from "@/components/ValuesGrid";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { UseTranslation, useTranslation } from "next-i18next";
import { motion, useTransform, useScroll } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { SmootherContext } from "@/components/SmootherContext";
import CareerListing from "@/components/CareerListing";

import ValuesGridMobile from "@/components/ValuesGridMobile";

import {
  storyImageList,
  storyValues,
  teamImageList,
  careerList,
} from "../../utils/data";
import GsapSplitTextWord from "@/components/animations/GsapSplitTextWord";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["story", "common"])),
    },
  };
}

function Story(props) {
  const { t } = useTranslation();


  // const smoother = useContext(SmootherContext);  //get access to the smoother 


  // useLayoutEffect(() => {

  //   smoother && smoother.effects("[data-speed], [data-lag]", {});
  // }, []);

  // // mobile horizontal scroll values section
  const storyRef = useRef(null);

  const { scrollYProgress } = useScroll();

  let picMovement = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div id="smooth-content" className="flex flex-col bg-white">
      <div id="top-wrapper" className=" relative max-w-[850px] self-end">
        <div className="flex w-full flex-col bg-white px-[30px]">
          <div className="mb-10 mt-24 flex flex-col gap-4">
            <h2
              className={`${national.variable} font-national text-[26px] font-medium uppercase leading-[28px] tracking-wide  text-canvasblue sm:text-[32px] sm:font-bold`}
            >
              {t("story:story_hero_h2")}
            </h2>
            <GsapSplitTextWord>
            <h1
              className={`${national.variable} font-national text-[38px] font-medium uppercase leading-[42px] tracking-wide text-canvasblue sm:text-[60px] sm:font-bold sm:leading-[60px]`}
            >
              {t("story:story_hero_h1")}
            </h1>
            </GsapSplitTextWord>
          </div>
        </div>

        <motion.div
        style={{y:picMovement}}

          className="story-img-wrapper relative aspect-[16/9] w-full"
        >
          <Image
          alt="story-hero"
            fill
            style={{ objectFit: "cover", zIndex:10 }}
            src={"/images/story-hero.png"}
          />
        </motion.div>
      </div>

      <div
        id="our-journey"
        className="story-para relative  flex w-screen bg-[url(')] bg-cover"
      >

      <Image fill className='object-cover' src='/images/story-container-bg.png'/>

        <div className="m-auto relative flex min-h-[50%] w-[90vw] max-w-[1280px] flex-col gap-8 px-[30px] py-[78px]">
          <div className="max-w-[507px] overflow-hidden">
            <motion.p
            initial={{x:-100, opacity:0}}
            whileInView={{x:0, opacity:1 }}
            transition={{duration:0.5}}
              className={`${roboto.variable} font-robo text-[18px] leading-[24px] text-white`}
            >
              {t("story:story_para_1")}
            </motion.p>
          </div>

          <div className="max-w-[507px] place-self-end overflow-hidden">
            <motion.p
             initial={{x:100, opacity:0}}
            whileInView={{x:0, opacity:1 }}
            transition={{duration:0.5}}
              className={`${roboto.variable} font-robo text-[18px] leading-[24px] text-white`}
            >
              {t("story:story_para_2")}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="story-values-section w-screen bg-white">
        <div className="m-auto flex flex-col justify-between gap-4 px-[30px] py-[60px] xl:w-[1280px]">
          <h1
            className={`${national.variable} headings leading:text-[32px] w-[300px] font-national text-[26px] font-medium uppercase leading-[28px] tracking-wide text-canvasblue lg:text-[32px] lg:font-bold`}
          >
            {t("story:story_values_h1")}
          </h1>
          <GsapSplitTextWord>
          <h1
            className={`${national.variable} headings w-[300px] font-national text-[38px] font-medium uppercase leading-[42px] tracking-wide text-canvasblue lg:text-[60px] lg:font-bold lg:leading-[60px]`}
          >
            {t("story:story_values_h2")}
          </h1>
          </GsapSplitTextWord>
          

          <div className="flex items-start gap-5 self-end">
            <Image
              alt="sus-value-1"
              width={80}
              height={80}
              src="/images/sustainability/sustainability1.png"
            />
            <Image
              alt="sus-value-2"
              width={80}
              height={80}
              src="/images/sustainability/sustainability2.png"
            />
            <Image
              alt="sus-value-3"
              width={80}
              height={80}
              src="/images/sustainability/sustainability3.png"
            />
            <Image
              alt="sus-value-4"
              width={80}
              height={80}
              src="/images/sustainability/sustainability4.png"
            />
          </div>
        </div>
        <div className="m-auto xl:w-[1280px]">
          <ValuesGridMobile
            valuesList={storyValues}
            namespace={"story"}
            bg={"canvasblue"}
          />

          <ValuesGrid
            bg={"canvasblue"}
            namespace={"story"}
            valuesList={storyValues}
            imageList={storyImageList}
          />
        </div>
      </div>

      <div id="our-team" className="team-culture bg-white py-20">
        <div className="m-auto max-w-screen-xl">
          {/* <div className="flex flex-col gap-4 px-[30px] py-10">
            <h1
              className={`${national.variable} font-national text-[26px] font-medium uppercase leading-[28px] text-canvasblue lg:text-[32px] lg:font-bold`}
            >
              {t("story:team_h1")}
            </h1>

            <GsapSplitTextWord>

            <h2
              className={`${national.variable} max-w-[500px] font-national text-[38px] font-medium uppercase leading-[42px] tracking-wide text-canvasblue lg:text-[48px] lg:font-bold lg:leading-[58px]`}
            >
              {t("story:team_h2")}
            </h2>
            </GsapSplitTextWord>
          </div> */}
          {/* <div className="team-image-wrapper flex max-w-[1280px] gap-4 whitespace-nowrap px-[30px]">
            {teamImageList.map((teamImage, index) => (
              <div key={index} className="flex w-full flex-col gap-3">
                <div
                  className="relative odd:aspect-square even:aspect-auto"
                  key={index}
                >
                  <Image
                    width={200}
                    height={200}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    src={teamImage.url}
                  />
                </div>

                 <p
                  className={`${roboto.variable} self-end font-robo text-[16px] leading-[20px] text-canvasblue`}
                >
                  {teamImage.caption}
                </p> 
              </div>
            ))}
          </div> */}

          <div id='careers-section' className="m-[30px] flex flex-col justify-between gap-6 py-10 sm:flex-row lg:py-[100px]">
          <GsapSplitTextWord> <h1
                className={`${national.variable} max-w-[500px] font-national text-[38px] font-medium uppercase leading-[42px] tracking-wide text-canvasblue lg:text-[60px] lg:font-bold lg:leading-[58px]`}
            >
              Our Careers
            </h1></GsapSplitTextWord>
           
            <div className="flex flex-col  gap-7">
              {careerList.map((career, idx) => (
                <CareerListing
                  key={idx}
                  title={career.title}
                  role={career.role}
                />
              ))}

              <p className="titlecase my-5 text-canvasblue">
                Or Email Resume to <strong>hradmin@canvasglobal-log.com</strong>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
