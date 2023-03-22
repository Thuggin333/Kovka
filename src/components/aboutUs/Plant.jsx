import { Box, Container, Typography } from "@mui/material";
import React from "react";

function Plant() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${"https://www.kovka-stroy.ru/_next/static/media/equipment-section-background.bb773fc9.png"})`,
        backgroundSize: "cover",
        width: "100%",
        height: "450px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          backgroundColor: `rgba(0, 0, 0, 0.7)`,
          width:{xs:"80%"},
          height: {xs:"80%"},
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          borderRadius: "10px",
        }}
      >
        <Typography color={"#FFDB7F"}sx={{fontSize:{xs:16,sm:18,md:20,lg:36,xl:40}}} variant="h2">
          ОБОРУДОВАНИЕ
        </Typography>
        <Typography sx={{fontSize:{xs:16,sm:18,md:20,lg:26,xl:26}}}  color={"white"} variant="p">
          Мы любим металл, и он отвечает нам взаимностью, только так можно
          создавать поистине достойные вещи. Каждый заказ индивидуален. В
          галерее художественной ковки представлены разные по сложности и цене
          работы. Возможно воплощение любого технического и художественного
          замысла. От стиля минимализм до барокко. Свойства металла принимать
          любые формы даёт возможность создавать дизайнерский металл.
        </Typography>
      </Container>
    </Box>
  );
}

export default Plant;
