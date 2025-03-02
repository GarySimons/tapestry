import { Box, Typography } from "@mui/material";
import React from "react";
import DaisyImage from "../assets/daisy.png";

const Header: React.FC = () => {
  const menuItems = [
    { label: "HOME", style: {} },
    { label: "ABOUT", style: {} },
    { label: "SET TIMES", style: { color: "#31fd2d" } },
    { label: "FAQS", style: {} },
    { label: "CONTACT US", style: {} },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "5rem",
        width: "100vw",
        borderBottom: "0.08rem solid #ffffff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
          marginLeft: "2rem",
        }}
      >
        <img
          src={DaisyImage}
          alt="Daisy"
          style={{ width: "2.5rem", height: "auto" }}
        />
        <Typography
          sx={{
            fontFamily: "Chewy",
            color: "#ffffff",
            fontSize: "2rem",
          }}
        >
          Daisy's Day Care
        </Typography>
      </Box>
      <Box
        sx={{
          marginRight: "2rem",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            color: "#ffffff",
            fontSize: "1rem",
            fontFamily: "Chewy",
            cursor: "pointer",
            padding: 0,
          }}
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              style={{
                ...item.style,
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default Header;
