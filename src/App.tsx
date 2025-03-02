import React from "react";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SetTimes from "./components/SetTimes";

const App: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, rgba(32,101,16,1) 0%, rgba(49,253,45,1) 100%)",
      }}
    >
      <Header />
      <SetTimes />
      <Footer />
    </Box>
  );
};

export default App;
