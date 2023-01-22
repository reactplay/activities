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
} from "@/components/2PlaysAMonth";

import DottedAndFilledTriangle from "@/public/Hack-R-Play/DottedAndFilledTriangle.svg";
import Flower from "@/public/Hack-R-Play/Flower.svg";
import Winners from "@/components/2PlaysAMonth/Winners";

export default function Home() {
  const router = useRouter();

  return (
    <Layout title="ReactPlay presents 2PlaysAMonth">
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
      {/* <Winners winners={winners} mentions={mentions} /> */}
      <About />
      <Judges judges={judges} />
      <Partners />
      <CTA
        title="Be a part of the best react event"
        description="Learning is a journey than a destination. We, developers, need avenues, motivations, and opportunities to keep going. Join the #2PlayAMonth initiative to experience it. It will allow you to build a ReactJS app using and learning from code reviews. Why waiting? Get started today.
        "
      />
      <FAQs faqs={faqs} />
    </Layout>
  );

}

const faqs = [
  {
    question: "Do I need to Register for #2PlaysAMonth?",
    answer:
      "Nope. You can create the play by following the criteria mentioned in this page's About(link it) section.",
  },
  {
    question: "Do I need to Register for Hack-R-Play?",
    answer:
      "Yes, you need to Register your idea for the Hack-R-Play hackathon. To do that, click on the REGISTER button at the top of the page and submit a few details to register your idea.",
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
    question: "Do I get prizes?",
    answer:
      "We will publish 3 winners and 3 special mentions based on our judging criteria. All winners, special mentions, and participants who completed the target will receive digital badges. We are working with our sponsors to decide the prizes for the winners.",
  },
  {
    question: " I have questions. Where can I ask them?",
    answer:
      "Got a question? Please join our Discord(https://discord.gg/UfYj4MvW9A). You can ask us anything in the activities channel.",
  },
];

const judges = [
  // {
  //   name: "Johan Eliasson",
  //   twitter: "@elitasson",
  //   title: "CEO Nhost",
  //   avatar:
  //     "https://pbs.twimg.com/profile_images/1447184004558557193/agXMdsqe_400x400.jpg",
  // },
  {
    name: "Koustov Maitra",
    twitter: "@koustov",
    title: "Solution Architect, ReactPlay",
    avatar:
      "https://pbs.twimg.com/profile_images/1443859238443360258/6_H-pDaM_400x400.jpg",
  },
  // {
  //   name: "Pratim Bhosale",
  //   twitter: "@BhosalePratim",
  //   title: "Developer Advocate, Nhost",
  //   avatar:
  //     "https://pbs.twimg.com/profile_images/1489130124792369154/-3M4AlrG_400x400.jpg",
  // },
  {
    name: "Tapas Adhikary",
    twitter: "@tapasAdhikary",
    title: "Founder, ReactPlay",
    avatar:
      "https://pbs.twimg.com/profile_images/1495457010598309888/zPrTNF4F_400x400.jpg",
  },
];
const winners = [
  {
    name: "Chakri",
    twitter: "https://twitter.com/geekyChakri",
    github: "https://github.com/GeekyChakri",
    avatar:
      "https://pbs.twimg.com/profile_images/1532395278107435011/jBTuAENH_400x400.png",
    projectName: "Classroom",
    projectLink: "https://learnwithclassroom.vercel.app",
    article:
      "https://blog.reactplay.io/introducing-classroom-learning-with-youtube-made-exciting",
    projectSource: "https://github.com/GeekyChakri/Classroom",

    position: "1",
  },
  {
    name: "Shyam Mahanta",
    twitter: "https://twitter.com/ShyamMahanta2",
    github: "https://github.com/Angryman18",
    avatar: "https://avatars.githubusercontent.com/u/63530626?v=4",
    projectName: "Papercode",
    projectLink: "https://papercode.netlify.app/",
    projectSource: "https://github.com/Angryman18/papercode",

    article:
      "https://blog.reactplay.io/tour-of-a-live-coding-playground-app-built-using-reactjs-nhost",
    position: "2",
  },
  {
    name: "Aashish Panthi",
    twitter: "https://twitter.com/aashishpanthi11",
    github: "https://github.com/aashishpanthi",
    avatar: "https://avatars.githubusercontent.com/u/60884239?v=4",
    projectName: "Mailsbe",
    projectLink: "https://mailsbe.netlify.app/",
    projectSource: "https://github.com/aashishpanthi/mailsbe",
    article: "https://blog.reactplay.io/mailsbe-an-email-status-finder",
    position: "3",
  },
];
const mentions = [
  {
    name: "Supriya M",
    twitter: "https://twitter.com/supminn",
    github: "https://github.com/supminn",
    avatar: "https://avatars.githubusercontent.com/u/30731236?v=4",
    projectName: "FinSaver",
    projectLink: "https://finsaver.vercel.app/",
    projectSource: "https://github.com/supminn/expense_tracker",

    article: "https://blog.reactplay.io/building-finsaver-for-hack-r-play",
  },
  {
    name: "Armaan Kazi",
    twitter: "https://twitter.com/Armankazi111",
    github: "https://github.com/Amyx000/",
    avatar: "https://avatars.githubusercontent.com/u/104687128?v=4",
    projectName: "React Resume Builder",
    projectLink: "https://react--resume--builder.vercel.app/",
    projectSource: "https://github.com/Amyx000/React-Resume-Builder",

    article:
      "https://blog.reactplay.io/react-resume-builder-with-react-and-nhost",
  },
  {
    name: "Ammaar Aslam",
    twitter: "https://twitter.com/itsammaar_7",
    github: "https://github.com/ammaaraslam",
    avatar:
      "https://avatars.githubusercontent.com/u/96367405?s=400&u=cb1c3999b75b33502f3149fd47b251731be286e7&v=4",
    projectName: "WriteOnce",
    projectLink: "https://writeonce.vercel.app/",
    projectSource: "https://github.com/ammaaraslam/write-once",

    article:
      "https://blog.reactplay.io/introducing-writeonce-a-markdown-editor-for-devs-who-blog",
  },
];