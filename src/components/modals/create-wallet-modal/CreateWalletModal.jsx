import { IconButton, Modal, Paper, styled, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CreateWalletModalHeader from "./CreateWalletModalHeader";
import CreateWalletModalPaper from "./CreateWalletModalPaper";

const Wrapper = styled(({ ...props }) => <Paper {...props} />)({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f2fafa",
  borderRadius: 0,
  boxShadow: "none",
});

export default function CreateWalletModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="create-wallet-modal-title"
      aria-describedby="create-wallet-modal-description"
    >
      <Wrapper>
        <CreateWalletModalPaper>
          <CreateWalletModalHeader>
            <Typography
              id="create-wallet-modal-title"
              variant="h4"
              fontWeight={700}
            >
              Create wallet using software
            </Typography>
          </CreateWalletModalHeader>
        </CreateWalletModalPaper>
        <IconButton onClick={handleClose} aria-label="close" size="large">
          <CloseIcon />
        </IconButton>
      </Wrapper>
    </Modal>
  );
}
