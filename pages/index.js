import Layout from "../components/Layout";
import Image from "next/image";

import {
  Hero,
  About,
  ChallengesAndPrizes,
  Judges,
  CTA,
  FAQs,
} from "../components/Home";

import DottedAndFilledTriangle from "../public/Home/DottedAndFilledTriangle.svg";
import Flower from "../public/Home/Flower.svg";

export default function Home() {
  return (
    <Layout title="HACK-R-PLAY" description="A hackathon hosted by ReactPlay">
      <div className="absolute left-9 -top-10">
        <Image
          src={DottedAndFilledTriangle}
          alt="Dotted And Filled Triangle"
          width={220}
          height={220}
        />
      </div>
      <div className="absolute -right-60 -top-48">
        <Image src={Flower} alt="Flower" width={500} height={500} />
      </div>

      <Hero />
      <About />
      <ChallengesAndPrizes />
      <Judges />
      <CTA />
      <FAQs />
    </Layout>
  );
}
