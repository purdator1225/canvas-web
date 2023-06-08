import Link from "next/link";
import React from "react";
import { national, roboto } from "../../utils/font";
import Image from "next/image";
import PageLinks from "@/components/PageLinks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { UseTranslation, useTranslation } from "next-i18next";


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["contact","common"])),
    },
  };
}

function ContactUs(props) {
  let handleSubmit = (e) => {
    e.preventDefault();
  };

  const {t} = useTranslation()

  return (
    <div className="bg-cover bg-[url('/images/contact-us.png')] flex text-white p-10">
      <div className="xl:w-[1280px] w-full m-auto flex flex-col sm:flex-row justify-between">
        <div className="left-side mt-[150px] flex flex-col justify-between gap-10">
          <h3
            className={`${national.variable} font-national text-[60px] font-medium lg:font-bold uppercase`}
          >
           {t("contact:contact_hero_h1")}
          </h3>

          <div className="flex flex-col sm:flex-row gap-12">
            <div className="flex flex-col gap-4">
              <h3
                className={`${roboto.variable} font-robo text-[18px] leading-6`}
              >
                Gary Khoo
              </h3>

              <Link href="/">+6011-1116 1106</Link>

              <Image
                className="w-[180px] aspect-square"
                width={250}
                height={250}
                src={"/images/gary-qr.png"}
              />
            </div>

            <div className="flex flex-col gap-4">
              <h3
                className={`${roboto.variable} font-robo text-[18px] leading-6`}
              >
                Jackson Lim
              </h3>

              <Link href="/">+6011-1662 6228</Link>

              <Image
                className="w-[180px] aspect-square"
                width={250}
                height={250}
                src={"/images/jackson-qr.png"}
              />
            </div>
          </div>

          <div>
            <div className="flex gap-10">
              <Image width={24} height={24} src={"/images/icons/email.png"} />
              <p className={`${roboto.variable} font-robo uppercase`}>{t("contact:contact_email")}</p>
            </div>
            <Link href={"/"}>cs@canvasglobal-log.com</Link>
          </div>

          <div>
            <div className="flex gap-10">
              <Image
                width={24}
                height={24}
                src={"/images/icons/contact-phone.png"}
              />
              <p className={`${roboto.variable} font-robo uppercase`}>
              {t("contact:contact_address")}
              </p>
            </div>
            <Link href="/">
              <div>18 Unit 34-C, Menara Gurney </div>
              <div>Persiaran Gurney, </div>
              <div>10250 Penang, Malaysia.</div>
            </Link>
          </div>
        </div>

        <div className="right-side lg:w-1/2">
          <form
            action="https://formsubmit.co/briansh1225@gmail.com"
            method="POST"
            className={`${roboto.variable} font-robo flex mt-[150px] h-full flex-col gap-[60px] max-w-[600px]`}
          >
            <div className="flex-col flex gap-2 max-w-[280px]">
              <label>{t("contact:contact_name")}</label>
              <input
                className="shadow-none"
                required
                placeholder={t("contact:contact_name")}
                type="text"
                name="name"
              ></input>
            </div>

            <div className="flex flex-col gap-[60px] md:gap-0 md:flex-row justify-between">
              <div className="flex flex-col gap-2 w-[280px]  ">
                <label>{t("contact:contact_email")}</label>
                <input
                  className="shadow-none"
                  required
                  placeholder={t("contact:contact_email")}
                  type="email"
                  name="email"
                ></input>
              </div>

              <div className="flex flex-col gap-2 w-[280px]">
                <label>{t("contact:contact_tel")}</label>
                <input
                className="shadow-none"
                  required
                  placeholder={t("contact:contact_tel")}
                  type="phone"
                  name="phone"
                ></input>
              </div>
            </div>

            <div className="flex flex-col h-fit gap-2">
              <label>{t("contact:contact_msg")}</label>
              <textarea

                className="text-white min-h-fit shadow-none"
                placeholder={t("contact:contact_msg")}
                type="phone"
                name="phone"
              ></textarea>
            </div>

            {/* <button className="p-6 bg-gray-100 text-black self-start" typeof="submit">
            Submit
          </button> */}
            <button typeof="submit" className="max-w-[400px]">
              <PageLinks text={"Submit"} logo={'/images/icons/submit-button.png'} noclick={true} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
