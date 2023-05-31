import React from "react";
import ValueCard from "./ValueCard";
import Image from "next/image";

function ValuesGrid({ valuesList, imageList, bg }) {
  return (
    <div className="grid eight-grid">
      {valuesList.map((value, index) => (
        <ValueCard
          bg={bg}
          key={index}
          valueText={value.valueText}
          logo={value.logo}
          index={value.index}
        />
      ))}

      {imageList.map((image, index) => (
        <div
          key={index}
          className={`relative w-full col-start-3 col-span-2 ${
            index === 1
              ? "eight-grid-second"
              : index === 0
              ? "eight-grid-first"
              : index === 2
              ? "eight-grid-third"
              : null
          } `}
        >
          <Image fill style={{ objectFit: "cover" }} src={image.url} />
        </div>
      ))}
    </div>
  );
}

export default ValuesGrid;
