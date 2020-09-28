import {
  Heading,
  Text,
  Flex,
  Image,
  AspectRatio,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Fade,
  ModalCloseButton,
  FormLabel,
  Select,
  Textarea,
  useToast,
} from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import useCartStore from "../utils/hooks/useCartStore";
import Dish from "../assets/icons/Dish";

const addItemSelector = (state) => state.addItem;
// const itemsSelector = (state) => state.items;

const MenuItem = ({
  title = "",
  description = "",
  price = 0,
  image = "/pizza.png",
  id,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmit, errors, register } = useForm();
  const toast = useToast();
  const addItem = useCartStore(addItemSelector);

  function onSubmit(values) {
    console.log({ values });
    addItem({ title, description, price, image, id, ...values });
    onClose();
    toast({
      position: "bottom-right",
      title: "Item added to cart.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }

  return (
    <Flex
      flexDir="column"
      sx={{
        cursor: "pointer",
      }}
    >
      <AspectRatio
        ratio="1"
        width="100%"
        sx={{
          position: "relative",
        }}
      >
        <Image
          sx={{ width: "100%" }}
          alt={title}
          src={image}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            transition: "all 150ms ease-out 0s",
          }}
          fallback={
            <Dish
              fill="#EDEEF2"
              style={{
                width: "80%",
                height: "80%",
                margin: "auto",
              }}
            />
          }
          _hover={{
            top: "5px",
          }}
        />
      </AspectRatio>

      <Heading as="h3" fontSize="xl" fontWeight="500" my="2" isTruncated>
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
          {price} сом
        </Text>

        <Button onClick={onOpen} variant="outline" colorScheme="orange">
          Выбрать
        </Button>

        <Fade timeout={300} in={isOpen}>
          {(styles) => {
            return (
              <Modal
                isOpen={isOpen}
                onClose={onClose}
                size={"xl"}
                scrollBehavior={"inside"}
                isCentered
              >
                <ModalOverlay style={styles}>
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
                      <form
                        name="form"
                        id="form"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <FormLabel htmlFor="eggsType">
                          How would you like your eggs to be cooked?
                        </FormLabel>
                        <Select
                          name="eggsType"
                          ref={register({ required: true })}
                        >
                          <option>Over easy</option>
                          <option>Over medium</option>
                          <option>Over hard</option>
                          <option>Scramble</option>
                          <option>Scramble soft</option>
                          <option>Scramble hard</option>
                          <option>Egg white</option>
                          <option>Egg beafers</option>
                          <option>Sunny side up</option>
                          <option>No eggs</option>
                        </Select>

                        <FormLabel htmlFor="meatType" mt="6">
                          What would you like for your order?
                        </FormLabel>
                        <Select
                          name="meatType"
                          ref={register({ required: true })}
                        >
                          <option>Bacon</option>
                          <option>Sausage</option>
                          <option>Hamstack</option>
                          <option>Crispy bacon</option>
                          <option>Deli ham</option>
                          <option>Salmon</option>
                          <option>No meat</option>
                        </Select>

                        <FormLabel htmlFor="toastSub" mt="6">
                          Would you substitute your toast for additional charge?
                        </FormLabel>
                        <Select
                          name="toastSub"
                          ref={register({ required: true })}
                        >
                          <option>No</option>
                          <option>OSM bread - 0.00$</option>
                          <option>White bread + 1.25$</option>
                          <option>Cinnamon raisin + 1.25$</option>
                          <option>Butter croissant + 1.75$</option>
                          <option>Rustic dye bread + 0.00$</option>
                        </Select>

                        <FormLabel htmlFor="crispy" mt="6">
                          Would you like crispy hushbrown?
                        </FormLabel>
                        <Select
                          name="crispy"
                          ref={register({ required: true })}
                        >
                          <option>No</option>
                          <option>Yes</option>
                        </Select>

                        <FormLabel htmlFor="note" mt="6">
                          Additional note for chef?
                        </FormLabel>
                        <Textarea name="note" id="note" ref={register()} />
                      </form>
                    </ModalBody>
                    <ModalFooter
                      sx={{ borderTop: "1px solid", borderColor: "gray.100" }}
                    >
                      <Button colorScheme="orange" type="submit" form="form">
                        Add to cart
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </ModalOverlay>
              </Modal>
            );
          }}
        </Fade>
      </Flex>
    </Flex>
  );
};

export default MenuItem;
