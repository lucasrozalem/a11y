import type { AppProps } from "next/app";
import "../styles/globals.css";
import { axeAccessibilityReporter } from "../utils/axeAccessibilityReporter";
import { useEffect } from "react";

axeAccessibilityReporter();

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    axeAccessibilityReporter();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
