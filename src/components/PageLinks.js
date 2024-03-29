import React, { useEffect } from "react";
import Image from "next/image";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Router, { useRouter } from "next/router";
import { useRef } from "react";
import { gsap } from "gsap";
import { easeOut, motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

let parentVariants = {
  hidden: { opacity: 1 },
  hover: { opacity: 1 },
};

let childVariants = {
  hidden: { x: 0 },

  hover: {
    x: 50,
    transition:{
    duration:0.5,
     ease:"linear"
    }
  },

};

function PageLinks({
  noClickId,
  logo,
  text,
  route,
  color,
  parentId,
  noclick,
  mask_id,
  width,
  hoverWidth,
}) {
  useEffect(() => {
    //first-trigger
    gsap.fromTo(
      `#${parentId}`,
      { drawSVG: 0 },
      {
        drawSVG: true,
        duration: 2,
        scrollTrigger: {
          trigger: `#${parentId}`,
          toggleActions: "play pause resume reset",
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
      variants={parentVariants}
      initial="hidden"
      whileHover={"hover"}
      ref={button}
      onClick={handleClick}
      className={`${
        noclick && "pointer-events-none"
      } relative box-border flex h-[100px] w-[250px] flex-row items-center justify-between gap-10  hover:cursor-pointer`}
    >
      <BoxSvg hexcode={color} parent_id={parentId} mask_id={mask_id} />
      <div className="absolute ml-[7%] aspect-square w-[62px] transition-transform duration-[0.5s]">
        <Image alt='page-link-icon' fill style={{ objectFit: "cover" }} src={logo} />
      </div>

      <motion.p
        id={noClickId}
        variants={childVariants}
        className={`absolute left-[45%] text-${color}  text-[24px]`}
      >
        {text}
      </motion.p>
    </motion.div>
  );
}

export default PageLinks;

function BoxSvg({ hexcode, parent_id, mask_id }) {
  return (
    <div className="absolute aspect-[217/95] w-[217px]">
      <svg
        className="button-svg h-full"
        viewBox="0 0 217 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id={mask_id}>
            <polyline
              id={parent_id}
              style={{
                fill: "none",
                strokeWidth: "10px",
                stroke: "rgb(255, 255, 255)",
                paintOrder: "fill",
              }}
              points="94.07 45.677 94.091 3.425 3.782 3.425 3.782 93.791 94.321 93.725 94.055 61.698 211.883 61.681"
            ></polyline>
          </mask>
        </defs>
        <polyline
          style={{
            strokeDasharray: "2px",
            fill: "none",
            stroke: `${hexcode === "canvasblue" ? "#0057C1" : "#FFFFFF"}`,
            mask: `url(#${mask_id})`,
          }}
          points="94.07 45.682 94.091 3.43 3.782 3.43 3.782 93.796 94.321 93.73 94.055 61.703 211.883 61.686"
        ></polyline>
      </svg>
    </div>
  );
}
