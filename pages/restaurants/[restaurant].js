/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import Menu from "../../components/Menu/Menu";
import Banner from "../../components/Banner";
import SEO from "../../components/seo";
import Header from "../../components/Header";
import {
  fetchRestaurants,
  fetchProductsByRestaurant,
  fetchRestaurantByUid,
} from "../../utils/prismicQueries";

export default function Home({ menu, restaurant }) {
  return (
    <>
      <SEO title="JH Online Orders" />
      <Header />
      <Banner restaurant={restaurant} />
      <Menu menu={menu} />
    </>
  );
}

export async function getStaticPaths() {
  const restaurants = await fetchRestaurants();
  const paths = restaurants.map((restaurant) => ({
    params: { restaurant: restaurant.uid },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let restaurant = await fetchRestaurantByUid({
    restaurantUid: params.restaurant,
  });

  let menu = await fetchProductsByRestaurant({
    restaurantId: restaurant.id,
  });

  return {
    props: {
      menu,
      restaurant,
    },
    revalidate: 1,
  };
}
