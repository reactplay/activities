import React from "react";

import Header from "./Header";
import HeroBanner from "@/public/hustleHomePage/HeroBanner@2x.png";
import Image from "next/image";
import styled from "@emotion/styled";
import { Config } from "@/services/metadata/home";

const StyledHero = styled.div`
  .banner_container {
    position: relative;
    width: 100%;
    height: calc(100vh);
    img {
      z-index: -1;
    }
  }
`;

const Hero = ({ metainfo, secondaryNavbar, hustleHomePage, children }) => {
  const currentEvent = Config.events.filter((event) => event.isCurrent);

  return (
    <StyledHero>
      {currentEvent.length === 0 ? (
        <>
          <Header
            links={metainfo.links}
            secondary={secondaryNavbar}
            metainfo={metainfo}
            hustleHomePage={hustleHomePage}
          />
          <div className="-z-0 inset-0 banner_container">
            <Image src={HeroBanner} layout="fill" />
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
    </StyledHero>
  );
};

export default Hero;
