import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ links, children, title, description }) => {
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
  const currentPath = useRouter().pathname;
  const [secondaryNavbar, setSecondaryNavbar] = useState(false);

  useEffect(() => {
    if (currentPath === "/hackrplay/2022/home") {
      setSecondaryNavbar(false);
    } else {
      setSecondaryNavbar(true);
    }
  }, []);

  return (
    <div className="relative bg-[#051630] overflow-clip">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />        
        <meta
          name="keywords"
          content="ReactPlay, HACK-R-PLAY, ReactJS, Hacakthon"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ReactPlay Events" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content="ReactPlay brings you the opportunity to take part in the Hackathon and learn from it. Showcase your mindblowing ideas, build projects, and create content - there are also chances to win exciting prizes."
        />
        <meta
          property="og:description"
          content="ReactPlay brings you the opportunity to take part in the Hackathon and learn from it. Showcase your mindblowing ideas, build projects, and create content - there are also chances to win exciting prizes."
        />
        <meta property="og:title" content={title} />
        <meta
          property="og:image"
          content="https://hustles.reactplay.io/og-image.png"
        />
        <meta
          property="og:image:alt"
          content="ReactPlay brings you the opportunity to take part in the Hackathon and learn from it. Showcase your mindblowing ideas, build projects, and create content - there are also chances to win exciting prizes."
        />
        <meta property="og:url" content="https://hustles.reactplay.io" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="ReactPlay brings you the opportunity to take part in the Hackathon and learn from it. Showcase your mindblowing ideas, build projects, and create content - there are also chances to win exciting prizes."
        />
        <meta
          name="twitter:image"
          content="https://hustles.reactplay.io/og-image.png"
        />
      </Head>
      <Header links={links || home_links} secondary={secondaryNavbar} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
