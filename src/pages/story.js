import React from "react";
import { national, roboto } from "../../utils/font";
import Image from "next/image";
import ValuesGrid from "@/components/ValuesGrid";

let storyValues = [
  {
    logo: "/images/icons/values-icons/say-yes.png",
    valueText: "We say yes and exhaust all possibilities for our clients",
    index: 1,
  },
  {
    logo: "/images/icons/values-icons/say-yes.png",
    valueText: "We are always available to our clients",
    index: 2,
  },
  {
    logo: "/images/icons/values-icons/say-yes.png",
    valueText: "We learn something new everyday",
    index: 3,
  },
  {
    logo: "/images/icons/values-icons/say-yes.png",
    valueText: "We encourage healthy social life that expands our network",
    index: 4,
  },
  {
    logo: "/images/icons/values-icons/say-yes.png",
    valueText:
      "We commit to a active lifestyle so that we are able to do our best",
    index: 5,
  },
  {
    logo: "/images/icons/values-icons/say-yes.png",
    valueText: "We believe that every individual has their strength",
    index: 6,
  },
  {
    logo: "/images/icons/values-icons/say-yes.png",
    valueText: "We own our task from start to finish",
    index: 7,
  },
  {
    logo: "/images/icons/values-icons/say-yes.png",
    valueText: "We take care not to harm the environment",
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

function Story() {
  return (
    <div>
      <div className="bg-white h-screen w-screen flex justify-end relative ">
        <div className="max-w-[800px] absolute top-[20%]">
          <h2
            className={`${national.variable} font-national text-[32px] font-bold tracking-wide text-canvasblue`}
          >
            Our Story
          </h2>
          <h1
            className={`${national.variable} uppercase font-national text-[60px] font-bold tracking-wide text-canvasblue`}
          >
            founded in 2019, We set out to Reach new heights with our clients
          </h1>
        </div>

        <div className="absolute bottom-[-200px]">
          <div className="story-img-wrapper relative w-[850px] h-[550px] ">
            <Image
              fill
              style={{ objectFit: "cover" }}
              src={"/images/story-hero.png"}
            />
          </div>
        </div>
      </div>
      <div className="story-para flex h-screen w-screen bg-cover bg-[url('/images/story-container-bg.png')]">
        <div className="max-w-screen-xl min-h-[50%] m-auto flex justify-between">
          <div className="max-w-[507px]">
            <p
              className={`${roboto.variable} font-robo text-[18px] leading-[24px] text-white`}
            >
              Canvas Global was founded on the constant pursuit of pushing what
              is possible. We begin our journey with a small but experienced
              team, each member with at least 10 years within the logistics
              industry. Our experience in logistics tells us that every business
              faces different challenges, informing our decision to be more
              collaborative, to be more customer centric, and more willing to
              take risks. Today, we pride ourselves to be the explorers of
              solutions and a bridge of connections for our customers.
            </p>
          </div>

          <div className="max-w-[507px] place-self-end">
            <p
              className={`${roboto.variable} font-robo text-[18px] leading-[24px] text-white`}
            >
              We are constantly building new strategic partnerships, new
              relationships to expand what is possible for our customers.
              <br />
              <br />
              Our team have helped customers find more cost effective routes,
              new locations to expand, and even new ventures to start. We love
              every moment spent exploring and making things happen, we are
              happy to welcome more challenges.
            </p>
          </div>
        </div>
      </div>

      <div className="story-values-section w-screen bg-white">
        <div className="flex justify-between py-[60px] h-[300px] ">
          <div className="flex gap-5 items-start self-end">
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
          <h1
            className={`${national.variable} w-[300px] uppercase leading-snug font-national text-[60px] font-bold tracking-wide text-canvasblue`}
          >
            Our values make us strong
          </h1>
        </div>
        <div className="max-w-[90vw] m-auto py-[150px]">
          <ValuesGrid
            bg={"canvasblue"}
            valuesList={storyValues}
            imageList={storyImageList}
          />
        </div>
      </div>

      <div className="team-culture bg-white py-20">
        <div className="max-w-screen-xl m-auto">
          <div className="py-10">
            <h1
              className={`${national.variable} font-national text-[32px] font-bold text-canvasblue uppercase`}
            >
              a Day in our life
            </h1>

            <h2
              className={`${national.variable} max-w-[500px] font-national uppercase text-[48px] leading-[58px] font-bold text-canvasblue`}
            >
              TEAM cULTURE of canvas global LOgistics
            </h2>
          </div>
          <div className="team-image-wrapper flex justify-between">
            {teamImageList.map((teamImage, index) => (
              <div key={index} className="w-[30%] flex flex-col gap-3">
                <div className="relative h-[500px]" key={index}>
                  <Image
                    fill
                    style={{ objectFit: "cover" }}
                    src={teamImage.url}
                  />
                </div>

                <p
                  className={`${roboto.variable} font-robo self-end text-canvasblue text-[16px] leading-[20px]`}
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
