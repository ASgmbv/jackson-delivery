import { HStack, Button, Text } from "@chakra-ui/core";

const Counter = ({ onDec, onInc, value, ...props }) => {
  return (
    <HStack
      maxW="160px"
      border="1px solid"
      borderColor="gray.500"
      borderRadius="10px"
      p="0"
      {...props}
    >
      <Button
        bg="transparent"
        lineHeight="1"
        height="2rem"
        paddingLeft="5px"
        paddingRight="5px"
        minW="2rem"
        _hover={{
          bg: "transparent",
          color: "gray.500",
        }}
        onClick={onDec}
      >
        -
      </Button>
      {/* <Input type="text" readOnly value={value} /> */}
      <Text w="20px" textAlign="center">
        {value}
      </Text>
      <Button
        bg="transparent"
        lineHeight="1"
        height="2rem"
        paddingLeft="5px"
        paddingRight="5px"
        minW="2rem"
        _hover={{
          bg: "transparent",
          color: "gray.500",
        }}
        onClick={onInc}
      >
        +
      </Button>
    </HStack>
  );
};

export default Counter;
