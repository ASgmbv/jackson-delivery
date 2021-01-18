/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { Flex, Heading, Text } from "@chakra-ui/react";
import useCartStore from "../../utils/hooks/useCartStore";
import Counter from "../Counter";
import Trash from "../../assets/icons/Trash";

const clearItemSelector = (state) => state.clearItem;
const removeItemSelector = (state) => state.removeItem;
const addItemSelector = (state) => state.addItem;

const CheckoutItem = ({ data }) => {
  const removeItem = useCartStore(removeItemSelector);
  const addItem = useCartStore(addItemSelector);
  const clearItem = useCartStore(clearItemSelector);

  const { title, description, quantity, totalPrice } = data;

  return (
    <Flex flexDir="column">
      <Flex justifyContent="space-between" mb="2" w="full" alignItems="center">
        <Heading as="h3" size="sm">
          {title}
        </Heading>
        <button
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
          onClick={() => {
            clearItem({ ...data });
          }}
        >
          <Trash />
        </button>
      </Flex>
      {description && (
        <Text mb="4" fontSize="md">
          {description}
        </Text>
      )}

      {Object.entries(data).map((item, index) => {
        let t = item[0];
        if (
          t === "image" ||
          t === "description" ||
          t === "quantity" ||
          t === "type" ||
          t === "title" ||
          t === "totalPrice" ||
          t === "options" ||
          t === "price"
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
            removeItem({ ...data });
          }}
          onInc={() => {
            addItem({ ...data });
          }}
          alignSelf="center"
        />
        <Text fontWeight="600" fontSize="lg" color="orange.500">
          {"$ " + Math.round(quantity * totalPrice * 100) / 100}
        </Text>
      </Flex>
    </Flex>
  );
};

export default CheckoutItem;
