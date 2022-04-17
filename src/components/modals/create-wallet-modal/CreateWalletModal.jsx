import { IconButton, Modal, Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSearchParams } from "react-router-dom";
import CreateWalletModalHeader from "./CreateWalletModalHeader";
import CreateWalletModalPaper from "./CreateWalletModalPaper";
import CreateWalletModalBody from "./CreateWalletModalBody";
import CreateWalletModalSelectionCard from "./CreateWalletModalSelectionCard";
import CreateWalletModalStepper from "./CreateWalletModalStepper";
import CreateWalletUsingKeystoreStepper from "./create-wallet-using-keystore/CreateWalletUsingKeystoreStepper";

const wrapperStyle = {
  position: "relative",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f2fafa",
  borderRadius: 0,
  boxShadow: "none",
};

export default function CreateWalletModal({ open, handleClose }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOnClickCard = queryValue => {
    setSearchParams(`type=${queryValue}`, {
      replace: true,
    });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="create-wallet-modal-title"
      aria-describedby="create-wallet-modal-description"
    >
      <Paper sx={wrapperStyle}>
        <CreateWalletModalPaper>
          <CreateWalletModalHeader>
            <Typography
              id="create-wallet-modal-title"
              variant="h4"
              fontWeight={700}
            >
              {searchParams.toString().endsWith("keystore")
                ? "Create Wallet with Keystore File"
                : "Create wallet using software"}
            </Typography>
          </CreateWalletModalHeader>
          <CreateWalletModalBody>
            {searchParams.toString().endsWith("keystore") ? (
              <CreateWalletUsingKeystoreStepper />
            ) : (
              <CreateWalletModalSelectionCard
                onClick={() => handleOnClickCard("keystore")}
                imagePath="/images/create-wallet/icon-keystore-file.svg"
                imageAlt="icon-keystore"
                title="Keystore file"
                description="Using a keystore file online makes your wallet more vulnerable to
            loss of funds. We don’t recommend this method of wallet creation."
              />
            )}
          </CreateWalletModalBody>
        </CreateWalletModalPaper>
        <IconButton
          sx={{
            position: "absolute",
            top: "16px",
            right: "16px",
          }}
          onClick={handleClose}
          aria-label="close"
          size="large"
        >
          <CloseIcon />
        </IconButton>
      </Paper>
    </Modal>
  );
}
