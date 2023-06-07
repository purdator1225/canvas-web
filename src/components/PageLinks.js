import React, { useEffect } from "react";
import Image from "next/image";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Router, { useRouter } from "next/router";
import { useRef } from "react";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

function PageLinks({ logo, text, order, route, color, noclick }) {
  useEffect(() => {
    gsap.fromTo("#mask-path", { drawSVG: 0 }, { drawSVG: true, duration: 5 });
  }, []);

  const router = useRouter();

  const button = useRef();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <div
      data-lag="0.1"
      ref={button}
      
      onClick={handleClick}
      className={`${noclick && 'pointer-events-none' } relative w-full h-[100px] flex flex-row items-center px-[30px] gap-10 justify-between hover:cursor-pointer`}
    >
      <div className="relative flex items-center h-full">
        <BoxSvg hexcode={color} />
        <div className="absolute ml-[20px] aspect-square w-[62px] transition-transform duration-[0.5s] hover:rotate-[360deg]">
          <Image fill style={{ objectFit: "cover" }} src={logo} />
        </div>
      </div>

      <h3 className={`text-${color} text-[24px]`}>{text}</h3>
    </div>
  );
}

export default PageLinks;

function BoxSvg({ hexcode }) {
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
            id="mask-path"
          ></polyline>
        </mask>
      </defs>
      <polyline
        style={{
          strokeDasharray: "2px",
          fill: "none", 
          stroke: `${hexcode==="canvasblue" ? "#0057C1" : "#FFFFFF" }`,
          mask: "url(#mask-0)",
        }}
        points="94.07 45.682 94.091 3.43 3.782 3.43 3.782 93.796 94.321 93.73 94.055 61.703 211.883 61.686"
      
      ></polyline>
    </svg>
  );
}
