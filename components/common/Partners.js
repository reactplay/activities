import Image from "next/image";

import PartnersPolygon from "../../public/common/PartnersPolygon.svg";
import Link from "next/link";
import { PrimaryButton } from "../Buttons";
import { useRouter } from "next/router";
import { SiGithubsponsors } from "react-icons/si";

const Partners = ({ partners }) => {
  const router = useRouter();
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
      {partners ? (
        <div className="container max-w-screen-xl">
          <div className="mt-5 flex flex-col justify-center items-center py-10 w-fit">
            <div className="md:w-2/5 md:h-2/5 w-1/2 h-1/2">
              <a href="https://nhost.io" target="_blank" rel="noreferrer">
                <Image
                  src={partners.partnerLogo}
                  alt="Nhost Logo"
                  layout="responsive"
                />
              </a>
            </div>
            <p className="text-center text-gray-300 font-body mt-5">
              {partners.partnerdescription}
            </p>
            <div className="text-[#00F2FE] hover:underline font-body mt-5 md:px-56">
              <a href={partners.partnerdocs} rel="noreferrer" target="_blank">
                Read {partners.partnerName} Documentation
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center space-y-6 p-6">
          <p className="text-center text-gray-300 font-body mt-5">
            Support ReactPlay to organize this event. Your sponsorship will help
            us make it better.
          </p>
          <div className="md:mr-4 mr-0">
            <PrimaryButton
              handleOnClick={() =>
                router.push("https://github.com/sponsors/reactplay")
              }
            >
              Sponsor Us
              <SiGithubsponsors className="ml-2 -mt-1" size={25} />
            </PrimaryButton>
          </div>
        </div>
      )}
    </section>
  );
};

export default Partners;
