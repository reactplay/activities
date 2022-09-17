import Image from "next/image";

import PartnersPolygon from "../../public/Hack-R-Play/PartnersPolygon.svg";
import NhostLogo from "../../public/Hack-R-Play/NhostLogo.svg";

const Partners = () => {
  return (
    <section
      id="sponsors"
      className="relative flex flex-col justify-center items-center py-20 px-16"
    >
      <div className="absolute md:right-1 md:top-0 w-44 h-44">
        <Image
          src={PartnersPolygon}
          alt="Partners Polygon"
          layout="responsive"
        />
      </div>

      <h1 className="font-primary text-white text-5xl tracking-wider relative before:content[''] before:absolute before:w-1/4 before:h-1 before:-bottom-2 before:border-b-[3px] before:rounded-sm before:left-24 before:border-[#32F9E5]">
        Our Sponsors
      </h1>
      <div className="mx-auto mt-5 py-10 w-1/3 h-1/3">
        <Image src={NhostLogo} alt="Nhost Logo" layout="responsive" />
      </div>
    </section>
  );
};

export default Partners;
