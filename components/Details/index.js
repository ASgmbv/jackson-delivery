/* eslint-disable react/prop-types */
import React from "react";
import {
  useToast,
  FormLabel,
  RadioGroup,
  Radio,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import useCartStore from "../../utils/hooks/useCartStore";

const addItemSelector = (state) => state.addItem;

const Details = ({ onClose, price, options, ...props }) => {
  const toast = useToast();
  const { handleSubmit, register } = useForm();
  const addItem = useCartStore(addItemSelector);

  const onSubmit = (values) => {
    /**
     * Total price of the item, including extra options
     */

    let totalPrice = price;

    for (const [key, value] of Object.entries(values)) {
      let t = options.find((option) => option.slug === key);
      t = t.values.find((item) => item.value === value);
      totalPrice = totalPrice + t.extra;
    }

    addItem({ ...props, ...values, totalPrice });
    onClose();
    toast({
      position: "bottom-right",
      title: "Item added to cart.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <form name="form" id="form" onSubmit={handleSubmit(onSubmit)}>
      {options.map((option, key) => (
        <Options {...option} register={register} key={"option-" + key} />
      ))}
    </form>
  );
};

const Options = ({ title, values, slug, register }) => {
  return (
    <>
      <FormLabel htmlFor={slug}>{title}</FormLabel>

      <RadioGroup name={slug} id={slug} _notLast={{ mb: 10 }}>
        <Stack>
          {values.map((value, key) => (
            <Radio
              key={slug + "-" + key}
              isChecked={key === 0}
              value={value.value}
              ref={register()}
            >
              <Text fontSize={["sm"]}>
                {value.value + " + $" + value.extra}
              </Text>
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </>
  );
};

export default Details;
