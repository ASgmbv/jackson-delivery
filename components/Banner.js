import { Box, Flex, Container, Text, Heading } from "@chakra-ui/core";
import Image from "next/image";

const Banner = (params) => {
  return (
    <Container maxW="md" d="flex">
      <Image src="/abdurahman.jpg" alt="temp" width="300" height="300" />
    </Container>
  );
};

<Flex>
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
    Place you Special order in Advance. Pick yp and Delivery order required at
    least 30 - 45 minutes. Hoping for your understanding!
  </Text>
</Flex>;

export default Banner;
