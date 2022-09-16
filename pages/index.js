import Layout from "../components/Layout";
import Image from "next/image";

import {
  Hero,
  About,
  Judges,
  Partners,
  CTA,
  FAQs,
} from "../components/Hack-R-Play";

import DottedAndFilledTriangle from "../public/Hack-R-Play/DottedAndFilledTriangle.svg";
import Flower from "../public/Hack-R-Play/Flower.svg";

export default function Home() {
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendumest ultricies integer quis. Iaculis urna id volutpat lacus laoreet.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendumest ultricies integer quis. Iaculis urna id volutpat lacus laoreet.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendumest ultricies integer quis. Iaculis urna id volutpat lacus laoreet.",
    },
  ];

  const judges = [
    {
      name: "lorem ipsum dolor sit",
      title: "lorem ipsum",
    },
    {
      name: "lorem ipsum dolor sit",
      title: "lorem ipsum",
    },
    {
      name: "lorem ipsum dolor sit",
      title: "lorem ipsum",
    },
  ];

  return (
    <Layout title="HACK-R-PLAY" description="A hackathon hosted by ReactPlay">
      <div className="absolute left-9 -top-10 z-0">
        <Image
          src={DottedAndFilledTriangle}
          alt="Dotted And Filled Triangle"
          width={220}
          height={220}
        />
      </div>
      <div className="absolute -right-60 -top-48 z-0">
        <Image src={Flower} alt="Flower" width={500} height={500} />
      </div>

      <Hero />
      <About />
      <Judges judges={judges} />
      <Partners />
      <CTA
        title="Be a part of the best react event"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum
            est ultricies integer quis. Iaculis urna id volutpat lacus laoreet."
      />
      <FAQs faqs={faqs} />
    </Layout>
  );
}
