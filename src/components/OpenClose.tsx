import React, { useState } from "react";
import { Box } from "@mui/material";
import DayPicker from "./DayPicker";
import SaveDialog from "./SaveDialog";

const OpenClose: React.FC = () => {
  const [dayTimes, setDayTimes] = useState<{
    [key: string]: { openTime: string | null; closeTime: string | null };
  }>({
    Monday: { openTime: null, closeTime: null },
    Tuesday: { openTime: null, closeTime: null },
    Wednesday: { openTime: null, closeTime: null },
    Thursday: { openTime: null, closeTime: null },
    Friday: { openTime: null, closeTime: null },
    Saturday: { openTime: null, closeTime: null },
    Sunday: { openTime: null, closeTime: null },
  });

  const handleTimeChange = (day: string, openTime: string | null, closeTime: string | null) => {
    setDayTimes((prev) => ({
      ...prev,
      [day]: { openTime, closeTime },
    }));
  };

  const handleSubmit = () => {
    console.log("dayTimes: ", dayTimes);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        zIndex: "1",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "90vw",
          maxWidth: "1000px",
          borderRadius: "0.5rem",
          boxShadow: "3",
          gap: "1rem",
          margin: "1rem auto",
          padding: "1.5rem 0",
        }}
      >
        <DayPicker day="Monday" onTimeChange={handleTimeChange} />
        <DayPicker day="Tuesday" onTimeChange={handleTimeChange} />
        <DayPicker day="Wednesday" onTimeChange={handleTimeChange} />
        <DayPicker day="Thursday" onTimeChange={handleTimeChange} />
        <DayPicker day="Friday" onTimeChange={handleTimeChange} />
        <DayPicker day="Saturday" onTimeChange={handleTimeChange} />
        <DayPicker day="Sunday" onTimeChange={handleTimeChange} />
        <Box
          sx={{
            display: "flex",
            width: "93.5%",
            justifyContent: "flex-end",
            margin: "2rem 0 0 0",
          }}
        >
          <SaveDialog onSubmit={handleSubmit} dayTimes={dayTimes}/>
        </Box>
      </Box>
    </Box>
  );
};

export default OpenClose;
