import { Box, Container, Typography } from "@mui/material";
import React from "react";

function AdditionalService() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${"https://www.kovka-stroy.ru/_next/static/media/catalogs-page-background.913c4b2d.png"})`,
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
          borderRadius:'10px'
        }}
      >
        <Typography sx={{fontSize:{xs:16,sm:18,md:20,lg:36,xl:40}}} color={"#FFDB7F"} variant="h2">ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</Typography>
        <Typography sx={{fontSize:{xs:16,sm:18,md:26,lg:32,xl:34}}} color={"white"} variant="p">
          В рабочие дни осуществляется не только ковка, но и гибка, рубка
          металла. Благодаря этому вы можете не только купить элементы ковки, но
          и воспользоваться услугами по гибке и рубке собственных металлических
          фрагментов.
        </Typography>
      </Container>
    </Box>
  );
}

export default AdditionalService;
