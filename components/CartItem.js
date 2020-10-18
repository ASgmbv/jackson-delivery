import { Text, Flex, IconButton } from "@chakra-ui/core";
import useCartStore from "../utils/hooks/useCartStore";
import { CloseIcon } from "@chakra-ui/icons";
import Counter from "./Counter";
import { calculateExtra } from "../utils/calculateExtra";

const removeItemSelector = (state) => state.removeItem;
const addItemSelector = (state) => state.addItem;
const clearItemSelector = (state) => state.clearItem;

const CartItem = ({ data }) => {
  const removeItem = useCartStore(removeItemSelector);
  const addItem = useCartStore(addItemSelector);
  const clearItem = useCartStore(clearItemSelector);

  const totalPrice =
    Math.round(data.quantity * (data.price + calculateExtra(data)) * 100) / 100;

  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Text fontWeight="500">{data.title}</Text>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
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

        <Text fontWeight="500">{"$ " + totalPrice}</Text>
      </Flex>
    </Flex>
  );
};

export default CartItem;
