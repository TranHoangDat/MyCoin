import { Box, Typography } from "@mui/material";
import Paper from "./Paper";

const containerStyle = {
  minHeight: "352px",
  padding: "48px",
  backgroundImage:
    "url('/images/dashboard/coin-balance-section/bg-circle-triangle.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "180px",
  backgroundPosition: "right 60px bottom -1px",
};

export default function CoinBalanceSection() {
  return (
    <Paper>
      <Box sx={containerStyle} component="section">
        <Typography variant="h6" fontWeight={700}>
          My FUR balance is empty
        </Typography>
      </Box>
    </Paper>
  );
}
