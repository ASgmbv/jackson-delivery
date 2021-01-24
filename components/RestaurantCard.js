/* eslint-disable react/prop-types */
import React from "react";
import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";

const RestaurantCard = ({ image, name, workingHours }) => {
  return (
    <Box
      backgroundImage={`url(${image})`}
      backgroundPosition="center"
      backgroundSize="cover"
      position="relative"
      borderRadius="10px"
      overflow="hidden"
      height={["200px", null, "300px"]}
      boxShadow="lg"
    >
      <Flex
        position="absolute"
        justifyContent="flex-end"
        flexDirection="column"
        p={[3, null, 10]}
        top="0"
        left="0"
        height="100%"
        width="100%"
        backgroundImage="linear-gradient(180deg,transparent 25%,rgba(0,0,0,.7) 69%,rgba(0,0,0,.8)),linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.1));"
      >
        <Heading mb="4" fontSize={["sm", null, "2xl"]} color="white">
          {name}
        </Heading>
        <Text fontSize={["sm", null, "md"]} color="white">
          {`Working hours: ${workingHours}`}
        </Text>
      </Flex>
    </Box>
  );
};

export default RestaurantCard;
