/* eslint-disable react/react-in-jsx-scope */
import { Flex, Text, Heading, Container } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Flex
      mt={["3rem", null, "4rem"]}
      w="full"
      backgroundColor="rgba(0, 0, 0, 0.5)"
      backgroundImage="url('/bg.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height={["130px", null, "200px"]}
      position="relative"
    >
      <Flex
        position="absolute"
        sx={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          bg: [
            "rgba(0,0,0,0.4)",
            null,
            "linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 78%)",
          ],
        }}
      >
        <Container maxW="7xl">
          <Heading
            fontSize={["2xl", null, "5xl"]}
            textAlign={["start"]}
            w="100%"
            as="h1"
            color="white"
            mb="2"
          >
            The Bunnery restaurant
          </Heading>
          <Text
            color="white"
            textAlign={["start"]}
            fontWeight="bold"
            fontSize={["xs", null, "sm"]}
            lineHeight="tall"
          >
            Place you Special order in Advance. Pick Up and Delivery order
            required
            <br />
            at least 30 - 45 minutes. Hoping for your understanding!
          </Text>
        </Container>
      </Flex>
    </Flex>
  );
};

export default Banner;
