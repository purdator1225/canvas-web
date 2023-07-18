import Link from "next/link";
import React from "react";
import { useRef, useState } from "react";
import { national, roboto } from "../../utils/font";
import Image from "next/image";
import PageLinks from "@/components/PageLinks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { UseTranslation, useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import GsapSplitTextWord from "@/components/animations/GsapSplitTextWord";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["contact", "common"])),
    },
  };
}

function ContactUs(props) {
  const form = useRef();

  const [formState, setFormState] = useState("");

  useLayoutEffect(() => {
    let context = gsap.context(() => {
      let tl = gsap.timeline();

      tl.from("#contact-left", {
        opacity: 0,
        x: -100,
      }).from("#contact-right", {
        opacity: 0,
        x: 100,
      });
    });

    return () => {
      context.revert();
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    setFormState("loading");

    emailjs
      .sendForm(
        "service_c9ey7dj",
        "template_hy8hm96",
        form.current,
        "TIJqrcwO385NCF-WS"
      )
      .then(
        (result) => {
          // console.log(result.text);
          setFormState("success");
          form.current.reset();
        },
        (error) => {
          // console.log(error.text);
          setFormState("error");
        }
      );
  };

  let handleHover = () => {
    document.querySelector("#contact-button").classList.add("move-text");
    document.querySelector("#contact-button").classList.remove("remove-text");
  };

  let handleHoverOut = () => {
    document.querySelector("#contact-button").classList.remove("move-text");
    document.querySelector("#contact-button").classList.add("remove-text");
  };

  const { t } = useTranslation();

  return (
    <div className="flex min-h-[800px] bg-[url('/images/contact-us.webp')] bg-cover px-6 py-10 text-white">
      <div className="m-auto flex w-full flex-col justify-between sm:flex-row sm:gap-[100px] xl:w-[1280px]">
        <div
          id="contact-left"
          className="left-side mt-[100px] flex flex-col justify-between gap-10"
        >
          <GsapSplitTextWord>
            <h3
              className={`${national.variable} font-national text-[60px] font-medium uppercase leading-[68px] lg:font-bold`}
            >
              {t("contact:contact_hero_h1")}
            </h3>
          </GsapSplitTextWord>

          <div className="flex flex-col gap-12 lg:flex-row">
            <div
              className={`${roboto.variable} flex flex-col gap-6 font-robo text-[18px] leading-6`}
            >
              <div className=" flex flex-col gap-2">
                <h3>Gary Khoo</h3>

                <Link rel="noopener noreferrer" href="tel:+6011-1116 1106">
                  +6011-1116 1106
                </Link>

                <Link
                  rel="noopener noreferrer"
                  href="mailto:gary@canvasglobal-log.com"
                >
                  <p> gary@canvasglobal-log.com</p>
                </Link>
              </div>

              <Image
                className="aspect-square w-[180px]"
                width={250}
                height={250}
                src={"/images/gary-qr.png"}
              />
            </div>

            <div className="flex flex-col gap-6">
              <div className=" flex flex-col gap-2">
                <h3
                  className={`${roboto.variable} font-robo text-[18px] leading-6`}
                >
                  Jackson Lim
                </h3>

                <Link rel="noopener noreferrer" href="tel:+6011-1662 6228">
                  +6011-1662 6228
                </Link>

                <Link
                  rel="noopener noreferrer"
                  href="mailto:cglbiz@canvasglobal-log.com"
                >
                  <p>cglbiz@canvasglobal-log.com</p>
                </Link>
              </div>

              <Image
                className="aspect-square w-[180px]"
                width={250}
                height={250}
                src={"/images/jackson-qr.png"}
              />
            </div>
          </div>

          <div>
            <div className="flex gap-10">
              <Image width={24} height={24} src={"/images/icons/email.png"} />
              <p className={`${roboto.variable} font-robo uppercase`}>
                {t("contact:contact_email")}
              </p>
            </div>
            {/* <Link rel="noopener noreferrer" href="mailto:cglbiz@canvasglobal-log.com">
              <p>cglbiz@canvasglobal-log.com</p>
            </Link> */}
            <Link rel="noopener noreferrer" href="cs@canvasglobal-log.com">
              <p>cs@canvasglobal-log.com</p>
            </Link>
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

        <div id="contact-right" className="right-side lg:w-1/2">
          <form
            ref={form}
            onSubmit={sendEmail}
            className={`${roboto.variable} mt-[100px] flex h-full max-w-[600px] flex-col gap-[60px] font-robo`}
          >
            <div className="flex flex-col gap-2 md:max-w-[280px]">
              {/* <label>{t("contact:contact_name")}</label> */}
              <input
                className="shadow-none"
                required
                placeholder={t("contact:contact_name")}
                type="text"
                name="user_name"
              ></input>
            </div>

            <div className="flex flex-col justify-between gap-[60px] md:flex-row md:gap-10">
              <div className="flex flex-col gap-2 md:w-[300px]  ">
                {/* <label>{t("contact:contact_email")}</label> */}
                <input
                  className="shadow-none"
                  required
                  placeholder={t("contact:contact_email")}
                  type="email"
                  name="user_email"
                ></input>
              </div>

              <div className="flex flex-col gap-2 md:w-[300px]">
                {/* <label>{t("contact:contact_tel")}</label> */}
                <input
                  className="shadow-none"
                  required
                  placeholder={t("contact:contact_tel")}
                  type="phone"
                  name="user_phone"
                ></input>
              </div>
            </div>

            <div className="flex h-fit flex-col gap-2">
              {/* <label>{t("contact:contact_msg")}</label> */}
              <textarea
                className="min-h-fit text-white shadow-none"
                placeholder={t("contact:contact_msg")}
                type="text"
                name="message"
              ></textarea>
            </div>

            {/* <button className="p-6 bg-gray-100 text-black self-start" typeof="submit">
            Submit
          </button> */}

            {formState === "loading" ? (
              <p>Sending Message...</p>
            ) : formState === "error" ? (
              <div className="bg-red-500 p-2">
                Sorry, your message was not sent. Please try again or contact us
                at: <br />
                +6011-1116 1106
              </div>
            ) : formState === "success" ? (
              <div className="flex flex-col gap-6">
                <div className="bg-green-500 p-2">
                  <p>Thank You! Our team will be contacting you shortly.</p>
                </div>
                <div
                  className="cursor-pointer underline"
                  onClick={() => setFormState("")}
                >
                  Send Another Message
                </div>
              </div>
            ) : (
              <motion.button
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
                className="transition-transform"
                typeof="submit"
              >
                <PageLinks
                  noClickId="contact-button"
                  mask_id={"contact-id-button-mask"}
                  parentId={"contact-id-button"}
                  text={t("common:button_submit")}
                  logo={"/images/icons/submit-button.png"}
                  noclick={true}
                />
              </motion.button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
