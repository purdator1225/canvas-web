
import React from 'react'
import { roboto } from '../../utils/font'
import Link from 'next/link'

function CareerListing({title,role}) {
  return (
    <div> <div className="flex flex-col justify-between gap-4 border-b-[1px] border-b-black pb-4 lg:h-[60px] lg:min-w-[800px] lg:flex-row">
    <p
      className={`${roboto.variable} font-robo text-[18px] font-medium uppercase leading-6`}
    >
      {title}
    </p>
    <div className="flex justify-between lg:w-[50%]">
      <p className={`${roboto.variable} font-robo text-[18px] leading-6`}>
        {role}
      </p>
      <Link
        rel="noopener noreferrer"
        href={`mailto:cglbiz@canvasglobal-log.com?subject=Application for ${role}-${title}`}
      >
        <div className="flex gap-2">
          <p className={`${roboto.variable} font-robo text-[18px] leading-6`}>
            Apply
          </p>
          <p>&#x2192;</p>
        </div>
      </Link>
    </div>
  </div></div>
  )
}

export default CareerListing


