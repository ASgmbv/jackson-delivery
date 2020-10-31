import {
  Heading,
  Text,
  Flex,
  Image,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/core";
import Dish from "../assets/icons/Dish";
import Details from "../components/Details/index.js";

const MenuItem = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    title = "",
    description = "",
    price = 0,
    image = "/pizza.png",
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
        <Text
          as="span"
          fontSize="22px"
          fontWeight="500"
          fontFamily="Montserrat"
        >
          $ {price}
        </Text>

        <Button onClick={onOpen} variant="outline" colorScheme="orange">
          Select
        </Button>

        <Modal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
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
  return (
    <Image
      alt={title}
      src={image}
      boxSize={["70px", "100px"]}
      // display={["none", "block"]}
      fallback={
        <Dish
          fill="#EDEEF2"
          style={{
            width: "70px",
            height: "70px",
          }}
        />
      }
      _hover={{
        top: "5px",
      }}
    />
  );
};

export default MenuItem;
