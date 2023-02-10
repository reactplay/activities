import { ThemeConfig } from "@/services/consts/theme";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, title, description, metainfo }) => {
  const currentPath = useRouter().pathname;
  const [secondaryNavbar, setSecondaryNavbar] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (
      currentPath === "/events/23/hackrplay/2022/home" ||
      currentPath === "/events/23/twoplaysamonth"
    ) {
      setSecondaryNavbar(false);
    } else {
      setSecondaryNavbar(true);
    }
    if (metainfo?.name) {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {!loading ? (
        <div className={`relative bg-brand-bg overflow-clip`}>
          <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.png" />
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta name="keywords" content={metainfo.keywords} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="ReactPlay Events" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="628" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="description" content={metainfo.description} />
            <meta property="og:description" content={metainfo.description} />
            <meta name="title" property="og:title" content={title} />
            <meta
              name="image"
              property="og:image"
              content={`https://hustles.reactplay.io/${metainfo.name}/og-image.png`}
            />
            <meta property="og:image:alt" content={metainfo.description} />
            <meta property="og:image:alt" content={metainfo.description} />
            <meta property="og:url" content="https://hustles.reactplay.io" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={metainfo.description} />
            <meta
              name="twitter:image"
              content={`https://hustles.reactplay.io/${metainfo.name}/og-image.png`}
            />
            <meta name="twitter:site" content="@ReactPlayIO" />
            <script
              async
              defer
              data-website-id={process.env.NEXT_PUBLIC_UMAMI_TRACK_ID}
              src="https://analytics.reactplay.io/umami.js"
            />
          </Head>
          <Header
            links={metainfo.links}
            secondary={secondaryNavbar}
            metainfo={metainfo}
          />
          <main>{children}</main>
          <Footer />
        </div>
      ) : null}
    </>
  );
};

export default Layout;
