/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Heading, Flex } from "@chakra-ui/react";
import useCartStore from "../../utils/hooks/useCartStore";
import Counter from "../Counter";
import Trash from "../../assets/icons/Trash";

const removeItemSelector = (state) => state.removeItem;
const addItemSelector = (state) => state.addItem;
const clearItemSelector = (state) => state.clearItem;

const CartItem = ({ data }) => {
  const removeItem = useCartStore(removeItemSelector);
  const addItem = useCartStore(addItemSelector);
  const clearItem = useCartStore(clearItemSelector);

  return (
    <Flex py="6">
      <Flex flex="1" flexDirection="column">
        <Heading size="xs" mb="4">
          {data.title}
        </Heading>
        <Counter
          value={data.quantity}
          onDec={() => removeItem(data)}
          onInc={() => addItem(data)}
        />
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <span>
          {"$ " + Math.round(data.quantity * data.totalPrice * 100) / 100}
        </span>
        <button
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
          onClick={() => {
            clearItem(data);
          }}
        >
          <Trash />
        </button>
      </Flex>
    </Flex>
  );
};

export default CartItem;
