import { Box, Stack } from "@mui/material";
import ContainedButton from "../../../buttons/ContainedButton";
import CreateWalletModalInput from "../CreateWalletModalInput";
import CreateWalletModalStepHeader from "../CreateWalletModalStepHeader";
import { useState } from "react";

export default function CreatePasswordStep() {
  const [isPasswordShowed, setIsPasswordShowed] = useState(false);
  const [isConfirmPasswordShowed, setIsConfirmPasswordShowed] = useState(false);

  const handleClickShowPassword = () => {
    setIsPasswordShowed(!isPasswordShowed);
  };

  const handleClickShowConfirmPassword = () => {
    setIsConfirmPasswordShowed(!isConfirmPasswordShowed);
  };

  return (
    <Stack spacing={3}>
      <CreateWalletModalStepHeader headline="STEP 1." title="Create password" />
      <Stack spacing={4.5}>
        <CreateWalletModalInput label="Password" type="password" />
        <CreateWalletModalInput label="Confirm Password" type="password" />
      </Stack>
      <Box>
        <ContainedButton disabled>Create Wallet</ContainedButton>
      </Box>
    </Stack>
  );
}
