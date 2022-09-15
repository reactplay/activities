import Image from "next/image";

import DottedPattern from "../../public/Judges/DottedPattern.svg";
import Lines from "../../public/Judges/Lines.svg";

const Judges = () => {
  return (
    <div className="relative mt-16 bg-white bg-opacity-10 flex flex-col justify-center items-center py-24 px-16">
      <div className="absolute -left-16 top-6">
        <Image
          src={DottedPattern}
          alt="Dotted Pattern"
          width={155}
          height={155}
        />
      </div>
      <div className="absolute left-36 -top-16 ">
        <Image src={Lines} alt="Lines" width={800} height={800} />
      </div>

      <h1 className="font-primary text-white text-5xl tracking-wider z-10">
        Judges & Mentors
      </h1>
      <div className="inline-flex justify-center items-center mt-14 p-3 z-10">
        <div className="mr-6 p-2 flex flex-col justify-center items-start font-body">
          <div className="w-48 h-48 bg-gray-600 rounded-md rounded-tl-[4rem]"></div>
          <span className="text-white">Ipsum dolor sit</span>
          <span className="text-gray-400">Ipsum dolor</span>
        </div>
        <div className="mr-6 p-2 flex flex-col justify-center items-start font-body">
          <div className="w-48 h-48 bg-gray-600 rounded-md rounded-tl-[4rem]"></div>
          <span className="text-white">Ipsum dolor sit</span>
          <span className="text-gray-400">Ipsum dolor</span>
        </div>
        <div className="mr-6 p-2 flex flex-col justify-center items-start font-body">
          <div className="w-48 h-48 bg-gray-600 rounded-md rounded-tl-[4rem]"></div>
          <span className="text-white">Ipsum dolor sit</span>
          <span className="text-gray-400">Ipsum dolor</span>
        </div>
      </div>
    </div>
  );
};

export default Judges;
