import React from "react";
import { SecondaryButton } from "../Buttons";
import Image from "next/image";
import CTAImage from "../../public/CTA/CTAImage.svg";

const CTA = ({ title, description, image }) => {
  return (
    <div className="relative flex flex-col -mt-14 py-16 px-28 justify-center items-center overflow-clip bg-[#00F2FE]">
      <div className="inline-flex justify-center items-center mx-auto max-w-4xl px-14">
        <div>
          <Image
            src={image ? image : CTAImage}
            alt="CTA Image"
            layout="fixed"
          />
        </div>
        <div className="flex flex-col justify-center items-start ml-24">
          <h1 className="font-primary text-[#010326] text-4xl tracking-wider">
            {title}
          </h1>
          <p className="mt-7 font-body text-gray-600">{description}</p>
          <div className="mt-5">
            <SecondaryButton>Register Now</SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
