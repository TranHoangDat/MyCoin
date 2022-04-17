import { Box, Grid, Stack, Typography } from "@mui/material";
import ContainedButton from "../../buttons/ContainedButton";
import TextButton from "../../buttons/TextButton";
import CreateWalletModalStepHeader from "./CreateWalletModalStepHeader";

export default function CreateWalletWellDoneStep() {
  return (
    <Box>
      <CreateWalletModalStepHeader headline="STEP 3." title="You're done" />
      <Grid marginTop="12px" container>
        <Grid
          sx={{
            textAlign: "start",
          }}
          item
          xs={6.25}
        >
          <Typography fontSize="14px" marginBottom="24px">
            You are now ready to take advantage of all that Ethereum has to
            offer! Access with keystore file should only be used in an offline
            setting.
          </Typography>
          <Box>
            <ContainedButton fullWidth>Access Wallet</ContainedButton>
            <TextButton
              style={{
                marginTop: "12px",
              }}
              fullWidth
            >
              Create Another Wallet
            </TextButton>
          </Box>
        </Grid>
        <Grid item xs={5.75}>
          <Box
            sx={{
              width: "250px",
              height: "153px",
              margin: "10px 0 0 auto",
              backgroundImage:
                "url('./images/create-wallet/icon-keystore-mew.png')",
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
