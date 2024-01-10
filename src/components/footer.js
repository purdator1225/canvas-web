import Image from "next/image";
import React from "react";
import { national, roboto } from "../../utils/font";
import Link from "next/link";
import { useRouter } from "next/router";

function Footer({ t }) {
  let router = useRouter();

  const route = router.asPath;

  // console.log(route);

  return (
    <div className="w-screen bg-canvasblue px-4 pt-[80px] lg:px-10">
      <div
        className={`${roboto.variable} footer-main m-auto flex max-w-[1280px] justify-between px-4 font-robo text-white lg:px-6`}
      >
        <div className="left-side flex flex-col gap-5">
          <div>
            <Image
              alt="canvas-logo"
              width={230}
              height={60}
              src={"/images/footer-logo-canvas.svg"}
            />
          </div>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://www.google.com/maps/place/Canvas+Global+Logistics+Sdn.+Bhd.+%E5%8D%8E%E4%B8%B0%E8%BF%9C%E6%B4%8B%E7%89%A9%E6%B5%81/@5.4336213,100.3131806,16.24z/data=!4m6!3m5!1s0x304ac33c63123219:0xdeb7046d5afd3d52!8m2!3d5.4294559!4d100.3193405!16s%2Fg%2F11sk2jpqxf?entry=ttu"
            }
          >
            <div>
              <h3 className="text-[18px] uppercase leading-6">
                {t("common:footer_address")}
              </h3>
              <p className="text-[14px] leading-6">
                18 Unit 34-C, Menara Gurney, Persiaran Gurney 10250 Penang
                Malaysia
              </p>
            </div>
          </Link>

          <div>
            <h3 className="text-[18px] uppercase leading-6">
              {t("common:footer_contact")}
            </h3>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="tel:+604 2870130"
            >
              <p className="text-[14px] leading-6"> +604 2870130</p>
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
        <div className="right-side hidden gap-20 lg:flex">
          <div className="flex flex-col gap-5">
            <h2 className="text-[18px] uppercase leading-6">
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

          <div className="flex flex-col gap-5">
            <h2 className="text-[18px] uppercase leading-6">
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

          <div className="flex flex-col gap-5">
            <h2 className="text-[18px] uppercase leading-6">
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

      <div className="footer-bottom border-t-solid m-auto mt-10 flex max-w-[1280px]  flex-col justify-between gap-4 border-t-[1px] px-4 py-10 lg:flex-row lg:px-6">
        <div className="text-white">{t("common:footer_disclaimer")}</div>

        <div className="flex gap-5 text-white">
          <Link href={"/privacy-policy"}> {t("common:footer_privacy")}</Link>
          <Link href={"/tnc"}>{t("common:footer_tnc")}</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
