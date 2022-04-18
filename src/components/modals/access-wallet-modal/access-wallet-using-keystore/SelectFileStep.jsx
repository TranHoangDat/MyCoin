import { Box, Grid, Typography } from "@mui/material";
import ContainedButton from "../../../buttons/ContainedButton";
import OutlinedButton from "../../../buttons/OutlinedButton";
import TextButton from "../../../buttons/TextButton";
import ModalStepHeader from "../../ModalStepHeader";

export default function SelectFileStep() {
  return (
    <Box>
      <ModalStepHeader headline="STEP 1." title="Select your Keystore File" />
      <Grid marginTop="12px" container alignItems="center">
        <Grid
          sx={{
            textAlign: "start",
          }}
          item
          xs={5.5}
        >
          <Typography fontSize="14px" marginBottom="24px">
            Please select keystore file that unlocks your wallet.
          </Typography>
          <Box>
            <OutlinedButton fullWidth>Select File</OutlinedButton>
          </Box>
        </Grid>
        <Grid item xs={6.5}>
          <Box
            sx={{
              width: "75%",
              height: "191px",
              margin: "0 0 0 auto",
              backgroundImage:
                "url('./images/access-wallet/keystore-file.jpg')",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
