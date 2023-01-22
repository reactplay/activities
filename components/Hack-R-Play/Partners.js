import Image from "next/image";

import PartnersPolygon from "../../public/Hack-R-Play/PartnersPolygon.svg";
import NhostLogo from "../../public/Hack-R-Play/NhostLogo.svg";
import Link from "next/link";

const Partners = () => {
  return (
    <section
      id="sponsors"
      className="relative flex flex-col justify-center items-center py-28 md:px-16 px-8"
    >
      <div className="absolute right-1 top-0 md:w-44 md:h-44 w-20 h-20 ">
        <Image
          src={PartnersPolygon}
          alt="Partners Polygon"
          layout="responsive"
        />
      </div>

      <h1 className="font-primary text-white text-5xl tracking-wider relative before:content[''] before:absolute before:w-1/4 before:h-1 before:-bottom-2 before:border-b-[3px] before:rounded-sm md:before:left-24 before:left-20 before:border-[#32F9E5]">
        Our Sponsors
      </h1>
      <div className="container max-w-screen-xl">
        <div className="mt-5 flex flex-col justify-center items-center py-10 w-fit">
          Coming Soon.
          {/* <div className="md:w-2/5 md:h-2/5 w-1/2 h-1/2">
            <a href="https://nhost.io" target="_blank" rel="noreferrer">
              <Image src={NhostLogo} alt="Nhost Logo" layout="responsive" />
            </a>
          </div>
          <p className="text-center text-gray-300 font-body mt-5">
            Nhost is the open source GraphQL backend (Firebase Alternative) and a
            development platform. Nhost is doing for the backend, what Netlify and
            Vercel are doing for the frontend. It make things easy to build and
            deploy this backend using our platform that takes care of
            configuration, security, and performance. Things just works and scale
            automatically so you can focus on your product and on your business.
          </p>
          <div className="text-[#00F2FE] hover:underline font-body mt-5 md:px-56">
            <a href="https://docs.nhost.io/" rel="noreferrer" target="_blank">
              Read Nhost Documentation
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Partners;
