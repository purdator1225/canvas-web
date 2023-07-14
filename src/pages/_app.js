import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { appWithTranslation } from "next-i18next";
import Footer from "@/components/footer";
import { useLayoutEffect, useRef, useState } from "react";
import { DefaultSeo } from "next-seo";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { UseTranslation, useTranslation } from "next-i18next";
import SEO from "../../next-seo.config";
import { SmootherContext } from "@/components/SmootherContext";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function App({ Component, pageProps }) {
  // let [smoother, setSmoother] = useState();

  const { t } = useTranslation();

  //pass down to child props
  // const scrollTo = (elID) => {
  //   smoother.scrollTo(elID, true, "center center");
  // };

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  //   let smoother = ScrollSmoother.create({
  //     wrapper: "#wrapper",
  //     content: "#content",
  //     smooth: 0.8,
  //     effects: true,
  //     normalizeScroll: true,
  //     smoothTouch: 1,
  //     ignoreMobileResize: true,
  //     preventDefault: true
   
  //   });

  //   setSmoother(smoother);

  //   return () => {
  //     smoother.kill();
  //   };
  // }, []);

  return (
    <div className="overflow-x-hidden min-h-screen">
      <DefaultSeo {...SEO} />
      <Navbar t={t} />

      {/* <SmootherContext.Provider value={smoother}>
        <div id="wrapper">
          <div id="content"> */}
            <Component {...pageProps}  />
            <Footer t={t} />
          {/* </div>
        </div>
      </SmootherContext.Provider> */}
    </div>
  );
}

export default appWithTranslation(App);
