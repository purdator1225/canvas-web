import Image from "next/image";
import Link from "next/link";

import { Roboto } from "next/font/google";
import { useRouter } from "next/router";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

function Navbar() {
  const router = useRouter();
  // console.log(router.pathname);

  return (
    <div
      className={`${
        roboto.variable
      } w-full m-auto font-robo text-[18px]leading-[24px] tracking-tight ${
        router.pathname === "/story" ? "text-black" : "text-white"
      } flex flex-row  bg-[#ffffff20] absolute z-10`}
    >
      <div className="items-center justify-between flex w-[90%] m-auto">

      
        <Link href="/">

        <div className="relative w-[126px] h-[40px] hover:animate-pulse">
        <Image
            fill
            style={{objectFit:'contain'}}
            src={`${
              router.pathname !== "/story"
                ? "/images/canvas_logo.svg"
                : "/images/canvas-color-logo.png"
            }`}
          />
        </div>

        
        </Link>

        <div className="navlinks-wrapper flex">
          <Link href={"/partnerships"}>
            <div className="w-[200px] py-[24px] text-center uppercase hover:bg-canvasgreen transition-colors   hover:text-white">
              Partnerships
            </div>
          </Link>

          <Link href={"/story"}>
            <div className="w-[200px] py-[24px] text-center uppercase hover:bg-canvasgreen transition-colors   hover:text-white">
              Our Story
            </div>
          </Link>

          <Link href={"/services"}>
            <div className="w-[200px] py-[24px] text-center uppercase hover:bg-canvasgreen transition-colors   hover:text-white">
              Our Services
            </div>
          </Link>

          <Link href={"/contact"}>
            <div className="w-[200px] py-[24px] text-center uppercase hover:bg-canvasgreen transition-colors   hover:text-white">
              Contact Us
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
