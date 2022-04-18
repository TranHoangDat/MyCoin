import { Box, Stack } from "@mui/material";
import ContainedButton from "../../../buttons/ContainedButton";
import OutlinedButton from "../../../buttons/OutlinedButton";
import ModalInput from "../../ModalInput";
import ModalStepHeader from "../../ModalStepHeader";

const wrapperStyle = {
  padding: "48px",
};

export default function EnterPasswordStep() {
  return (
    <Stack spacing={3} sx={wrapperStyle}>
      <ModalStepHeader
        headline="STEP 2."
        title="Enter password"
        description="Enter your password to unlock your wallet."
      />
      <Stack spacing={4}>
        <ModalInput label="Password" type="password" />
      </Stack>
      <Box>
        <OutlinedButton
          style={{
            marginRight: "15px",
          }}
        >
          Back
        </OutlinedButton>
        <ContainedButton disabled>Access Wallet</ContainedButton>
      </Box>
    </Stack>
  );
}
