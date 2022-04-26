import { Box, Grid, Stack, Typography } from "@mui/material";
import Input from "../../input/Input";
import DashboardContent from "../DashboardContent";
import Paper from "../Paper";
import ContainedButton from "../../buttons/ContainedButton";

const wrapperStyle = {
  maxWidth: "736px",
};

const containerStyle = {
  padding: "32px 48px",
};

export default function DashboardSendSection() {
  return (
    <DashboardContent>
      <Box sx={wrapperStyle}>
        <Paper>
          <Box sx={containerStyle} component="section">
            <Typography variant="h6" fontWeight={700}>
              Send
            </Typography>
            <Grid container spacing={1} marginTop={3} marginBottom={4}>
              <Grid item xs={6}>
                <Input
                  label="Coin"
                  value="FUR"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                  disabled
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  label="Amount"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Box>
              <Input label="Address" fullWidth />
              <Stack marginTop={4}>
                <ContainedButton
                  style={{
                    margin: "0 auto",
                  }}
                  disabled
                >
                  Sign & Send
                </ContainedButton>
              </Stack>
            </Box>
          </Box>
        </Paper>
      </Box>
    </DashboardContent>
  );
}
