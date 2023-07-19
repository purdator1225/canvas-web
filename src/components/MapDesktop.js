import React from "react";
import SvgMap from "./map-svg";
import MapDots from "./map-dots";
import CountryImg from "./country-img";
import StatsCard from "./StatsCard";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MapDesktop({ t }) {


  useLayoutEffect(() => {

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {

        let tl = gsap.timeline({
            scrollTrigger: {
              trigger: "#big-map-section",
              start: "65% 50%",
              end:"100% 50%",
            //   markers: true,
              // toggleActions: "restart reverse restart reverse"
      
            },
          });
      
          tl.fromTo(
            "#maskLayer",
            {
              drawSVG: "100% 100%",
            },
            {
              drawSVG: "true",
              duration: 3,
              ease:"easeInOut"
            }
          )
            .fromTo(
              "#middleEastMask",
              {
                drawSVG: "0",
              },
              {
                drawSVG: "true",
                duration: 3,
                ease:"easeInOut"
              },
              "<"
            )
            .fromTo(
              "#chinaMask",
              {
                drawSVG: "100% 100%",
              },
              {
                drawSVG: "true",
                duration: 3,
                ease:"easeInOut"
              },
              "<"
            )
            .fromTo(
              "#wm_th_mask",
              {
                drawSVG: "100% 100%",
              },
              {
                drawSVG: "true",
                duration: 1,
              },
              "<"
            )
            .fromTo(
              "#em_wm_mask",
              {
                drawSVG: "100% 100%",
              },
              {
                drawSVG: "true",
                duration: 2,
              },
              "<"
            )
            .fromTo(
              "#em_china_mask",
              {
                drawSVG: "100% 100%",
              },
              {
                drawSVG: "true",
                duration: 3,
              },
              "<"
            ).fromTo(
                "#key_routes_card",
                {
                y: 600,
                  duration: 1,
                },
                {
                  y: 0,
                    duration: 1,
                  },
                "<1"
              );
      
    })

   
    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div
      id="big-map-section"
      className="routes-section relative hidden overflow-hidden bg-white py-16 lg:block"
    >
      <div className="relative m-auto py-16 xl:w-[1280px]">
        {/* These are for route lines */}

        <div
          id="my-us-div"
          className="aspect-[6:7] absolute left-[28%] top-[16.5%] z-50 w-[50%]"
        >
          <svg
            viewBox="0 0 600 700"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <mask id="mask-10">
                <path
                  d="M 22.626 45.349 C 55.977 382.047 423.854 633.742 584.224 680.575"
                  style={{
                    fill: "none",
                    strokeWidth: "15px",
                    stroke: "white",
                  }}
                  id="maskLayer"
                ></path>
              </mask>
            </defs>
            <path
              d="M 19.621 40.616 C 52.972 377.314 420.849 629.009 581.219 675.842"
              stroke="#0057C1"
              strokeWidth="1.46498"
              strokeDasharray="5.33 5.33"
              style={{ fill: "none", mask: "url(#mask-10)" }}
            ></path>
          </svg>
        </div>

        <div
          id="my-me-div"
          className="absolute bottom-[7%] right-[23%] h-[32%] w-[42%]"
        >
          <svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <mask id="mask-2">
                <path
                  d="M 500 276.974 C 305.157 363.775 67.038 189.065 9.171 21.324"
                  style={{
                    fill: "none",
                    strokeWidth: "19px",
                    strokeLinecap: "round",
                    stroke: "rgb(255, 255, 255)",
                  }}
                  id="middleEastMask"
                ></path>
              </mask>
            </defs>
            <path
              d="M 500 276.974 C 305.157 363.775 67.038 189.065 9.171 21.324"
              stroke="#0057C1"
              strokeWidth="1.46498"
              strokeDasharray="5.33 5.33"
              style={{ fill: "none", mask: "url(#mask-2)" }}
            ></path>
          </svg>
        </div>

        {/* china mask*/}

        <div
          id="china-wm-path"
          className="absolute bottom-[2%] right-[16%] h-[49%] w-[12%]"
        >
          <svg viewBox="0 0 165 420" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <mask id="mask-3">
                <path
                  d="M 118.891 22.756 C 24.453 165.42 4.113 325.418 52.176 418.321"
                  style={{
                    fill: "none",
                    strokeWidth: "19px",
                    strokeLinecap: "round",
                    stroke: "rgb(255, 255, 255)",
                  }}
                  id="chinaMask"
                ></path>
              </mask>
            </defs>
            <path
              d="M 119.139 20.658 C 24.701 163.322 4.361 323.32 52.424 416.223"
              stroke="#0057C1"
              stroke-width="1.46498"
              strokeDasharray="5.33 5.33"
              style={{ fill: "none", mask: "url(#mask-3)" }}
            ></path>
          </svg>
        </div>

        {/* wm/th mask*/}

        <div className="absolute bottom-[11%] right-[16%] aspect-square w-[9%]">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <mask id="mask-4">
                <path
                  d="M 100.344 200 C 131.84 220.874 140.998 264.096 112.795 290.099"
                  style={{
                    fill: "none",
                    strokeWidth: "19px",
                    strokeLinecap: "round",
                    stroke: "rgb(255, 255, 255)",
                  }}
                  id="wm_th_mask"
                ></path>
              </mask>
            </defs>
            <path
              d="M 100 200 C 131.496 220.874 140.654 264.096 112.451 290.099"
              stroke="#0057C1"
              stroke-width="1.46498"
              stroke-dasharray="5.33 5.33"
              style={{ fill: "none", mask: "url(#mask-4)" }}
              transform="matrix(1, 0, 0, 1, -89.62767196655233, -190.09900857818272)"
            ></path>
          </svg>
        </div>

        {/* em/wm mask */}

        <div className="aspect-[2:1] absolute bottom-[4%] right-[8%] w-[20%]">
          <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <mask id="mask-5">
                <path
                  d="M 164.839 35.296 C 136.27 73.568 47.418 74.638 35.031 46.462"
                  style={{
                    fill: "none",
                    strokeWidth: "19px",
                    strokeLinecap: "round",
                    stroke: "rgb(255, 255, 255)",
                  }}
                  id="em_wm_mask"
                ></path>
              </mask>
            </defs>
            <path
              d="M 165.923 35.319 C 137.354 73.591 48.502 74.661 36.115 46.485"
              stroke="#0057C1"
              stroke-width="1.46498"
              stroke-dasharray="5.33 5.33"
              style={{ fill: "none", mask: "url(#mask-5)" }}
            ></path>
          </svg>
        </div>

        <div className="aspect-[1:2] absolute bottom-[10%] right-[9%] w-[15%]">
          <svg viewBox="30 20 200 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <mask id="mask-6">
                <path
                  d="M 66.841 8.33 C 228.383 87.443 163.795 356.007 50.982 400"
                  style={{
                    fill: "none",
                    strokeWidth: "19px",
                    strokeLinecap: "round",
                    stroke: "rgb(255, 255, 255)",
                  }}
                  id="em_china_mask"
                ></path>
              </mask>
            </defs>
            <path
              d="M 66.471 8.33 C 228.013 87.443 163.425 356.007 50.612 400"
              stroke="#0057C1"
              strokeWidth="1.46498"
              strokeDasharray="5.33 5.33"
              style={{ fill: "none", mask: "url(#mask-6)" }}
            ></path>
          </svg>
        </div>

        <SvgMap id="map-svg" />

        {/* These are for dots */}
        <MapDots id="us-dot" position="top-[20%] left-[30%]" />
        <MapDots id="me-dot" position="top-[60%] left-[33%] " />
        <MapDots id="cn-dot" position="top-[50%] right-[18%]" />
        <MapDots id="em-dot" position="bottom-[10%] right-[10%]" />
        <MapDots id="wm-dot" position="bottom-[10%] right-[23%]" />
        <MapDots id="th-dot" position="bottom-[20%] right-[23%]" />

        {/* these are for pics */}

        <CountryImg
          url={"/images/country-pics/us-mobile.webp"}
          width={"w-[30%]"}
          height={"aspect-[3/2]"}
          position={"top-[9%] left-[32%]"}
        />

        <CountryImg
          url={"/images/country-pics/me-mobile.webp"}
          width={"w-[30%]"}
          height={"aspect-[3/2]"}
          position={"bottom-[38%] left-[4%]"}
        />

        <CountryImg
          url={"/images/country-pics/cn-mobile.webp"}
          width={"w-[20%]"}
          height={"aspect-[2/3]"}
          position={"left-[71%] bottom-[47%]"}
        />
        <CountryImg
          url={"/images/country-pics/th-mobile.webp"}
          width={"w-[30%]"}
          height={"aspect-[3/2]"}
          position={"left-[45%] bottom-[21%]"}
        />

        <CountryImg
          url={"/images/country-pics/em-mobile.webp"}
          width={"w-[20%]"}
          height={"aspect-[2/3]"}
          position={"right-[-78%] bottom-[11%]"}
        />

        <div id='key_routes_card' className="absolute bottom-[-40px] left-[4%] w-[360px] items-center">
          <StatsCard
            title={t("home:home_map_h1")}
            statistic={"7+"}
            units={t("home:home_map_h3")}
            para={t("home:home_map_h2")}
          />
        </div>
      </div>
    </div>
  );
}

export default MapDesktop;
