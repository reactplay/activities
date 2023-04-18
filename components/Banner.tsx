// components
import Hero from "@/components/common/Hero";

// services
import { Config } from "@/services/metadata/twoplaysamonth";

const Banner = () => {
  return <Hero metainfo={Config} theHustleHomePage />;
};

export default Banner;
