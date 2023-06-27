import MapRoutes from "@/components/maproutes";
import React from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { useEffect } from "react";
import { motion } from "framer-motion";

// gsap.registerPlugin(DrawSVGPlugin);

// function TestSVG() {

//     useEffect(() => {
//         let context = gsap.context(() => {

//           gsap.fromTo(
//             "#wm-us-path",
//             { drawSVG: "100% 100%" },
//             { drawSVG: "0% 100%", duration: 5, repeat: -1, }
//           );

//         })

//     },[])

//   return (
//     <div className='relative w-full h-[900px] bg-[yellow]'>

//         <MapRoutes width={"w-[600px]"} height={"h-[720px]"}/>
//     </div>
//   )
// }

const ParentVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  transition: {
    delay: 10,
    duration: 1,
    when: "beforeChildren",
    staggerChildren: 0.8,
  },
};

const ChildVariants = {
  hidden: { rotate: 0 },
  show: { rotate: 45, x: 200 },
};


function TestSVG() {
  
  return (
    <div>
      <motion.div
        className=" h-[50vh] bg-black"
        variants={ParentVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="aspect-square w-[40px] bg-red-100"
          variants={ChildVariants}
        ></motion.div>
        <motion.div
          className="aspect-square w-[40px] bg-red-100"
          variants={ChildVariants}
        ></motion.div>
        <motion.div
          className="aspect-square w-[40px] bg-red-100"
          variants={ChildVariants}
        ></motion.div>
      </motion.div>
    </div>
  );
}

export default TestSVG;
