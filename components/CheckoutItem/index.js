/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { Flex, IconButton, Heading, Text } from "@chakra-ui/react";
import useCartStore from "../../utils/hooks/useCartStore";
import { CloseIcon } from "@chakra-ui/icons";
import Counter from "../Counter";
import Trash from "../../assets/icons/Trash";

const clearItemSelector = (state) => state.clearItem;
const removeItemSelector = (state) => state.removeItem;
const addItemSelector = (state) => state.addItem;

const CheckoutItem = (props) => {
  const removeItem = useCartStore(removeItemSelector);
  const addItem = useCartStore(addItemSelector);
  const clearItem = useCartStore(clearItemSelector);

  const { image, title, description, quantity, totalPrice } = props;

  return (
    <Flex flexDir="column">
      <Flex justifyContent="space-between" mb="2" w="full" alignItems="center">
        <Heading as="h3" size="md" fontWeight="500" color="orange.500">
          {title}
        </Heading>
        <button
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
          onClick={() => {
            clearItem(props);
          }}
        >
          <Trash />
        </button>
      </Flex>
      {description && <Text mb="4">{description}</Text>}

      {Object.entries(props).map((item, index) => {
        let t = item[0];
        if (
          t === "image" ||
          t === "description" ||
          t === "quantity" ||
          t === "type" ||
          t === "title" ||
          t === "totalPrice"
        ) {
          return;
        }

        return (
          <Text key={"text-item-" + index} mb="2">
            {item[0]}:{" "}
            <Text as="span" color="green.500">
              {item[1]}
            </Text>
          </Text>
        );
      })}

      <Flex justifyContent="space-between" mt="4">
        <Counter
          value={quantity}
          onDec={() => {
            removeItem(props);
          }}
          onInc={() => {
            addItem(props);
          }}
          alignSelf="center"
        />
        <Text fontWeight="600" fontSize="xl">
          {"$ " + Math.round(quantity * totalPrice * 100) / 100}
        </Text>
      </Flex>
    </Flex>
  );
};

export default CheckoutItem;
