import Image from "next/image";
import { national } from "../../utils/font";

// style={{gridArea:`area-${order}`}}
function ServicesCard({ title, logo, number, order }) {
  return (
    <div
      id="services-card"
      className={`flex w-[300px] lg:w-[400px] xl:w-[500px] h-[230px] flex-shrink-0 snap-center flex-col justify-between bg-canvasblue p-6`}
    >
      <div>
        <h1
          className={`${national.variable} font-national text-[38px] uppercase text-white`}
        >
          {title}
        </h1>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative h-[38px] w-[38px]">
          <Image fill cover style={{ objectFit: "cover" }} src={logo} />
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
