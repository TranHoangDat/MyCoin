import { Stack } from "@mui/material";
import ContainedButton from "../../../buttons/ContainedButton";
import OutlinedButton from "../../../buttons/OutlinedButton";
import CreateWalletModalStepHeader from "../CreateWalletModalStepHeader";
import KeystoreFileImportantThingCard from "./KeystoreFileImportantThingCard";

const importantThings = [
  {
    imagePath: "/images/create-wallet/important-things/icon-don't-lose-it.svg",
    imageAlt: "icon-don't-lose-it",
    title: "Don't lose it",
    description: "Be careful, it can not be recovered if you lose it.",
  },
  {
    imagePath: "/images/create-wallet/important-things/icon-don't-share-it.svg",
    imageAlt: "icon-don't-share-it",
    title: "Don't lose it",
    description:
      "Your funds will be stolen if you use this file on a malicious phishing site.",
  },
  {
    imagePath: "/images/create-wallet/important-things/icon-make-a-backup.svg",
    imageAlt: "icon-make-a-backup",
    title: "Make a backup",
    description:
      "Secure it like the millions of dollars it may one day be worth.",
  },
];

export default function DownloadKeystoreFileStep() {
  return (
    <Stack spacing={3}>
      <CreateWalletModalStepHeader
        headline="STEP 2."
        title="Download keystore file"
        description=" Important things to know before downloading your keystore file. "
      />
      <Stack flexDirection="row" justifyContent="space-between">
        {importantThings.map(thing => (
          <KeystoreFileImportantThingCard
            imagePath={thing.imagePath}
            imageAlt={thing.imageAlt}
            title={thing.title}
            description={thing.description}
          />
        ))}
      </Stack>
      <Stack flexDirection="row" justifyContent="center">
        <OutlinedButton
          style={{
            marginRight: "8px",
          }}
        >
          Back
        </OutlinedButton>
        <ContainedButton>Acknowledge & Download</ContainedButton>
      </Stack>
    </Stack>
  );
}
