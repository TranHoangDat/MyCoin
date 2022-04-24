import ModalStepper from "../../ModalStepper";
import CreateWalletWellDoneStep from "../CreateWalletWellDoneStep";
import CreatePasswordStep from "./CreatePasswordStep";
import DownloadKeystoreFileStep from "./DownloadKeystoreFileStep";
import { CreateWalletUsingKeystoreContext } from "../../../../contexts/CreateWalletUsingKeystoreContext";
import { useState } from "react";
import { createPassword } from "../../../../api/authApi";

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
  const [keystoreFile, setKeystoreFile] = useState();
  const [downloadLink, setDownloadLink] = useState();
  const [downloadedFile, setDownloadedFile] = useState();

  const handleCreatePassword = async password => {
    const result = await createPassword(password);
    setKeystoreFile({
      fileName: result.data.fileName,
      fileContent: result.data.fileContent,
    });
    const data = new Blob([result.data.fileContent], { type: "text/plain" });
    const downloadUrl = window.URL.createObjectURL(data);
    setDownloadLink(downloadUrl);
    setDownloadedFile(
      `${result.data.fileName}.${result.data.fileName.slice(25).toUpperCase()}`,
    );
  };

  return (
    <CreateWalletUsingKeystoreContext.Provider
      value={{
        handleCreatePassword,
        file: downloadedFile,
        downloadLink,
      }}
    >
      <ModalStepper steps={steps} stepComponents={stepComponents} />
    </CreateWalletUsingKeystoreContext.Provider>
  );
}
