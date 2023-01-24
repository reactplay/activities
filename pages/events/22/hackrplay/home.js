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
import Winners from "@/components/common/Winners";

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
      avatar:
        "https://pbs.twimg.com/profile_images/1447184004558557193/agXMdsqe_400x400.jpg",
    },
    {
      name: "Koustov Maitra",
      twitter: "@koustov",
      title: "Solution Architect, ReactPlay",
      avatar:
        "https://pbs.twimg.com/profile_images/1443859238443360258/6_H-pDaM_400x400.jpg",
    },
    {
      name: "Pratim Bhosale",
      twitter: "@BhosalePratim",
      title: "Developer Advocate, Nhost",
      avatar:
        "https://pbs.twimg.com/profile_images/1489130124792369154/-3M4AlrG_400x400.jpg",
    },
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
      email: "geekychakri@gmail.com",
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
      email: "smahanta118@gmail.com",
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
      email: "aashishpanthi11@gmail.com",
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
      email: "sansup49@gmail.com",
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
      email: "armankazi111@gmail.com",
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
      email: "ammaaraslam7@gmail.com",
      avatar:
        "https://avatars.githubusercontent.com/u/96367405?s=400&u=cb1c3999b75b33502f3149fd47b251731be286e7&v=4",
      projectName: "WriteOnce",
      projectLink: "https://writeonce.vercel.app/",
      projectSource: "https://github.com/ammaaraslam/write-once",

      article:
        "https://blog.reactplay.io/introducing-writeonce-a-markdown-editor-for-devs-who-blog",
    },
  ];

  const home_links = [
    {
      name: "Winners",
      href: "#winners",
    },
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
    <Layout title="ReactPlay presents HACK-R-PLAY" links={home_links}>
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
      <Winners winners={winners} mentions={mentions} />
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
