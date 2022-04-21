import {
  Box,
  Divider,
  dividerClasses,
  Drawer,
  drawerClasses,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountCard from "./AccountCard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 300;

const wrapperStyle = {
  width: drawerWidth,
  flexShrink: 0,

  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    backgroundColor: "#061e40",
    color: "white",
    boxSizing: "border-box",

    svg: {
      color: "white",
    },
  },

  [`& .${dividerClasses.root}`]: {
    borderColor: "white",
  },
};

const imageWrapperStyle = {
  width: "120px",
  height: "34px",
  margin: "8px 0 16px",

  img: {
    width: "100%",
    height: "100%",
  },
};

const containerStyle = {
  padding: "20px 20px 12px",
};

const listItemStyle = {
  height: "58px",
  padding: "0 16px",
};

const listItemTextStyle = {
  margin: 0,

  span: {
    fontSize: "14px",
  },
};

const list = [
  {
    icon: <DashboardIcon />,
    name: "Dashboard",
  },
  {
    icon: <BusinessCenterIcon />,
    name: "Transaction",
  },
];

export default function DashboardSidebar() {
  return (
    <Drawer sx={wrapperStyle} variant="permanent" anchor="left">
      <Box sx={containerStyle}>
        <Box sx={imageWrapperStyle}>
          <img src="images/home/logo-mew.svg" />
        </Box>
        <AccountCard />
      </Box>
      <List>
        {list.map(item => (
          <ListItem sx={listItemStyle} button key={item.name}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText sx={listItemTextStyle} primary={item.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem sx={listItemStyle} button>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText sx={listItemTextStyle} primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
}
