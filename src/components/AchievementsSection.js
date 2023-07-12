import React from 'react'
import StatsCard from './StatsCard'
import Image from 'next/image'



function AchievementsSection({t}) {


  return (
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
  )
}

export default AchievementsSection