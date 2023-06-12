import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { appWithTranslation } from "next-i18next";
import Footer from "@/components/footer";
import { useEffect, useRef } from "react";
import { DefaultSeo } from "next-seo";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { UseTranslation, useTranslation } from "next-i18next";
import SEO from "../../next-seo.config";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function App({ Component, pageProps }) {
  let smoother = useRef();
  let root = useRef();

  const { t } = useTranslation();

  //pass down to child props
  const scrollTo = (elID) => {
    smoother.current.scrollTo(elID, true, "center center");
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      smoother.current = ScrollSmoother.create({
        wrapper: "#wrapper",
        content: "#content",
        smooth: 0.8,
        effects: true,
      });
    }, root);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div ref={root} id="wrapper" className=" overflow-x-hidden">
        <div id="content">
          <DefaultSeo {...SEO} />
          <Navbar t={t} />

          <Component {...pageProps} scrollTo={scrollTo} />

          <Footer t={t} />
        </div>
      </div>
    </>
  );
}

export default appWithTranslation(App);
