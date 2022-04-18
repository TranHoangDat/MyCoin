import ModalStepper from "../../ModalStepper";
import EnterPasswordStep from "./EnterPasswordStep";
import SelectFileStep from "./SelectFileStep";

const steps = ["STEP 1. Select File", "STEP 2. Enter password"];

const stepComponents = [<SelectFileStep />, <EnterPasswordStep />];

export default function AccessWalletUsingKeystore() {
  return <ModalStepper steps={steps} stepComponents={stepComponents} />;
}
