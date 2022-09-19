import React from "react";
import { SecondaryButton } from "../Buttons";
import Image from "next/image";
import CTAImage from "../../public/Hack-R-Play/CTAImage.svg";

const CTA = ({ title, description, image }) => {
  return (
    <section
      id="cta"
      className="relative flex flex-col -mt-14 py-16 md:px-28 px-10 justify-center items-center overflow-clip bg-[#00F2FE]"
    >
      <div className="inline-flex md:flex-row flex-col justify-center items-center mx-auto max-w-4xl md:px-14 px-6">
        <div className="w-full h-full">
          <Image
            src={image ? image : CTAImage}
            alt="CTA Image"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col justify-center items-start md:ml-24 md:mt-0 mt-7">
          <h1 className="font-primary text-[#010326] text-4xl tracking-wider">
            {title}
          </h1>
          <p className="md:mt-7 mt-4 font-body text-gray-600">{description}</p>
          <div className="mt-5">
            <SecondaryButton>Register Now</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
