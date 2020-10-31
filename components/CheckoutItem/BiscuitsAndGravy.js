import { Flex, Image, Heading, Stack, Text, IconButton } from "@chakra-ui/core";
import Counter from "../Counter";
import { CloseIcon } from "@chakra-ui/icons";
import useCartStore from "../../utils/hooks/useCartStore";
import { calculateExtra } from "../../utils/calculateExtra";
import NextImage from "next/image";

const removeItemSelector = (state) => state.removeItem;
const addItemSelector = (state) => state.addItem;
const clearItemSelector = (state) => state.clearItem;

const BiscuitsAndGravy = (props) => {
  const removeItem = useCartStore(removeItemSelector);
  const addItem = useCartStore(addItemSelector);
  const clearItem = useCartStore(clearItemSelector);

  const {
    image,
    title,
    description,
    quantity,
    price,
    crispyHashBrowns,
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
          Crispy Hash Browns:
          <Text as="span" color="black">
            {" " + crispyHashBrowns}
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
};

export default BiscuitsAndGravy;
