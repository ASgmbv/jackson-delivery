import { Flex, Image, Stack, Text, IconButton, Heading } from "@chakra-ui/core";
import Counter from "../Counter";
import { CloseIcon } from "@chakra-ui/icons";
import useCartStore from "../../utils/hooks/useCartStore";
import { calculateExtra } from "../../utils/calculateExtra";
import NextImage from "next/image";

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

  const extra = calculateExtra(props);
  const totalPrice = Math.round(quantity * (price + extra) * 100) / 100;

  return (
    <Flex flexDir="column">
      <Flex justifyContent="space-between">
        <NextImage src={image} width="70px" height="70px" alt={title} />
        <IconButton
          onClick={() => {
            clearItem({ ...props });
          }}
          icon={<CloseIcon />}
          alignSelf="flex-start"
        />
      </Flex>
      <Stack>
        <Heading as="h3" fontSize="lg" fontWeight="500" isTruncated>
          {title}
        </Heading>
        <Text fontSize="sm" lineHeight="20px" color="gray.500">
          {description}
        </Text>

        <Text fontSize="sm" color="gray.500">
          Eggs Type:
          <Text as="span" color="black">
            {" " + eggsType}
          </Text>
        </Text>

        {cheeseType && (
          <Text fontSize="sm" color="gray.500">
            Cheese Type:
            <Text as="span" color="black">
              {" " + cheeseType}
            </Text>
          </Text>
        )}

        <Text fontSize="sm" color="gray.500">
          Steak Type:
          <Text as="span" color="black">
            {" " + steakType}
          </Text>
        </Text>

        <Text fontSize="sm" color="gray.500">
          Toast substitute
          <Text as="span" color="black">
            {" " + toastSub}
          </Text>
        </Text>
      </Stack>
      <Flex justifyContent="space-between" mt="4">
        <Counter
          value={quantity}
          onDec={() => removeItem({ ...props })}
          onInc={() => addItem({ ...props })}
          alignSelf="flex-start"
        />
        <Text
          alignSelf="flex-start"
          fontWeight="500"
          width="80px"
          textAlign="center"
        >
          {"$ " + totalPrice}
        </Text>
      </Flex>
    </Flex>
  );

  return (
    <Flex flexDir="column">
      <Flex alignItems="center" justifyContent="space-between">
        <NextImage src={image} width="70px" height="70px" alt={title} />
        <Stack flex="1" mx="4" spacing="2" display={["none", null, "flex"]}>
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

        <Property title="Steak type" value={steakType} />
        <Property title="Toast substitute" value={toastSub} />
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

export default SteakAndEggs;
