import { FormLabel, Select, Textarea, useToast } from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import useCartStore from "../../utils/hooks/useCartStore";

const addItemSelector = (state) => state.addItem;

const ClassicsRegular = ({ onClose, ...props }) => {
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
          <FormLabel htmlFor="cheeseType" mt="6">
            Would you like to add any cheese?
          </FormLabel>
          <Select name="cheeseType" ref={register()}>
            <option>Cheddar Cheese</option>
            <option>Swiss Cheese</option>
            <option>Peperjack Cheese</option>
          </Select>
        </>
      )}

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

      <FormLabel htmlFor="toastSub" mt="6">
        Would you substitute your toast for additional charge?
      </FormLabel>
      <Select name="toastSub" ref={register()}>
        <option>No</option>
        <option>OSM Bread - $0.00</option>
        <option>White Bread + $1.25</option>
        <option>Cinnamon Raisin + $1.25</option>
        <option>Butter Croissant + $1.75</option>
        <option>Rustic Rye Bread + $0.00</option>
      </Select>
    </form>
  );
};

export default ClassicsRegular;
