import { Box, Typography } from "@mui/material";
import Paper from "../Paper";

const wrapperStyle = {
  padding: "40px 32px 30px",
};

export default function CoinValueSection() {
  return (
    <Paper>
      <Box sx={wrapperStyle} component="section">
        <Typography color="#667f9b" fontSize="16px" fontWeight={700}>
          MY COIN VALUE
        </Typography>
        <Typography color="#0b2840" fontSize="20px" fontWeight={700}>
          $ 0.00
        </Typography>
        <Typography variant="body2" marginTop={2} fontWeight={700}>
          1 coin - 1$
        </Typography>
      </Box>
    </Paper>
  );
}
