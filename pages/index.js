import Menu from "../components/Menu";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { sections } from "../assets/data/data";
import { Box } from "@chakra-ui/core";
import Head from "next/head";
import { useState } from "react";
import ErrorBoundary from "../components/ErrorBoundary";

export default function Home() {
  function throwError() {
    throw new Error();
  }

  return (
    <ErrorBoundary>
      <Head>
        <title>Jackson Online Order</title>
      </Head>
      <Header />
      <Banner />
      <Menu sections={sections} />
      <Box sx={{ height: "100px" }} />
    </ErrorBoundary>
  );
}

// export async function getStaticProps() {
//   const phones = await Client().query(
//     Prismic.Predicates.at("document.type", "phone")
//   );

//   return {
//     props: {
//       phones: phones ? phones.results : [],
//     },
//     revalidate: 1,
//   };
// }
