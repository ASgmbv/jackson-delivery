import { FormLabel, Select, Textarea, useToast } from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import useCartStore from "../../utils/hooks/useCartStore";

const addItemSelector = (state) => state.addItem;

const ClassicsSignature = ({ onClose, ...props }) => {
  const { handleSubmit, errors, watch, register } = useForm();
  const addItem = useCartStore(addItemSelector);
  const toast = useToast();
  const watchEggTypes = watch("eggsType");

  function onSubmit(values) {
    addItem({ ...props, ...values });

    onClose();
    toast({
      position: "bottom-right",
      title: "Item added to cart.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }

  return (
    <form name="form" id="form" onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="eggsType">
        How would you like your eggs to be cooked?
      </FormLabel>
      <Select name="eggsType" ref={register()}>
        <option>Over easy</option>
        <option>Over medium</option>
        <option>Over hard</option>
        <option>Scramble</option>
        <option>Scramble soft</option>
        <option>Scramble hard</option>
        <option>Egg white</option>
        <option>Egg beaters</option>
        <option>Sunny side up</option>
        <option>No eggs</option>
      </Select>

      {watchEggTypes === "Scramble" && (
        <>
          <FormLabel htmlFor="meatType" mt="6">
            Would you like to add any cheese?
          </FormLabel>
          <Select name="cheeseType" ref={register()}>
            <option>Cheddar cheese</option>
            <option>Swiss cheese</option>
            <option>Peperjack cheese</option>
          </Select>
        </>
      )}

      <FormLabel htmlFor="meatType" mt="6">
        What kind of pancake would you like?
      </FormLabel>
      <Select name="pancakeType" ref={register()}>
        <option>Buttermilk pancake</option>
        <option>O.S.M. pancake</option>
      </Select>

      <FormLabel htmlFor="meatType" mt="6">
        What would you like for your order?
      </FormLabel>
      <Select name="meatType" ref={register()}>
        <option>Bacon</option>
        <option>Sausage</option>
        <option>Ham Steak + $4.95</option>
        <option>Crispy bacon</option>
        <option>Deli ham</option>
        <option>Salmon</option>
        <option>No meat</option>
      </Select>

      <FormLabel htmlFor="meatType" mt="6">
        What kind of syrup would you like?
      </FormLabel>
      <Select name="syrupType" ref={register()}>
        <option>Pure Maple Syrup</option>
        <option>Sugar Free Syrup</option>
      </Select>
    </form>
  );
};

export default ClassicsSignature;
