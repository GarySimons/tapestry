import React from "react";
import { Box } from "@mui/material";
import DayPicker from "./DayPicker";
import SaveDialog from "./SaveDialog";

const OpenClose: React.FC = () => {
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
        <DayPicker day="Monday" />
        <DayPicker day="Tuesday" />
        <DayPicker day="Wednesday" />
        <DayPicker day="Thursday" />
        <DayPicker day="Friday" />
        <DayPicker day="Saturday" />
        <DayPicker day="Sunday" />
        <Box
          sx={{
            display: "flex",
            width: "93.5%",
            justifyContent: "flex-end",
            margin: "2rem 0 0 0",
          }}
        >
          <SaveDialog />
        </Box>
      </Box>
    </Box>
  );
};

export default OpenClose;
