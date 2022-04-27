import {
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

const containerStyle = {
  padding: 1,
};

const labelStyle = {
  fontSize: "15px",
  fontWeight: 700,
  marginBottom: "3px",
};

const valueStyle = {
  fontSize: "14px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

export default function BlockCard() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Box sx={containerStyle}>
          <Typography fontWeight={700}>Block</Typography>
        </Box>
        <Divider />
        <Stack spacing={2} sx={containerStyle}>
          <Box>
            <Typography sx={labelStyle}>Hash</Typography>
            <Typography sx={valueStyle} color="limegreen">
              {localStorage.getItem("publicKey")}
            </Typography>
          </Box>
          <Box>
            <Typography sx={labelStyle}>Hash of previous block</Typography>
            <Typography sx={valueStyle} color="deeppink">
              {localStorage.getItem("publicKey")}
            </Typography>
          </Box>
        </Stack>
        <Divider />
        <Box sx={containerStyle}>
          <Typography sx={labelStyle}>Nonce</Typography>
          <Typography sx={valueStyle} color="text.secondary">
            0
          </Typography>
        </Box>
        <Divider />
        <Box sx={containerStyle}>
          <Typography sx={labelStyle}>Timestamp</Typography>
          <Typography sx={valueStyle} color="text.secondary">
            0
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
