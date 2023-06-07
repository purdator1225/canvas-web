import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { useRouter } from "next/router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

//on page load, prepare these props statically which takes in the locale file

function Navbar({ t }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  // console.log(router.locale);
  // console.log(router.asPath);

  let toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  //define variants for language div hover

  const languageMain = {
    hover: { opacity: 1 },
    hidden: { opacity: 1 },
    animate: { x: 1 },
  };

  const languageSub1 = {
    hover: { opacity: 1, display: "flex" },
    hidden: { opacity: 1 },
    animate: { x: 1 },
  };

  const languageSub2 = {
    hover: { opacity: 0, width: "0px" },
    hidden: { opacity: 0 },
    animate: { x: 1 },
  };

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: 600 }}
            animate={{ x: 0 }}
            transition={{ delay: 0, duration: 0.3, ease: "easeInOut" }}
            exit={{ x: 600 }}
            className="absolute right-0 z-20 h-[640px] w-[330px] bg-canvasblue"
          >
            <div
              onClick={toggleMenu}
              className="absolute right-[5%] top-[5%] z-20 flex h-[45px] w-[45px] items-center justify-center bg-canvaslightgrey"
            >
              <svg
                width="13"
                height="22"
                viewBox="0 0 13 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 1.5L10.75 11L1.25 20.5"
                  stroke="#0057C1"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div
              className={`submenu-items-wrapper absolute top-[20%] z-20 m-auto ml-[77px] flex flex-col gap-10 text-[18px] uppercase leading-[24px] text-white ${roboto.variable} font-robo`}
            >
              <div
                id='locale-toggler'
                onClick={() => {
                  if (router.locale === "en") {
                    router.push(router.asPath, router.asPath, { locale: "zh" });
                  } else
                    router.push(router.asPath, router.asPath, { locale: "en" });
                }}
                className={`h-full w-full py-[24px] 
                `}
              >
                <h3
                  className={`${roboto.variable} font-robo text-[18px] leading-6`}
                >
                  {router.locale === "zh" ? "EN" : "简"}
                </h3>
              </div>
              <Link href="/partnerships">
                <h3>{t("common:nav_partnership")}</h3>
              </Link>
              <Link href="/story">
                <h3>{t("common:nav_story")}</h3>
              </Link>
              <Link href="/services">
                <h3>{t("common:nav_service")}</h3>
              </Link>
              <Link href="/contact">
                <h3>{t("common:nav_contact")}</h3>
              </Link>
            </div>

            <div className="absolute h-full w-full">
              <Image
                fill
                style={{ objectFit: "cover" }}
                src="/images/submenu.png"
              />
            </div>

            <div className="absolute bottom-10 left-[25%] h-[100px] w-[500px]">
              <div className="absolute h-full w-full ">
                <Image
                  fill
                  style={{ objectFit: "contain" }}
                  src="/images/menu-ship.png"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`${
          roboto.variable
        } text-[18px]leading-[24px] m-auto w-full font-robo tracking-tight ${
          router.pathname === "/story" ? "text-black" : "text-white"
        } absolute z-10  flex flex-row bg-[#ffffff20]`}
      >
        <div className="m-auto flex h-[72px] w-[90%] items-center justify-between">
          <Link href="/">
            <div className="relative h-[40px] w-[126px] hover:animate-pulse">
              <Image
                fill
                style={{ objectFit: "contain" }}
                src={`${
                  router.pathname !== "/story"
                    ? "/images/canvas_logo.svg"
                    : "/images/canvas-color-logo.png"
                }`}
              />
            </div>
          </Link>

          <div
            onClick={toggleMenu}
            className="menu-button relative h-[45px] w-[45px] sm:hidden"
          >
            <div
              className={`absolute top-[30%] h-[5px] w-full ${
                router.pathname === "/story" ? "bg-black" : "bg-white"
              } ${
                isMenuOpen && "translate-y-2 rotate-[45deg]"
              } transition-transform`}
            ></div>
            <div
              className={`absolute bottom-[30%] h-[5px] w-full ${
                router.pathname === "/story" ? "bg-black" : "bg-white"
              } ${
                isMenuOpen && "rotate-[-45deg]"
              } translate-y-[-5px]  transition-transform`}
            ></div>
            <div></div>
          </div>

          <div className="navlinks-wrapper hidden h-full sm:flex">
            <motion.div
              whileHover="hover"
              animate="animate"
              variants={languageMain}
              className="language-wrapper flex items-center justify-center gap-3 px-5 text-center"
            >
              <motion.div
                layout
                variants={languageSub1}
                className="hidden h-full w-[160px] justify-evenly gap-3"
              >
                <div
                  onClick={() => {
                    router.push(router.asPath, router.asPath, { locale: "zh" });
                  }}
                  className={`h-full w-full py-[24px] hover:bg-canvasgreen ${
                    router.locale !== "zh" ? "bg-none" : "bg-canvasgreen"
                  }`}
                >
                  <h3
                    className={`${roboto.variable} font-robo text-[18px] leading-6`}
                  >
                    简
                  </h3>
                </div>

                <div
                  onClick={() => {
                    router.push(router.asPath, router.asPath, { locale: "en" });
                  }}
                  className={`h-full w-full py-[24px] hover:bg-canvasgreen ${
                    router.locale === "zh" ? "bg-none" : "bg-canvasgreen"
                  }`}
                >
                  <h3
                    className={`${roboto.variable} font-robo text-[18px] leading-6`}
                  >
                    EN
                  </h3>
                </div>
              </motion.div>
              <motion.div className="px-2" layout variants={languageSub2}>
                <svg
                  width="28"
                  height="26"
                  viewBox="0 0 28 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1073 16.9144L11.8746 13.7198L11.9127 13.6816C14.1273 11.2125 15.7054 8.37437 16.6346 5.37071H20.3637V2.81891H11.4546V0.273438H8.90908V2.81891H0V5.35162H14.2164C13.3573 7.80797 12.0145 10.1371 10.1818 12.1735C8.99815 10.8562 8.01813 9.42437 7.24178 7.90981H4.69637C5.62544 9.98433 6.89821 11.9444 8.48908 13.7134L2.01725 20.1089L3.81818 21.9098L10.1818 15.5462L14.1401 19.5044L15.1073 16.9144Z"
                    fill="white"
                  />
                  <path
                    d="M22.2728 10.4531H19.7273L14 25.7259H16.5455L17.9773 21.9077H24.0227L25.4546 25.7259H28L22.2728 10.4531ZM18.9318 19.3622L21 13.8449L23.0682 19.3622H18.9318Z"
                    fill="white"
                  />
                </svg>
              </motion.div>
            </motion.div>

            <Link href={"/partnerships"}>
              <div
                className={`w-[200px] py-[24px] text-center uppercase transition-colors hover:bg-canvasgreen ${
                  router.asPath === "/partnerships" ? "bg-canvasgreen" : null
                }  hover:text-white"`}
              >
                {t("common:nav_partnership")}
              </div>
            </Link>

            <Link href={"/story"}>
              <div
                className={`w-[200px] py-[24px] text-center uppercase transition-colors hover:bg-canvasgreen ${
                  router.asPath === "/story" ? "bg-canvasgreen" : null
                }  hover:text-white"`}
              >
                {t("common:nav_story")}
              </div>
            </Link>

            <Link href={"/services"}>
              <div
                className={`w-[200px] py-[24px] text-center uppercase transition-colors hover:bg-canvasgreen ${
                  router.asPath === "/services" ? "bg-canvasgreen" : null
                }  hover:text-white"`}
              >
                {t("common:nav_service")}
              </div>
            </Link>

            <Link href={"/contact"}>
              <div
                className={`w-[200px] py-[24px] text-center uppercase transition-colors hover:bg-canvasgreen ${
                  router.asPath === "/contact" ? "bg-canvasgreen" : null
                }  hover:text-white"`}
              >
                {t("common:nav_contact")}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
