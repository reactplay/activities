import Image from "next/image";

import ReactPlayDotted from "../../public/Hack-R-Play/ReactPlayLogoDotted.svg";
import Flower from "../../public/Hack-R-Play/Flower.svg";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col pt-14 md:px-8 px-4 md:justify-center md:items-center overflow-clip justify-start items-center"
    >
      <div className="flex md:flex-row md:col-span-4 flex-col md:mx-auto md:px-28">
        <div className="md:block hidden mr-14 -mt-4 w-72 h-72">
          <Image
            src={ReactPlayDotted}
            alt="React Play Dotted"
            layout="responsive"
          />
        </div>
        <div className="md:max-w-sm">
          <h2 className="font-primary text-5xl uppercase text-white tracking-wide md:text-left text-center">
            <span className="text-[#00F2FE]">About</span> this event
          </h2>
          <p className="mt-4 font-body text-gray-300">
            Developers are lifetime hackers!
            <br /> <br />
            <strong>Hack-R-Play</strong> is an initiative from the ReactPlay
            platform to help you hack, build, learn, and simultaneously
            contribute open source through #hacktoberfest.
          </p>
          <ul className="mt-2 font-body text-gray-300">
            All for it? Here are some rules you need to keep in mind:
            <li className="list-disc mt-1 ml-10">
              The app you build must use React/React-based library or framework
              and Nhost.
            </li>
            <li className="list-disc mt-1 ml-10">
              It must be an Open Source app with source code on GitHub.
            </li>
            <li className="list-disc mt-1 ml-10">
              You must deploy the app publicly.
            </li>
            <li className="list-disc mt-1 ml-10">
              You must write an article about your journey of building it and
              publish it on the ReactPlay blog.
            </li>
          </ul>
        </div>
      </div>
      <div className="md:-mt-10 mt-8 md:-ml-36">
        <div className="w-fit h-fit border-2 border-[#68FDC6] rounded-tl-[6.5rem] flex justify-center items-center md:py-12 md:px-12 pt-12 pb-7 px-6 md:-ml-10">
          <p className=" text-[#68FDC6] font-primary md:text-3xl text-2xl mx-auto max-w-[8rem] max-h-32">
            Build an App using React and Nhost
          </p>
        </div>
        <div className="w-fit h-fit border-2 border-white md:rounded-tr-[6.5rem] flex justify-center items-center md:py-14 md:px-12 py-7 px-6 md:ml-36 md:-mt-10">
          <p className=" text-white font-primary md:text-3xl text-2xl  mx-auto max-w-[8rem] max-h-32">
            Write an article on ReactPlay Blog about it
          </p>
        </div>
        <div className="w-fit h-fit border-2 border-[#00F2FE] rounded-br-[6.5rem] flex justify-center items-center md:py-14 md:px-12 py-7 px-6 md:ml-80 md:-mt-10">
          <p className=" text-[#00F2FE] font-primary md:text-3xl text-2xl mx-auto max-w-[8rem] max-h-32">
            Submit the links to code, app, and article
          </p>
        </div>
      </div>
      <div className="absolute md:bottom-11 md:-left-48 -bottom-28 -right-32 md:w-1/3 md:h-1/3 w-3/4 h-3/4">
        <Image src={Flower} alt="About Flower" layout="responsive" />
      </div>
    </section>
  );
};

export default About;
