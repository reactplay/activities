import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Image from "next/image";
import { useTheme } from "next-themes";
// import { Hero, About, Judges, CTA, FAQs } from "@/components/common";
import About from "@/components/common/About";
import Judges from "@/components/common/Judges";
import Hero from "@/components/common/Hero";
import Partners from "@/components/common/Partners";
import CTA from "@/components/common/CTA";
import FAQs from "@/components/common/FAQs";

import DottedAndFilledTriangle from "@/public/common/DottedAndFilledTriangle.svg";
import Flower from "@/public/common/Flower.svg";
import { Config } from "@/services/metadata/hackrplay23";
import Winners from "@/components/common/Winners";
import Link from "next/link";
import { PrimaryButton } from "@/components/Buttons";
import Prizes from "@/components/common/Prizes";
export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("hackrplay");
  useEffect(() => {
    setTheme("hackrplay");
    setMounted(true);
  }, []);

  const winners = [];
  const mentions = [];

  if (!mounted) return null;

  return (
    <Layout title="ReactPlay : Hack-R-Play 2.0" metainfo={Config}>
      <div className="absolute md:left-9 -top-10 left-5 z-0 md:w-32 md:h-32 w-24 h-24">
        <Image
          src={DottedAndFilledTriangle}
          alt="Dotted And Filled Triangle"
          layout="responsive"
        />
      </div>
      <div className="absolute md:-right-60 md:-top-48 -right-24 -top-14 z-0 md:w-2/5 md:h-2/5 w-1/2 h-1/2">
        <Image src={Flower} alt="Flower" layout="responsive" />
      </div>
      <Hero metainfo={Config} />
      {Config.completed ? (
        <Winners winners={Config.winners} mentions={Config.mentions} />
      ) : (
        <div className=" w-full flex items-center justify-center gap-8">
          <PrimaryButton
            handleOnClick={() => {
              router.push("/ideas");
            }}
          >
            {`Ideas`}
          </PrimaryButton>
          <PrimaryButton
            handleOnClick={() => {
              router.push("/registration");
            }}
          >
            {`Register now`}
          </PrimaryButton>
        </div>
      )}
      <About metainfo={Config} />
      {Config.prizes ? <Prizes metainfo={Config} /> : null}
      <Judges metainfo={Config} />
      {Config.partners ? <Partners metainfo={Config} /> : null}
      {Config.cta ? <CTA metainfo={Config} /> : null}

      {Config.faqs ? <FAQs metainfo={Config} /> : null}
    </Layout>
  );
}
