import Image from "next/image";

import DottedPattern from "../../public/Hack-R-Play/DottedPattern.svg";
import Lines from "../../public/Hack-R-Play/Lines.svg";
import { FaTwitter } from "react-icons/fa";

const Judges = ({ judges }) => {
  return (
    <section
      id="judges"
      className="relative mt-16 bg-white bg-opacity-10 flex flex-col justify-center items-center py-24 px-6"
    >
      <div className="absolute md:-left-16 md:top-6 -left-20 top-3">
        <Image
          src={DottedPattern}
          alt="Dotted Pattern"
          width={155}
          height={155}
        />
      </div>
      <div className="md:block hidden absolute left-36 -top-16 ">
        <Image src={Lines} alt="Lines" width={800} height={800} />
      </div>

      <h1 className="font-primary text-white text-5xl tracking-wider relative before:content[''] before:absolute before:w-1/4 before:h-1 before:-bottom-2 before:border-b-[3px] before:rounded-sm before:left-28 before:border-[#32F9E5]">
        Judges & Mentors
      </h1>
      <div className="inline-flex md:flex-row flex-col justify-center items-start md:mt-14 mt-6 py-3 z-10 mx-auto">
        {judges.map((judge, index) => (
          <div
            key={index}
            className="md:mr-12 md:last:mr-0 md:mt-0 mt-4 flex mb-8 flex-col justify-center items-start font-body max-w-xs"
          >
            {judge.twitter ? (
              <div className="w-48 h-48 bg-gray-600 rounded-md rounded-tl-[4rem]">
                <Image
                  alt={judge.name}
                  src={`https://unavatar.io/twitter/${judge.twitter}`}
                  layout="responsive"
                  width={`100%`}
                  height={`100%`}
                  style={{
                    borderRadius: "0.375rem",
                    borderTopLeftRadius: "4rem",
                  }}
                />
              </div>
            ) : null}
            <span className="text-white mt-2">{judge.name}</span>
            <span className="text-gray-400 w-48 text-sm">{judge.title}</span>
            <a
              className="mt-3 inline-flex justify-center items-center font-body text-[#00F2FE] hover:underline  transition-all duration-150"
              href={`https://twitter.com/${judge.twitter}`}
              rel="noreferrer"
              target="_blank"
            >
              <FaTwitter className="mr-1" />
              {judge.twitter}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Judges;
