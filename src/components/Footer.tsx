import { Box, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "4.5rem",
        width: "100vw",
        borderTop: "0.1rem solid #ffffff",
        margin: "1.5rem 0 0 0",
        zIndex: "1",
      }}
    >
      <Typography
        sx={{
          fontSize: "0.8rem",
          color: "#000000",
        }}
      >
        &copy; copyright {currentYear}:{" "}
        <a
          href="https://www.garysimons.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#000000",
            cursor: "pointer",
          }}
        >
          Gary Simons
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
