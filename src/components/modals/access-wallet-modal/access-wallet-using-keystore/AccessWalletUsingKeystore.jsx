import Wallet from "ethereumjs-wallet";
import { useState } from "react";
import ModalStepper from "../../ModalStepper";
import EnterPasswordStep from "./EnterPasswordStep";
import SelectFileStep from "./SelectFileStep";
import { AccessWalletUsingKeystoreContext } from "../../../../contexts/AccessWalletUsingKeystoreContext";
import { accessWallet } from "../../../../api/authApi";

const steps = ["STEP 1. Select File", "STEP 2. Enter password"];

const stepComponents = [<SelectFileStep />, <EnterPasswordStep />];

export default function AccessWalletUsingKeystore() {
  const [keystore, setKeystore] = useState();

  const saveKeystore = keystore => {
    setKeystore(keystore);
  };

  const handleAccessWallet = async password => {
    try {
      const wallet = await Wallet.fromV3(keystore, password);
      return wallet;
    } catch (e) {
      return null;
    }
  };

  return (
    <AccessWalletUsingKeystoreContext.Provider
      value={{ saveKeystore, handleAccessWallet }}
    >
      <ModalStepper steps={steps} stepComponents={stepComponents} />
    </AccessWalletUsingKeystoreContext.Provider>
  );
}
