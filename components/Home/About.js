import Image from "next/image";

import ReactPlayDotted from "../../public/About/ReactPlayLogoDotted.svg";
import Flower from "../../public/Flower.svg";

const About = () => {
  return (
    <div className="relative flex flex-col -mt-14 px-8 justify-center items-center overflow-clip">
      <div className="flex flex-row col-span-4 mx-auto px-28">
        <div className="mr-14 -mt-4">
          <Image
            src={ReactPlayDotted}
            alt="React Play Dotted"
            width={300}
            height={300}
          />
        </div>
        <div className="max-w-sm">
          <h2 className="font-primary text-5xl uppercase text-white tracking-wide">
            <span className="text-[#00F2FE]">About</span> this event
          </h2>
          <p className="mt-4 font-body text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum
            est ultricies integer quis. Iaculis urna id volutpat lacus laoreet.
            Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci
            dapibus ultrices in. Egestas diam in arcu cursus euismod. Dictum
            fusce ut placerat orci nulla. Tincidunt ornare massa eget egestas
            purus viverra accumsan in nisl. Tempor id eu nisl nunc mi
          </p>
        </div>
      </div>
      <div className="-mt-10 -ml-36">
        <div className="w-fit h-fit border-2 border-[#68FDC6] rounded-tl-[6.5rem] flex justify-center items-center p-14 -ml-10">
          <p className=" text-[#68FDC6] font-primary text-4xl mx-auto max-w-[8rem] max-h-32">
            Ipsum dolor sit amet, conctetur
          </p>
        </div>
        <div className="w-fit h-fit border-2 border-white rounded-tr-[6.5rem] flex justify-center items-center p-14 ml-36 -mt-7">
          <p className=" text-white font-primary text-4xl mx-auto max-w-[8rem] max-h-32">
            Ipsum dolor sit amet, conctetur
          </p>
        </div>
        <div className="w-fit h-fit border-2 border-[#00F2FE] rounded-br-[6.5rem] flex justify-center items-center p-14 ml-80 -mt-7">
          <p className=" text-[#00F2FE] font-primary text-4xl mx-auto max-w-[8rem] max-h-32">
            Ipsum dolor sit amet, conctetur
          </p>
        </div>
      </div>
      <div className="absolute bottom-5 -left-48">
        <Image src={Flower} alt="About Flower" width={400} height={400} />
      </div>
    </div>
  );
};

export default About;
