import {
  Flex,
  Image,
  Stack,
  Text,
  HStack,
  Input,
  Button,
  IconButton,
} from "@chakra-ui/core";
import Counter from "./Counter";
import { CloseIcon } from "@chakra-ui/icons";
import useCartStore from "../utils/hooks/useCartStore";

// two cases breakfast vs other

// title, description, price, image, id, quantity
// eggsType, meatType, toastType, crispy, note

const removeItemSelector = (state) => state.removeItem;
const addItemSelector = (state) => state.addItem;
const clearItemSelector = (state) => state.clearItem;
const itemsSelector = (state) => state.items;

const CheckoutItem = ({ data }) => {
  const removeItem = useCartStore(removeItemSelector);
  const addItem = useCartStore(addItemSelector);
  const items = useCartStore(itemsSelector);
  const clearItem = useCartStore(clearItemSelector);
  const { image, title, description, quantity } = data;

  const totalPrice = Math.round(data.quantity * data.price * 100) / 100;

  return (
    <Flex alignItems="center">
      <Image
        src={image}
        boxSize="64px"
        objectFit="cover"
        alt={title}
        alignSelf="flex-start"
      />
      <Stack flex="1" mx="4" spacing="2">
        <Text fontWeight="500" fontSize="lg">
          {title}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {description}
        </Text>
        {data.eggsType && (
          <>
            <Flex flexDir="column">
              <Text fontSize="xs" color="gray.500">
                {"eggs type"}
              </Text>
              <Text fontSize="sm">{data.eggsType}</Text>
            </Flex>

            <Flex flexDir="column">
              <Text fontSize="xs" color="gray.500">
                {"meat type"}
              </Text>
              <Text fontSize="sm">{data.meatType}</Text>
            </Flex>

            <Flex flexDir="column">
              <Text fontSize="xs" color="gray.500">
                {"toast substitute"}
              </Text>
              <Text fontSize="sm">{data.toastSub}</Text>
            </Flex>

            <Flex flexDir="column">
              <Text fontSize="xs" color="gray.500">
                {"crispy hashbrown"}
              </Text>
              <Text fontSize="sm">{data.crispy}</Text>
            </Flex>

            <Flex flexDir="column">
              <Text fontSize="xs" color="gray.500">
                {"additional note"}
              </Text>
              <Text fontSize="sm">{data.note}</Text>
            </Flex>
          </>
        )}
      </Stack>
      <Counter
        value={quantity}
        onDec={() => removeItem(data)}
        onInc={() => addItem(data)}
        alignSelf="flex-start"
        my="10px"
      />
      <Text
        alignSelf="flex-start"
        fontWeight="500"
        my="17px"
        width="80px"
        textAlign="center"
      >
        {"$ " + totalPrice}
      </Text>
      <IconButton
        onClick={() => {
          clearItem(data);
        }}
        icon={<CloseIcon />}
        alignSelf="flex-start"
        my="10px"
      />
    </Flex>
  );
};

export default CheckoutItem;
