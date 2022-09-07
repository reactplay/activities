import "../styles/globals.css";

import { NhostClient, NhostReactProvider } from "@nhost/react";

const nhost = new NhostClient({
  backendUrl: process.env.NEXT_PUBLIC_NHOST_BACKEND_URL || "",
});

function MyApp({ Component, pageProps }) {
  return (
    <NhostReactProvider nhost={nhost}>
      <Component {...pageProps} />
    </NhostReactProvider>
  );
}

export default MyApp;
