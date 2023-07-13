import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { national } from "../../utils/font";

import PageLinks from "@/components/PageLinks";

import AchievementsMobile from "@/components/AchievementsMobile";
import AchievementsSection from "@/components/AchievementsSection";
import ClientTestimonials from "@/components/ClientTestimonials";
import HeroIsDesktop from "@/components/HeroIsDesktop";
import HeroIsMobile from "@/components/HeroIsMobile";
import MapDesktop from "@/components/MapDesktop";
import MapMobile from "@/components/MapMobile";
import Sectors from "@/components/Sectors";
import Services from "@/components/Services";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

//on page load, prepare these props statically which takes in the locale file
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
  };
}

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export default function Home(props) {
  //translation
  const { t } = useTranslation();

  // const scrollTo = props.scrollTo;

  const strengthRef = useRef(null);
  const servicesRef = useRef("");
  const sectorRef = useRef("");
  const clientRef = useRef("");

  const strengthScroll = () => {
    strengthRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const servicesScroll = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sectorScroll = () => {
    sectorRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const clientScroll = () => {
    clientRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // animate banner
  const index = useRef();

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.from(
        "#map-svg",

        {
          drawSVG: "0",
          stagger: 0.08,

          scrollTrigger: {
            trigger: "#strengths-large",
            scrub: 2,
            start: "125% 50%",
            end: "175% 50%",
          },
        }
      );

      gsap.to(".map-dots", {
        autoAlpha: 1,
        scale: 1.2,
        stagger: 0.2,
        ease: "back(5)",
        scrollTrigger: {
          trigger: "#strengths-large",
          // markers: true,
          scrub: 2,
          start: "105% 50%",
          end: "150% 50%",
        },
        delay: 1.5,
      });

      gsap.to(".country-img", {
        autoAlpha: 1,
        scale: 1.01,
        stagger: 0.2,
        ease: "back(4)",
        scrollTrigger: {
          trigger: "#strengths-large",
          // markers: true,
          scrub: 2,
          start: "105% 50%",
          end: "150% 50%",
        },
        delay: 3.5,
      });

      gsap.fromTo(
        "#ship-large",
        { y: "50%" },
        {
          x: 0,
          y: 0,
          duration: 2,
          ease: "easeIn",
          scrollTrigger: {
            trigger: "#hero",
            // markers: true,
            scrub: 4,
            start: "50% 10%",
            end: "150% 50%",
          },
        }
      );

      gsap.from("#achievement-card", {
        y: 100,
        duration: 10,
        stagger: 2,
        scrollTrigger: {
          trigger: "#strengths-large",
          // markers: true,

          scrub: 1,
        },
      });

      const servicesWrapperChildren = document.querySelector(
        "#services-card-wrapper"
      ).children;

      gsap.from(servicesWrapperChildren, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: "#services-section",
          toggleActions: "play complete resume reverse",
          start:"0% 50%",
          end:"100% 50%",
          markers: true,
        },
      });
    });

    let context = gsap.context(() => {
      gsap.from(
        "#client-card",

        {
          y: 100,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.2,

          scrollTrigger: {
            trigger: "#sectors",
            // markers: true,
            toggleActions: "play pause resume reset",
            start: "50% 50%",
            // end: "100% 50%",
          },
        }
      );
    }, index);

    return () => {
      context.revert();
      mm.revert();
    };
  }, []);

  return (
    <main ref={index} className={`${national.variable} font-nation bg-white`}>
      <HeroIsMobile t={t} />

      <HeroIsDesktop
        t={t}
        strengthScroll={strengthScroll}
        servicesScroll={servicesScroll}
        clientScroll={clientScroll}
        sectorScroll={sectorScroll}
      />

      {/* //Achievement Section */}
      <AchievementsSection ref={strengthRef} t={t} />

      <div
        id="values-button-large"
        className="m-auto hidden w-screen max-w-[1280px] px-[30px] sm:block "
      >
        <PageLinks
          mask_id={"values-large-mask"}
          parentId="values-large"
          color={"canvasblue"}
          route={"/services"}
          text={t("common:button_values")}
          width={"w-[300px]"}
          hoverWidth={"w-[350px]"}
          logo={"/images/icons/our-values.png"}
        />
      </div>

      <AchievementsMobile t={t} />

      <MapMobile t={t} />

      <MapDesktop t={t} />

      <Services ref={servicesRef} t={t} />

      <Sectors ref={sectorRef} t={t} />

      <ClientTestimonials ref={clientRef} t={t} />
    </main>
  );
}
