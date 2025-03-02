import React, { useState } from "react";
import TimePicker from "./TimePicker";
import { Box, Typography, Checkbox } from "@mui/material";
import { Dayjs } from "dayjs";

interface DayPickerProps {
  day: string;
}

const DayPicker: React.FC<DayPickerProps> = ({ day }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [openTime, setOpenTime] = useState<Dayjs | null>(null);
  const [closeTime, setCloseTime] = useState<Dayjs | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  const handleOpenTimeChange = (newTime: Dayjs | null) => {
    setOpenTime(newTime);
    if (closeTime && newTime && closeTime.isBefore(newTime)) {
      setOpenTime(null);
      setCloseTime(null);
      setError("Close time must be after open time");
    } else {
      setError(null);
    }
  };

  const handleCloseTimeChange = (newTime: Dayjs | null) => {
    if (openTime && newTime && newTime.isBefore(openTime)) {
      setOpenTime(null);
      setCloseTime(null);
      setError("Close time must be after open time");
    } else {
      setError(null);
    }
    setCloseTime(newTime);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "0.09rem solid #d3d3d3",
        borderRadius: "0.3rem",
        padding: "1rem",
        width: "90%",
        height: "2.5rem",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.25rem",
        }}
      >
        <Checkbox
          checked={isChecked}
          onChange={handleCheckboxChange}
          color="success"
        />
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: "500",
            color: "#636363",
          }}
        >
          {day}
        </Typography>
      </Box>
      {isChecked && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "0.5rem",
          }}
        >
          <TimePicker
            label="open"
            selectedTime={openTime}
            onTimeChange={handleOpenTimeChange}
          />
          <TimePicker
            label="close"
            selectedTime={closeTime}
            onTimeChange={handleCloseTimeChange}
          />
        </Box>
      )}
      {error && (
        <Box
          sx={{
            position: "absolute",
            right: "32.5rem",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.85rem",
              color: "#ff0000",
            }}
          >
            {error}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default DayPicker;
