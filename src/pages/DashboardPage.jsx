import { Box } from "@mui/material";
import DashboardSidebar from "../components/dashboard/sidebar/DashboardSidebar";
import DashboardMain from "../components/dashboard/main/DashboardMain";
import DashboardTransaction from "../components/dashboard/transaction/DashboardTransaction";
import TransactionDetail from "../components/dashboard/transaction/TransactionDetail";

export default function DashboardPage() {
  return (
    <Box sx={{ display: "flex" }}>
      <DashboardSidebar />
      {/* <DashboardMain /> */}
      {/* <DashboardTransaction /> */}
      <TransactionDetail />
    </Box>
  );
}
