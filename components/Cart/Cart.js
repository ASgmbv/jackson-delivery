/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Button, Text, Flex, Stack, StackDivider } from "@chakra-ui/react";
import CartItem from "./CartItem";
import Link from "next/link";
import { SearchIcon } from "@chakra-ui/icons";
import useCartStore from "../../utils/hooks/useCartStore";
import useRestaurant from "../../utils/hooks/useRestaurant";

const itemsSelector = (state) => state.items;
const setRestaurantSelector = (state) => state.setRestaurant;

const Cart = ({ restaurant }) => {
  const items = useCartStore(itemsSelector);
  const setRestaurant = useRestaurant(setRestaurantSelector);

  const temp = items.reduce((sum, item) => {
    const { quantity, totalPrice } = item;
    return sum + quantity * totalPrice;
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
    <Stack divider={<StackDivider borderColor="gray.200" align="stretch" />}>
      {items.map((item, index) => (
        <CartItem data={item} key={"cartItem-" + index} />
      ))}
      <Flex alignItems="center" justifyContent="space-between" py="3">
        <Link href="/checkout" passHref>
          <Button
            colorScheme="orange"
            size="sm"
            borderRadius="0"
            variant="outline"
            onClick={() => {
              setRestaurant(restaurant ? { ...restaurant } : {});
            }}
          >
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
