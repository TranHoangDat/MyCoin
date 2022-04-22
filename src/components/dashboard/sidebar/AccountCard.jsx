import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  minWidth: "260px",
  minHeight: "178px",
  padding: "16px 20px 16px 32px",
  margin: "22px 0 10px",
  color: "white",
  backgroundColor: "hsla(0,0%,100%,.1)",
  backgroundImage: "url('/images/dashboard/wallet/wallet-bg-image.png')",
  borderRadius: "16px",
  textShadow: "0 2px 8px rgb(0 0 0 / 24%), 0 1px 4px rgb(0 0 0 / 24%)",
};

const cardContentStyle = {
  position: "relative",
  padding: "1px 0 0 0",
};

const titleTypoStyle = {
  fontSize: "12px",
  fontWeight: 700,
  textTransform: "uppercase",
};

const publicKeyTypoStyle = {
  fontSize: "10px",
  color: "hsla(0,0%,100%,.8)",
};

const dollarBalanceTypoStyle = {
  position: "absolute",
  top: "50px",
  left: "-20px",
  fontSize: "33px",
  fontWeight: 700,
};

const cardActionsStyle = {
  padding: 0,
  marginTop: "auto",
  justifyContent: "space-between",
};

const coinBalanceTypoStyle = {
  fontSize: "14px",
  color: "hsla(0,0%,100%,.8)",
};

export default function AccountCard() {
  return (
    <Card sx={cardStyle}>
      <CardContent sx={cardContentStyle}>
        <Typography sx={titleTypoStyle}>My personal account</Typography>
        <Typography sx={publicKeyTypoStyle}>benevolent</Typography>
        <Typography sx={dollarBalanceTypoStyle}>$0.00</Typography>
      </CardContent>
      <CardActions sx={cardActionsStyle}>
        <Typography sx={coinBalanceTypoStyle}>0 FUR</Typography>
        <IconButton aria-label="copy" size="large">
          <ContentCopyIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
