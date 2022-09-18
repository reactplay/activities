import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({
  children,
  title = "HACK-R-PLAY",
  description = "A hackathon hosted by ReactPlay",
  homepage = false,
}) => {
  return (
    <div className="relative bg-[#051630] overflow-clip">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header homepage={homepage} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
