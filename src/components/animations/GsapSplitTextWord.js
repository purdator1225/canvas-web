import React from "react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

function GsapSplitTextWord({ children, vars }) {
  let el = useRef();

  useLayoutEffect(() => {
    //when component mounts, it immediately plays the animations

    let headingSplit = new SplitText(el.current.children, { type: "words" });

    let words = headingSplit.words;

    const textAnimation = gsap.from(words, {
      opacity: 0,
      y: 1000,
      ease: "easeOut",
      stagger: 0.05,
      duration: 1,
      scrollTrigger: {
        trigger: el.current.children,
        // markers: true,

        //resetting all elements that use the component
        toggleActions: "play pause resume reset",
      },
      ...vars,
    });

    return () => textAnimation.progress(0).revert();
  }, []);

  return (
    <div className="overflow-hidden">
      <span ref={el}>{children}</span>
    </div>
  );
}

export default GsapSplitTextWord;
