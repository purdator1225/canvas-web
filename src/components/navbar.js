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

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: 600 }}
            animate={{ x: 0 }}
            transition={{ delay: 0, duration: 0.3, ease: "easeInOut" }}
            exit={{ x: 600 }}
            className="fixed right-0 top-0 z-[250] h-screen max-h-[750px] w-[330px] overflow-x-hidden border-[1px] border-white bg-canvasblue pt-[60px]"
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
              className={`submenu-items-wrapper absolute z-20 m-auto ml-[77px] flex min-h-[700px] flex-col gap-10  text-[18px] uppercase leading-[24px] text-white ${roboto.variable} font-robo`}
            >
              <div
                id="locale-toggler"
                onClick={() => {
                  if (router.locale === "en") {
                    router.push(router.asPath, router.asPath, { locale: "zh" });
                  } else
                    router.push(router.asPath, router.asPath, { locale: "en" });
                }}
                className={`py-[24px] 
                `}
              >
                <h3
                  className={`${roboto.variable} cursor-pointer font-robo text-[18px] leading-6`}
                >
                  {router.locale === "zh" ? "EN" : "简"}
                </h3>
              </div>
              <div onClick={() => setMenuOpen(false)}>
                <Link href="/partnerships">
                  <h3
                    className={`${
                      router.asPath === "/partnerships" && "underline"
                    }`}
                  >
                    {t("common:nav_partnership")}
                  </h3>
                </Link>
              </div>

              <div onClick={() => setMenuOpen(false)}>
                <Link href="/story">
                  <h3
                    className={`${router.asPath === "/story" && "underline"}`}
                  >
                    {t("common:nav_story")}
                  </h3>
                </Link>
              </div>
              <div onClick={() => setMenuOpen(false)}>
                <Link href="/services">
                  <h3
                    className={`${
                      router.asPath === "/services" && "underline"
                    }`}
                  >
                    {t("common:nav_service")}
                  </h3>
                </Link>
              </div>
              <div onClick={() => setMenuOpen(false)}>
                {" "}
                <Link href="/contact">
                  <h3
                    className={`${router.asPath === "/contact" && "underline"}`}
                  >
                    {t("common:nav_contact")}
                  </h3>
                </Link>
              </div>
              <div onClick={() => setMenuOpen(false)}>
                <Link href="/story/#careers-section">
                  <h3
                    className={`${
                      router.asPath === "/story/#careers-section" && "underline"
                    }`}
                  >
                    {t("common:nav_careers")}
                  </h3>
                </Link>{" "}
              </div>
            </div>

            <div className="absolute h-full w-full">
              <Image
                alt="submenu-img"
                fill
                style={{ objectFit: "contain" }}
                src="/images/submenu.png"
              />
            </div>

            <div className="absolute bottom-0 left-[25%] h-[100px] w-[500px] minheights:hidden">
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
        className={`main-menu ${roboto.variable} text-[18px]leading-[24px] fixed top-0 z-[200] flex  w-full flex-row bg-canvasblue font-robo tracking-tight text-white`}
      >
        {/* 
${
          router.pathname === "/story" ? "text-black" : "text-white"
        } */}

        <div className="flex h-[72px] w-screen max-w-[1280px] items-center justify-between px-[30px] xl:m-auto xl:px-0">
          <div
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <Link href="/">
              <div className="relative h-[40px] w-[126px] p-10">
                <Image
                  alt="canvas-log-logo"
                  fill
                  style={{ objectFit: "contain" }}
                  src="images/canvas_logo.svg"
                />
              </div>
            </Link>
          </div>
          {/* {`${
                  router.pathname !== "/story"
                    ? "/images/canvas_logo.svg"
                    : "/images/canvas-color-logo.png"
                }`} */}
          <div
            onClick={toggleMenu}
            className="menu-button relative h-[45px] w-[45px] xl:hidden"
          >
            <div
              className={`absolute top-[30%] h-[5px] w-full bg-white  ${
                isMenuOpen && "translate-y-2 rotate-[45deg]"
              } transition-transform`}
            ></div>

            {/* ${
                router.pathname === "/story" ? "bg-black" : "bg-white"
              } */}
            <div
              className={`absolute bottom-[30%] h-[5px] w-full bg-white  ${
                isMenuOpen && "rotate-[-45deg]"
              } translate-y-[-5px]  transition-transform`}
            ></div>

            {/* ${
                router.pathname === "/story" ? "bg-black" : "bg-white"
              } */}
            <div></div>
          </div>

          <div className="navlinks-wrapper hidden h-full justify-evenly xl:flex">
            <div
              onClick={() => {
                if (router.locale === "en") {
                  router.push(router.asPath, router.asPath, { locale: "zh" });
                } else
                  router.push(router.asPath, router.asPath, { locale: "en" });
              }}
              className={`h-full w-auto p-[24px] 
              hover:bg-canvasgreen`}
            >
              <h3
                className={`${roboto.variable} font-robo text-[18px] leading-6`}
              >
                {router.locale === "zh" ? "EN" : "简"}
              </h3>
            </div>

            <Link href={"/partnerships"}>
              <div
                className={`w-[180px] py-[24px] text-center uppercase transition-colors hover:bg-canvasgreen ${
                  router.asPath === "/partnerships" ? "bg-canvasgreen" : null
                }  hover:text-white"`}
              >
                {t("common:nav_partnership")}
              </div>
            </Link>

            <Link href={"/story"}>
              <div
                className={`w-[180px] py-[24px] text-center uppercase transition-colors hover:bg-canvasgreen ${
                  router.asPath === "/story" ? "bg-canvasgreen" : null
                }  hover:text-white"`}
              >
                {t("common:nav_story")}
              </div>
            </Link>

            <Link href={"/services"}>
              <div
                className={`w-[180px] py-[24px] text-center uppercase transition-colors hover:bg-canvasgreen ${
                  router.asPath === "/services" ? "bg-canvasgreen" : null
                }  hover:text-white"`}
              >
                {t("common:nav_service")}
              </div>
            </Link>

            <Link href={"/contact"}>
              <div
                className={`w-[180px] py-[24px] text-center uppercase transition-colors hover:bg-canvasgreen ${
                  router.asPath === "/contact" ? "bg-canvasgreen" : null
                }  hover:text-white"`}
              >
                {t("common:nav_contact")}
              </div>
            </Link>

            <Link href={"/story/#careers-section"}>
              <div
                className={`hover:text-white" w-[180px] py-[24px] text-center uppercase transition-colors hover:bg-canvasgreen`}
              >
                {t("common:nav_careers")}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
