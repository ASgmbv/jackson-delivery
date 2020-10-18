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
} from "@chakra-ui/core";
import useCartStore from "../utils/hooks/useCartStore";
import Header from "../components/Header";
import CheckoutItem from "../components/CheckoutItem/index";
import { calculateExtra } from "../utils/calculateExtra";
import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import Link from "next/link";

const itemsSelector = (state) => state.items;

const Checkout = () => {
  const items = useCartStore(itemsSelector);
  const [tipAmount, setTipAmount] = useState(10);
  const [isDelivery, setDelivery] = useState(true);

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
    <>
      <Header isWithCart={false} />
      {items.length === 0 ? (
        <Flex flexDir="column" alignItems="center" py="6">
          <Text>Card is empty</Text>
          <SearchIcon />
        </Flex>
      ) : (
        <Container maxW="sm">
          <Heading as="h1" fontSize="3xl" mt="12">
            Cart
          </Heading>
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
            <FormLabel htmlFor="tip" my="auto" fontWeight="bold" fontSize="lg">
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
                <option key={"tip-" + i} value={i + 10}>{`${i + 10} %`}</option>
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
              <Link href="/order" passHref>
                <Button as="a" colorScheme="orange" size="lg">
                  Proceed
                </Button>
              </Link>
            </Flex>
          </Stack>

          {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}

          <Box my="100px" />
        </Container>
      )}
    </>
  );
};

export default Checkout;
