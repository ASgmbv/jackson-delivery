import {
  Box,
  Container,
  Button,
  Text,
  Flex,
  IconButton,
  Stack,
  StackDivider,
  HStack,
  Input,
  useNumberInput,
} from "@chakra-ui/core";
import useCartStore from "../utils/hooks/useCartStore";
import { DeleteIcon, SearchIcon, CloseIcon } from "@chakra-ui/icons";
import Counter from "./Counter";
import { calculateExtra } from "../utils/calculateExtra";

const removeItemSelector = (state) => state.removeItem;
const addItemSelector = (state) => state.addItem;
const clearItemSelector = (state) => state.clearItem;
const itemsSelector = (state) => state.items;

const CartItem = ({ data }) => {
  const removeItem = useCartStore(removeItemSelector);
  const addItem = useCartStore(addItemSelector);
  const items = useCartStore(itemsSelector);
  const clearItem = useCartStore(clearItemSelector);

  const totalPrice =
    Math.round(data.quantity * (data.price + calculateExtra(data)) * 100) / 100;

  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Text fontWeight="500">{data.title}</Text>
        <IconButton
          onClick={() => {
            clearItem(data);
          }}
          icon={<CloseIcon />}
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
