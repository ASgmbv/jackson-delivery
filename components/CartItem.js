/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Text, Flex, IconButton } from "@chakra-ui/react";
import useCartStore from "../utils/hooks/useCartStore";
import { CloseIcon } from "@chakra-ui/icons";
import Counter from "./Counter";

const removeItemSelector = (state) => state.removeItem;
const addItemSelector = (state) => state.addItem;
const clearItemSelector = (state) => state.clearItem;

const CartItem = ({ data }) => {
  const removeItem = useCartStore(removeItemSelector);
  const addItem = useCartStore(addItemSelector);
  const clearItem = useCartStore(clearItemSelector);

  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Text fontWeight="500">{data.title}</Text>
        <IconButton
          icon={<CloseIcon boxSize="3" />}
          onClick={() => {
            clearItem(data);
          }}
        />
      </Flex>
      <Flex
        sx={{ alignItems: "center", justifyContent: "space-between", mt: 2 }}
      >
        <Counter
          value={data.quantity}
          onDec={() => removeItem(data)}
          onInc={() => addItem(data)}
        />

        <Text fontWeight="500">
          {"$ " + Math.round(data.quantity * data.totalPrice * 100) / 100}
        </Text>
      </Flex>
    </Flex>
  );
};

export default CartItem;
