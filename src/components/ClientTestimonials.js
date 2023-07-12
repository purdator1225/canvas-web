import React from 'react'
import { national, roboto } from '../../utils/font'
import PageLinks from './PageLinks'

function ClientTestimonials({t}) {
  return (
    
    <div className="client-testimonials w-screen bg-white ">
    <div className="m-auto flex justify-center xl:w-[1280px]">
      <h1
        className={`${national.variable} headings overflow-hidden font-national text-[60px] text-canvasblue`}
      >
        {t("home:home_testimonials_h1")}
      </h1>
    </div>

    <div className="flex aspect-square w-full items-start justify-between bg-[url('/images/client-testimonial.png')] bg-cover lg:hidden"></div>

    <div className="relative top-[-200px] w-full items-start justify-between bg-cover lg:top-0 lg:flex lg:bg-[url('/images/client-testimonial.png')] lg:py-[100px]">
      <div className="m-auto flex flex-col-reverse items-stretch gap-8 lg:flex-row xl:w-[1280px] px-[30px]">
        <div
          id="mobile-link"
          className="flex justify-center sm:self-center lg:hidden"
        >
          <PageLinks
            mask_id='contact-button-mobile-mask'
            parentId={'contact-button-mobile'}
            width={"w-[300px]"}
            hoverWidth={"400px"}
            id="contact-button-mobile"
            color="canvasblue"
            route={"/contact"}
            text={t("common:button_contact")}
            logo="/images/icons/contact-logo.png"
          />
        </div>

        <div className="hidden w-[330px] max-w-[400px] sm:self-center lg:block">
          <PageLinks
            width={"w-[300px]"}
            hoverWidth={"400px"}
            mask_id={"contact-button-large-mask"}
            parentId="contact-button-large"
            color="white"
            route={"/contact"}
            text={t("common:button_contact")}
            logo="/images/icons/contact-logo.png"
          />
        </div>

        <div className="testimonial-box m-auto flex w-[90vw] max-w-[520px] flex-col gap-5 bg-canvasblue p-5">
          <h1
            className={`${national.variable} font-national text-[32px] text-white`}
          >
            {t("home:home_testimonial_1_h1")}
          </h1>
          <p
            className={`${roboto.variable} font-robo leading-6 text-[18x] text-white`}
          >
            {t("home:home_testimonial_1_para")}
          </p>

          <div className="flex flex-col gap-[20px] text-white lg:flex-row ">
            <div className="w-1/2 flex-col">
              <h3 className="text-[24px] leading-[28px]">Mr. John</h3>
              <h3 className="text-[14px] leading-5">
                {t("home:home_testimonial_1_occupation")}
              </h3>
            </div>

            <div className="lg:w-1/2">
              <h1
                className={`${national.variable} font-national text-[38px] leading-[48px]`}
              >
                NTPM SDN BHD
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ClientTestimonials