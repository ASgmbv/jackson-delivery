/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import { sections } from "../assets/data/data";
import { Box } from "@chakra-ui/core";
import Layout from "../components/Layout";
// import { Client } from "../prismic-configuration";
// import Prismic from "prismic-javascript";

export default function Home() {
  return (
    <Layout title="JH Online Orders">
      <Banner />
      <Menu sections={sections} />
      <Box sx={{ height: "100px" }} />
    </Layout>
  );
}

// export async function getStaticProps() {
//   const sections = await Client().query(
//     Prismic.Predicates.at("document.type", "section")
//   );

//   console.log("sections:", sections);

//   return {
//     props: {
//       sections: sections ? sections.results : [],
//     },
//     revalidate: 1,
//   };
// }
