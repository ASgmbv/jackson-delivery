/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import Menu from "../components/Menu/Menu";
import Banner from "../components/Banner";
import { sections } from "../assets/data/data";
import { Box } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { Client } from "../prismic-configuration";
import Prismic from "prismic-javascript";
import SEO from "../components/seo";
import Header from "../components/Header";
import { Container } from "@chakra-ui/react";

export default function Home({ menu }) {
  return (
    <>
      <SEO title="JH Online Orders" />
      <Header />
      <Banner />
      <Menu sections={menu} />
    </>
  );
}

export async function getStaticProps() {
  let products1 = await Client().query(
    Prismic.Predicates.at("document.type", "product"),
    { pageSize: 100, page: 1 }
  );

  let products2 = await Client().query(
    Prismic.Predicates.at("document.type", "product"),
    { pageSize: 100, page: 2 }
  );

  let menu = [];
  let tags = [];

  products1.results.map((product) => {
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

  products2.results.map((product) => {
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
