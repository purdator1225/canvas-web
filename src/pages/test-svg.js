import MapRoutes from "@/components/maproutes";
import React from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { useEffect } from "react";
import { motion } from "framer-motion";

gsap.registerPlugin(DrawSVGPlugin);

function TestSVG() {
  useEffect(() => {
    gsap.fromTo(
      "#maskLayer",
      {
        drawSVG: "0",
      },
      {
        drawSVG: "true",
        duration: 5,
        repeat: -1,
        yoyo: true,
      }
    );
    return () => {};
  }, []);

  return (
    <div className="bg-white pt-[100px] relative w-[600px] h-[700px]">
      <div
        id="my-us-div"
        className="h=[600px] w-[700px]"
      >
        <svg
          viewBox="0 0 600 700"
          preserveAspectRatio="meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <mask id="mask-0">
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
            style={{ fill: "none", mask: "url(#mask-0)" }}
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default TestSVG;
