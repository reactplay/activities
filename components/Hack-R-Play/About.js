import Image from "next/image";

import ReactPlayDotted from "../../public/Hack-R-Play/ReactPlayLogoDotted.svg";
import Flower from "../../public/Hack-R-Play/Flower.svg";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const About = () => {
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
            Developers are lifetime hackers!
            <br /> <br />
            <strong>#2PlaysAMonth</strong>  is an initiative from the RaectPlay community to help you learn, build, and simultaneously contribute to open source throughout the month of February.

          </p>
          <p className="mt-4 font-body text-gray-300">Would you be up for it? Here are a few things to keep in mind before you get started:</p>
          <ul className="mt-6 font-body text-gray-300">
            <li className="list-disc mt-1 ml-6">
              You have to complete two plays(React Projects) in ReactPlay between February 1st to February 28th 2023. By complete, we mean the play Pull Requests must be merged by the community reviewers.
            </li>
            <li className="list-disc mt-1 ml-6">
              You must follow the <Link className="text-[#00F2FE] hover:underline" href="https://github.com/reactplay/react-play/blob/main/CREATE-PLAY.md" target="_blank" rel="noreferrer">Create a Play</Link> steps to create the play.

            </li>
            <li className="list-disc mt-1 ml-6">
              Your play must have at least `#2plays1month` tag added to it while creating.
            </li>
            <li className="list-disc mt-1 ml-6">
              You can build any play of your choice. If you are looking for ideas, <Link className="text-[#00F2FE] hover:underline" href="https://reactplay.io/ideas" target="_blank" rel="noreferrer"> here are some you can get inspired by</Link>.
            </li>
            <li className="list-disc mt-1 ml-6">
              You must share a weekly Tweet and/or LinkedIn Post about your journey with the hashtag `#2plays1month` and tag ReactPlay's handle(@ReactPlayIO)
            </li>
            <li className="list-disc mt-1 ml-6">
              You must <Link className="text-[#00F2FE] hover:underline" href="https://github.com/reactplay/react-play/issues/new/choose" target="_blank" rel="noreferrer">create an issue</Link> on the ReactPlay repository for each pull request.
            </li>
            <li className="list-disc mt-1 ml-6">
              Please join the [ReactPlay discord server](https://discord.gg/UfYj4MvW9A) to get any help while you are building.
            </li>
          </ul>
          <a
            className=" mt-4 inline-flex justify-center items-center font-body text-[#00F2FE] text-lg hover:underline transition-all duration-150"
            href="https://blog.reactplay.io/announcing-hack-r-play-hackathon-from-react-play"
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
            Create 2 Plays using React
          </p>
        </div>
        <div className="w-fit h-fit border-2 border-white rounded-tr-[6.5rem] flex justify-center items-center md:py-14 md:px-12 py-7 px-9 md:ml-36 md:-mt-10 ml-20 -mt-3">
          <p className=" text-white font-primary md:text-3xl text-2xl  mx-auto max-w-[8.3rem] max-h-32">
            Share your journey publicly
          </p>
        </div>
        <div className="w-fit h-fit border-2 border-[#00F2FE] rounded-br-[6.5rem] flex justify-center items-center md:py-14 md:px-12 py-7 px-9 md:ml-80 md:-mt-10 -mt-3">
          <p className=" text-[#00F2FE] font-primary md:text-3xl text-2xl mx-auto max-w-[8rem] max-h-32">
            Get the plays reviewed and merged
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
