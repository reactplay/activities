import { IoAddSharp, IoLogoRss } from "react-icons/io5";
import { MdManageSearch } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { BsTwitter, BsGithub } from "react-icons/bs";
import Image from "next/image";
import LogoLight from "../public/img-logo-light.svg";
import { HiArrowNarrowRight } from "react-icons/hi";

const ExtendedFooter = () => {
  return (
    <footer className="pt-12 pb-6 px-8 text-sm font-light text-zinc-500 border-t border-solid border-zinc-200">
      <div className=" flex flex-wrap  lg:grid w-[85%] mt-0 mx-auto mb-4 lg:grid-cols-[1fr_1.2fr_0.8fr] gap-16">
        {/* ReactPlay intro and social icons */}
        <div className="w-full">
          <h3>
            <Image alt="Logo of ReactPlay" src={LogoLight} />
          </h3>
          <p className="text-lg lg:text-2xl">
            An open-source project made with ❤️ by{" "}
            <a
              className="underline font-normal text-gray-800"
              href="https://tapasadhikary.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Tapas Adhikary
            </a>{" "}
            and friends.
          </p>
          <div className="mt-8">
            <p>
              <small className="text-xs">Connect with us</small>
            </p>
            <ul className="flex flex-wrap gap-4 mt-[0.6rem] mb-4">
              <li>
                <a
                  className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-300/70 hover:bg-cyan-400 focus:bg-cyan-400 group"
                  href="https://twitter.com/reactplayio"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Twitter page"
                >
                  <BsTwitter className="w-6 h-6 text-gray-500 group-hover:text-gray-800" />
                  <span className="sr-only">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-300/70 hover:bg-cyan-400 focus:bg-cyan-400 group"
                  href="https://github.com/reactplay"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="GitHub Page"
                >
                  <BsGithub className="w-6 h-6 text-gray-500 group-hover:text-gray-800" />
                  <span className="sr-only">Github</span>
                </a>
              </li>
              <li>
                <a
                  className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-300/70 hover:bg-cyan-400 focus:bg-cyan-400 group"
                  href="https://discord.gg/vrTxWUP8Am"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Discord Channel"
                >
                  <FaDiscord className="w-6 h-6 text-gray-500 group-hover:text-gray-800" />
                  <span className="sr-only">Discord</span>
                </a>
              </li>
              <li>
                <a
                  className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-300/70 hover:bg-cyan-400 focus:bg-cyan-400 group"
                  href="https://blog.reactplay.io/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Blog Page"
                >
                  <IoLogoRss className="w-6 h-6 text-gray-500 group-hover:text-gray-800" />
                  <span className="sr-only">BlogPost</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <p>
              <small className="text-xs">Email us</small>
            </p>{" "}
            <div>
              <p>
                <a
                  className="underline text-gray-800 font-normal"
                  href="mailto:contact@reactplay.io"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  contact@reactplay.io
                </a>
              </p>
            </div>
          </div>
          <p className="mt-8">
            <a href="https://www.netlify.com">
              {" "}
              <img
                alt="Deploys by Netlify"
                src="https://www.netlify.com/v3/img/components/netlify-light.svg"
              />{" "}
            </a>
          </p>
        </div>
        {/* About */}
        <div className="w-2/5 lg:w-full">
          <h3 className="mb-3 text-xl font-medium text-slate-900 lg:text-3xl lg:font-semibold">
            About
          </h3>
          <p className="mb-4 text-gray-600 lg:text-base">
            ReactPlay is an open-source platform that helps you learn, create
            and share ReactJS projects with the developer community.
          </p>
          <div className="flex flex-wrap gap-1">
            <a
              className="border-solid border-2 bg-cyan-400 font-semibold text-sm inline-flex items-center justify-center mr-2 gap-2 py-3 px-6 no-underline rounded-3xl w group border-transparent hover:bg-gray-100 text-slate-900 transition-all ease-in-out duration-100"
              href="https://github.com/reactplay/react-play/blob/main/CREATE-PLAY.md"
              rel="noopener noreferrer"
              target="_blank"
            >
              <IoAddSharp className="w-6 h-6 text-slate-900 group-hover:text-cyan-400" />
              <span>Create</span>
            </a>
            <a
              className="border-solid border-2 bg-slate-900/10 font-semibold text-sm inline-flex items-center justify-center mr-2 gap-2 py-3 px-6 no-underline rounded-3xl w group border-transparent hover:bg-gray-100 text-slate-900 transition-all ease-in-out duration-100"
              href="https://reactplay.io/plays"
              target="_blank"
            >
              <MdManageSearch className="w-6 h-6 text-slate-900 group-hover:text-cyan-400" />
              <span>Browse</span>
            </a>
          </div>
          <div className="mt-10">
            <p className="mb-4 text-gray-600 lg:text-base">
              Not sure how to get started? <br />
              We have a lot of ideas for you to get started.
            </p>
            <div className="mt-2">
              <a
                className="underline decoration-2 decoration-cyan-400 underline-offset-4"
                href="https://reactplay.io/ideas"
                target="_blank"
              >
                <span className="text-gray-700 inline-flex items-center gap-1 group">
                  Get Started{" "}
                  <HiArrowNarrowRight className="text-cyan-400 w-6 h-4 group-hover:translate-x-1 transition-all ease-in-out duration-100" />
                </span>
              </a>
            </div>
            <div className="mt-2">
              <p>
                <a
                  className="underline decoration-2 decoration-cyan-400 underline-offset-4"
                  href="https://blog.reactplay.io/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-gray-700 inline-flex items-center gap-1 group">
                    Read our blog posts{" "}
                    <HiArrowNarrowRight className="text-cyan-400 w-6 h-4 group-hover:translate-x-1 transition-all ease-in-out duration-100" />
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* Show love */}
        <div className="w-2/5 lg:w-full">
          <h3 className="mb-3 text-xl font-medium text-slate-900 lg:text-3xl lg:font-semibold">
            Show love
          </h3>
          <p className="mb-4 text-gray-600 lg:text-base">
            Enjoying ReactPlay? Please help us spreading the word You can share
            about ReactPlay on any of your favorite social media platforms.
          </p>
          <button
            href="#"
            className="underline decoration-2 decoration-cyan-400 underline-offset-4"
          >
            <span className="text-gray-700 text-base inline-flex items-center gap-1 group">
              Share about ReactPlay{" "}
              <HiArrowNarrowRight className="text-cyan-400 w-6 h-5 group-hover:translate-x-1 transition-all ease-in-out duration-100" />
            </span>
          </button>
          <p className="mt-10 mb-2 text-gray-600 lg:text-base">
            Your support means a lot to us. Want to be our Sponsor and support
            us?
          </p>
          <a
            className="underline decoration-2 decoration-cyan-400 underline-offset-4"
            href="https://github.com/sponsors/reactplay"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-gray-700 text-base inline-flex items-center gap-1 group">
              Sponsor ReactPlay{" "}
              <HiArrowNarrowRight className="text-cyan-400 w-6 h-5 group-hover:translate-x-1 transition-all ease-in-out duration-100" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ExtendedFooter;
