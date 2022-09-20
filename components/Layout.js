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
    if (currentPath === "/") {
      setSecondaryNavbar(false);
    } else {
      setSecondaryNavbar(true);
    }
  }, []);

  return (
    <div className="relative bg-[#051630] overflow-clip">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.png" />
        <meta
          property="og:image"
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
