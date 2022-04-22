import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  listItemTextClasses,
  Typography,
} from "@mui/material";
import DashboardContent from "../DashboardContent";
import Paper from "../Paper";
import TransactionListItem from "./TransactionListItem";

const wrapperStyle = {
  padding: "12px 0 10px",
};

const detailHeaderStyle = {
  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
};

const titleStyle = {
  padding: "0 16px",
  fontWeight: 700,
  lineHeight: "46px",
};

const listItemStyle = {
  [`& .${listItemTextClasses.root}:first-of-type`]: {
    maxWidth: "500px",
  },
};

export default function TransactionDetail() {
  return (
    <DashboardContent>
      <Paper>
        <Box sx={wrapperStyle}>
          <Box sx={detailHeaderStyle}>
            <Typography sx={titleStyle}>Transaction Details</Typography>
          </Box>
          <Box>
            <List>
              <ListItem sx={listItemStyle}>
                <ListItemText
                  primary={<Typography>Transaction Hash:</Typography>}
                />
              </ListItem>
              <ListItem sx={listItemStyle}>
                <ListItemText primary={<Typography>Status:</Typography>} />
              </ListItem>
              <ListItem sx={listItemStyle}>
                <ListItemText primary={<Typography>Block:</Typography>} />
              </ListItem>
              <ListItem sx={listItemStyle}>
                <ListItemText primary={<Typography>Timestamp:</Typography>} />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem sx={listItemStyle}>
                <ListItemText primary={<Typography>Value:</Typography>} />
              </ListItem>
              <ListItem sx={listItemStyle}>
                <ListItemText primary={<Typography>Mined by:</Typography>} />
              </ListItem>
              <ListItem sx={listItemStyle}>
                <ListItemText
                  primary={<Typography>Block Reward:</Typography>}
                />
              </ListItem>
              <ListItem sx={listItemStyle}>
                <ListItemText primary={<Typography>Difficulty:</Typography>} />
              </ListItem>
              <ListItem sx={listItemStyle}>
                <ListItemText
                  primary={<Typography>Total Difficulty:</Typography>}
                />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Paper>
    </DashboardContent>
  );
}
