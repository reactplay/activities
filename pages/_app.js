import "../styles/globals.css";

import { NhostNextProvider, NhostClient } from "@nhost/nextjs";

const nhost = new NhostClient({
  backendUrl: process.env.NEXT_PUBLIC_NHOST_BACKEND_URL || "",
});

function MyApp({ Component, pageProps }) {
  return (
    <NhostNextProvider nhost={nhost}>
      <Component {...pageProps} />
    </NhostNextProvider>
  );
}

export default MyApp;
