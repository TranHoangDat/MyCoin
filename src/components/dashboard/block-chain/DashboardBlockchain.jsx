import { Grid } from "@mui/material";
import { useContext } from "react";
import { MainContext } from "../../../contexts/MainContext";
import DashboardContent from "../DashboardContent";
import Paper from "../Paper";
import BlockCard from "./BlockCard";

export default function DashboardBlockchain() {
  const { blockchainService } = useContext(MainContext);
  const blocks = blockchainService.getBlocks();

  return (
    <DashboardContent>
      <Paper>
        <Grid container p={3} columnSpacing={2}>
          {blocks.map((block, index) => (
            <Grid item key={block.hash} xs={3}>
              <BlockCard
                no={index + 1}
                hash={block.hash}
                previousHash={block.previousHash}
                nonce={block.nonce}
                timeStamp={block.timestamp}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </DashboardContent>
  );
}
