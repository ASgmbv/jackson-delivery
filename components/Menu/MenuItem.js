/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import {
  Heading,
  Text,
  Flex,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Box,
  ModalCloseButton,
} from "@chakra-ui/react";
import Details from "../Details/index.js";
import NextImage from "next/image";

const MenuItem = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    title = "",
    description = "",
    price = 0,
    image = "/pizza.png",
    sliseZone = [],
  } = props;

  return (
    <Flex
      flexDirection="column"
      overflow="hidden"
      boxShadow="lg"
      p="3"
      border="1px solid"
      borderColor="gray.300"
    >
      <Flex flex="1" mb="3">
        <Box width="100px" height="100px" mr="4" position="relative">
          <NextImage alt={title} src={image} layout="fill" objectFit="cover" />
        </Box>
        <Flex flexDirection="column" flex="1" overflow="hidden">
          <Heading size="xs" mb="2">
            {title}
          </Heading>
          <Box>
            <Text fontSize="sm">{description}</Text>
          </Box>
        </Flex>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={"xl"}
          blockScrollOnMount={true}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
              sx={{
                borderBottom: "1px solid",
                borderColor: "gray.100",
              }}
            >
              {title}
              <ModalCloseButton />
            </ModalHeader>
            <ModalBody>
              <Details {...props} onClose={onClose} />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="orange" type="submit" form="form">
                Add to cart
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading size="sm" fontWeight="600">
          $ {price}
        </Heading>
        <Button
          onClick={onOpen}
          colorScheme="orange"
          borderRadius="0"
          size="sm"
        >
          Select
        </Button>
      </Flex>
    </Flex>
  );

  return (
    <Flex flexDir={["column"]} width="100%" mb="16">
      <NextImage
        alt={title}
        src={image}
        width="350"
        height="200"
        className="nextimage"
      />

      <Heading as="h3" size="lg" fontWeight="500" my="2" color="orange.500">
        {title}
      </Heading>

      <Text
        fontSize="md"
        color="gray.500"
        mb="4"
        letterSpacing="wide"
        lineHeight="base"
      >
        {description}
      </Text>

      <Flex justifyContent="space-between" alignItems="center" mt="auto">
        <Heading size="lg" fontWeight="600">
          $ {price}
        </Heading>

        <Button
          onClick={onOpen}
          colorScheme="orange"
          borderRadius="0"
          size="lg"
        >
          Select
        </Button>
      </Flex>
    </Flex>
  );
};

export default MenuItem;
