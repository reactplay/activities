import Image from "next/image";

import GradientAndSmallTriangle from "../../public/GradientAndSmallTriangle.svg";

const ChallengesAndPrizes = () => {
  return (
    <div className="relative mt-16 bg-white bg-opacity-10 flex flex-col justify-center items-center py-24 px-16">
      <div className="absolute -left-5 -top-11">
        <Image
          src={GradientAndSmallTriangle}
          alt="Gradient AndSmall Triangle"
          width={280}
          height={280}
        />
      </div>

      <h1 className="font-primary text-white text-5xl tracking-wider">
        Challenges & Prizes
      </h1>
      <div className="inline-flex justify-center items-center mt-14 p-3">
        <div className="mr-4 flex flex-col justify-center items-center">
          <div className="w-16 h-16 rounded-full bg-gray-600"></div>
          <p className="font-body text-gray-300 text-center mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum
          </p>
        </div>
        <div className="mr-4 flex flex-col justify-center items-center p-3">
          <div className="w-16 h-16 rounded-full bg-gray-600"></div>
          <p className="font-body text-gray-300 text-center mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-3">
          <div className="w-16 h-16 rounded-full bg-gray-600"></div>
          <p className="font-body text-gray-300 text-center mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChallengesAndPrizes;
