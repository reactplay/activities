import Image from "next/image";

import FooterTriangles from "../public/FooterTriangles.svg";
import ReactPlayLogo from "../public/ReactPlayLogo.svg";
import FooterReactLogo from "../public/FooterReactLogo.svg";
import { FaDiscord, FaTwitter, FaRss } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative flex justify-center items-center pt-16 pb-9 px-8 bg-white bg-opacity-10 overflow-clip">
      <div className="absolute -left-5">
        <Image
          src={FooterTriangles}
          alt="Footer Triangles"
          width={155}
          height={155}
        />
      </div>
      <div className="flex flex-col justify-center items-center mx-auto ">
        <span className="text-gray-500 font-medium font-body">Hosted By</span>
        <a href="https://reactplay.io" target="_blank" rel="noreferrer">
          <Image src={ReactPlayLogo} alt="ReactPlay Logo" layout="fixed" />
        </a>
        <p className="mt-4 font-medium font-body text-gray-500 text-center">
          An open-source project made with ❤️ by Tapas Adhikary and friends.
        </p>
        <div className="mt-6 inline-flex justify-center items-center">
          <a
            className="text-gray-500 hover:text-gray-300 transition-all duration-200 mr-6"
            href="https://discord.gg/HBheAs6UJp"
            rel="noreferrer"
            target="_blank"
          >
            <FaDiscord size={41} />
          </a>
          <a
            className="text-gray-500 hover:text-gray-300 transition-all duration-200 mr-6"
            href="https://twitter.com/reactplayio"
            rel="noreferrer"
            target="_blank"
          >
            <FaTwitter size={40} />
          </a>
          <a
            className="text-gray-500 hover:text-gray-300 transition-all duration-200"
            href="https://blog.reactplay.io/"
            rel="noreferrer"
            target="_blank"
          >
            <FaRss size={40} />
          </a>
        </div>
      </div>
      <div className="absolute opacity-40 -right-24 -bottom-28">
        <Image
          src={FooterReactLogo}
          alt="Footer React Logo"
          width={300}
          height={300}
        />
      </div>
    </footer>
  );
};

export default Footer;
