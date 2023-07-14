import React from "react";
import { national } from "../../utils/font";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function HeroCard({ text, logo, scrollSection }) {

  const handleClick = () => {
    gsap.to(window, { duration: 2, scrollTo: scrollSection });
  };

  return (
    <div
      onClick={handleClick}
      className="box-border flex aspect-square h-[180px] flex-shrink-0 snap-center flex-col justify-between p-2 transition-colors hover:cursor-pointer hover:bg-[rgba(44,182,108,0.7)]"
    >
      <hr className="h-[4px] w-full bg-white"></hr>
      <h3
        className={`${national.variable} font-national text-[32px] font-medium uppercase`}
      >
        {text}
      </h3>
      <div className="relative aspect-square w-[48px]">
        <Image alt={text} fill style={{ objectFit: "cover" }} src={logo} />
      </div>
    </div>
  );
}

export default HeroCard;
