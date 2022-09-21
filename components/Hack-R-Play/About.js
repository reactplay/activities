import Image from "next/image";

import ReactPlayDotted from "../../public/Hack-R-Play/ReactPlayLogoDotted.svg";
import Flower from "../../public/Hack-R-Play/Flower.svg";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col pt-14 md:px-8 px-4 md:justify-center md:items-center overflow-clip justify-start items-center"
    >
      <div className="flex md:flex-row md:col-span-4 flex-col md:mx-auto md:px-28">
        <div className="md:block hidden mr-14 -mt-4 w-72 h-72">
          <Image
            src={ReactPlayDotted}
            alt="React Play Dotted"
            layout="responsive"
          />
        </div>
        <div className="md:max-w-sm">
          <h2 className="font-primary text-5xl uppercase text-white tracking-wide md:text-left text-center">
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
      <div className="md:-mt-7 mt-8">
        <div className="w-fit h-fit border-2 border-[#68FDC6] rounded-tl-[6.5rem] flex justify-center items-center md:py-12 md:px-12 pt-12 pb-7 px-6 md:-ml-10">
          <p className=" text-[#68FDC6] font-primary md:text-3xl text-2xl mx-auto max-w-[8rem] max-h-32">
            Ipsum dolor sit amet, conctetur
          </p>
        </div>
        <div className="w-fit h-fit border-2 border-white md:rounded-tr-[6.5rem] flex justify-center items-center md:py-14 md:px-12 py-7 px-6 md:ml-36 md:-mt-10">
          <p className=" text-white font-primary md:text-3xl text-2xl  mx-auto max-w-[8rem] max-h-32">
            Ipsum dolor sit amet, conctetur
          </p>
        </div>
        <div className="w-fit h-fit border-2 border-[#00F2FE] rounded-br-[6.5rem] flex justify-center items-center md:py-14 md:px-12 py-7 px-6 md:ml-80 md:-mt-10">
          <p className=" text-[#00F2FE] font-primary md:text-3xl text-2xl mx-auto max-w-[8rem] max-h-32">
            Ipsum dolor sit amet, conctetur
          </p>
        </div>
      </div>
      <div className="absolute md:bottom-11 md:-left-48 -bottom-28 -right-32 md:w-1/3 md:h-1/3 w-3/4 h-3/4">
        <Image src={Flower} alt="About Flower" layout="responsive" />
      </div>
    </section>
  );
};

export default About;
