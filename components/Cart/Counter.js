import { Flex, Button, Text, Input } from "@chakra-ui/react";
import React from "react";
import Minus from "../../assets/icons/Minus";
import Plus from "../../assets/icons/Plus";

const Counter = ({ onDec, onInc, value, ...props }) => {
  return (
    <Flex alignItems="center" {...props}>
      <button onClick={onDec}>
        <Minus width={18} height={18} />
      </button>

      <label>
        <Input
          width="2rem"
          appearance="textfield"
          textAlign="center"
          height="auto"
          p="0"
          mx="1"
          type="number"
          readOnly
          max={99}
          min={0}
          value={value}
        />
      </label>

      <button onClick={onInc}>
        <Plus width={18} height={18} />
      </button>
    </Flex>
  );
};

export default Counter;
