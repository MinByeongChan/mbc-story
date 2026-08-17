import { AppProps } from "next/app";

import "gocheok-project/src/tailwind.css";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
