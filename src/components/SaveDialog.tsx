import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import ButtonComponent from "./Button";
import { Typography } from "@mui/material";
import DaisyImage from "../assets/daisy.png";

export default function SaveDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonComponent
        onClick={handleClickOpen}
        label="SAVE CHANGES"
        color="success"
        variant="contained"
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#31fd2d",
          }}
        >
          <DialogContentText
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
            }}
            id="alert-dialog-description"
          >
            <img
              src={DaisyImage}
              alt="Daisy"
              style={{ width: "4rem", height: "auto" }}
            />
            <Typography
              sx={{
                fontSize: "1.3rem",
                lineHeight: "1.2",
                fontWeight: "900",
                textAlign: "center",
                color: "#000000",
              }}
            >
              Your open and close <br />
              times are now set
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0.5rem 0 1rem 0",
            backgroundColor: "#31fd2d",
          }}
        >
          <ButtonComponent
            onClick={handleClose}
            label="CLOSE"
            color="success"
            variant="contained"
          />
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
