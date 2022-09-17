import Image from "next/image";

import PartnersPolygon from "../../public/Hack-R-Play/PartnersPolygon.svg";
import NhostLogo from "../../public/Hack-R-Play/NhostLogo.svg";

const Partners = () => {
  return (
    <section
      id="sponsors"
      className="relative flex flex-col justify-center items-center py-20 md:px-16 px-8"
    >
      <div className="absolute right-1 top-0 md:w-44 md:h-44 w-20 h-20 ">
        <Image
          src={PartnersPolygon}
          alt="Partners Polygon"
          layout="responsive"
        />
      </div>

      <h1 className="font-primary text-white text-5xl tracking-wider relative before:content[''] before:absolute before:w-1/4 before:h-1 before:-bottom-2 before:border-b-[3px] before:rounded-sm before:left-24 before:border-[#32F9E5]">
        Our Sponsors
      </h1>
      <div className="mx-auto mt-5 py-10 md:w-1/3 md:h-1/3 w-1/2 h-1/2">
        <Image src={NhostLogo} alt="Nhost Logo" layout="responsive" />
      </div>
    </section>
  );
};

export default Partners;
