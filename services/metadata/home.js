import HackerPlayBanner from "@/public/twoplaysamonth/og-image.png";
import twoPlaysaMonthLogo from "@/public/twoplaysamonth/NavbarLogo.png"
import twoPlaysaMonthBanner from "@/public/twoplaysamonth/twoPlaysAMonthBanner.png"

export const Config = {
    name: "hustleHomePage",
    display: "#2PlaysAMonth",
    description: "#2PlaysAMonth is an event by ReactPlay for the ReactJs community to learn, build, share in public. Join us.",
    keywords: "ReactPlay, #2PlaysAMonth, ReactJS",
    completed: false,
    started: false,
    banner: twoPlaysaMonthBanner,
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
        image: HackerPlayBanner,
        link: `/events/22/hackrplay`,
      },
      {
        name: "2PlaysaMonth",
        description:
          "ReactPlay brings you an opportunity to participate in the month-long drive to learn and contribute to Open Source. Join the #2PlaysAMonth and build two projects(plays) in the month of February. You will learn from expert code reviews while contributing to Open Source - you may also win some exciting prizes..",
        image: twoPlaysaMonthBanner,
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
        title: 'Catch up with Nikhil- UX, Design Systems, OSS, React and more',
        host: 'niksharma1997',
        date: '3rd August, 2022',
        avatar: 'https://pbs.twimg.com/profile_images/1516502854416343040/PTZjiXw8_400x400.jpg',
        link: 'https://twitter.com/i/spaces/1OdKrBXaBrOKX'
      },
      {
        title: 'Catch up with Shruti- CSS, Design, Tailwind and more',
        host: 'shrutibalasa',
        date: '9th February, 2022',
        avatar: 'https://pbs.twimg.com/profile_images/1329475394714537986/MXGt0d_h_400x400.jpg',
        link: 'https://twitter.com/i/spaces/1zqJVPQobgnKB'
      },
      {
        title: 'Catch up with Swapna- Content, Career, DSA and more',
        host: 'swapnakpanda',
        date: '13th October, 2022',
        avatar: 'https://pbs.twimg.com/profile_images/1621910730227449856/iW8AGVCr_400x400.jpg',
        link: 'https://twitter.com/i/spaces/1djxXljXOpVxZ'
      },
      // {
      //   title: 'Catch up with Aakansha- Side hustles, open-source and more',
      //   hostedBy: 'swapnakpanda',
      //   date: '13th October, 2022',
      //   avatar: 'https://pbs.twimg.com/profile_images/1516502854416343040/PTZjiXw8_400x400.jpg',
      //   link: 'https://twitter.com/i/spaces/1djxXljXOpVxZ'
      // },
      
    ]
}