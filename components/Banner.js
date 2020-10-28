import { Box, Container, Text, Heading } from "@chakra-ui/core";

const Banner = (params) => {
  return (
    <Container maxW="md">
      <Heading
        fontSize="3xl"
        fontWeight="bold"
        textAlign="center"
        my="10"
        color="blue.700"
      >
        The Bunnery restaurant
      </Heading>

      <Text
        my="10"
        maxW="800px"
        textAlign="center"
        mx="auto"
        fontSize="lg"
        fontWeight="500"
      >
        Place you Special order in Advance. Pick yp and Delivery order required
        at least 30 - 45 minutes. Hoping for your understanding!
      </Text>
    </Container>
  );
};

export default Banner;
