import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Image from "next/image";
import {
  Hero,
  About,
  Judges,
  Partners,
  CTA,
  FAQs,
} from "@/components/Hack-R-Play";

import DottedAndFilledTriangle from "@/public/Hack-R-Play/DottedAndFilledTriangle.svg";
import Flower from "@/public/Hack-R-Play/Flower.svg";

export default function Home() {
  const router = useRouter();

  const faqs = [
    {
      question: "Why should I perticipate in the Hack-R-Play?",
      answer:
        "Do you like learning while building something? How about a platform that provides you with an opportunity to build a full-stack application end-to-end, showcase it to the world, motivate you to create content about it, and help build networking? Hack-R-Play aims precisely the same. Join the Hackathon brought to you by ReactPlay and start building a cool project that we can't wait to see!",
    },
    {
      question: "Do I need to Register for Hack-R-Play?",
      answer:
        "Yes, you need to Register your idea for the Hack-R-Play hackathon. To do that, click on the REGISTER button at the top of the page and submit a few details to register your idea.",
    },
    {
      question: "Can we participate as a team?",
      answer:
        "Yes, you can participate in a team of 2(max). You can select the other member's name when you register your idea for the event. If you are the only person registering for an idea, just skip selecting any member while registering. If you liked an idea and want be part of it, please contact the idea creator.",
    },
    {
      question: "Does my Idea needs to follow a specific theme?",
      answer:
        "Not really! However, we suggest you build something valuable that you will keep building even after the Hack-R-Play Event. Rest is entirely up to you.",
    },
    {
      question: "Can I use anything other than React?",
      answer:
        "You can use anything related to React and its ecosystem. You can use Next.js, Gatsby, React Native, and even plain React!",
    },
    {
      question: "What do I need to Submit?",
      answer:
        "When you submit the project after completion, you submit three public links. Link to your project source code, link to your application, and link to the article that explains how you have used React/React-based library/framework with Nhost to build this application.",
    },
    {
      question: "Is the blog article mandatory to submit?",
      answer:
        "Yes, very much! Please document your entire Hack-R-Play journey and publish them on the ReactPlay blog(blog.reactplay.io). Don't worry if you are not a seasoned blogger. We will help with reviews if you submit the blog article at least 3 days before the event's end date.",
    },
    {
      question: "When and How the Hack-R-Play result will be published?",
      answer:
        "Hack-R-Play 2022 results will be published on 30th October. We will publish it on our website, and the Twitter handle(@reactplayio).",
    },
    {
      question: "Do we get prizes?",
      answer:
        "Yes, we will select 3 best ideas to give the exciting prizes sponsored by Nhost.",
    },
    {
      question: "I have questions, where can I ask them?",
      answer:
        "Got a question? Please join our Discord(the link is in the footer of this page). You can ask us anything in the hack-r-play channel.",
    },
  ];

  const judges = [
    {
      name: "Johan Eliasson",
      twitter: "@elitasson",
      title: "CEO Nhost",
    },
    {
      name: "Koustov Maitra",
      twitter: "@koustov",
      title: "Solution Architect, ReactPlay",
    },
    {
      name: "Pratim Bhosale",
      twitter: "@BhosalePratim",
      title: "Developer Advocate, Nhost",
    },
    {
      name: "Tapas Adhikary",
      twitter: "@tapasAdhikary",
      title: "Founder, ReactPlay",
    },
  ];
  return (
    <Layout title="ReactPlay presents HACK-R-PLAY">
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
      <Hero />
      <About />
      <Judges judges={judges} />
      <Partners />
      <CTA
        title="Be a part of the best react event"
        description="Learning is a journey than a destination. We developers need avenues, motivations, and opportunities to keep going. Join the Hack-R-Play hackathon to experience it. It will allow you to build a full-stack app using React and Nhost. Why waiting? Register your idea today.
        "
      />
      <FAQs faqs={faqs} />
    </Layout>
  );
}
