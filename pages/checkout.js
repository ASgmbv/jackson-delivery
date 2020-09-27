import {
  Container,
  Heading,
  Divider,
  Box,
  Stack,
  StackDivider,
} from "@chakra-ui/core";
import useCartStore from "../utils/hooks/useCartStore";
import Header from "../components/Header";
import CheckoutItem from "../components/CheckoutItem";

const itemsSelector = (state) => state.items;

// is breakfast

const Checkout = () => {
  const items = useCartStore(itemsSelector);

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
            <CheckoutItem key={index} data={item} />
          ))}
        </Stack>
        <pre>{JSON.stringify(items, null, 2)}</pre>
      </Container>
    </>
  );
};

export default Checkout;
