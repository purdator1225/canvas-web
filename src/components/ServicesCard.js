import Image from "next/image";
import { national } from "../../utils/font";

// style={{gridArea:`area-${order}`}}
function ServicesCard({ title, logo, number, order }) {
  return (
    <div
      id="services-card"
      className={`flex max-w-[400px] flex-col justify-between bg-canvasblue p-6`}
    >
      <div>
        <h1
          className={`${national.variable} font-national text-[24px] uppercase text-white lg:text-[38px] `}
        >
          {title}
        </h1>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative h-[38px] w-[38px]">
          <Image
            alt={title}
            fill
            cover
            style={{ objectFit: "cover" }}
            src={logo}
          />
        </div>
        <h1
          className={`${national.variable} text-stroke font-national text-[48px]`}
        >
          {number}
        </h1>
      </div>
    </div>
  );
}

export default ServicesCard;
