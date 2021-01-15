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
    <Flex flexDirection="column">
      <span>{title}</span>
      <Box overflow="hidden">
        <Text>{description}</Text>
      </Box>
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
    </Flex>
  );
};

export default MenuItem;
