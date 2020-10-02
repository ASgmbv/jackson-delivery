import { FormLabel, Select, Textarea, useToast } from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import useCartStore from "../../utils/hooks/useCartStore";

const addItemSelector = (state) => state.addItem;

const BiscuitsAndGravy = ({ onClose, ...props }) => {
  const toast = useToast();
  const { handleSubmit, errors, register } = useForm();
  const addItem = useCartStore(addItemSelector);

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
      <FormLabel htmlFor="crispyHashBrowns">
        Would you like crispy hush browns?
      </FormLabel>
      <Select name="crispyHashBrowns" ref={register()}>
        <option>No</option>
        <option>Yes</option>
      </Select>
    </form>
  );
};

export default BiscuitsAndGravy;
