import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import CTA from "@/components/common/CTA";
import FAQs from "@/components/common/FAQs";
import Hero from "@/components/common/Hero";
import About from "@/components/common/About";
import Judges from "@/components/common/Judges";
import Flower from "@/public/common/Flower.svg";
import Winners from "@/components/common/Winners";
import Partners from "@/components/common/Partners";
import { events } from "@/services/metadata/events";
import DottedAndFilledTriangle from "@/public/common/DottedAndFilledTriangle.svg";

export async function getStaticPaths() {
  if (!events) {
    return { paths: [], fallback: false };
  }

  const paths = events.map((event) => ({
    params: {
      id: event.id.toString(),
      name: slugify(event.name),
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const event = events.find(
    (event) => event.id.toString() === params.id && event.name === params.name
  );

  if (!event) {
    return { notFound: true };
  }

  return {
    props: {
      event,
    },
  };
}

function slugify(str) {
  return str.toLowerCase().replace(/[^\w]+/g, "-");
}

function EventPage({ event }) {
  const router = useRouter();

  return (
    <Layout
      title="ReactPlay : Hack-R-Play"
      metainfo={event}
      eventNavbar={false}
    >
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
      <Hero metainfo={event} />
      {event.completed ? (
        <Winners winners={event.winners} mentions={event.mentions} />
      ) : null}
      <About metainfo={event} />
      <Judges metainfo={event} />
      {event.partners ? <Partners metainfo={event} /> : null}
      {event.cta ? <CTA metainfo={event} /> : null}

      {event.faqs ? <FAQs metainfo={event} /> : null}
    </Layout>
  );
}

export default EventPage;
