import { PrimaryButton, SecondaryOutlinedButton } from "../Buttons";

const Hero = () => {
  return (
    <div className="flex py-4 px-8 justify-center items-center">
      <div className="flex flex-col justify-center items-center mx-auto pt-16 max-w-3xl">
        <h1 className="font-primary text-7xl tracking-wide text-white">
          H a c k<span className="text-cyan-400">-r-</span>p l a y
        </h1>
        <div className="inline-flex justify-center items-center border border-teal-400 text-teal-400 font-primary tracking-widest text-lg leading-none -mt-1">
          <span className="pt-2 pb-1 px-2">
            100% React Event In the Universe
          </span>
          <span className="bg-teal-400 text-[#051630] pt-2 pb-1 px-2">
            Sep 14 - 16, 2022
          </span>
        </div>
        <p className="text-center text-gray-300 font-body mt-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum
          est ultricies integer quis. Iaculis urna id volutpat lacus laoreet.
        </p>
        <div className="inline-flex justify-center items-center mt-8">
          <div className="mr-4">
            <PrimaryButton>Register</PrimaryButton>
          </div>
          <div>
            <SecondaryOutlinedButton>Become a sponsor</SecondaryOutlinedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
