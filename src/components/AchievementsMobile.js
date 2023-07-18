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
    const tl = gsap.timeline();

    tl.fromTo(
      ".ship-wrapper",
      {
        xPercent: 100,
        
      },
      {
        xPercent: 20,
        scrollTrigger: {
          trigger: "#strengths-mobile",
      
          markers: true,
          end:'center center'
        },
      }
    );

    // return () => {

    // };
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
        className="strengths achievement-section-mobile px-6 flex snap-x flex-col overflow-x-scroll scroll-smooth bg-white sm:hidden"
      >
        <div className="ship-wrapper h-[200px] w-[1400px] ">
          <div
            // transition={{duration:1}}

            // style={{ translateX: shipMovement }}
            id="ship-small"
            className="relative my-6 w-full h-full sm:hidden"
          >
            <Image
              fill
              src={"/images/ship_water.svg"}
              style={{ objectFit: "cover", objectPosition: "0%" }}
            />
          </div>
        </div>

        <div
          className="flex gap-6 w-full px-6 py-[30px] text-canvasblue"
        >
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

      <div id="values-button-mobile" className="flex justify-center sm:hidden ">
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
