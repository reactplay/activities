import Image from "next/image";

import ReactPlayDotted from "../../public/common/ReactPlayLogoDotted.svg";
import Flower from "../../public/common/Flower.svg";
import { FiExternalLink } from "react-icons/fi";

const About = ({ about = aboutSectionDetails }) => {
  return (
    <section
      id="about"
      className="relative flex flex-col pt-14 md:px-8 px-5 md:justify-center md:items-center overflow-clip justify-start items-center"
    >
      <div className="flex md:flex-row md:mx-auto">
        <div className="md:mr-14 md:-ml-0 -ml-9 -mt-4 md:w-72 md:h-72 w-40 h-40">
          <Image
            src={ReactPlayDotted}
            alt="React Play Dotted"
            layout="responsive"
          />
        </div>
        <div className="relative md:max-w-sm mb-12">
          <h2 className="font-primary text-5xl uppercase text-white tracking-wide">
            <span className="text-[#00F2FE]">About</span> this event
          </h2>
          <p className="mt-4 font-body text-gray-300">
            {about.title}
            <br /> <br />
            <strong>{about.programme}</strong> {about.extract}
          </p>
          <p className="mt-4 font-body text-gray-300">{about.rulesTitle}</p>
          <ul className="mt-6 font-body text-gray-300">
            {
              about.rules.map((rule, index) => {
                return <li className="list-disc mt-1 ml-6" key={about.programme + "rules" + index}>
                  {/* {`${rule}`} */}
                  <div dangerouslySetInnerHTML={{ __html: rule }} />
                </li>
              })
            }
          </ul>
          <a
            className=" mt-4 inline-flex justify-center items-center font-body text-[#00F2FE] text-lg hover:underline transition-all duration-150"
            href={about.rulesLink}
            rel="noreferrer"
            target="_blank"
          >
            Read More <FiExternalLink className="ml-2" />
          </a>
        </div>
      </div>

      <div className="md:-mt-32 mt-8">
        <div className="w-fit h-fit border-2 border-[#68FDC6] rounded-tl-[6.5rem] flex justify-center items-center md:py-12 md:px-12 pt-12 pb-7 px-9 md:-ml-10">
          <p className=" text-[#68FDC6] font-primary md:text-3xl text-2xl mx-auto max-w-[8rem] max-h-32">
            {about.steps[0]}
          </p>
        </div>
        <div className="w-fit h-fit border-2 border-white rounded-tr-[6.5rem] flex justify-center items-center md:py-14 md:px-12 py-7 px-9 md:ml-36 md:-mt-10 ml-20 -mt-3">
          <p className=" text-white font-primary md:text-3xl text-2xl  mx-auto max-w-[8.3rem] max-h-32">
            {about.steps[1]}
          </p>
        </div>
        <div className="w-fit h-fit border-2 border-[#00F2FE] rounded-br-[6.5rem] flex justify-center items-center md:py-14 md:px-12 py-7 px-9 md:ml-80 md:-mt-10 -mt-3">
          <p className=" text-[#00F2FE] font-primary md:text-3xl text-2xl mx-auto max-w-[8rem] max-h-32">
            {about.steps[2]}
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

const aboutSectionDetails = {
  programme: "Hack-R-Play",
  title: "Developers are lifetime hackers! 1",
  extract: "is an initiative from the ReactPlay  platform to help you hack, build, learn, and simultaneously  contribute open source through #hacktoberfest.",
  rulesTitle: "All for it? Here are some rules you need to keep in mind:",
  rules: [
    "It must be built in React Ecosystem. (eg - ReactJS, NextJS, RemixJS etc)",
    "The app must use one or more service of <a className='text - [#00F2FE] hover: underline' href='https://nhost.io' target='_blank' rel='noreferrer'>Nhost backend</a>.",
    "Project source code must be open on github.",
    "You must deploy the app publicly.",
    "You must write an article about your journey of building it and publish it on the ReactPlay blog."
  ],
  rulesLink: "https://blog.reactplay.io/announcing-hack-r-play-hackathon-from-react-play",
  steps: [
    "Build an App using React and Nhost",
    "Write an article on ReactPlay Blog about it",
    "Submit the links to code, app, and article",
  ]

}