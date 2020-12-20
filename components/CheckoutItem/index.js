/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Flex, IconButton, Stack, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import useCartStore from "../../utils/hooks/useCartStore";
import { CloseIcon } from "@chakra-ui/icons";
import Counter from "../Counter";

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
      <Flex justifyContent="space-between" w="full" alignItems="center">
        <Heading as="h3" size="md" fontWeight="500" color="orange.500">
          {title}
        </Heading>
        <IconButton
          onClick={() => {
            clearItem(props);
          }}
          icon={<CloseIcon />}
          alignSelf="flex-start"
        />
      </Flex>
      {description && (
        <Text lineHeight="20px" color="gray.500" my="4" letterSpacing="wide">
          {description}
        </Text>
      )}

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
          <Text color="gray.500" key={"text-item-" + index} mb="2">
            {item[0]}:{" "}
            <Text as="span" color="black" color="green.500">
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
        <Heading size="md">
          {"$ " + Math.round(quantity * totalPrice * 100) / 100}
        </Heading>
      </Flex>
    </Flex>
  );

  return (
    <Flex flexDir="column">
      <Flex justifyContent="space-between">
        {/* <Image src={image} width="70" height="70" alt={title} /> */}
        <IconButton
          onClick={() => {
            clearItem(props);
          }}
          icon={<CloseIcon />}
          alignSelf="flex-start"
        />
      </Flex>
      <Stack>
        <Heading as="h3" fontSize="lg" fontWeight="500" isTruncated>
          {title}
        </Heading>
        {description && (
          <Text fontSize="sm" lineHeight="20px" color="gray.500">
            {description}
          </Text>
        )}
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
            <Text fontSize="sm" color="gray.500" key={"text-item-" + index}>
              {item[0]}:
              <Text as="span" color="black">
                {" "}
                {item[1]}
              </Text>
            </Text>
          );
        })}
      </Stack>
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
        <Heading size="md">
          {"$ " + Math.round(quantity * totalPrice * 100) / 100}
        </Heading>
      </Flex>
    </Flex>
  );
};

export default CheckoutItem;
