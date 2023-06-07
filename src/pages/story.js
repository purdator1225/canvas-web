import React from "react";
import { national, roboto } from "../../utils/font";
import Image from "next/image";
import ValuesGrid from "@/components/ValuesGrid";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { UseTranslation, useTranslation } from "next-i18next";

import ValuesGridMobile from "@/components/ValuesGridMobile";

let storyValues = [
  {
    logo: "/images/icons/values-icons/say-yes.png",
    valueText: "story_values_1",
    index: 1,
  },
  {
    logo: "/images/icons/values-icons/available-icon.png",
    valueText: "story_values_2",
    index: 2,
  },
  {
    logo: "/images/icons/values-icons/learn-icon.png",
    valueText: "story_values_3",
    index: 3,
  },
  {
    logo: "/images/icons/values-icons/social-icon.png",
    valueText: "story_values_4",
    index: 4,
  },
  {
    logo: "/images/icons/values-icons/commit-icon.png",
    valueText: "story_values_5",
    index: 5,
  },
  {
    logo: "/images/icons/values-icons/strengths-icon.png",
    valueText: "story_values_6",
    index: 6,
  },
  {
    logo: "/images/icons/values-icons/tasks-icon.png",
    valueText: "story_values_7",
    index: 7,
  },
  {
    logo: "/images/icons/values-icons/green-icon.png",
    valueText: "story_values_8",
    index: 8,
  },
];

let storyImageList = [
  { url: "/images/story-values-pic1.png" },
  { url: "/images/story-values-pic2.png" },
  { url: "/images/story-values-pic3.png" },
];

let teamImageList = [
  { url: "/images/story-values-pic1.png", caption: "This is the team name" },
  { url: "/images/story-values-pic2.png", caption: "This is the team name" },
  { url: "/images/story-values-pic3.png", caption: "This is the team name" },
];

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["story", "common"])),
    },
  };
}

function Story(props) {
  const { t } = useTranslation();

  return (
    <div className="bg-white flex flex-col">
      <div id='top-wrapper' className=" self-end relative max-w-[850px]">
        <div className="flex w-full flex-col bg-white px-[30px]">
          <div className="mb-10 mt-24 flex flex-col gap-4">
            <h2
              className={`${national.variable} font-national text-[26px] font-medium uppercase leading-[28px] tracking-wide  text-canvasblue sm:text-[32px] sm:font-bold`}
            >
              {t("story:story_hero_h2")}
            </h2>
            <h1
              className={`${national.variable} font-national text-[38px] font-medium uppercase leading-[42px] tracking-wide text-canvasblue sm:text-[60px] sm:font-bold sm:leading-[60px]`}
            >
              {t("story:story_hero_h1")}
            </h1>
          </div>
        </div>

        <div
          data-lag="0.8"
          className="story-img-wrapper relative aspect-[16/9] w-full"
        >
          <Image
            fill
            style={{ objectFit: "cover" }}
            src={"/images/story-hero.png"}
          />
        </div>
      </div>

      <div
        id="our-journey"
        className="story-para flex w-screen bg-[url('/images/story-container-bg.png')] bg-cover"
      >
        <div className="flex min-h-[50%] m-auto flex-col gap-8 px-[30px] py-[78px] w-[90vw] max-w-[1280px]">
          <div className="max-w-[507px]">
            <p
              className={`${roboto.variable} font-robo text-[18px] leading-[24px] text-white`}
            >
              {t("story:story_para_1")}
            </p>
          </div>

          <div className="max-w-[507px] place-self-end">
            <p
              className={`${roboto.variable} font-robo text-[18px] leading-[24px] text-white`}
            >
              {t("story:story_para_2")}
            </p>
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

          <h1
            className={`${national.variable} headings w-[300px] font-national text-[38px] font-medium uppercase leading-[42px] tracking-wide text-canvasblue lg:text-[60px] lg:font-bold lg:leading-[60px]`}
          >
            {t("story:story_values_h2")}
          </h1>

          <div className="flex items-start gap-5 self-end">
            <Image
              width={80}
              height={80}
              src="/images/sustainability/sustainability1.png"
            />
            <Image
              width={80}
              height={80}
              src="/images/sustainability/sustainability2.png"
            />
            <Image
              width={80}
              height={80}
              src="/images/sustainability/sustainability3.png"
            />
            <Image
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
          <div className="px-[30px] py-10">
            <h1
              className={`${national.variable} font-national text-[26px] font-medium uppercase leading-[28px] text-canvasblue lg:text-[32px] lg:font-bold`}
            >
              {t("story:team_h1")}
            </h1>

            <h2
              className={`${national.variable} max-w-[500px] font-national text-[38px] font-medium uppercase leading-[42px] tracking-wide text-canvasblue lg:text-[48px] lg:font-bold lg:leading-[58px]`}
            >
              {t("story:team_h2")}
            </h2>
          </div>
          <div className="team-image-wrapper ml-[30px] flex gap-4 overflow-x-scroll whitespace-nowrap">
            {teamImageList.map((teamImage, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="relative h-[500px] w-[260px]" key={index}>
                  <Image
                    fill
                    style={{ objectFit: "cover" }}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
