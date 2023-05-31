import React from "react";

import { national, roboto } from "../../utils/font";
import Image from "next/image";
import ValuesGrid from "@/components/ValuesGrid";

let asiaLogFeatures = [
  {
    logo: "/images/icons/asia-log-feature-icons/asia-log-1.png",
    valueText: "Custom broker & Forwarder",
    index: 1,
  },
  {
    logo: "/images/icons/asia-log-feature-icons/asia-log-2.png",
    valueText:
      "Attentive, thorough, experienced, and knowledgeable container surveyor",
    index: 2,
  },
  {
    logo: "/images/icons/asia-log-feature-icons/asia-log-3.png",
    valueText: "All of your goods are protected by cargo insurance",
    index: 3,
  },
  {
    logo: "/images/icons/asia-log-feature-icons/asia-log-4.png",
    valueText: "M&R dry containers",
    index: 4,
  },
  {
    logo: "/images/icons/asia-log-feature-icons/asia-log-5.png",
    valueText: "Warehouse for rent",
    index: 5,
  },
  {
    logo: "/images/icons/asia-log-feature-icons/asia-log-6.png",
    valueText:
      "equiped with more than 110 trucks & 125 trailers to handle transloading",
    index: 6,
  },
  {
    logo: "/images/icons/asia-log-feature-icons/asia-log-7.png",
    valueText: "Project Bulk cargo as fast as three days",
    index: 7,
  },
  {
    logo: "/images/icons/asia-log-feature-icons/asia-log-8.png",
    valueText: "Efficient and reliable delivery with real-time cargo tracking",
    index: 8,
  },
];

let asiaLogFeaturesImg = [
  { url: "/images/story-values-pic1.png" },
  { url: "/images/story-values-pic2.png" },
  { url: "/images/story-values-pic3.png" },
];

// pss container

let pssContainerFeatures = [
  {
    logo: "/images/icons/pss-container-values-icons/pss-1.png",
    valueText: "18 acres of work ground with a capacity of over 10,000 TEUs",
    index: 1,
  },
  {
    logo: "/images/icons/pss-container-values-icons/pss-2.png",
    valueText:
      "Experienced in trading 20-footers, 40-footers, reefers, racks, and high cubes",
    index: 2,
  },
  {
    logo: "/images/icons/pss-container-values-icons/pss-3.png",
    valueText:
      "protected by high gates, 24/7 video surveillance, and remote monitoring",
    index: 3,
  },
  {
    logo: "/images/icons/pss-container-values-icons/pss-4.png",
    valueText:
      "Global Cross Trade container trading & leasing encompasses Asia, Turkey, and the US",
    index: 4,
  },
  {
    logo: "/images/icons/pss-container-values-icons/pss-5.png",
    valueText: "average repair for each yard is around 30 units per day",
    index: 5,
  },
  {
    logo: "/images/icons/pss-container-values-icons/pss-6.png",
    valueText:
      "located within 10km proximity to Penang Port through three alternative routes.",
    index: 6,
  },
  {
    logo: "/images/icons/pss-container-values-icons/pss-7.png",
    valueText:
      "in-house M&R team, has an average experience of 15 years with IICL Certificate",
    index: 7,
  },
  {
    logo: "/images/icons/pss-container-values-icons/pss-8.png",
    valueText: "Pre-Trip Inspection services by experienced reefer technician",
    index: 8,
  },
];

function Partner() {
  return (
    <div>
      <main className={`${national.variable} font-nation bg-white text-white`}>
        {/* <div>{props.locale}</div> */}
        <div className=" w-screen h-screen bg-[url('/images/partnerships-hero-img.png')] bg-cover grid grid-cols-3 gap-6">
          <div className="flex flex-col h-[430px] self-center gap-6 ml-5">
            <h1
              className={`${national.variable} font-national text-[32px] font-bold uppercase`}
            >
              Canvas Global Logistics
            </h1>
            <h2
              className={`${national.variable} font-national text-[60px] font-bold uppercase`}
            >
              Make it Possible, Together
            </h2>
            <h3
              className={`${roboto.variable} font-robo uppercase max-w-[350px]`}
            >
              We partnered with leading companies to expand what is possible for
              our clients
            </h3>
          </div>

          <div className="self-end h-[224px] flex  flex-col gap-4 max-w-[400px] ">
            <hr className="h-[4px]"></hr>
            <h1
              className={`${roboto.variable} font-robo text-[24px] uppercase`}
            >
              Need better routes?
            </h1>
            <p
              className={`${roboto.variable} font-robo text-[14px] leading-[20px] `}
            >
              Talk to us about your current challenges, we are happy to explore
              more possibilities that are better suited for your business.
            </p>
          </div>

          <div className="self-end h-[224px] flex  flex-col gap-4 max-w-[400px]">
            <hr className="h-[4px]"></hr>
            <h1
              className={`${roboto.variable} font-robo text-[24px] uppercase`}
            >
              looking for supply chain?
            </h1>
            <p
              className={`${roboto.variable} font-robo text-[14px] leading-[20px] `}
            >
              We are open to discuss new ventures looking for supply chain
              management, our extensive network will speed up the process of
              finding the right partner.
            </p>
          </div>
        </div>

        <div className="min-h-screen">
          <div className="max-w-[90vw] py-[160px] m-auto flex justify-between">
            <div className="py-10">
              <h1
                className={`${national.variable} font-national text-[32px] font-bold text-canvasblue uppercase`}
              >
                Inter Asia Logistics co., ltd
              </h1>

              <h2
                className={`${national.variable} max-w-[500px] font-national uppercase text-[48px] leading-[58px] font-medium text-canvasblue`}
              >
                Transportation for Import, Export and Domestic cargo in Thailand
              </h2>
            </div>
            <div>
              <div className="relative w-[160px] aspect-square">
                <Image
                  fill
                  style={{ objectFit: "cover" }}
                  src={"/images/clients/asia-log.png"}
                />
              </div>

              <div className="icons-wrapper my-8 ">
                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <Image
                      src="/images/icons/road.png"
                      width={50}
                      height={50}
                    />
                    <p
                      className={`${roboto.variable} font-robo text-canvasblue`}
                    >
                      Road
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <Image src="/images/icons/sea.png" width={50} height={50} />
                    <p
                      className={`${roboto.variable} font-robo text-canvasblue`}
                    >
                      Sea
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <Image
                      src="/images/icons/rail.png"
                      width={50}
                      height={50}
                    />
                    <p
                      className={`${roboto.variable} font-robo text-canvasblue`}
                    >
                      Rail
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ValuesGrid
            valuesList={asiaLogFeatures}
            imageList={asiaLogFeaturesImg}
          />
        </div>

        <div className="min-h-screen py-[60px]">
          <div className="max-w-[90vw] py-[160px] m-auto flex justify-between">
            <div className="py-10">
              <h1
                className={`${national.variable} font-national text-[32px] font-bold text-canvasblue uppercase`}
              >
                PSS CONTAINER TRADING
              </h1>

              <h2
                className={`${national.variable} max-w-[500px] font-national uppercase text-[48px] leading-[58px] font-medium text-canvasblue`}
              >
                biggest depot in Malaysia, perks with Top tier equipment,
                facilities, security and large storage capability
              </h2>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-[212px] aspect-square">
                <Image
                  fill
                  style={{ objectFit: "contain" }}
                  src={"/images/icons/PSS-logo.png"}
                />
              </div>

              <div className="icons-wrapper my-8 text-canvasgreen ">
                <div className="flex gap-4">
                  <div className="flex flex-col text-canvasgreen">
                    <Image
                      src="/images/icons/pss-feature-icons/storage.png"
                      width={50}
                      height={50}
                    />
                    <p className={`${roboto.variable} font-robo`}>Storage</p>
                  </div>
                  <div className="flex flex-col">
                    <Image
                      src="/images/icons/pss-feature-icons/repair.png"
                      width={50}
                      height={50}
                    />
                    <p className={`${roboto.variable} font-robo`}>Repair</p>
                  </div>
                  <div className="flex flex-col">
                    <Image
                      src="/images/icons/pss-feature-icons/reefer.png"
                      width={50}
                      height={50}
                    />
                    <p className={`${roboto.variable} font-robo`}>Reefer PTI</p>
                  </div>
                  <div className="flex flex-col">
                    <Image
                      src="/images/icons/pss-feature-icons/railing.png"
                      width={50}
                      height={50}
                    />
                    <p className={`${roboto.variable} font-robo`}>Railing</p>
                  </div>
                  <div className="flex flex-col">
                    <Image
                      src="/images/icons/pss-feature-icons/barging.png"
                      width={50}
                      height={50}
                    />
                    <p className={`${roboto.variable} font-robo`}>Barging</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ValuesGrid
            bg={"white"}
            valuesList={pssContainerFeatures}
            imageList={asiaLogFeaturesImg}
          />
        </div>
      </main>
    </div>
  );
}

export default Partner;
