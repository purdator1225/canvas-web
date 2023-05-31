import Link from "next/link";
import React from "react";
import { national, roboto } from "../../utils/font";
import Image from "next/image";

function ContactUs() {
  let handleSubmit = (e) => {
    e.preventDefault();
  };



  return (
    <div className="h-screen bg-cover bg-[url('/images/contact-us.png')] flex justify-between text-white p-10">
      <div className="left-side h-[50%] mt-[150px] flex flex-col justify-between">
        <div>
          <h1
            className={`${national.variable} font-national text-[32px] font-bold`}
          >
            Canvas Global Logistics
          </h1>

          <h3
            className={`${national.variable} font-national text-[60px] font-bold`}
          >
            Contact Us
          </h3>
        </div>

        <div>
          <div className="flex gap-10">
            <Image width={24} height={24} src={"/images/icons/email.png"} />
            <p>Email</p>
          </div>
          <Link href={"/"}>cs@canvasglobal-log.com</Link>
        </div>

        <div>
          <div className="flex gap-10">
            <Image
              width={24}
              height={24}
              src={"/images/icons/contact-phone.png"}
            />
            <p>Contact Number</p>
          </div>
          <Link href={"/"}>+604 287 0130</Link>
        </div>

        <Link href="/">
          <div>18 Unit 34-C, </div>
          <div>Menara Gurney Persiaran Gurney, </div>
          <div>10250 Penang, Malaysia.</div>
        </Link>
      </div>

      <div className="right-side min-w-[50vw]">
        <form
          action="https://formsubmit.co/briansh1225@gmail.com"
          method="POST"
          className={`${roboto.variable} font-robo flex mt-[150px] h-full flex-col gap-[60px] max-w-[600px]`}
        >
          <div className="flex-col flex gap-2 max-w-[280px]">
            <label>Name</label>
            <input
              required
              placeholder="Enter Name"
              type="text"
              name="name"
            ></input>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2 w-[280px]  ">
              <label>Email</label>
              <input
                required
                placeholder="Enter Email"
                type="email"
                name="email"
              ></input>
            </div>

            <div className="flex flex-col gap-2 w-[280px]">
              <label>Telephone</label>
              <input
                required
                placeholder="Enter Phone"
                type="phone"
                name="phone"
              ></input>
            </div>
          </div>

          <div className="flex flex-col h-fit gap-2">
            <label>Message</label>
            <textarea
              className="text-white min-h-fit "
              placeholder="Enter Message"
              type="phone"
              name="phone"
            ></textarea>
          </div>

          <button className="p-6 bg-gray-100 text-black self-start" typeof="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
