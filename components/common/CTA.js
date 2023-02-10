import React from "react";
import { SecondaryButton } from "../Buttons";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiPlus } from "react-icons/fi";

const CTA = ({ image, metainfo }) => {
  const router = useRouter();
  const redirectToRegistration = () => {
    router.push("registration");
  };

  return (
    <section
      id="cta"
      className="relative bg-brand-highlight flex flex-col -mt-14 py-24 md:px-28 px-5 justify-center items-center overflow-clip "
    >
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex md:flex-row flex-col justify-center items-center mx-auto gap-16">
          <div className="md:w-5/12 w-10/12">
            <Image
              src={
                image ? image : require(`/public/${metainfo.name}/CTAImage.svg`)
              }
              alt="CTA Image"
              layout="responsive"
            />
          </div>
          <div className="md:w-7/12 w-full flex flex-col items-start text-left">
            <h1 className="font-primary text-[#010326] text-4xl md:text-left text-center md:mx-0 mx-auto">
              {metainfo.cta.title}
            </h1>
            <p className="md:mt-7 mt-4 font-body text-gray-600 text-center md:text-left">
              {metainfo.cta.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
