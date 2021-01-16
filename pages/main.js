import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const restaurants = ["/bg.jpg", "/dish.png", "/pizza.png", "/taxi.png"];

const MainPage = () => {
  return (
    <Container maxW="4xl" bg="blue.100">
      <Box>
        <Heading mb="10">Restaurants</Heading>
        <Stack spacing="10" mb="10">
          {restaurants.map((restaurant, index) => (
            <Box
              key={index}
              backgroundImage={`url(${restaurant})`}
              backgroundPosition="center"
              backgroundSize="cover"
              position="relative"
              borderRadius="10px"
              overflow="hidden"
              height={["200px", null, "400px"]}
            >
              <Flex
                position="absolute"
                justifyContent="center"
                flexDirection="column"
                p={[4, null, 10]}
                top="0"
                left="0"
                height="100%"
                width="100%"
                backgroundImage="linear-gradient(180deg,transparent 25%,rgba(0,0,0,.7) 69%,rgba(0,0,0,.8)),linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.1));"
              >
                <Heading fontSize={["md", null, "2xl"]} color="white" mb="4">
                  {restaurant}
                </Heading>
                <Text fontSize={["sm", null, "md"]} color="white">
                  this is description
                </Text>
              </Flex>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default MainPage;
