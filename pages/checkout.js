import {
  Container,
  Heading,
  Divider,
  Box,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/core";
import useCartStore from "../utils/hooks/useCartStore";
import Header from "../components/Header";
import CheckoutItem from "../components/CheckoutItem/index";

const itemsSelector = (state) => state.items;

const Checkout = () => {
  const items = useCartStore(itemsSelector);

  const total =
    Math.round(
      items.reduce((sum, { price, quantity }) => {
        return sum + price * quantity;
      }, 0) * 100
    ) / 100;

  return (
    <>
      <Header isWithCart={false} />
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
        <Text>Total</Text>
        <Text>{total}</Text>

        <pre>{JSON.stringify(items, null, 2)}</pre>
      </Container>
    </>
  );
};

export default Checkout;
