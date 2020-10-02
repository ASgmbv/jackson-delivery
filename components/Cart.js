import { Button, Text, Flex, Stack, StackDivider } from "@chakra-ui/core";
import useCartStore from "../utils/hooks/useCartStore";
import CartItem from "./CartItem";
import Link from "next/link";
import { SearchIcon, DeleteIcon } from "@chakra-ui/icons";
import { calculateExtra } from "../utils/calculateExtra";

const itemsSelector = (state) => state.items;

const Cart = (params) => {
  const items = useCartStore(itemsSelector);

  // wrap in useCallback for performance
  const temp = items.reduce((sum, item) => {
    const { quantity, price } = item;

    return sum + quantity * (price + calculateExtra(item));
  }, 0);

  const totalSum = Math.round(temp * 100) / 100;

  if (items.length === 0) {
    return (
      <Flex flexDir="column" alignItems="center" py="6">
        <Text>Card is empty</Text>
        <SearchIcon />
      </Flex>
    );
  }

  return (
    <Stack
      p="2"
      divider={<StackDivider borderColor="gray.200" align="stretch" />}
    >
      {items.map((item, index) => (
        <CartItem data={item} key={index} />
      ))}
      <Flex alignItems="center" justifyContent="space-between" py="3">
        <Link href="/checkout" passHref>
          <Button colorScheme="orange" variant="outline">
            To checkout
          </Button>
        </Link>
        <Text fontSize="lg" fontWeight="500">
          {"$ " + totalSum}
        </Text>
      </Flex>
    </Stack>
  );
};
export default Cart;
