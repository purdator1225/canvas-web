import React, { useEffect } from "react";
import HeroCard from "./HeroCard";
import GsapSplitTextWord from "./animations/GsapSplitTextWord";
import { motion } from "framer-motion";
import { national, roboto } from "../../utils/font";
import { gsap } from "gsap";

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

function HeroIsDesktop({ t }) {
  return (
    <div
      id="hero"
      className="relative hidden min-h-[800px] max-h-[1200px] w-screen justify-center bg-[url('/images/hero_pattern_home-min.png')] bg-cover md:flex"
    >
      {/* <div className="absolute hidden h-full w-[1280px] justify-end xl:flex">
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
      </div> */}

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
            className={`${roboto.variable}  max-w-[350px] font-robo uppercase lg:block`}
          >
            {t("home:home_hero_para")}
          </h3>
        </div>

        <div
          id="hero-flex-tab-above"
          className=" hidden sm:flex-wrap self-end text-white sm:flex"
        >
          <HeroCard
            text={t("home:home_hero_strength")}
            logo="/images/icons/strength.png"
            url="#strengths-large"
            scrollSection={"#strengths-large"}
          />
          <HeroCard
            text={t("home:home_hero_service")}
            logo="/images/icons/services.png"
            scrollSection={"#services-section"}
          />
          <HeroCard
            text={t("home:home_hero_sector")}
            logo="/images/icons/sector.png"
            scrollSection={"#sectors"}
          />
          <HeroCard
            text={t("home:home_hero_clients")}
            logo="/images/icons/client-icon.png"
            scrollSection={"#clients"}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroIsDesktop;
