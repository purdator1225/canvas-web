import Image from "next/image";
import React from "react";
import { national, roboto } from "../../utils/font";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { getYear } from "date-fns";

function Footer({ t }) {
  const [year, setYear] = useState(getYear(new Date()));

  let router = useRouter();

  const route = router.asPath;

  // console.log(route);

  return (
    <div className="w-screen bg-canvasblue px-5 py-10">
      <div
        className={`${roboto.variable} footer-main m-auto max-w-screen-xl font-robo text-white`}
      >
        <div className="logo-wrapper mb-10">
          <Image
            alt="canvas-logo"
            width={230}
            height={60}
            src={"/images/footer-logo-canvas.svg"}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="malaysia-add-col flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <h3 className="text-[18px] uppercase leading-6 underline">
                MALAYSIA {t("common:footer_address")}
              </h3>
              <div className="flex flex-col gap-4">
                <div>
                  <h4 className="text-[14px] font-bold  leading-6">Penang</h4>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://www.google.com/maps/place/Canvas+Global+Logistics+Sdn.+Bhd.+%E5%8D%8E%E4%B8%B0%E8%BF%9C%E6%B4%8B%E7%89%A9%E6%B5%81/@5.4336213,100.3131806,16.24z/data=!4m6!3m5!1s0x304ac33c63123219:0xdeb7046d5afd3d52!8m2!3d5.4294559!4d100.3193405!16s%2Fg%2F11sk2jpqxf?entry=ttu"
                    }
                  >
                    <p className="text-[14px] leading-6">
                      9-02-01, Jalan Ahmad Nor,
                      <br /> Pusat Perdagangan Nova, Jelutong,
                      <br></br>
                      11600, Pulau Pinang
                    </p>
                  </Link>
                </div>
                <div>
                  <h4 className="text-[14px] font-bold leading-6">Klang</h4>
                  <p className="text-[14px] leading-6">
                    11A, Jalan Ramin 1, Bandar Botanik, <br></br>41200 Pelabuhan
                    Klang, Selangor
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-[18px] uppercase leading-6">
                {t("common:footer_contact")}
              </h3>
              <div>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:+6046560094"
                >
                  <p className="text-[14px] leading-6"> +604-6560094</p>
                </Link>
                {/* <Link rel="noopener noreferrer" href="mailto:cglbiz@canvasglobal-log.com">
              <p>cglbiz@canvasglobal-log.com</p>
            </Link> */}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:cs@canvasglobal-log.com"
                >
                  <p>cs@canvasglobal-log.com</p>
                </Link>
              </div>
            </div>

            <div className="hidden gap-3">
              <Image
                alt="fb"
                width={18}
                height={18}
                src={"/images/icons/fb_2.svg"}
              />
              <Image
                alt="insta"
                width={18}
                height={18}
                src={"/images/icons/insta.svg"}
              />
              <Image
                alt="twitter"
                width={18}
                height={18}
                src={"/images/icons/twitter.svg"}
              />
            </div>
          </div>
          <div className="thai-add-col flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <h3 className="text-[18px] uppercase leading-6 underline">
                THAILAND {t("common:footer_address")}
              </h3>
              <div>
                <h4 className="text-[14px] font-bold  leading-6">
                  Canvas Global Logistics (Thailand) Co., Ltd.
                </h4>
                <p className="text-[14px] leading-6">
                  26 Sathorn Prime Building,
                  <br></br>16 Floor, Room 1602B, <br />
                  Naradhiwas Rajanagarindra Rd,
                  <br />
                  Yannawa, Sathorn, Bangkok 10120 <br />
                  Post box: 068
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[18px] uppercase leading-6">
                {t("common:footer_contact")}
              </h3>
              <div>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:+66 63-173-8035"
                >
                  <p className="text-[14px] leading-6"> +66 63-173-8035</p>
                </Link>

                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:supalerk@canvasglobal-log.co.th"
                >
                  <p>supalerk@canvasglobal-log.co.th</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 grid gap-6  md:my-20 md:grid-cols-3">
          <div className="services-col">
            <div className="flex flex-col gap-5">
              <h2 className="text-[18px] uppercase leading-6 underline">
                {t("common:footer_services")}
              </h2>

              <div>
                <Link href={"/services"}>
                  <p>Worldwide Import/Export</p>
                </Link>
                <Link href={"/services"}>
                  <p>Trucking & Hauling</p>
                </Link>
                <Link href={"/services"}>
                  <p>Storage Solutions</p>
                </Link>
                <Link href={"/services"}>
                  <p>Transloading</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="partners-col">
            <div className="flex flex-col gap-5">
              <h2 className="text-[18px] uppercase leading-6 underline">
                {t("common:footer_partnership")}
              </h2>

              <div>
                <Link
                  href={`${
                    router.asPath === "/partnerships"
                      ? "#asia-log"
                      : "partnerships/#asia-log"
                  }`}
                >
                  <p>Asia Logistics Co. Ltd</p>
                </Link>
                <Link href={"/partnerships/#pss-depot"}>
                  <p>PSS Depot & Container Trading</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="story-col">
            <div className="flex flex-col gap-5">
              <h2 className="text-[18px] uppercase leading-6 underline">
                {t("common:footer_story")}
              </h2>

              <div>
                <Link
                  href={`${
                    route.asPath !== "/story.js"
                      ? "/story/#our-journey"
                      : "#our-journey"
                  }`}
                >
                  <p>Our Journey</p>
                </Link>
                <Link
                  href={`${
                    route.asPath !== "/story.js"
                      ? "/story/#our-team"
                      : "#our-team"
                  }`}
                >
                  <p>Our Team</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom border-t-solid mt-10 flex   flex-col justify-between gap-4 border-t-[1px] py-10 lg:flex-row">
          <div className="text-white">
            {t("common:footer_disclaimer")} <span>{year}</span>,{" "}
            {t("common:footer_rights")}
          </div>

          <div className="flex gap-5 text-white">
            <Link href={"/privacy-policy"}> {t("common:footer_privacy")}</Link>
            <Link href={"/tnc"}>{t("common:footer_tnc")}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
