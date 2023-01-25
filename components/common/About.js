import Image from "next/image";

import ReactPlayDotted from "../../public/common/ReactPlayLogoDotted.svg";
import Flower from "../../public/common/Flower.svg";
import { FiExternalLink } from "react-icons/fi";
import { ThemeConfig } from "@/services/consts/theme";
<<<<<<< 2-plays-a-month-link
import { LinkLabel } from "../LinkLabel";
=======
>>>>>>> main

const About = ({ metainfo }) => {
  return (
    <>
      {metainfo.name ? (
        <section
          id="about"
          className="relative flex flex-col pt-14 md:px-8 px-5 md:justify-center md:items-center overflow-clip justify-start items-center"
        >
          <div className="flex md:flex-row md:mx-auto">
            <div className="md:mr-14 md:-ml-0 -ml-9 -mt-4 md:w-72 md:h-72 w-40 h-40">
              <Image
                src={require(`/public/${metainfo.name}/ReactPlayLogoDotted.svg`)}
                alt="React Play Dotted"
                layout="responsive"
              />
            </div>
            <div className="relative md:max-w-sm mb-12">
              <h2 className="font-primary text-5xl uppercase text-white tracking-wide">
                <span className={`text-brand-highlight`}>About</span> this event
              </h2>
              <p className="mt-4 font-body text-gray-300">
                {metainfo.about.texts[0]}
                <br /> <br />
              </p>
              <p className="mt-4 font-body text-gray-300">
                {metainfo.about.texts[1]}
              </p>
              <ul className="mt-6 font-body text-gray-300">
                {metainfo.about.bullets.map((b, b_i) => {
                  return (
                    <li className="list-disc mt-1 ml-6" key={b_i}>
                      <LinkLabel
                        value={b}
                        lclass="font-body text-[#00F2FE] hover:underline transition-all duration-150"
                      />
                    </li>
                  );
                })}
              </ul>
              <p className="mt-4 font-body text-gray-300">
                <LinkLabel
                  value={metainfo.about.footer}
                  lclass="font-body  text-[#00F2FE] hover:underline transition-all duration-150"
                />
              </p>
              {/* <a
                className=" mt-4 inline-flex justify-center items-center font-body text-[#00F2FE] text-lg hover:underline transition-all duration-150"
                href="https://blog.reactplay.io/announcing-hack-r-play-hackathon-from-react-play"
                rel="noreferrer"
                target="_blank"
              >
                Read More <FiExternalLink className="ml-2" />
              </a> */}
            </div>
          </div>
          <div className="md:-mt-32 mt-8">
            <div
              className={`w-fit h-fit border-2 border-brand-primary-highlight
              rounded-tl-[6.5rem] flex justify-center items-center md:py-12 md:px-12 pt-12 pb-7 px-9 md:-ml-10`}
            >
              <p
                className={`text-brand-primary-highlight font-primary md:text-3xl text-2xl mx-auto max-w-[8rem] max-h-32`}
              >
                {metainfo.about.highlights[0]}
              </p>
            </div>
            <div
              className={`w-fit h-fit border-2 border-brand-white rounded-tr-[6.5rem] flex justify-center items-center md:py-14 md:px-12 py-7 px-9 md:ml-36 md:-mt-10 ml-20 -mt-3`}
            >
              <p
                className={`text-brand-white font-primary md:text-3xl text-2xl  mx-auto max-w-[8.3rem] max-h-32`}
              >
                {metainfo.about.highlights[1]}
              </p>
            </div>
            <div
              className={`w-fit h-fit border-2 
                border-brand-highlight
              rounded-br-[6.5rem] flex justify-center items-center md:py-14 md:px-12 py-7 px-9 md:ml-80 md:-mt-10 -mt-3`}
            >
              <p
                className={`text-brand-highlight font-primary md:text-3xl text-2xl mx-auto max-w-[8rem] max-h-32`}
              >
                {metainfo.about.highlights[2]}
              </p>
            </div>
          </div>
          <div className="absolute md:bottom-11 md:-left-48 -bottom-28 -right-32 md:w-1/3 md:h-1/3 w-3/4 h-3/4">
            <Image src={Flower} alt="About Flower" layout="responsive" />
          </div>
        </section>
      ) : null}
    </>
  );
};

export default About;
