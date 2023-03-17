import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const price = [
  {
    title: "ВИД ИЗДЕЛИЙ",
    price: "ЦЕНА",
  },
  {
    title: "Кованые ворота",
    price: "от 9000 ₽/кв. м.",
  },
  {
    title: "Кованые перила",
    price: "от 7500 ₽/м. пог.",
  },
  {
    title: "Кованые перила",
    price: "от 7500 ₽/м. пог.",
  },
  {
    title: "Кованые перила",
    price: "от 7500 ₽/м. пог.",
  },
  {
    title: "Кованые перила",
    price: "от 7500 ₽/м. пог.",
  },
  {
    title: "Кованые перила",
    price: "от 7500 ₽/м. пог.",
  },
  {
    title: "Кованые перила",
    price: "от 7500 ₽/м. пог.",
  },
  {
    title: "Кованые перила",
    price: "от 7500 ₽/м. пог.",
  },
  {
    title: "Кованые перила",
    price: "от 7500 ₽/м. пог.",
  },
];

function Price() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${"https://www.kovka-stroy.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprice-background.8430311d.jpg&w=1920&q=75"})`,
        width: "100%",
        height: "100vh",
      }}
    >
      <Container sx={{ backgroundColor: `rgba(0, 0, 0, 0.7)` }}></Container>
    </Box>
  );
}

export default Price;
