import { useScroll, useTransform } from "framer-motion";
import React, { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import StatsCard from "./StatsCard";
import Image from "next/image";
import PageLinks from "@/components/PageLinks";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AchievementsMobile({ t }) {
  useLayoutEffect(() => {
    let shipAnimate = gsap.fromTo(
      ".ship-wrapper",
      {
        xPercent: 100,
      },
      {
        xPercent: 18,
        duration: 1.8,
        scrollTrigger: {
          trigger: "#strengths-mobile",

          start: "start center",
        },
      }
    );

    return () => {
      shipAnimate.kill();
    };
  }, []);
  //mobile horizontal scroll values section
  // const horizontalRef = useRef(null);

  // const { scrollXProgress } = useScroll({
  //   container: horizontalRef,
  // });

  // let shipMovement = useTransform(scrollXProgress, [0, 1], ["25%", "100%"]);

  return (
    <>
      <div
        id="strengths-mobile"
        // ref={horizontalRef}
        className="strengths achievement-section-mobile flex snap-x flex-col overflow-x-scroll scroll-smooth bg-white px-6 sm:hidden"
      >
        <div className="ship-wrapper my-6 h-[200px] w-[1230px] ">
          <div
            // transition={{duration:1}}

            // style={{ translateX: shipMovement }}
            id="ship-small"
            className="relative  h-full w-full sm:hidden"
          >
            <Image
              fill
              alt="canvas-ship-water"
              src={"/images/ship_water.png"}
              style={{ objectFit: "cover", objectPosition: "0%" }}
            />
          </div>
        </div>

        <div className="flex w-full gap-6 text-canvasblue">
          <StatsCard
            id="achievement-card"
            title={t("home:home_ach_1")}
            statistic="1,000+"
            units={t("home:home_ach_units_1")}
            para={t("home:home_ach_para_1")}
          />
          <StatsCard
            id="achievement-card"
            title={t("home:home_ach_2")}
            statistic="10,000+"
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
        id="values-button-mobile"
        className="my-6 flex justify-center sm:hidden "
      >
        <PageLinks
          mask_id="values-button-mobile-mask"
          parentId="values-button-mobile"
          color={"canvasblue"}
          route={"/services"}
          width={"w-[300px]"}
          hoverWidth={"w-[400px]"}
          text={t("common:button_values")}
          logo={"/images/icons/values-icon.svg"}
        />
      </div>
    </>
  );
}

export default AchievementsMobile;
