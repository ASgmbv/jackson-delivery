/* eslint-disable react/prop-types */
import { Box, Container, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import RestaurantCard from "../components/RestaurantCard";
import { fetchRestaurants } from "../utils/prismicQueries";
import NextLink from "next/link";

export async function getStaticProps() {
  let restaurants = await fetchRestaurants();

  return {
    props: {
      restaurants,
    },
  };
}

const MainPage = ({ restaurants }) => {
  return (
    <>
      <Header withCart={false} />
      <Container maxW="4xl" mt={["3rem", null, "4rem"]}>
        <Box>
          <Heading py={[4, null, 10]} fontSize={["md", null, "xl"]}>
            Restaurants
          </Heading>
          <Stack spacing="10" mb="10">
            {restaurants.map(
              (
                { name, description, image, isWorking, uid, workingHours },
                index
              ) => (
                <NextLink
                  key={"restaurant-item-" + index}
                  href={`/restaurants/${uid}`}
                >
                  <a>
                    <RestaurantCard
                      name={name}
                      description={description}
                      image={image}
                      isWorking={isWorking}
                      workingHours={workingHours}
                    />
                  </a>
                </NextLink>
              )
            )}
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default MainPage;
