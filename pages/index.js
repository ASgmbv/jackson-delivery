/* eslint-disable react/react-in-jsx-scope */
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import { sections } from "../assets/data/data";
import { Box } from "@chakra-ui/core";
import Layout from "../components/Layout";

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
