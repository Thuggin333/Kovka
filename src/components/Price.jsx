import { Box, Typography,  Grid } from "@mui/material";
import React from "react";

const price = {
  priceInfo: [
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
  ],
};

function Price() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${"https://www.kovka-stroy.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprice-background.8430311d.jpg&w=1920&q=75"})`,
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        xs={8}
        sx={{
          backgroundColor: `rgba(0, 0, 0, 0.7)`,
          height: "50%",
          padding: "50px",
          borderRadius:'10px'
        }}
      >
        <Grid container xs={12}>
          <Grid item xs={12}>
            <Typography color={"#FFDB7F"} variant="h5">ВИД ИЗДЕЛИЙ</Typography>
          </Grid>
          <Grid item xs={6}>
            {price.priceInfo.map((item, id) => {
              return (
                <>
                  <Typography color={"white"} variant="h5">
                    {item.title}
                  </Typography>
                </>
              );
            })}
          </Grid>
          <Grid item xs={6}>
            {price.priceInfo.map((item, id) => {
              return (
                <>
                  <Typography color={"white"} variant="h5">
                    {item.price}
                  </Typography>
                </>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Price;
