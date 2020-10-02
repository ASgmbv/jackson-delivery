import ClassicsRegular from "./ClassicsRegular";
import ClassicsSignature from "./ClassicsSignature";
import BiscuitsAndGravy from "./BiscuitsAndGravy";
import SteakAndEggs from "./SteakAndEggs";

const CheckoutItem = (props) => {
  switch (props.type) {
    case "classics-regular":
      return <ClassicsRegular {...props} />;
    case "classics-signature":
      return <ClassicsSignature {...props} />;
    case "classics-biscuits-gravy":
      return <BiscuitsAndGravy {...props} />;
    case "classics-steak-eggs":
      return <SteakAndEggs {...props} />;
    default:
      return <>Empty</>;
  }
};

export default CheckoutItem;
