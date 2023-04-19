import React from "react";

import Header from "./Header";
import HeroBanner from "@/public/hustleHomePage/HeroBanner@2x.png";
import Image from "next/image";
import styled from "@emotion/styled";
import { Config } from "@/services/metadata/home";

import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

const StyledHero = styled.div`
  .banner_container {
    position: relative;
    width: 100%;
    height: 80vh;
    img {
      z-index: -1;
    }
  }
`;

const Hero = ({ metainfo, secondaryNavbar, hustleHomePage, children }) => {
  const currentEvent = Config.events.filter((event) => event.isCurrent);

  return (
    <div>
      {currentEvent.length === 0 ? (
        <>
          <Header
            links={metainfo.links}
            secondary={secondaryNavbar}
            metainfo={metainfo}
            hustleHomePage={hustleHomePage}
          />
          <div className="-z-0 inset-0 relative w-full h-[80vh] lg:h-[85vh]">
            <Image className="-z-10" src={HeroBanner} layout="fill" />
          </div>
          <div className="z-20 flex items-center flex-col gap-4 font-sans absolute left-1/2 -translate-x-1/2 text-center px-4 w-full lg:w-2/4 top-48">
            <h3 className="text-4xl lg:text-5xl font-black text-cyan-400">
              An unusual place for{" "}
              <span className="underline text-white">Extraordinary React</span>{" "}
              events
            </h3>
            <p className="max-w-lg lg:max-w-none text-sm lg:text-base px-4 py-4 lg:py-12 text-gray-300">
              ReactPlay is an open-source platform to learn, crate and share
              ReactJS Projects with the developer community. Start by browsing
              the plays or explore the source code.
            </p>
            <Link className="" href={`/events`}>
              <div className="text-sm lg:text-base text-gray-300 border rounded-full px-6 py-3 inline-flex items-center gap-2 mt-8 lg:mt-0 cursor-pointer">
                View Past Events
                <span className="text-cyan-400">
                  <HiArrowNarrowRight />
                </span>
              </div>
            </Link>
          </div>
          <main>{children}</main>
        </>
      ) : (
        <>
          <Header
            links={metainfo.links}
            secondary={secondaryNavbar}
            metainfo={metainfo}
            hustleHomePage={hustleHomePage}
          />
          <main>{children}</main>
        </>
      )}
    </div>
  );
};

export default Hero;
