import Image from "next/image";
import React from "react";
import { national, roboto } from "../../utils/font";
import Link from "next/link";

function Footer() {
  return (
    <div className="py-[80px] px-10 bg-canvasblue w-screen">
      <div
        className={`${roboto.variable} font-robo footer-main text-white flex justify-between`}
      >
        <div className="left-side flex flex-col gap-5">
          <div>
            <Image width={230} height={60} src={"/images/icons/logo.png"} />
          </div>

          <div>
            <h3 className="text-[18px] leading-6 uppercase">Address</h3>
            <p className="text-[14px] leading-6">
              18 Unit 34-C, Menara Gurney, Persiaran Gurney 10250 Penang
              Malaysia
            </p>
          </div>

          <div>
            <h3 className="text-[18px] leading-6 uppercase">Contact</h3>
            <p className="text-[14px] leading-6"> +604 2870130</p>
            <p>cglbiz@canvasglobal-log.com</p>
          </div>

          <div className="flex gap-3">
            <Image width={18} height={18} src={"/images/icons/fb_2.svg"} />
            <Image width={18} height={18} src={"/images/icons/insta.svg"} />
            <Image width={18} height={18} src={"/images/icons/twitter.svg"} />
          </div>
        </div>
        <div className="right-side flex gap-20">
          <div className="flex flex-col gap-5">
            <h2 className="text-[18px] leading-6 uppercase">Our Services</h2>

            <div>
              <Link href={"/"}>
                <p>Worldwide Import/Export</p>
              </Link>
              <Link href={"/"}>
                <p>Trucking & Hauling</p>
              </Link>
              <Link href={"/"}>
                <p>Storage Solutions</p>
              </Link>
              <Link href={"/"}>
                <p>Transloading</p>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-[18px] leading-6 uppercase">Our Partners</h2>

            <div>
              <Link href={"/"}>
                <p>Asia Log</p>
              </Link>
              <Link href={"/"}>
                <p>PSS Depot</p>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-[18px] leading-6 uppercase">OUR STORY</h2>

            <div>
              <Link href={"/"}>
                <p>Our Mission</p>
              </Link>
              <Link href={"/"}>
                <p>Our Journey</p>
              </Link>
              <Link href={"/"}>
                <p>Our Team</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom border-t border-t-solid border-t-[1px] flex justify-between py-10 mt-10">
        <div className="text-white">©Canvas Global Logistics 2023, All right reserved.</div>

        <div className="text-white flex gap-5"><Link href={"/"}>Privacy Policy</Link>
        <Link href={"/"}>Terms and Conditions</Link></div>
      </div>
    </div>
  );
}

export default Footer;
