/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import {
  Heading,
  Divider,
  Box,
  Stack,
  StackDivider,
  Text,
  Select,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
  useRadio,
  useRadioGroup,
  HStack,
} from "@chakra-ui/react";
import useCartStore from "../utils/hooks/useCartStore";
import CheckoutItem from "../components/CheckoutItem/index";
import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import Layout from "../components/Layout";

const itemsSelector = (state) => state.items;

const promise = loadStripe("pk_live_4oQ0np4hyAvdGF9rbAFFyLcX009WIELd7g");

const DELIVERY_FEE = 10;
const TAX_RATE = 6.05;

const Checkout = () => {
  const items = useCartStore(itemsSelector);
  const [tipAmount, setTipAmount] = useState(15);
  const [isDelivery, setDelivery] = useState("Delivery");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const order =
    Math.round(
      items.reduce((sum, item) => {
        const { totalPrice, quantity } = item;

        return sum + totalPrice * quantity;
      }, 0) * 100
    ) / 100;

  const delivery = isDelivery === "Delivery" ? DELIVERY_FEE : 0;

  const tax = Math.round((order + delivery) * TAX_RATE) / 100;

  const tip = Math.round((order + delivery) * tipAmount) / 100;

  const total = Math.round((order + tax + delivery + tip) * 100) / 100;

  return (
    <Layout title="checkout" withHeader={false} maxW="2xl">
      {items.length === 0 ? (
        <Flex flexDir="column" alignItems="center" py="6">
          <Text>Card is empty</Text>
          <SearchIcon />
        </Flex>
      ) : (
        <>
          <Heading as="h2" size="xl" fontWeight="600" py="6">
            Cart
          </Heading>

          <Divider my="6" />
          <Stack
            spacing="8"
            divider={<StackDivider borderColor="gray.200" align="stretch" />}
          >
            {items.map((item, index) => {
              console.dir({ item }, { depth: null });

              return <CheckoutItem key={index} data={item} />;
            })}
          </Stack>
          <Divider my="6" />

          <Flex flexDir="column" alignItems="center">
            <DeliveryGroup onChange={setDelivery} value={isDelivery} />
          </Flex>

          <Divider my="6" />

          <Stack spacing="4">
            <Pricing title="Order" value={order} />

            {isDelivery === "Delivery" ? (
              <>
                <Pricing title="Delivery" value={delivery} />
                <Pricing title="Subtotal" value={order + delivery} />
              </>
            ) : null}
            <Pricing title="Tax" value={tax} />
            <Flex alignItems="center">
              <Pricing title="Tip" value={tip} />
              <Select
                name="tip"
                value={tipAmount}
                ml="6"
                w="100px"
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
            </Flex>

            <Divider />
            <Flex alignItems="center" justifyContent="space-between">
              <Pricing title="Total" value={total} />
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
        </>
      )}
    </Layout>
  );
};

const Pricing = ({ title, value, ...props }) => {
  return (
    <Heading fontWeight="600" as="h2" size="md" {...props}>
      {`${title}: `}
      <Text as="span" color="#FF6901">
        {`$${value}`}
      </Text>
    </Heading>
  );
};

const DeliveryRadio = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();
  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};

const DeliveryGroup = (props) => {
  const optns = ["Delivery", "Pick Up"];
  const { getRootProps, getRadioProps } = useRadioGroup(props);

  const group = getRootProps();

  return (
    <HStack {...group}>
      {optns.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <DeliveryRadio key={value} {...radio}>
            {value}
          </DeliveryRadio>
        );
      })}
    </HStack>
  );
};

export default Checkout;
