import { Box, Container, Text, Heading } from "@chakra-ui/core";

const Banner = (params) => {
  return (
    <Container maxW="md">
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
        Place you Special order in Advance. Pick yp and Delivery order required
        at least 30 - 45 minutes. Hoping for your understanding!
      </Text>
    </Container>
  );
};

export default Banner;
