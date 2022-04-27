import { Grid } from "@mui/material";
import DashboardContent from "../DashboardContent";
import Paper from "../Paper";
import BlockCard from "./BlockCard";

export default function DashboardBlockchain() {
  return (
    <DashboardContent>
      <Paper>
        <Grid container p={3}>
          <Grid item xs={3}>
            <BlockCard />
          </Grid>
        </Grid>
      </Paper>
    </DashboardContent>
  );
}
