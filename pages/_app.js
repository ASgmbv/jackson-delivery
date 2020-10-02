import { ChakraProvider } from "@chakra-ui/core";
import customTheme from "../theme";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=1280px, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <ChakraProvider resetCSS theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
