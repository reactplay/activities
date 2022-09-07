import "../styles/globals.css";

import { NhostClient, NhostReactProvider } from "@nhost/react";

console.error(process.env.REACT_APP_NHOST_BACKEND_URL);
const nhost = new NhostClient({
  backendUrl:
    "https://rgkjmwftqtbpayoyolwh.nhost.run/" ||
    process.env.REACT_APP_NHOST_BACKEND_URL ||
    "",
});

function MyApp({ Component, pageProps }) {
  return (
    <NhostReactProvider nhost={nhost}>
      <Component {...pageProps} />
    </NhostReactProvider>
  );
}

export default MyApp;
