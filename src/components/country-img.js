import Image from "next/image";
import React from "react";

function CountryImg({ url, position, width, height }) {
  return (
    <div className={`${position} absolute w-full country-img opacity-0`}>
      <div className={`${width} ${height} relative`}>
        <Image fill style={{ objectFit: "contain" }} src={url} />
      </div>
    </div>
  );
}

export default CountryImg;
