import React, { useEffect } from "react";
import Image from "next/image";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Router, { useRouter } from "next/router";
import { useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

function PageLinks({ logo, text, order, route, color, noclick, id, mask_id, width, hoverWidth }) {
  useEffect(() => {

    //first-trigger
    gsap.fromTo(
      `#${id}`,
      { drawSVG: 0 },
      {
        drawSVG: true,
        duration: 10,
        scrollTrigger: {
          trigger: `#${id}`,
          markers: true,
          start: "-300% 50%",
          end: "100% 50%",
        },
      }
    );
  }, []);

  const router = useRouter();

  const button = useRef();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <motion.div
    whileHover={{width:hoverWidth}}
    layout
      data-lag="0.1"
      ref={button}
      onClick={handleClick}
      className={`${
        noclick && "pointer-events-none"
      } relative flex h-[100px] ${width} flex-row items-center justify-between gap-10 px-[30px] hover:cursor-pointer`}
    >
      <div className="relative flex h-full items-center">
        <BoxSvg hexcode={color} id={id} mask_id={mask_id} />
        <div className="absolute ml-[20px] aspect-square w-[62px] transition-transform duration-[0.5s] hover:rotate-[360deg]">
          <Image fill style={{ objectFit: "cover" }} src={logo} />
        </div>
      </div>

      <h3 className={`text-${color} text-[24px]`}>{text}</h3>
    </motion.div>
  );
}

export default PageLinks;

function BoxSvg({ hexcode, id, mask_id }) {
  return (
    <svg
      className="button-svg absolute h-full"
      viewBox="0 0 217 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="mask-0">
          <polyline
            style={{
              fill: "none",
              strokeWidth: "10px",
              stroke: "rgb(255, 255, 255)",
              paintOrder: "fill",
            }}
            points="94.07 45.677 94.091 3.425 3.782 3.425 3.782 93.791 94.321 93.725 94.055 61.698 211.883 61.681"
            id={id}
          ></polyline>
        </mask>
      </defs>
      <polyline
        style={{
          strokeDasharray: "2px",
          fill: "none",
          stroke: `${hexcode === "canvasblue" ? "#0057C1" : "#FFFFFF"}`,
          mask: "url(#mask-0)",
        }}
        points="94.07 45.682 94.091 3.43 3.782 3.43 3.782 93.796 94.321 93.73 94.055 61.703 211.883 61.686"
      ></polyline>
    </svg>
  );
}
