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
  AspectRatio,
} from "@chakra-ui/react";
import Details from "../Details/index.js";
import NextImage from "next/image";
import { Search2Icon } from "@chakra-ui/icons";

const MenuItem = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: imageOpen,
    onOpen: onImageOpen,
    onClose: onImageClose,
  } = useDisclosure();

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
        <Box
          border="3px solid"
          borderColor="gray.200"
          width="100px"
          height="100px"
          mr="4"
          position="relative"
          onClick={onImageOpen}
        >
          <NextImage alt={title} src={image} layout="fill" objectFit="cover" />
          <Search2Icon
            position="absolute"
            bottom="0.5rem"
            right="0.5rem"
            color="gray.500"
          />
        </Box>

        <Modal
          isOpen={imageOpen}
          onClose={onImageClose}
          size={"xl"}
          blockScrollOnMount={true}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
              sx={{
                borderBottom: "1px solid",
                borderColor: "gray.100",
              }}
            >
              <Heading size="sm">{title}</Heading>

              <ModalCloseButton />
            </ModalHeader>
            <ModalBody p="0">
              <AspectRatio width="100%" ratio={1}>
                <NextImage
                  alt={title}
                  src={image}
                  layout="fill"
                  objectFit="cover"
                />
              </AspectRatio>
            </ModalBody>
          </ModalContent>
        </Modal>

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
};

export default MenuItem;
