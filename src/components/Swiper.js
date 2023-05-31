import React from "react";
import { useState } from "react";
import Image from "next/image";
import { national, roboto } from "../../utils/font";

function Swiper({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <>
      <div className="flex flex-col gap-10 w-full">
        <h1 className={`${national.variable} font-national text-[32px]`}>
          {slides[currentIndex].title}
        </h1>

        <div className="relative w-full h-[340px]">
          <Image
            fill
            style={{ objectFit: "cover" }}
            src={slides[currentIndex].url}
          />
        </div>

        <p
          className={`${national.variable} font-national text-[48px] leading-[58px] uppercase`}
        >
          {slides[currentIndex].para}
        </p>
      </div>

      <div className="flex justify-around mt-[28px]">
        <div className="pagination-wrapper self-end flex gap-4">
          {slides.map((slide, index) => (
            <div
              className={`${
                index === currentIndex ? "bg-canvasgreen" : "bg-white"
              } transition-all hover:scale-110 h-[2px] w-[100px] `}
              key={index}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>

        <div className="button-wrapper flex gap-6">
          <svg
            onClick={goToPrev}
            className="left-button hover:scale-110 transition-transform"
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
            className="right-button hover:scale-110 transition-transform"
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
    </>
  );
}

export default Swiper;
