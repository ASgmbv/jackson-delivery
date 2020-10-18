import { ChakraProvider } from "@chakra-ui/core";
import customTheme from "../theme";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <ChakraProvider resetCSS theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
