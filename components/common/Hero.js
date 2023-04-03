import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { BiRightArrowAlt } from "react-icons/bi";
import { GiPartyPopper } from "react-icons/gi";

import {
  PrimaryButton,
  SecondaryLink,
  SecondaryOutlinedButton,
} from "../Buttons";

import Flower from "../../public/common/Flower.svg";
import HeroLines from "../../public/common/HeroLines.svg";
import RadialGradient from "../../public/common/RadialGradient.svg";
import ReactPlayLogo from "../../public/ReactPlayLogo.svg";

const Hero = ({ metainfo, theHustleHomePage }) => {
  const router = useRouter();

  const redirectToRegistration = () => {
    router.push("registration");
  };

  const redirectToSubmissions = () => {
    router.push(metainfo.submissionurl);
  };

  return (
    <>
      {!theHustleHomePage ? (
        // this portion executes when the Hero component is referenced from the twoplaysamonth component
        metainfo.name ? (
          <section className="relative flex py-6 md:px-8 px-4 justify-center items-center overflow-clip">
            <div className="absolute -left-12 md:top-36 top-80 md:w-40 md:h-40 w-24 h-24 z-0">
              <Image
                src={require(`/public/${metainfo.name}/GradientFlower.svg`)}
                alt="Hero Gradient Flower"
                layout="responsive"
              />
            </div>
            <div className="md:block hidden absolute md:right-36 md:top-96 top-44 md:w-24 md:h-24 w-12 h-12">
              <Image src={Flower} alt="Small Flower" layout="responsive" />
            </div>
            <div className="md:block hidden absolute md:-right-14 md:top-96 md:w-44 md:h-44">
              <Image
                src={require(`public/${metainfo.name}/GradientAndSmallTriangle.svg`)}
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
                <Image
                  src={ReactPlayLogo}
                  alt="ReactPlay Logo"
                  layout="fixed"
                />
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
                    <PrimaryButton
                      handleOnClick={() => router.push("#winners")}
                    >
                      Winners
                      <GiPartyPopper className="ml-2 -mt-1" size={25} />
                    </PrimaryButton>
                  ) : null}
                  {metainfo.result_links ? (
                    <div className="flex">
                      {metainfo.result_links.map((link, link_i) => {
                        return (
                          <div className="p-4">
                            <SecondaryLink
                              link={link.link}
                              target={link.target}
                            >
                              {link.name}
                            </SecondaryLink>
                          </div>
                        );
                      })}
                    </div>
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
              <div className="z-0 md:w-4/5 md:h-4/5 w-full h-full-z-10">
                <Image
                  src={require(`/public/${metainfo.name}/HeroCoders.svg`)}
                  alt="Hero Coders"
                  layout="responsive"
                />
              </div>
            </div>
          </section>
        ) : null
      ) : // this portion executes when the Hero component is referenced from the Banner component of 'pages/index.js' component
      metainfo.name ? (
        <section className="relative bg-brand-bg flex py-6 md:px-8 px-4 justify-center items-center overflow-clip">
          <div className="absolute -left-12 md:top-36 top-80 md:w-40 md:h-40 w-24 h-24 z-0">
            <Image
              src={require(`/public/${metainfo.name}/GradientFlower.svg`)}
              alt="Hero Gradient Flower"
              layout="responsive"
            />
          </div>
          <div className="md:block hidden absolute md:right-36 md:top-96 top-44 md:w-24 md:h-24 w-12 h-12">
            <Image src={Flower} alt="Small Flower" layout="responsive" />
          </div>
          <div className="md:block hidden absolute md:-right-14 md:top-96 md:w-44 md:h-44">
            <Image
              src={require(`public/${metainfo.name}/GradientAndSmallTriangle.svg`)}
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

            <div className="z-0 md:w-4/5 md:h-4/5 w-full h-full-z-10">
              <Image
                src={require(`/public/${metainfo.name}/HeroCoders.svg`)}
                alt="Hero Coders"
                layout="responsive"
              />
              {/* TODO: Insert button component */}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Hero;
