/* eslint-disable react/react-in-jsx-scope */
import { Flex, Text, Heading } from "@chakra-ui/core";

const Banner = () => {
  return (
    <Flex flexDir="column">
      <Heading
        as="h2"
        fontSize="3xl"
        fontWeight="600"
        textAlign="center"
        pt="10"
        mb="4"
      >
        The Bunnery restaurant
      </Heading>

      <Text
        maxW="800px"
        textAlign="center"
        mx="auto"
        fontSize="lg"
        // fontWeight="500"
        mb="10"
      >
        Place you Special order in Advance. Pick Up and Delivery order required
        at least 30 - 45 minutes. Hoping for your understanding!
      </Text>
    </Flex>
  );
};

export default Banner;
