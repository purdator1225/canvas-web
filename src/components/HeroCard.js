import React from 'react'
import { national } from '../../utils/font'
import Image from 'next/image'

function HeroCard({ text, logo, url, scrollTo }) {
  return (
    <div
        onClick={() => scrollTo(url)}
        className=" box-border flex aspect-square h-[180px] flex-col justify-between p-2 transition-colors hover:cursor-pointer hover:bg-[rgba(44,182,108,0.7)]"
      >
        <hr className="h-[4px] w-full bg-white"></hr>
        <h3
          className={`${national.variable} font-national text-[32px] font-medium uppercase`}
        >
          {text}
        </h3>
        <div className="relative aspect-square w-[48px]">
          <Image fill style={{ objectFit: "cover" }} src={logo} />
        </div>
      </div>
  )
}

export default HeroCard
