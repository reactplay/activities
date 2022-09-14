import Image from "next/image";

import { PrimaryButton, SecondaryOutlinedButton } from "../Buttons";
import { FiCheckCircle } from "react-icons/fi";
import { BiRightArrowAlt } from "react-icons/bi";

import GradientFlower from "../../public/Home/GradientFlower.svg";
import DottedAndFilledTriangle from "../../public/Home/DottedAndFilledTriangle.svg";
import Flower from "../../public/Flower.svg";
import GradientAndSmallTriangle from "../../public/Home/GradientAndSmallTriangle.svg";
import HeroCoders from "../../public/Home/HeroCoders.svg";
import HeroLines from "../../public/Home/HeroLines.svg";
import RadialGradient from "../../public/Home/RadialGradient.svg";

const Hero = () => {
  return (
    <div className="relative flex py-4 px-8 justify-center items-center overflow-clip">
      <div className="absolute -left-12 top-36">
        <Image
          src={GradientFlower}
          alt="Hero Gradient Flower"
          width={155}
          height={155}
        />
      </div>
      <div className="absolute right-36 top-96">
        <Image src={Flower} alt="Small Flower" width={120} height={120} />
      </div>
      <div className="absolute -right-14 top-96">
        <Image
          src={GradientAndSmallTriangle}
          alt="Gradient AndSmall Triangle"
          width={200}
          height={200}
        />
      </div>
      <div className="absolute left-44 -top-5">
        <Image src={HeroLines} alt="Hero Lines" width={750} height={750} />
      </div>
      <div className="absolute left-56 -top-16 z-0">
        <Image
          src={RadialGradient}
          alt="Radial Gradient"
          width={750}
          height={750}
        />
      </div>

      <div className="flex flex-col justify-center items-center mx-auto pt-16 max-w-3xl">
        <h1 className="font-primary text-7xl tracking-wide text-white ">
          H a c k<span className="text-[#00F2FE]">-r-</span>p l a y
        </h1>
        <div className="inline-flex justify-center items-center border border-[#68FDC6] text-[#68FDC6] font-primary tracking-widest text-lg leading-none -mt-1">
          <span className="pt-2 pb-1 px-2">
            100% React Event In the Universe
          </span>
          <span className="bg-[#68FDC6] text-[#051630] pt-2 pb-1 px-2">
            Sep 14 - 16, 2022
          </span>
        </div>
        <p className="text-center text-gray-300 font-body mt-7 z-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum
          est ultricies integer quis. Iaculis urna id volutpat lacus laoreet.
        </p>
        <div className="inline-flex justify-center items-center mt-8 z-10">
          <div className="mr-4">
            <PrimaryButton>
              Register <FiCheckCircle className="ml-2 my-auto" size={20} />
            </PrimaryButton>
          </div>
          <div>
            <SecondaryOutlinedButton>
              View Submissions
              <BiRightArrowAlt
                className="ml-2 my-auto text-[#00F2FE]"
                size={25}
              />
            </SecondaryOutlinedButton>
          </div>
        </div>
        <div className="-mt-48 z-0">
          <Image src={HeroCoders} alt="Hero Coders" width={750} height={750} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
