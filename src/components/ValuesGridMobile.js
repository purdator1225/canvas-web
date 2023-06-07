import React from "react";
import ValueCard from "./ValueCard";
import { useTranslation } from "next-i18next";


function ValuesGridMobile({valuesList, bg, namespace }) {

  const {t} = useTranslation();


  return (
    <div className="grid grid-cols-2 grid-rows-4 lg:hidden w-full">
      {valuesList.map((value, index) => (
        <ValueCard
          bg={bg}
          key={index}
          valueText={t(`${namespace}:${value.valueText}`)}
          logo={value.logo}
          index={value.index}
        />
      ))}
    </div>
  );
}

export default ValuesGridMobile;
