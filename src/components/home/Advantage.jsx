import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const advantageInfo = [
  {
    title: "Качество",
    text: "Мы обладаем собственным производством, оборудованием, специалистами. ",
  },
  {
    title: "Гарантия",
    text: "Ответственный подход: планирование, исполнение, контроль качества на каждом этапе, гарантия.",
  },
  {
    title: "Местоположение",
    text: "Кузница имеет удобное расположение.",
  },
  {
    title: "Цена",
    text: "У нас хорошие цены.",
  },
];

function Advantage() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${"https://www.kovka-stroy.ru/_next/static/media/whyChooseUsBackground.89e67722.jpg"})`,
        backgroundSize: "cover",
        padding:"50px 0px"
      }}
    >
      <Container maxWidth={"1"}
        sx={{
          width:{xs:"80%",sm:"80%",md:"80%",lg:'80%',xl:'80%'},
          background: `rgb(0,0,0,0.7)`,
          display:'flex',
          justifyContent:'center',
          borderRadius:'10px'
        }}
      >
        <Grid container p="50px" spacing={5} >
          <Grid item xs={12}>
            <Typography variant="h2" sx={{ color: "#FFDB7F",fontSize:{xs:10,sm:16,md:20,lg:30,xl:40} }}>ПОЧЕМУ ВЫБИРАЮТ НАС?</Typography>
          </Grid>
          <Grid item xs={12} >
            <Grid  container spacing={5} >
            {advantageInfo.map((item) => (
              <Grid item xs={12} key={item.title}>
                <Typography sx={{ color: "white",fontSize:{xs:10,sm:16,md:20,lg:30,xl:40} }} variant="h5">
                  {item.title}
                </Typography>
                <Typography sx={{ color: "white",fontSize:{xs:10,sm:16,md:18,lg:20,xl:26}  }} variant="p">
                  {item.text}
                </Typography>
              </Grid>
            ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Advantage;
