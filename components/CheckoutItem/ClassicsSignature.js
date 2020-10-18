import { Flex, Image, Stack, Text, IconButton } from "@chakra-ui/core";
import Counter from "../Counter";
import { CloseIcon } from "@chakra-ui/icons";
import useCartStore from "../../utils/hooks/useCartStore";
import { calculateExtra } from "../../utils/calculateExtra";

const removeItemSelector = (state) => state.removeItem;
const addItemSelector = (state) => state.addItem;
const clearItemSelector = (state) => state.clearItem;

const ClassicsSignature = (props) => {
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
    note,
    pancakeType,
    syrupType,
  } = props;

  const extra = calculateExtra(props);
  const totalPrice = Math.round(quantity * (price + extra) * 100) / 100;

  return (
    <Flex flexDir="column">
      <Flex alignItems="center" justifyContent="space-between">
        <Image
          src={image}
          boxSize="64px"
          objectFit="cover"
          alt={title}
          alignSelf="flex-start"
        />
        <Stack flex="1" mx="4" spacing="2" display={["none", null, "flex"]}>
          <Text fontWeight="500" fontSize="lg">
            {title}
          </Text>

          <Text fontSize="sm" color="gray.500">
            {description}
          </Text>

          <Property title="Egg type" value={eggsType} />

          {cheeseType && <Property title="Cheese type" value={cheeseType} />}

          <Property title="Pancake type" value={pancakeType} />
          <Property title="Meat type" value={meatType} />
          <Property title="Syrup type" value={syrupType} />
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

      <Stack flex="1" mx="4" spacing="2" display={["flex", null, "none"]}>
        <Text fontWeight="500" fontSize="lg">
          {title}
        </Text>

        <Text fontSize="sm" color="gray.500">
          {description}
        </Text>

        <Property title="Egg type" value={eggsType} />

        {cheeseType && <Property title="Cheese type" value={cheeseType} />}

        <Property title="Pancake type" value={pancakeType} />
        <Property title="Meat type" value={meatType} />
        <Property title="Syrup type" value={syrupType} />
      </Stack>
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

export default ClassicsSignature;
