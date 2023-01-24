import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

import { NhostNextProvider, NhostClient } from "@nhost/nextjs";

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || "",
  region: process.env.NEXT_PUBLIC_NHOST_REGION || "",
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
        <Component {...pageProps} />
      </NhostNextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
