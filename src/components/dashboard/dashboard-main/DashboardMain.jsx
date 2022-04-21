import { Box, Grid } from "@mui/material";
import CoinBalanceSection from "./CoinBalanceSection";
import CoinValueSection from "./CoinValueSection";
import NetworkSection from "./NetworkSection";

const outerWrapperStyle = {
  width: "100%",
  height: "100vh",
  backgroundColor: "#f2f3f6",
};

const innerWrapperStyle = {
  width: "100%",
  height: "100%",
  maxWidth: "1185px",
  padding: "12px",
  margin: "64px auto 56px",
};

export default function DashboardMain() {
  return (
    <Box component="main" sx={outerWrapperStyle}>
      <Box sx={innerWrapperStyle}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <CoinBalanceSection />
          </Grid>
          <Grid item xs={4}>
            <NetworkSection />
          </Grid>
          <Grid item xs={8}>
            <CoinValueSection />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
