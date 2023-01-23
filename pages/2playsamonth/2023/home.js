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

import DottedAndFilledTriangle from "@/public/common/DottedAndFilledTriangle.svg";
import Flower from "@/public/common/Flower.svg";
// import Winners from "@/components/common/Winners";

export default function Home() {
  const router = useRouter();

  const faqs = [
    {
      question: "Why should I participate in the #2PlaysAMonth event?",
      answer:
        "Do you like learning while building something? How about a platform that allows you to build a ReactJS application end-to-end, learn from the review comments, contribute to open source, showcase it to the world, and help build networking? #2PlaysAMonth aims precisely the same. Join the drive brought to you by ReactPlay and start building cool projects that we can't wait to see!",
    },
    {
      question: "Do I need to Register for #2PlaysAMonth?",
      answer:
        "Nope. You can create the play by following the criteria mentioned in this page's About section.",
    },
    {
      question: "Is it mandatory to create 2 plays?",
      answer:
        "Yes. That's one of the qualifying criteria. You must create and complete 2 plays.",
    },
    {
      question: "What if my play review gets delayed?",
      answer:
        "You must ensure you give the reviewers enough time to review your code and provide comments. We're looking forward to 4-5 days(based on how actively you respond to the comments) to complete the review process of a play. Try submitting your plays at least 7-10 days before the end date to avoid messy situations. If your review gets delayed by reviewers, we will ensure you the extra time, but that will be a rare case!",
    },
    {
      question: "Can we participate as a team?",
      answer:
        "Nope. It's an individual event.",
    },
    {
      question: "Can I use anything other than React?",
      answer:
        "ReactPlay is a platform to help web developers learn ReactJs and build projects. For this initiative, RaectJs is a must.",
    },
    {
      question: "Can I submit my old React project as a play?",
      answer:
        "You can. However, could you please mention the old project in the play description? Also, the play should be something other than a 1-1 matching your existing project. You must bring some changes/ideas into it.",
    },
    {
      question: "Can I submit code/project of someone else?",
      answer:
        "You shouldn't. Be authentic and ethical. It's an event to learn, not alone to win.",
    },
    {
      question: "Is creating an issue for my PR a must?",
      answer:
        "Yes. We will disqualify the play submission that doesn't have an associated issue.",
    },
    {
      question: "Is sharing my journey on Twitter and LinkedIn of the #2PlaysAMonth a must?",
      answer:
        "Yes, we encourage you to build and learn publicly. Make sure you add the tag #2playsamonth and ReactPlay handle when you post them on social media.",
    },
    {
      question: "When and How the #2PlaysAMonth result will be published?",
      answer:
        "The result will be published on 15th March. We will publish it on our website, blog, and Twitter handle(@reactplayio).",
    },
    {
      question: "Do I get badges and prizes?",
      answer:
        "We will publish 3 winners and 3 special mentions based on our judging criteria. All winners, special mentions, and participants who completed the target will receive digital badges. We are working with our sponsors to decide the prizes for the winners.",
    },
    {
      question: "I have questions, where can I ask them?",
      answer:
        "Got a question? Please join our Discord(the link is in the footer of this page). You can ask us anything in the hack-r-play channel.",
    },
  ];

  const judges = [
    {
      name: "Harshit Jain",
      twitter: "@jain_harshit",
      title: "SDE3, Intuit",
      avatar:
        "https://pbs.twimg.com/profile_images/1523150875153567744/zpRDym_L_400x400.jpg",
    },
    {
      name: "Kapeel Kokane",
      twitter: "@kokaneka",
      title: "SDE2, Microsoft",
      avatar:
        "https://pbs.twimg.com/profile_images/1372919009939652612/E9s309tH_400x400.jpg",
    },
    {
      name: "Koustov Maitra",
      twitter: "@koustov",
      title: "Architect, ReactPlay",
      avatar:
        "https://pbs.twimg.com/profile_images/1443859238443360258/6_H-pDaM_400x400.jpg",
    },
    {
      name: "Tapas Adhikary",
      twitter: "@tapasAdhikary",
      title: "Founder, ReactPlay",
      avatar:
        "https://pbs.twimg.com/profile_images/1495457010598309888/zPrTNF4F_400x400.jpg",
    },
  ];
  const winners = [];
  const mentions = [];

  const home_links = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Sponsors",
      href: "#sponsors",
    },
    {
      name: "Judges",
      href: "#judges",
    },
    {
      name: "Faqs",
      href: "#faqs",
    },
  ];



  return (
    <Layout title="ReactPlay presents #2Plays-A-Month" links={home_links}>
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
      {/*<Winners winners={winners} mentions={mentions} />*/}
      <About />
      <Judges judges={judges} />
      <Partners />
      <CTA
        title="Be a part of the best react event"
        description="Learning is a journey than a destination. We, developers, need avenues, motivations, and opportunities to keep going. Join the #2PlayAMonth initiative to experience it. It will allow you to build a ReactJS app using and learning from code reviews. Why waiting? Get started today."
      />
      <FAQs faqs={faqs} />
    </Layout>
  );
}
