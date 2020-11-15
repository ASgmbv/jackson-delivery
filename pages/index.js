/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import { sections } from "../assets/data/data";
import { Box } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { Client } from "../prismic-configuration";
import Prismic from "prismic-javascript";

export default function Home({ menu }) {
  return (
    <Layout title="JH Online Orders">
      {/* <pre>{JSON.stringify(menu, null, 2)}</pre> */}
      <Banner />
      <Menu
        sections={
          menu
          // sections
        }
      />
      <Box sx={{ height: "100px" }} />
    </Layout>
  );
}

export async function getStaticProps() {
  let products = await Client().query(
    Prismic.Predicates.at("document.type", "product"),
    // max limit - 100
    { pageSize: 200 }
  );

  let menu = [];
  let tags = [];

  products.results.map((product) => {
    let tag = product.tags[0];
    if (!tags.includes(tag)) {
      tags.push(tag);
      menu.push({
        title: tag,
        items: [product],
      });
    } else {
      let section = menu.find((menuItem) => menuItem.title === tag);
      section.items.push(product);
    }
  });

  return {
    props: {
      menu: menu || [],
    },
    revalidate: 1,
  };
}
