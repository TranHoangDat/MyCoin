import { Box } from "@mui/material";
import DashboardMain from "../components/dashboard/dashboard-main/DashboardMain";
import DashboardSidebar from "../components/dashboard/dashboard-sidebar/DashboardSidebar";

export default function DashboardPage() {
  return (
    <Box sx={{ display: "flex" }}>
      <DashboardSidebar />
      <DashboardMain />
    </Box>
  );
}
