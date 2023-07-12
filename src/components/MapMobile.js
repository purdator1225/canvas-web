import React from 'react'
import StatsCard from './StatsCard'
import Image from 'next/image'

function MapMobile({t}) {
  return (
    <div>

<div className="relative aspect-[9/16] w-full bg-white sm:hidden">
          <Image
            fill
            style={{ objectFit: "contain" }}
            src="/images/mobile-map.png"
          />
        </div>

        

        <div className="relative top-[-40px] m-auto w-[90vw] bg-none sm:hidden">
          <StatsCard
            title={t("home:home_map_h1")}
            statistic={"7+"}
            units={t("home:home_map_h3")}
            para={t("home:home_map_h2")}
          />
        </div>

        

        <div
          id="country-section-mobile"
          className="snap-x flex flex-shrink-0 gap-6 overflow-x-scroll bg-white py-[40px] pl-[30px] lg:hidden"
        >
          <Image
            className="aspect-square   bg-cover snap-center"
            width={240}
            height={1}
            src="/images/country-pics/us-mobile.png"
          />

          <Image
            className="aspect-square w-[240px] bg-cover snap-center"
            width={240}
            height={1}
            src="/images/country-pics/me-mobile.png"
          />

          <Image
            className="aspect-square w-[240px] bg-cover snap-center"
            width={240}
            height={1}
            src="/images/country-pics/cn-mobile.png"
          />

          <Image
            className="aspect-square w-[240px] bg-cover snap-center"
            width={240}
            height={1}
            src="/images/country-pics/em-mobile.png"
          />

          <Image
            className="aspect-square w-[240px] bg-cover snap-center"
            width={240}
            height={1}
            src="/images/country-pics/th-mobile.png"
          />
        </div>
    </div>
  )
}

export default MapMobile