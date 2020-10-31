import {
  Container,
  Heading,
  Divider,
  Box,
  Stack,
  StackDivider,
  Text,
  Select,
  FormLabel,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/core";
import useCartStore from "../utils/hooks/useCartStore";
import Header from "../components/Header";
import CheckoutItem from "../components/CheckoutItem/index";
import { calculateExtra } from "../utils/calculateExtra";
import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import Layout from "../components/Layout";

const itemsSelector = (state) => state.items;

const promise = loadStripe("pk_test_bXqaZTFq5jzyuGVIgzPA9Drp00FnXivkFg");

const Checkout = () => {
  const items = useCartStore(itemsSelector);
  const [tipAmount, setTipAmount] = useState(15);
  const [isDelivery, setDelivery] = useState(true);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const order =
    Math.round(
      items.reduce((sum, item) => {
        const { price, quantity } = item;
        const extra = calculateExtra(item);

        return sum + (price + extra) * quantity;
      }, 0) * 100
    ) / 100;

  const delivery = isDelivery ? 7 : 0;

  const tax = Math.round((order + delivery) * 6.5) / 100;

  const tip = Math.round((order + delivery) * tipAmount) / 100;

  const total = Math.round((order + tax + delivery + tip) * 100) / 100;

  return (
    <Layout title="checkout" withHeader={false}>
      {items.length === 0 ? (
        <Flex flexDir="column" alignItems="center" py="6">
          <Text>Card is empty</Text>
          <SearchIcon />
        </Flex>
      ) : (
        <>
          <Heading as="h2" fontSize="2xl" fontWeight="600" py="6">
            Cart
          </Heading>
          <Container maxW="sm">
            <Divider my="6" />
            <Stack
              spacing="8"
              divider={<StackDivider borderColor="gray.200" align="stretch" />}
            >
              {items.map((item, index) => (
                <CheckoutItem key={index} {...item} />
              ))}
            </Stack>
            <Divider my="6" />

            <Flex>
              <FormLabel
                htmlFor="tip"
                my="auto"
                fontWeight="bold"
                fontSize="lg"
              >
                Tip:
              </FormLabel>
              <Select
                name="tip"
                value={tipAmount}
                onChange={(e) => {
                  setTipAmount(e.target.value);
                }}
              >
                {[...new Array(16)].map((_, i) => (
                  <option key={"tip-" + i} value={i + 15}>{`${
                    i + 15
                  } %`}</option>
                ))}
              </Select>
              <Select
                value={isDelivery}
                onChange={(e) => {
                  setDelivery(Number(e.target.value));
                }}
                ml="4"
              >
                <option value={1}>Delivery</option>
                <option value={0}>Pick up</option>
              </Select>
            </Flex>

            <Divider my="6" />

            <Stack spacing="4">
              <Heading as="h2" fontSize="xl">
                {"Order: "}
                <Text as="span" color="#FF6901">
                  ${order}
                </Text>
              </Heading>
              {isDelivery ? (
                <>
                  <Heading as="h2" fontSize="xl">
                    {"Delivery: "}
                    <Text as="span" color="#FF6901">
                      ${delivery}
                    </Text>
                  </Heading>
                  <Heading as="h2" fontSize="xl">
                    {"Subtotal: "}
                    <Text as="span" color="#FF6901">
                      ${order + delivery}
                    </Text>
                  </Heading>
                </>
              ) : null}
              <Heading as="h2" fontSize="xl">
                {"Tax: "}
                <Text as="span" color="#FF6901">
                  ${tax}
                </Text>
              </Heading>
              <Heading as="h2" fontSize="xl">
                {"Tip: "}
                <Text as="span" color="#FF6901">
                  ${tip}
                </Text>
              </Heading>
              <Divider />
              <Flex alignItems="center" justifyContent="space-between">
                <Heading as="h2" fontSize="2xl">
                  {"Total: "}
                  <Text as="span" color="#FF6901">
                    ${total}
                  </Text>
                </Heading>
                <Button as="a" colorScheme="orange" size="lg" onClick={onOpen}>
                  Proceed
                </Button>
              </Flex>
            </Stack>

            <Modal
              isOpen={isOpen}
              onClose={onClose}
              size="xl"
              isCentered
              scrollBehavior={"inside"}
            >
              <ModalOverlay>
                <ModalContent>
                  <ModalHeader
                    sx={{
                      borderBottom: "1px solid",
                      borderColor: "gray.100",
                    }}
                  >
                    Details
                  </ModalHeader>
                  <ModalBody>
                    <ModalCloseButton />
                    <Elements stripe={promise}>
                      <CheckoutForm
                        total={total}
                        order={order}
                        delivery={delivery}
                        tax={tax}
                        tip={tip}
                        isDelivery={isDelivery}
                      />
                    </Elements>
                  </ModalBody>
                </ModalContent>
              </ModalOverlay>
            </Modal>

            <Box my="100px" />
          </Container>
        </>
      )}
    </Layout>
  );
};

export default Checkout;
