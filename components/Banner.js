/* eslint-disable react/react-in-jsx-scope */
import { Flex, Text, Heading } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Flex
      mt={["3rem", null, "4.5rem"]}
      w="full"
      backgroundColor="rgba(0, 0, 0, 0.5)"
      backgroundImage="url('/bg.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height={["350px", "400px", "450px"]}
      position="relative"
    >
      <Flex
        position="absolute"
        sx={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "column",
          bg: [
            "rgba(0,0,0,0.4)",
            // "rgba(1,34,102,0.4)",
            null,
            "linear-gradient(90deg, rgba(1,34,102,0.5956757703081232) 0%, rgba(0,0,0,0) 58%)",
          ],
          p: [0, null, "70px"],
        }}
      >
        <Heading
          fontSize={["3xl", null, "5xl"]}
          textAlign={["center", null, "start"]}
          w="100%"
          as="h1"
          color="white"
          mb="4"
        >
          The Bunnery restaurant
        </Heading>
        <Text
          color="white"
          w="100%"
          textAlign={["center", null, "start"]}
          fontWeight="bold"
          fontSize={["md", null, "xl"]}
          lineHeight="tall"
        >
          Place you Special order in Advance.
          <br />
          Pick Up and Delivery order required
          <br />
          at least 30 - 45 minutes.
          <br />
          Hoping for your understanding!
        </Text>
      </Flex>
    </Flex>
  );

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
