import HackerPlayLogo from "../../public/hackrplay/BannerLogo.png";
import twoPlaysaMonthLogo from "../../public/twoplaysamonth/NavbarLogo.png"
export const Config = {
    name: "hustleHomePage",
    display: "#2PlaysAMonth",
    description: "#2PlaysAMonth is an event by ReactPlay for the ReactJs community to learn, build, share in public. Join us.",
    keywords: "ReactPlay, #2PlaysAMonth, ReactJS",
    completed: false,
    started: false,
    links: [
      {
        name: "Plays",
        href: "",
      },
      {
        name: "Events",
        href: "#events",
      },
      {
        name: "Live",
        href: "#lives",
      },
      {
        name: "Spaces",
        href: "#spaces",
      },
      {
        name: "Gallery",
        href: "#gallery",
      },
    ],
    pastEvents : [
      {
        name: "Hack-R-Play",
        description:
          "ReactPlay brings you the opportunity to take part in the Hackathon and learn from it. Showcase your mindblowing ideas, build projects, and create content - there are also chances to win exciting prizes.",
        image: HackerPlayLogo,
        link: `/events/23/hackrplay/2022/home`,
      },
      {
        name: "2PlaysaMonth",
        description:
          "ReactPlay brings you an opportunity to participate in the month-long drive to learn and contribute to Open Source. Join the #2PlaysAMonth and build two projects(plays) in the month of February. You will learn from expert code reviews while contributing to Open Source - you may also win some exciting prizes..",
        image: twoPlaysaMonthLogo,
        link: `/events/23/twoplaysamonth`,
      },
      
    ],
    videoLinks:[
      {
        src: 'https://www.youtube.com/embed/1qfDkmtuWqg'
      },
      {
        src: 'https://www.youtube.com/embed/b0eas9xxD-E'
      },
      {
        src: 'https://www.youtube.com/embed/w0nd4ASTDdg'
      },
    ],
   twitterLinks:[
      {
        title: 'UX, Design Systems, OSS, React and more',
        hostedBy: 'Nikhil',
        date: '3rd August',
              spearkers: []
      },
      
    ]
}