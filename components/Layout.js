import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, title, description }) => {
  return (
    <div className="bg-black">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-black">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
