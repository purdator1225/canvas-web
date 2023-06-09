import React from "react";
import ValueCard from "./ValueCard";
import { useTranslation } from "next-i18next";
import Image from "next/image";

function ValuesGridMobile({ valuesList, imageList, bg, namespace }) {
  const { t } = useTranslation();

  return (
    <div className="eight-grid-mobile grid w-full lg:hidden">
      {valuesList.map((value, index) => (
        <ValueCard
          bg={bg}
          key={index}
          valueText={t(`${namespace}:${value.valueText}`)}
          logo={value.logo}
          index={value.index}
        />
      ))}

      {imageList ? imageList.map((image, index) => (
        <div
          key={index}
          className={`relative col-span-2 h-[250px] w-full  ${
            index === 0
              ? "eight-grid-mob-first"
              : index === 1
              ? "eight-grid-mob-second"
              : index === 2
              ? "eight-grid-mob-third"
              : null
          } `}
        >
          <Image alt={image.url} fill style={{ objectFit: "cover" }} src={image.url} />
        </div>
      )): null }
    </div>
  );
}

export default ValuesGridMobile;
