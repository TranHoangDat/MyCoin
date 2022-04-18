import ModalStepper from "../../ModalStepper";
import CreateWalletWellDoneStep from "../CreateWalletWellDoneStep";
import CreatePasswordStep from "./CreatePasswordStep";
import DownloadKeystoreFileStep from "./DownloadKeystoreFileStep";

const steps = [
  "STEP 1. Create password",
  "STEP 2. Download keystore file",
  "STEP 3. Well done",
];

const stepComponents = [
  <CreatePasswordStep />,
  <DownloadKeystoreFileStep />,
  <CreateWalletWellDoneStep />,
];

export default function CreateWalletUsingKeystore() {
  return <ModalStepper steps={steps} stepComponents={stepComponents} />;
}
