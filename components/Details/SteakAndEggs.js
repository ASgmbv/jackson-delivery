import { FormLabel, Select, Textarea, useToast } from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import useCartStore from "../../utils/hooks/useCartStore";

const addItemSelector = (state) => state.addItem;

const SteakAndCheese = ({ onClose, ...props }) => {
  const toast = useToast();
  const { handleSubmit, errors, register, watch } = useForm();
  const addItem = useCartStore(addItemSelector);
  const watchEggTypes = watch("eggsType");

  function onSubmit(values) {
    addItem({ ...values, ...props });

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

      <FormLabel htmlFor="steakType" mt="6">
        How would you like your steak to be cooked
      </FormLabel>
      <Select name="steakType" ref={register()}>
        <option>Rare</option>
        <option>Medium rare</option>
        <option>Medium well</option>
        <option>Well done</option>
      </Select>

      <FormLabel htmlFor="toastSub" mt="6">
        Would you substitute your toast for additional charge?
      </FormLabel>
      <Select name="toastSub" ref={register()}>
        <option>No</option>
        <option>OSM bread - 0.00$</option>
        <option>White bread + 1.25$</option>
        <option>Cinnamon raisin + 1.25$</option>
        <option>Butter croissant + 1.75$</option>
        <option>Rustic dye bread + 0.00$</option>
      </Select>

      <FormLabel htmlFor="note" mt="6">
        Additional note for chef?
      </FormLabel>
      <Textarea name="note" id="note" ref={register()} />
    </form>
  );
};

export default SteakAndCheese;
