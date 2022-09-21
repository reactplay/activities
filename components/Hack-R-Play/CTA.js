import React from "react";
import { SecondaryButton } from "../Buttons";
import Image from "next/image";
import CTAImage from "../../public/Hack-R-Play/CTAImage.svg";
import { useRouter } from "next/router";
import { FiPlus } from "react-icons/fi";

const CTA = ({ title, description, image }) => {
  const router = useRouter();
  const redirectToRegistration = () => {
    router.push("/registration");
  };

  return (
    <section
      id="cta"
      className="relative flex flex-col -mt-14 py-16 md:px-28 px-10 justify-center items-center overflow-clip bg-[#00F2FE]"
    >
      <div className="inline-flex md:flex-row flex-col justify-center items-center mx-auto max-w-4xl md:px-11 px-6">
        <div className="w-full h-full md:scale-150 scale-110">
          <Image
            src={image ? image : CTAImage}
            alt="CTA Image"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col justify-center items-start md:ml-36 md:mt-0 mt-11 md:text-left text-center">
          <h1 className="font-primary text-[#010326] text-4xl tracking-wider max-w-xs">
            {title}
          </h1>
          <p className="md:mt-7 mt-4 font-body text-gray-600">{description}</p>
          <div className="mt-7 md:mx-0 mx-auto">
            <SecondaryButton handleOnClick={() => redirectToRegistration()}>
              Register Now
              <FiPlus
                className="ml-2 my-auto text-[#00F2FE] group-hover:text-[#010326] transition-all duration-300"
                size={25}
              />
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
