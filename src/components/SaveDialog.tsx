import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import ButtonComponent from "./Button";
import DaisyImage from "../assets/daisy.png";

interface SaveDialogProps {
  onSubmit: () => void;
  dayTimes: {
    [key: string]: { openTime: string | null; closeTime: string | null };
  };
}

const SaveDialog: React.FC<SaveDialogProps> = ({ onSubmit, dayTimes }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    onSubmit();
    handleClose();
  };

  const formatTime = (time: string | null) => {
    if (!time) return "Not Set";
    return dayjs(time).format("HH:mm");
  };

  return (
    <div>
      <ButtonComponent
        onClick={handleClickOpen}
        label="SAVE CHANGES"
        color="success"
        variant="contained"
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            fontFamily: "Chewy",
            fontSize: "1.5rem",
            lineHeight: "1.2",
            fontWeight: "900",
            textAlign: "center",
            color: "#000000",
            backgroundColor: "#31fd2d",
            paddingTop: "2rem",
          }}
        >
          Save Changes
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#31fd2d",
          }}
        >
          <img
            src={DaisyImage}
            alt="Daisy"
            style={{ width: "2.5rem", height: "auto", margin: "0 0 1rem 0" }}
          />
          <Typography
            sx={{
              fontSize: "1rem",
              lineHeight: "1.2",
              fontWeight: "500",
              textAlign: "center",
              color: "#000000",
              marginBottom: "1rem",
            }}
          >
            Are you sure you want to save the <br />
            following times?
          </Typography>

          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "1rem",
              borderRadius: "0.5rem",
              margin: "0 1rem",
            }}
          >
            {Object.entries(dayTimes).map(([day, times]) => (
              <div key={day}>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    lineHeight: "1.6",
                    fontWeight: "500",
                    textAlign: "flex-start",
                    color: "#000000",
                  }}
                >
                  <strong
                  style={{
                    color: "#ff9800",
                  }}
                  >{day}:</strong>
                  {times.openTime
                    ? ` Open: ${formatTime(times.openTime)}`
                    : " Open: Not Set"}
                  ,
                  {times.closeTime
                    ? ` Close: ${formatTime(times.closeTime)}`
                    : " Close: Not Set"}
                </Typography>
              </div>
            ))}
          </div>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0.5rem 0 2rem 0",
            backgroundColor: "#31fd2d",
            gap: "1rem",
          }}
        >
          <ButtonComponent
            onClick={handleClose}
            label="CANCEL"
            color="warning"
            variant="contained"
          />
          <ButtonComponent
            onClick={handleSave}
            label="SAVE"
            color="success"
            variant="contained"
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SaveDialog;
