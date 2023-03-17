import { Box, Button, Typography } from "@mui/material";
import React from "react";

const buttonStyle = {
  Button: {
    "&:hover": {
      backgroundColor: "#FFDB7F",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#FFDB7F",
    },
    width: "320px",
    height: "64px",
    backgroundColor: "#FFDB7F",
    color: "black",
  },
};

function Home() {
  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://www.kovka-stroy.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fback.d33d17d7.jpg&w=1920&q=75')",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0,0,0,0.7)",
          width: { xs: "70%" },
          height: "50%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          padding: "4%",
        }}
      >
        <Typography sx={{ color: "#FFDB7F" }} variant="h3">
          ПРОИЗВОДИТЕЛЬ КОВАННЫХ ИЗДЕЛИЙ
        </Typography>
        <Typography sx={{ fontSize: "40px", color: "white" }} variant="p">
          Один из ведущих производителей кованых изделий в Московской области
        </Typography>
        <Button
          sx={{
            ...buttonStyle.Button,
          }}
          variant="text"
        >
          Каталог
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
