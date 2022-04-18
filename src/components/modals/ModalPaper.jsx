import { Paper, styled } from "@mui/material";

export default styled(({ ...props }) => <Paper {...props} />)({
  width: "624px",
  textAlign: "center",
  borderRadius: "12px",
  boxShadow: "0 12px 17px rgb(21 29 63 / 3%)",
});
