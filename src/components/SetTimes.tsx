import { Box, Typography } from "@mui/material";
import React from "react";
import OpenClose from "./OpenClose";
import DaisyImage from "../assets/daisy.png";

const SetTimes: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Chewy",
          fontSize: "3rem",
          color: "#ffffff",
          fontWeight: "800",
          marginTop: "3rem",
          zIndex: "1",
        }}
      >
        Please select the open and close times
      </Typography>
      <OpenClose />
      <img
        src={DaisyImage}
        alt="Daisy"
        style={{
          width: "15rem",
          height: "auto",
          position: "absolute",
          top: "25vh",
          left: "1vw",
        }}
      />
      <img
        src={DaisyImage}
        alt="Daisy"
        style={{
          width: "18rem",
          height: "auto",
          position: "absolute",
          top: "2vh",
          right: "0",
        }}
      />
      <img
        src={DaisyImage}
        alt="Daisy"
        style={{
          width: "21rem",
          height: "auto",
          position: "absolute",
          top: "68vh",
          right: "5vw",
        }}
      />
      <img
        src={DaisyImage}
        alt="Daisy"
        style={{
          width: "10rem",
          height: "auto",
          position: "absolute",
          top: "90vh",
          left: "4vw",
        }}
      />
      <img
        src={DaisyImage}
        alt="Daisy"
        style={{
          width: "8rem",
          height: "auto",
          position: "absolute",
          top: "70vh",
          left: "10vw",
        }}
      />
      <img
        src={DaisyImage}
        alt="Daisy"
        style={{
          width: "12rem",
          height: "auto",
          position: "absolute",
          top: "56vh",
          left: "20vw",
        }}
      />
      <img
        src={DaisyImage}
        alt="Daisy"
        style={{
          width: "8rem",
          height: "auto",
          position: "absolute",
          top: "50vh",
          right: "4vw",
        }}
      />
      <img
        src={DaisyImage}
        alt="Daisy"
        style={{
          width: "24rem",
          height: "auto",
          position: "absolute",
          top: "30vh",
          right: "15vw",
        }}
      />
      <img
        src={DaisyImage}
        alt="Daisy"
        style={{
          width: "15rem",
          height: "auto",
          position: "absolute",
          top: "75vh",
          right: "50vw",
        }}
      />
    </Box>
  );
};

export default SetTimes;
