import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ContainedButton from "../../buttons/ContainedButton";
import DashboardContent from "../DashboardContent";
import Paper from "../Paper";

const cellStyle = {
  maxWidth: "250px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "0",
    "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCJNM6DR88GU4qgLTlbqK",
    "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCJNM6DR88GU4qgLTlbqK",
    24,
    Date.now(),
  ),
];

export default function DashboardPendingTransaction() {
  return (
    <DashboardContent>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="left">From</TableCell>
              <TableCell align="left">To</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell sx={cellStyle} align="right">
                  {row.calories}
                </TableCell>
                <TableCell sx={cellStyle} align="right">
                  {row.fat}
                </TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box marginTop={3}>
        <ContainedButton>Start mining</ContainedButton>
      </Box>
    </DashboardContent>
  );
}
