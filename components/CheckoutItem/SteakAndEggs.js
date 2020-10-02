import { Flex, Image, Stack, Text, IconButton } from "@chakra-ui/core";
import Counter from "../Counter";
import { CloseIcon } from "@chakra-ui/icons";
import useCartStore from "../../utils/hooks/useCartStore";

const removeItemSelector = (state) => state.removeItem;
const addItemSelector = (state) => state.addItem;
const clearItemSelector = (state) => state.clearItem;

const SteakAndEggs = (props) => {
  const removeItem = useCartStore(removeItemSelector);
  const addItem = useCartStore(addItemSelector);
  const clearItem = useCartStore(clearItemSelector);
  const {
    image,
    title,
    description,
    eggsType,
    cheeseType,
    quantity,
    price,
    meatType,
    toastSub,
    note,
    steakType,
  } = props;

  const totalPrice = Math.round(quantity * price * 100) / 100;

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

        <Property title="Egg type" value={eggsType} />

        {cheeseType && <Property title="Cheese type" value={cheeseType} />}

        <Property title="Steak type" value={steakType} />
        <Property title="Toast substitute" value={toastSub} />
        <Property title="Additional note" value={note} />
      </Stack>

      <Counter
        value={quantity}
        onDec={() => removeItem({ ...props })}
        onInc={() => addItem({ ...props })}
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
          clearItem({ ...props });
        }}
        icon={<CloseIcon />}
        alignSelf="flex-start"
        my="10px"
      />
    </Flex>
  );
};

const Property = ({ title, value }) => {
  return (
    <Flex flexDir="column">
      <Text fontSize="xs" color="gray.500">
        {title}
      </Text>
      <Text fontSize="sm">{value}</Text>
    </Flex>
  );
};

export default SteakAndEggs;
