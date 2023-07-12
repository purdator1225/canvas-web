import React from "react";
import { useState } from "react";
import Image from "next/image";
import { national, roboto } from "../../utils/font";
import { useTranslation } from "react-i18next";


function Swiper({ slides, namespace }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // console.log(slides[currentIndex]);

  const { t } = useTranslation();
  

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;

    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;

    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="flex h-full w-full justify-between">
      <div className="w-screen lg:w-1/2">
        <div className="m-auto flex flex-col gap-10  lg:py-10 xl:w-[557px]">
          <h1 className={`${national.variable} font-national text-[32px]`}>
            {t(`${namespace}:${slides[currentIndex].title}`)}
          </h1>

          <div className="relative h-[340px] w-full">
            <Image
              fill
              style={{ objectFit: "cover" }}
              src={slides[currentIndex].url}
            />
          </div>

          <p
            className={`${national.variable} lg:h-[232px] font-national text-[26px] leading:text-[28px]  lg:text-[48px]  uppercase lg:leading-[58px]`}
          >
            {t(`${namespace}:${slides[currentIndex].para}`)}
          </p>

          <div className="mt-[28px] flex justify-around gap-10">
            <div className="pagination-wrapper flex w-full gap-4 self-end">
              {slides.map((slide, index) => (
                <div
                  className={`${
                    index === currentIndex ? "bg-canvasgreen" : "bg-white"
                  } h-[2px] w-full transition-all hover:scale-110 lg:w-[60px] `}
                  key={index}
                  onClick={() => goToSlide(index)}
                ></div>
              ))}
            </div>

            <div className="button-wrapper flex gap-6">
              <svg
                onClick={goToPrev}
                className="left-button transition-transform hover:scale-110"
                width="44"
                height="64"
                viewBox="0 0 44 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="34" y1="32" x2="10" y2="32" stroke="white" />
                <path d="M16 38.5L10 32L16 25.5" stroke="white" />
                <rect
                  x="43.5"
                  y="63.5"
                  width="43"
                  height="63"
                  rx="21.5"
                  transform="rotate(-180 43.5 63.5)"
                  stroke="white"
                />
              </svg>
              <svg
                onClick={goToNext}
                className="right-button transition-transform hover:scale-110"
                width="44"
                height="64"
                viewBox="0 0 44 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="10" y1="32" x2="34" y2="32" stroke="white" />
                <path d="M28 25.5L34 32L28 38.5" stroke="white" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="43"
                  height="63"
                  rx="21.5"
                  stroke="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden h-full w-1/2 lg:block">
        <Image
          fill
          cover
          style={{ objectFit: "cover" }}
          src={`${slides[currentIndex].url}`}
        />
        <div className="image-filter absolute z-10 h-full w-full bg-[#08346A50]"></div>
      </div>
    </div>
  );
}

export default Swiper;
