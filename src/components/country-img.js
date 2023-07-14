import Image from "next/image";
import React from "react";

function CountryImg({ url, position, width, height }) {
  return (
    <div className={`${position} absolute w-full z-50 country-img opacity-0`}>
      <div className={`${width} ${height} relative`}>
        <Image alt={url} fill style={{ objectFit: "contain" }} src={url} />
      </div>
    </div>
  );
}

export default CountryImg;
