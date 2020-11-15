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
  ModalCloseButton,
} from "@chakra-ui/react";
import Details from "../components/Details/index.js";
import NextImage from "next/image";

const MenuItem = (props) => {
  // console.log({ props });
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
      flexDir={["column"]}
      sx={{
        cursor: "pointer",
      }}
    >
      <ItemImage title={title} image={image} />

      <Heading as="h3" fontSize="lg" fontWeight="500" my="2" isTruncated>
        {title}
      </Heading>

      <Text fontSize="sm" lineHeight="20px" color="gray.500" mb="4">
        {description}
      </Text>

      <Flex justifyContent="space-between" alignItems="center" mt="auto">
        <Text as="span" fontSize="xl" fontWeight="500" fontFamily="Montserrat">
          $ {price}
        </Text>

        <Button onClick={onOpen} variant="outline" colorScheme="orange">
          Select
        </Button>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={"xl"}
          blockScrollOnMount={true}
          // isCentered
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

const ItemImage = ({ title, image }) => {
  return <NextImage alt={title} src={image} width="70" height="70" />;
};

export default MenuItem;
