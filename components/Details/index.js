import { FormLabel, Select, Textarea } from "@chakra-ui/core";
import ClassicsRegular from "./ClassicsRegular";
import ClassicsSignature from "./ClassicsSignature";
import BiscuitsAndGravy from "./BiscuitsAndGravy";
import SteakAndEggs from "./SteakAndEggs";

const Details = ({ onClose, ...props }) => {
  switch (props.type) {
    case "classics-regular":
      return <ClassicsRegular onClose={onClose} {...props} />;
    case "classics-signature":
      return <ClassicsSignature onClose={onClose} {...props} />;
    case "classics-biscuits-gravy":
      return <BiscuitsAndGravy onClose={onClose} {...props} />;
    case "classics-steak-eggs":
      return <SteakAndEggs onClose={onClose} {...props} />;
    default:
      return <>Empty</>;
  }
};

export default Details;
