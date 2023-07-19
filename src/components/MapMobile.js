import React from "react";
import StatsCard from "./StatsCard";
import Image from "next/image";

function MapMobile({ t }) {
  return (
    <div>
      {/* <div className="relative aspect-[9/16] w-full bg-white sm:hidden">
          <Image
            fill
            alt='mob-map'
            style={{ objectFit: "contain" }}
            src="/images/mobile-map.png"
          />
        </div> */}

      <div
        id="country-section-mobile"
        className="flex flex-shrink-0 snap-x gap-6 overflow-x-scroll bg-white pt-[60px] pb-[40px] pl-[30px] lg:hidden"
      >
        <Image
          className="aspect-square   snap-center bg-cover"
          width={240}
          height={1}
          alt="us-mob"
          src="/images/country-pics/us-mobile.webp"
        />

        <Image
          alt="me-mob"
          className="aspect-square w-[240px] snap-center bg-cover"
          width={240}
          height={1}
          src="/images/country-pics/me-mobile.webp"
        />

        <Image
          alt="cn-mob"
          className="aspect-square w-[240px] snap-center bg-cover"
          width={240}
          height={1}
          src="/images/country-pics/cn-mobile.webp"
        />

        <Image
          alt="em-mob"
          className="aspect-square w-[240px] snap-center bg-cover"
          width={240}
          height={1}
          src="/images/country-pics/em-mobile.webp"
        />

        <Image
          alt="th-mob"
          className="aspect-square w-[240px] snap-center bg-cover"
          width={240}
          height={1}
          src="/images/country-pics/th-mobile.webp"
        />
      </div>
      <div className="relative px-6 pb-14  max-w-[400px] bg-none sm:hidden">
        <StatsCard
          title={t("home:home_map_h1")}
          statistic={"7+"}
          units={t("home:home_map_h3")}
          para={t("home:home_map_h2")}
        />
      </div>
    </div>
  );
}

export default MapMobile;
