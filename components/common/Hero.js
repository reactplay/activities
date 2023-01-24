import Image from "next/image";

import { PrimaryButton, SecondaryOutlinedButton } from "../Buttons";
import { FiCheckCircle } from "react-icons/fi";
import { BiRightArrowAlt } from "react-icons/bi";

import GradientFlower from "../../public/common/GradientFlower.svg";
import Flower from "../../public/common/Flower.svg";
import GradientAndSmallTriangle from "../../public/common/GradientAndSmallTriangle.svg";
import HeroCoders from "../../public/Hack-R-Play/HeroCoders.svg";
import HeroLines from "../../public/common/HeroLines.svg";
import RadialGradient from "../../public/common/RadialGradient.svg";
import ReactPlayLogo from "../../public/ReactPlayLogo.svg";
import { GiPartyPopper } from "react-icons/gi";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Hero = ({ metainfo }) => {
  const router = useRouter();

  useEffect(() => {
    console.error(metainfo);
  }, [metainfo]);
  const redirectToRegistration = () => {
    router.push("registration");
  };

  const redirectToSubmissions = () => {
    router.push("ideas");
  };

  return (
    <>
      {metainfo.name ? (
        <section className="relative flex py-6 md:px-8 px-4 justify-center items-center overflow-clip">
          <div className="absolute -left-12 md:top-36 top-80 md:w-40 md:h-40 w-24 h-24 z-0">
            <Image
              src={GradientFlower}
              alt="Hero Gradient Flower"
              layout="responsive"
            />
          </div>
          <div className="md:block hidden absolute md:right-36 md:top-96 top-44 md:w-24 md:h-24 w-12 h-12">
            <Image src={Flower} alt="Small Flower" layout="responsive" />
          </div>
          <div className="md:block hidden absolute md:-right-14 md:top-96 md:w-44 md:h-44">
            <Image
              src={GradientAndSmallTriangle}
              alt="Gradient AndSmall Triangle"
              layout="responsive"
            />
          </div>
          <div className="md:block hidden absolute md:left-44 md:-top-5 md:w-4/6 md:h-4/6">
            <Image src={HeroLines} alt="Hero Lines" layout="responsive" />
          </div>
          <div className="absolute z-0 sm:top-32 w-[50rem] h-[50rem]">
            <Image
              src={RadialGradient}
              alt="Radial Gradient"
              layout="responsive"
            />
          </div>

          <div className="flex flex-col justify-center items-center mx-auto md:pt-16 pt-8 md:max-w-3xl z-10">
            <div className="scale-110">
              <Image src={ReactPlayLogo} alt="ReactPlay Logo" layout="fixed" />
            </div>

            <div className="-mt-3 block md:w-1/2 md:h-1/2 w-11/12 h-11/12">
              <Image
                src={require(`/public/${metainfo.name}/BannerLogo.png`)}
                alt="Banner Logo"
                layout="responsive"
              />
            </div>
            <p className="text-center text-gray-300 font-body mt-7">
              {metainfo.subtitle}
            </p>
            <div className="inline-flex md:flex-row flex-col justify-center items-center mt-8 z-10">
              <div className="md:mr-4 mr-0">
                {metainfo.completed ? (
                  <PrimaryButton handleOnClick={() => router.push("#winners")}>
                    Winners
                    <GiPartyPopper className="ml-2 -mt-1" size={25} />
                  </PrimaryButton>
                ) : null}
              </div>

              {metainfo.started ? (
                <div className="md:mt-0 mt-4">
                  <SecondaryOutlinedButton
                    handleOnClick={() => redirectToSubmissions()}
                  >
                    View Submissions
                    <BiRightArrowAlt
                      className="ml-2 my-auto text-[#00F2FE]"
                      size={25}
                    />
                  </SecondaryOutlinedButton>
                </div>
              ) : null}
            </div>
            <div className="md:-mt-12 z-0 md:w-4/5 md:h-4/5 w-full h-full-z-10">
              <Image
                src={require(`/public/${metainfo.name}/HeroCoders.svg`)}
                alt="Hero Coders"
                layout="responsive"
              />
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Hero;
